import { StackNavigator, TabNavigator } from 'react-navigation'
import { Scanner, Services, Characteristics } from '../views/scanner'
import { LightBulb } from '../views/light-bulb'
import { BeaconsScreen } from '../views/beacons'
import { TabBar } from '../shared/tab-bar'

export const MainNavigator = StackNavigator(
  {
    tabs: {
      screen: TabNavigator(
        {
          beacons: { screen: BeaconsScreen },
          scanner: { screen: 
            StackNavigator({
              main: { screen: Scanner },
              services: {
                screen: Services
               },
              characteristics: {
                screen: Characteristics
              }
            }),
          },
          lightBulb: { screen: LightBulb },
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