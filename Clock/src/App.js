import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';

import ScreenComponentOne from './One';
import ScreenComponentTwo from './Two';
import ScreenComponentThree from './Three';

export default class App extends React.Component {
	constructor(props) {
		super(props);

    // remove warning box
		YellowBox.ignoreWarnings(
			['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
		]);
	}

  render() {
    return <MyNavigator />;
  }
}

const MyNavigator = createStackNavigator(
  {
    RouteNameOne: ScreenComponentOne,
    RouteNameTwo: ScreenComponentTwo,
    RouteNameThree: ScreenComponentThree,
  },
  {
    // headerTransitionPreset: 'uikit',
    // mode: 'modal',
  }
);
