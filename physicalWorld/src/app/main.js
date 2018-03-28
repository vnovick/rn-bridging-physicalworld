import React from 'react'
import { AppRegistry } from 'react-native';
import { RootComponent } from './root-component'
import { Provider } from 'mobx-react'
import { BluetoothStore } from '../stores/bluetoothStore'


AppRegistry.registerComponent('physicalWorld', () => () => (
  <Provider bluetoothStore={new BluetoothStore()}>
    <RootComponent />
  </Provider>
));