import { StackNavigator } from 'react-navigation';
import { colors } from 'styles';

import Main from 'pages/main';

const Routes = StackNavigator({
  Main: { screen: Main },
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.secundary,
      borderBottomWidth: 0,
    },
    headerTintColor: colors.white,
    headerBackTitle: null,
  },
});

export default Routes;
