import React from 'react';
import { Button, Text, View } from 'react-native';

export default class ScreenComponentThree extends React.Component {
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
