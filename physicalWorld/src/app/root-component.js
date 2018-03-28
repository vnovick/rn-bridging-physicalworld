import React from 'react'
import { View } from 'react-native'
import { StatefulNavigator } from '../navigation'
import { inject, observer, Provider } from 'mobx-react'
import PropTypes from 'prop-types'

@inject('bluetoothStore')
@observer
export class RootComponent extends React.Component {

  constructor(props) {
    super(props);
    props.bluetoothStore.setupBleManager()
  }

  componentDidMount(){
    this.props.bluetoothStore.subscribeToStateChange()
  }

  componentWillUnMount(){
    this.props.bluetoothStore.removeSubscription()
    this.props.bluetoothStore.destroyBleManager()
  }
 
  render() {
    return (
      <View style={{flex: 1}}>
        <StatefulNavigator />
      </View>
    )
  }
}



