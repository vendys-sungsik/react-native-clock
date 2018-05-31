import React from 'react';
import {
	Button, Text, View, BackHandler, YellowBox, Alert, Easing, Animated
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import ScreenComponentOne from './screen/One';
import ScreenComponentTwo from './screen/Two';
import ScreenComponentThree from './screen/Three';

export default class App extends React.Component {
	constructor(props) {
		super(props);

    // remove warning box
		YellowBox.ignoreWarnings(
			['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
		]);
	}

	componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', function() {
					Alert.alert("dxxx: " + this.currentRouteName);
          return true;
      }.bind(this));
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress');
  }

  render() {
    return <VictorNavigator />;
  }
}

const VictorNavigator = createStackNavigator(
  {
    RouteNameOne: ScreenComponentOne,
    RouteNameTwo: ScreenComponentTwo,
    RouteNameThree: ScreenComponentThree,
  },
	{
		// docs: https://reactnavigation.org/docs/en/stack-navigator.html
	  headerMode: 'float', // float, screen, none
		mode: 'card', // card, modal
		navigationOptions: {
			gesturesEnabled: false,
			headerStyle: {
        backgroundColor: '#3b6f96',
        position: 'relative', // absolute, relative
        height: 40,
        top: 0,
        left: 0,
        right: 0,
				borderBottomWidth: 0
      },
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
				fontSize: 16,
			},
		},
		transitionConfig: () => ({
			transitionSpec: {
				duration: 300,
				easing: Easing.out(Easing.poly(4)),
				timing: Animated.timing,
			},
			screenInterpolator: sceneProps => {
				const { layout, position, scene } = sceneProps;
				const { index } = scene;

				const height = layout.initHeight;
				const translateY = position.interpolate({
					inputRange: [index - 1, index, index + 1],
					outputRange: [height, 0, 0],
				});

				const opacity = position.interpolate({
					inputRange: [index - 1, index - 0.99, index],
					outputRange: [0, 1, 1],
				});

				return { opacity, transform: [{ translateY }] };
			},
		}),
	}
);
