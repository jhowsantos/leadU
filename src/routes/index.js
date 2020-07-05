import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// Pages
import Onboarding from '~/pages/Onboarding';
import ChooseAction from '~/pages/ChooseAction';
import Login from '~/pages/Login';
import Home from '~/pages/Home';

// Routes
const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Onboarding: {
        screen: Onboarding,
        navigationOptions: {
          header: null,
        },
      },
      ChooseAction: {
        screen: ChooseAction,
        navigationOptions: {
          header: null,
        },
      },
      Login: {
        screen: Login,
        navigationOptions: {
          header: null,
        },
      },
      Home: {
        screen: Home,
        navigationOptions: {
          header: null,
        },
      },
    },
    { initialRouteName: 'Home' }
  )
);

export default Routes;
