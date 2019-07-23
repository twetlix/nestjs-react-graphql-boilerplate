import { ApolloClient, NormalizedCacheObject } from 'apollo-boost'
import 'bootstrap/dist/css/bootstrap.min.css'
import App, { Container } from 'next/app'
import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { Theme, ThemeProvider } from 'styled-components'
import withApollo from '../lib/withApollo'

const theme: Theme = {
  colors: {
    primary: '#0070ff',
    secondary: '#111111',
  },
}

class AppClass extends App<{
  apolloClient: ApolloClient<NormalizedCacheObject>
}> {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </Container>
    )
  }
}

export default withApollo(AppClass)
