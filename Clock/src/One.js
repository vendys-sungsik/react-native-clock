import React from 'react';
import { Button, View } from 'react-native';

export default class ScreenComponentOne extends React.Component {
  static navigationOptions = {
    headerTitle: '첫번째 화면',
  };

  render() {

    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Button
          title="두번째 화면으로 이동"
          onPress={() => this.props.navigation.navigate('RouteNameTwo')}
        />
      </View>
    );
  }
}
