import * as React from 'react'
import { Animated, Image, SafeAreaView, TouchableOpacity, View, ViewStyle } from 'react-native'
import { color } from '../../theme'
import Icon from 'react-native-vector-icons/MaterialIcons'
// static styles
const SAFE_AREA: ViewStyle = {
  
}

const CONTAINER = {
  backgroundColor: color.palette.portGore,
  flexDirection: 'row',
  justifyContent: 'center',
  minHeight: 49,
}

const TAB = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-end',
  flexDirection: 'column',
}

const ICON_WRAPPER = {
  alignItems: 'center',
  flexGrow: 1,
  justifyContent: 'center',
}

const ICON = {
  width: 30,
  height: 30,
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
}

const BADGE = {
  position: 'absolute',
  left: 2,
  top: 8,
}

const ACTIVE_INDICATOR = {
  position: 'absolute',
  bottom: 4,
  height: 2,
  width: 20,
  borderRadius: 2,
  backgroundColor: color.highlight,
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 1,
  shadowRadius: 4,
  shadowColor: 'rgb(244,89,244)', //color.highlight,
}

const ACTIVE_STYLE = {
  color: 'rgb(244,89,244)'
}

const INACTIVE_STYLE = {
  color: color.palette.blueBell
}

const TAB_ICONS = {
  scanner: 'bluetooth-searching',
  lightBulb: 'lightbulb-outline',
  beacons: 'track-changes'
}

export const Tab = ({
  activeTintColor,
  inactiveTintColor,
  navigation,
  position,
  renderIcon,
  route,
  index,
  inputRange,
}) => {
  const isActive = index === navigation.state.index
  const activeOpacity = position.interpolate({
    inputRange,
    outputRange: inputRange.map(i => (i === index ? 1 : 0)),
  })
  const inactiveOpacity = position.interpolate({
    inputRange,
    outputRange: inputRange.map(i => (i === index ? 0 : 1)),
  })

  return (
    <TouchableOpacity onPress={() => navigation.navigate(route.routeName)} style={TAB}>
      <View style={ICON_WRAPPER}>
        <Animated.View style={[ICON, { opacity: activeOpacity }]}>
          <Icon size={30} name={TAB_ICONS[`${route.routeName}`]} style={ACTIVE_STYLE} />
        </Animated.View>
        <Animated.View style={[ICON, { opacity: inactiveOpacity }]}>
          <Icon size={30} name={TAB_ICONS[`${route.routeName}`]} style={INACTIVE_STYLE}/>
        </Animated.View>
        {isActive && <View style={ACTIVE_INDICATOR} />}
      </View>
    </TouchableOpacity>
  )
}

export const TabBar = props => {
  const { routes } = props.navigation.state
  const inputRange = [-1, ...routes.map((x, i) => i)]

  return (
    <SafeAreaView style={SAFE_AREA}>
      <View style={CONTAINER}>
        {routes.map((route, index) => {
          const tabProps = { ...props, route, index, inputRange, key: route.routeName }
          return <Tab {...tabProps} />
        })}
      </View>
    </SafeAreaView>
  )
}
