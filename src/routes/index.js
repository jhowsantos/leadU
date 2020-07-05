import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// Pages
import Onboarding from '~/pages/Onboarding';
import ChooseAction from '~/pages/ChooseAction';
import Login from '~/pages/Login';

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
    },
    { initialRouteName: 'Login' }
  )
);

export default Routes;
