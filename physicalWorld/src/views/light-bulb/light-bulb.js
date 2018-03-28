import React from 'react'
import { Platform, View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import { inject, observer } from 'mobx-react'
import LottieView from 'lottie-react-native'
import { Card, Button } from 'react-native-elements'
import { Buffer } from 'buffer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ColorPicker } from 'react-native-color-picker'

const LEDBULUBUUID = '01601DE3-C850-4739-B9A0-2CFF327FDA37'
const LED_BULB_SERVICE_UUID = '0000ffe5-0000-1000-8000-00805f9b34fb'
const LED_BULB_SERVICE_CHAR = '0000ffe9-0000-1000-8000-00805f9b34fb'


@inject('bluetoothStore')
@observer
export class LightBulb extends React.Component {

  state = {
    error: '',
    color: 'ffff00',
    on: false
  }

  async setLightBulbColor(color){
    const value = new Buffer(`56${color}00f0aa`, 'hex').toString('base64')
    console.log("Connected Device", this.props.bluetoothStore.connectedDevice)
    const response = await this.props.bluetoothStore.connectedDevice.writeCharacteristicWithResponseForService(
      LED_BULB_SERVICE_UUID,
      LED_BULB_SERVICE_CHAR,
      value
    )
  }

  connectToLightBulb = async () => {
    const { deviceList } = this.props.bluetoothStore
    const filteredDeviceList = deviceList
      .filter(device => device.id === LEDBULUBUUID)
    if (filteredDeviceList.length > 0) {
      try {
        const lightBulb = filteredDeviceList.reduce((acc, device) => device)
        const response = await this.props.bluetoothStore.connectDevice(lightBulb)
      } catch (e){
        this.setState({
          error: `Error occured: ${e.message}`
        })
      }
    } else {
      this.setState({
        error: 'Bluetooth not yet ready'
      })
    }
  }

  toggleLightBulb = (color) => {
    if (this.state.on) {
      this.setState({
        on: false
      })
      this.setLightBulbColor("000000")
    } else {
      this.setState({
        on: true
      })
      this.setLightBulbColor(this.state.color)
    }
  }
  
  renderContent = () => (
    <ImageBackground source={require('../../../assets/images/background.jpeg')} style={styles.container}>
      <View>
        <TouchableOpacity style={{height: 200 }} onPress={() => this.toggleLightBulb(this.state.color)}>
          <Icon name="lightbulb-o" size={200} 
            color={this.state.on ? `#${this.state.color}` : 'rgba(255,255,255,.8)' } 
            style={{ backgroundColor: 'transparent' }} />
        </TouchableOpacity>       
      </View>
      <ColorPicker
        defaultColor={"ffff00"}
        onColorSelected={(color) => {
          const lightBulbColor = color.substring(1)
          if (this.state.on) {
            this.setLightBulbColor(lightBulbColor)
          }
          this.setState({
            color: lightBulbColor
          })
        }}
        style={styles.linearGradient}
      />
    </ImageBackground>
  )

  renderStatusView = () => (
    <View source={require('../../../assets/images/background.jpeg')} style={styles.container}>
      <Card title={this.state.error}>
        <Text>{this.props.bluetoothStore.deviceStatus}</Text>
        <Button title='Connect to LightBulb' onPress={() => this.connectToLightBulb()}/>
      </Card>
    </View>
  )

  render() {
    return this.props.bluetoothStore.deviceReady ? this.renderContent() : this.renderStatusView()
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 40,
    alignItems: 'center'
  },
  error: {
    backgroundColor: 'transparent',
    color: 'red',
    fontSize: 20
  },
  icon: {
    backgroundColor: 'transparent'
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
