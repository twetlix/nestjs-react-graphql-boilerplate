import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from 'apollo-boost'
import fetch from 'isomorphic-unfetch'

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null

function create(initialState?: any) {
  const isBrowser = typeof window !== 'undefined'
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    link: new HttpLink({
      uri: 'http://localhost:5000/graphql',
      credentials: 'include',
      fetch: !isBrowser ? fetch : undefined,
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  })
}

export default function initApollo(initialState?: any) {
  if (typeof window === 'undefined') {
    return create(initialState)
  }

  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
