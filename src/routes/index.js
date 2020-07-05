import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// Pages
import Onboarding from '~/pages/Onboarding';
import ChooseAction from '~/pages/ChooseAction';

// Routes
const Routes = createAppContainer(
  createSwitchNavigator({
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
  })
);

export default Routes;
