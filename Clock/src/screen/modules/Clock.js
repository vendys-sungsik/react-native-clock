import React from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from 'react-native';

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

export default class Clock extends React.Component {
  static navigationOptions = {
    headerTitle: '두번째 화면 - Clock',
  };

  constructor(props) {
    super(props);

    this.state = {
      tictoc: true,
      bgColor:'#c0c0c0',
      format24: true
    };


    this.onChangeFormat24 = this.onChangeFormat24.bind(this);

    this.intervalId = setInterval(() => {
      this.setState(previousState => {
        return { tictoc: !previousState.tictoc };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  getFormattedDate() {
      var date = new Date();
      var str = date.getFullYear() + "-"
                + this.getDoubleFormat(date.getMonth()) + "-"
                + this.getDoubleFormat(date.getDate()) + " "
                + this.getDoubleFormat(this.getHour(date.getHours() - 1)) + ":"
                + this.getDoubleFormat(date.getMinutes()) + ":"
                + this.getDoubleFormat(date.getSeconds());

      return str;
  }

  getHour(hour) {
    if (this.state.format24 == false) {
      hour = hour - 12;
    }

    return hour;
  }

  // 한자리 문자열을 두 자리로 변환하여 리턴
  getDoubleFormat(value) {
    var returnValue;

    if (((value + 1).toString().length) == 1) {
      returnValue = "0" + (value + 1).toString();
    } else {
      returnValue = (value + 1).toString();
    }

    return returnValue;
  }

  onChangeFormat24() {
    this.setState({
      format24: !this.state.format24
    });
  }

  render() {
    let display = this.getFormattedDate();

    return (
      <View style={clockStyles.containerView}>
        <TouchableHighlight onPress={() => this.onChangeFormat24()}>
          <View style={clockStyles.boxView}>
            <Text style = {clockStyles.clockText}> {display} </Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const clockStyles = StyleSheet.create({
  containerView: {
    height: 220, width: '100%',
    flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center',
  },
  boxView: {
    height: 100, width: '90%',

    borderWidth: 4, borderColor: '#FFFFFF',
    justifyContent: 'center', alignItems: 'center'
  },
  clockText: {
    fontSize: 25, fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center',
  }
});
