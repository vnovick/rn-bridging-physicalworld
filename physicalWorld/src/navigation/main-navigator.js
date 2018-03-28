import { StackNavigator, TabNavigator } from 'react-navigation'
import { Scanner } from '../views/scanner'
import { LightBulb } from '../views/light-bulb'
import { BeaconsScreen } from '../views/beacons'
import { TabBar } from '../shared/tab-bar'

export const MainNavigator = StackNavigator(
  {
    tabs: {
      screen: TabNavigator(
        {
          scanner: { screen: Scanner },
          lightBulb: { screen: LightBulb },
          beacons: { screen: BeaconsScreen }
        },
        {
          tabBarComponent: TabBar,
          tabBarPosition: 'bottom',
          animationEnabled: false,
          swipeEnabled: false,
        },
      ),
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'tabs',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
)