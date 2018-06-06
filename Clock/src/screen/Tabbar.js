import React from 'react';
import { Button, Text, View } from 'react-native';

export default class ScreenComponentThree extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: `Tabbar Screen`,
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
          'ssibal'
        </Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
