import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'
import { Button, Container } from 'react-bootstrap'
import styled from 'styled-components'

const Wrapper = styled(Container)`
  margin-top: 70px;
`

const Text = styled('h1')`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 25px;
`

const ButtonsWrapper = styled('div')`
  display: flex;
  justify-content: center;
`

const query = gql`
  {
    getHello
  }
`

interface Data {
  getHello: string
}

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Query<Data, {}> query={query}>
        {({ error, loading, data }) => (
          <>
            {error && <h1>{error}</h1>}
            {loading && <h1>{loading}</h1>}
            {data && <Text>{data.getHello}</Text>}
          </>
        )}
      </Query>
      <ButtonsWrapper>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="success">Success Button</Button>
        <Button variant="danger">Danger Button</Button>
        <Button variant="warning">Warning Button</Button>
        <Button variant="info">Info Button</Button>
      </ButtonsWrapper>
    </Wrapper>
  )
}

export default Home
