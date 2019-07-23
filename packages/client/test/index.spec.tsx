import { shallow } from 'enzyme'
import * as React from 'react'
import Home from '../pages/index'

describe('Index Page', () => {
  it('renders the h1 element', () => {
    const Component = shallow(<Home />)
    expect(Component.find('h1').text()).toEqual('Hello World')
  })
})
