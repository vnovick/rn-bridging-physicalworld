import React from 'react'
import { Platform, View, Image, DeviceEventEmitter, StyleSheet, ScrollView} from 'react-native'
import { ListItem, List, Avatar, Card, Text } from 'react-native-elements'
import Beacons from 'react-native-beacons-manager';

const regions = [{
  uuid: '07775DD0-111B-11E4-9191-0800200C9A66',
  identifier: 'ReactNativeCamp',
  latitude: 51.0995,
  longitude: 17.0400
}]

const beaconsRegistry = [{
  uuid: '07775DD0-111B-11E4-9191-0800200C9A66',
  index: 1,
  major: 12288,
  minor: 4608,
  name: 'Puck.js',
  imgUrl: 'https://www.beaconzone.co.uk/image/cache/catalog/puckcase_smaller-500x500.jpg'
},{
  uuid: '07775DD0-111B-11E4-9191-0800200C9A66',
  index: 2,
  major: 9010,
  minor: 23588,
  name: 'XY Tracker',
  imgUrl: 'https://goo.gl/TTu6yp'
}]

const GEO_ACCURACY = 4;


function mergeWithRegistryData(beacon) {
  return beaconsRegistry.filter(({
    uuid: rUUID,
    major: rMajor,
    minor: rMinor
  }) => 
    rUUID === beacon.uuid && rMajor === beacon.major && rMinor === beacon.minor 
  ).reduce((acc, rBeacon) => ({ ...acc, ...rBeacon}), beacon)
}


export class BeaconsScreen extends React.Component {


  state = {
    region: null,
    beacons: []
  };


  componentWillMount(){
    // Request for authorization while the app is open
    Beacons.requestWhenInUseAuthorization();


    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude }}) => {
      const region = regions.filter(({ 
        latitude: rLatitude, 
        longitude: rLongitude 
      }) => (
        parseFloat(latitude).toFixed(GEO_ACCURACY) === 
        parseFloat(rLatitude).toFixed(GEO_ACCURACY) &&

        parseFloat(longitude).toFixed(GEO_ACCURACY) === 
        parseFloat(rLongitude).toFixed(GEO_ACCURACY)
      ));
      
      if (region.length > 0) {
        region.map(({ uuid, identifier }) => Beacons.startRangingBeaconsInRegion({
            identifier,
            uuid
        }))
      } else {
        // Hardcoded values for demo if geolocation off
        Beacons.startRangingBeaconsInRegion({
          identifier: 'React Native Camp',
          uuid: '07775DD0-111B-11E4-9191-0800200C9A66'
        })
      }
    })
  }

  componentDidMount() {
    this.beaconsDidRange = DeviceEventEmitter.addListener(
      'beaconsDidRange',
      ({ beacons }) => {
        this.setState({
          beacons
        });
      }
    );
  }

  getProximityColoring = ({ accuracy }) => {
    if (!accuracy) {
      return 'red'
    }
    if (accuracy === -1) {
      return 'grey'
    }
    const numericDistance = accuracy.toFixed(2);
    if (numericDistance > 1) {
      return 'red'
    }
    
    if (numericDistance < 1 && numericDistance > 0.5) {
      return 'yellow'
    }

    if (numericDistance < 1) {
      return 'green'
    }
  }


  renderRow = (item) => {

    return (
      <Card 
        key={`${item.uuid}-${item.major}-${item.minor}`} 
        title={item.name}
      >
        <View>
          <Avatar 
            large
            rounded
            source={{uri: item.imgUrl}}
          />
          <Text h6>
            UUID: {item.uuid ? item.uuid  : 'NA'}
          </Text>
          <Text h6>
            Major: {item.major ? item.major : 'NA'}
          </Text>
          <Text h6>
            Minor: {item.minor ? item.minor : 'NA'}
          </Text>
          <Text h6>
            RSSI: {item.rssi ? item.rssi : 'NA'}
          </Text>
          <Text h6>
            Proximity: {item.proximity ? item.proximity : 'NA'}
          </Text>
          <Text h6>
            Distance: {item.accuracy ? item.accuracy.toFixed(2) : 'NA'}m
          </Text>
          <View style={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: this.getProximityColoring(item)
          }} />
        </View>
      </Card>
    );
  }

  render() {
    return (
      <ScrollView style={{paddingTop: 20 }}contentContainerStyle={{justifyContent: 'center'}}>
        { this.state.beacons.map(mergeWithRegistryData).sort((a,b) => a.index > b.index).map(this.renderRow) }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  smallText: {
  fontSize: 11
}
});
