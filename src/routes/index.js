import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// Pages
import Onboarding from '~/pages/Onboarding';

// Routes
const Routes = createAppContainer(createSwitchNavigator({ Onboarding }));

export default Routes;
