import { StackNavigator } from 'react-navigation'
import { SplashScreen } from '../views/splash-screen'
import { MainNavigator } from './main-navigator'

export const RootNavigator = StackNavigator(
  {
    splash: { screen: SplashScreen },
    main: { screen: MainNavigator },
  },
  {
    initialRouteName: 'splash',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
)
