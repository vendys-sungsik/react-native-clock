import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		YellowBox.ignoreWarnings(
			['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
		]);
	}

  render() {
    return <MyNavigator />;
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

class ScreenComponentOne extends React.Component {
  static navigationOptions = {
    headerTitle: 'First screen',
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderWidth: 25,
          borderColor: 'teal',
        }}>
        <Button
          title="Go to two"
          onPress={() => this.props.navigation.navigate('RouteNameTwo')}
        />
      </View>
    );
  }
}

class ScreenComponentTwo extends React.Component {
  static navigationOptions = {
    headerTitle: 'Second screen',
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderWidth: 25,
          borderColor: 'orange',
        }}>
        <Button
          title="Go to three"
          onPress={() =>
            this.props.navigation.navigate('RouteNameThree', {
              randomNumber: getRandomNumber(),
            })
          }
        />
      </View>
    );
  }
}

class ScreenComponentThree extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: `Number: ${navigation.getParam('randomNumber')}`,
    };
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 25,
          borderColor: 'purple',
        }}>
        <Text style={{ fontSize: 25 }}>
          {this.props.navigation.getParam('randomNumber')}
        </Text>
        <Button
          title="Get a new random number"
          onPress={() => {
            this.props.navigation.setParams({
              randomNumber: getRandomNumber(),
            });
          }}
        />
        <Button
          title="Add another two"
          onPress={() => this.props.navigation.push('RouteNameTwo')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
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
