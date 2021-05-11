import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError (error) {
    console.log('derived: ', error)
    return { hasError: true }
  }

  componentDidCatch (error, info) {
    console.log('error in catch: ', error)
    console.log('info in catch: ', info)
    // logErrorToService(error, info.componentStack)
  }

  render () {
    return this.state.hasError
      ? <View><Text>Error</Text></View>
      : this.props.children
  }
}
