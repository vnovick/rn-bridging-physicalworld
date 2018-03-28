import * as React from 'react'
import { View } from 'react-native'
import { RootNavigator } from './root-navigator'

const ROOT = { 
  flex: 1, 
  backgroundColor: 'red'
}

export class StatefulNavigator extends React.Component {
  

  componentDidMount() {
    
  }

  render() {
    return (
      <View style={ROOT}>
        <RootNavigator />
      </View>
    )
  }
}
