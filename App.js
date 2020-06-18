import { createStackNavigator, createAppContainer } from 'react-navigation';

// Import Screens
import HomeScreen from './screens/Home';
import UtamaSubscreen from './screens/subscreen/Utama';

import CategorySingleScreen from './screens/Category';
import CategorySubscreen from './screens/subscreen/Category';

import SinglePostScreen from './screens/SinglePost';

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    CategorySingle: CategorySingleScreen,
    SinglePost: SinglePostScreen
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home'
  }
)

const AppNavigator = createStackNavigator(
  {
    Home: HomeNavigator
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);