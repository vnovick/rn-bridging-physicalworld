import React from 'react'
import { Platform, View, Text, Button } from 'react-native'
import LaunchImage from 'react-native-splash-screen'
import LottieView from 'lottie-react-native'
import { color } from '../../theme'

export class SplashScreen extends React.Component {


  componentDidMount() {
    LaunchImage.hide()
    this.animation.play()

    setTimeout(() => {
      this.props.navigation.navigate('main')
    }, 2000)
  }

  render() {
    return (
      <View style={{flex: 1 }}>
        <LottieView
          ref={animation => (this.animation = animation)}
          imageAssetsFolder="images"
          // resizeMode="cover"
          source={Platform.OS === 'ios' ? require('./splash-data.json') : 'splash-data.json'}
        />
      </View>
    )
  }
}
