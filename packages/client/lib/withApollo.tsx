import { ApolloClient, NormalizedCacheObject } from 'apollo-boost'
import { NextPageContext } from 'next'
import Head from 'next/head'
import { SingletonRouter } from 'next/router'
import React from 'react'
import { getDataFromTree } from 'react-apollo'
import initApollo from './apollo.init'

interface PageContext extends NextPageContext {
  Component: React.ReactNode
  router: SingletonRouter
}

export default (App: any) => {
  return class Apollo extends React.Component {
    apolloClient: ApolloClient<NormalizedCacheObject>
    static displayName = 'withApollo(App)'
    static async getInitialProps(ctx: PageContext) {
      const { Component, router } = ctx

      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx)
      }

      const apollo = initApollo()
      if (typeof window === 'undefined') {
        try {
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />,
          )
        } catch (error) {
          console.error('Error while running `getDataFromTree`', error)
        }
        Head.rewind()
      }

      const apolloState = apollo.cache.extract()

      return {
        ...appProps,
        apolloState,
      }
    }

    constructor(props: { apolloState: any }) {
      super(props)
      this.apolloClient = initApollo(props.apolloState)
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />
    }
  }
}
