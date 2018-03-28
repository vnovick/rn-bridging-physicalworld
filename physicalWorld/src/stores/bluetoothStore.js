import { observable, action, computed } from "mobx"
import { BleManager } from 'react-native-ble-plx'

const DEVICES_TO_FILTER=['Vladimir’s MacBook Pro']

export class BluetoothStore {
  @observable manager = {}
  @observable bleState = 'Undefined'
  @observable stateChangeSub = null
  @observable deviceScanError = null
  @observable deviceConnectError = null
  @observable deviceList = []
  @observable connectedDevice = null
  @observable serviceDiscovery = null
  @observable services = []
  @observable characteristics = []
  @observable status = ''



  @computed 
  get deviceStatus() {
    if (this.bleState !== 'PoweredOn') {
      return 'Bluetooth unavailable'
    }
    return this.status
  }

  @computed 
  get deviceReady(){
    return !!this.serviceDiscovery
  }

  @action setupBleManager = async () => {
    this.manager = new BleManager()
    console.log(this.manager)
    const bleState = await this.manager.state()
    this.bleState = bleState
  }

  @action destroyBleManager = async () => {
    this.manager.destroy()
  }

  @action subscribeToStateChange = () => {
    this.stateChangeSub = this.manager.onStateChange(state => {
      this.updateBleState(state)
    })
  }

  @action removeSubscription = () => {
    this.stateChangeSub.remove()
  }

  @action updateBleState(bleState) {
    this.bleState = bleState
  }

  @action setDeviceScanError(error) {
    this.deviceScanError = `scanning error: ${JSON.stringify(error, null, 2)}`
  }

  @action setDeviceConnectError(error) {
    this.deviceConnectError = `connection error: ${JSON.stringify(error, null, 2)}`
  }

  @action scanDevices(callback) {
    if (this.bleState === 'PoweredOn') {
      this.manager.startDeviceScan(null, null, (error, device) => {
        if (error) {
          this.setDeviceScanError(error)
          return
        }
        if (!DEVICES_TO_FILTER.includes(device.name)){
          this.updateDeviceList(device)
        }
      })
    } else {
      this.setDeviceScanError(`Could not scan - check your Bluetooth state`)
    }
  }

  @action updateDeviceList(device) {
    this.deviceList = [
      ...this.deviceList.map(
        existingDevice => device.id === existingDevice.id 
          ? device 
          : existingDevice
        ),
      device 
    ].filter((value, index, self) => self.indexOf(value) === index)
  }

  @action async connectDevice(device) {
    try {
      this.status = `Connecting ${device.name} with id: ${device.id}`
      const connectedDevice = await device.connect()
      this.connectedDevice = connectedDevice
      this.status = `${device.name} connected`
      this.discovery = await this.startServiceDiscovery(connectedDevice)
    } catch (e) {
      this.setDeviceConnectError(e.message)
    }
  }

  @action setServices(services) {
    this.status = 'Services discovered'
    this.services = services
  }

  @action setCharacteristics(services) {
    this.status = 'Characteristics discovered'
    this.characteristics = this.characteristics
  }

  @action async logServicesAndCharacteristics(device) {
    const serviceDiscovery = await device.discoverAllServicesAndCharacteristics()
    const serviceArray = await serviceDiscovery.services()
    const characteristics = 
      await Promise.all(
        serviceArray.map(
          async service => await service.characteristics()
        )
      )
    this.serviceDiscovery = serviceDiscovery
    this.services = serviceArray
    this.characteristics == characteristics
  }

  @action async startServiceDiscovery(device){
    try {
      const serviceDiscovery = await device.discoverAllServicesAndCharacteristics()
      this.serviceDiscovery = serviceDiscovery
      this.status = 'Discovery enabled'
    } catch (e) {
      console.log(e)
      this.setDeviceScanError(e.message)
    }
  }
}