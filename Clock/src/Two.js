import React from 'react';
import { Button, View } from 'react-native';

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

export default class ScreenComponentTwo extends React.Component {
  static navigationOptions = {
    headerTitle: '두번째 화면',
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Button
          title="세번째 화면으로 이동"
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
