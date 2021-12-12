import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShoweScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShoweScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);