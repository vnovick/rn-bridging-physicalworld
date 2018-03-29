import React from 'react'
import { Platform, View, Text, ScrollView, Button, TouchableOpacity} from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'
import LottieView from 'lottie-react-native'
import { inject, observer } from 'mobx-react'
import { Card, List, ListItem, Avatar } from 'react-native-elements'


const LEDBULUBUUID = '01601DE3-C850-4739-B9A0-2CFF327FDA37'


@inject('bluetoothStore')
@observer
export class Scanner extends React.Component {


  
  state = {
    bluetoothState: '',
    dataset: [],
    bluetoothPoweredOn: false,
    on: true,
    connected: false,
    color: 'ffff00',
    loading: false,
    error: false
  }


  scan() {
    this.animation.play()
    this.props.bluetoothStore.scanDevices()
  }

  renderHeader(device) {
    return (
      <ListItem title={device.name} subtitle={device.id} containerStyle={{ marginHorizontal: 16 }}/>
    )
  }


  connectAndNavigate(device) {
    this.props.bluetoothStore.connectDevice(device)
    this.props.navigation.navigate('services')
  }


  renderContent(device) {
    return (
      <Card>
        <Text>id: {device.id}</Text>
        <Text>isConnectable: {device.isConnectable}</Text>
        <Text>localName: {device.localName}</Text>
        <Text>manufacturerData: {device.manufacturerData}</Text>
        <Text>mtu: {device.mtu}</Text>
        <Text>name: {device.name}</Text>
        <Text>overflowServiceUUIDs: {device.overflowServiceUUIDs}</Text>
        <Text>rssi: {device.rssi}</Text>
        <Text>serviceData: {device.serviceData}</Text>
        <Text>serviceUUIDs: {device.serviceUUIDs}</Text>
        <Text>solicitedServiceUUIDs: {device.solicitedServiceUUIDs}</Text>
        <Text>txPowerLevel: {device.txPowerLevel}</Text>
        <Button title="Connect" onPress={() => this.connectAndNavigate(device)} />
      </Card>
    )
  }


  render() {
    return (
      <ScrollView style={{paddingBottom: 100 }} contentContainerStyle={{justifyContent: 'flex-start', paddingHorizontal: 16  }}>
        <TouchableOpacity style={{height: 200, marginBottom: -60}} onPress={() => this.scan()}>
          <LottieView
            ref={animation => (this.animation = animation)}
            imageAssetsFolder="images"
            // resizeMode="cover"
            source={Platform.OS === 'ios' ? require('./scanner-data.json') : 'scanner-data.json'}
          />
        </TouchableOpacity>
        <Card title="Bluetooth State">
          <Text>{`Bluetooth State: ${this.props.bluetoothStore.bleState}`}</Text>
          <Text>{`Error State: ${this.props.bluetoothStore.deviceScanError}`}</Text>
        </Card>
        <Accordion 
          underlayColor="rgba(255,255,255,.5)"
          sections={this.props.bluetoothStore.deviceList.toJS()}
          renderHeader={this.renderHeader}
          renderContent={(content) => this.renderContent(content)}
        />
      </ScrollView>
    )
  }
}