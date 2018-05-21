import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Alert,
  Image,
  Button,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

export default class VictorClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tictoc: true,
      bgColor:'#405d27',
      format24: true
    };

    this.onPressColor = this.onPressColor.bind(this);
    this.onChangeFormat24 = this.onChangeFormat24.bind(this);

    setInterval(() => {
      this.setState(previousState => {
        return { tictoc: !previousState.tictoc };
      });
    }, 1000);
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

  onPressColor(color) {
    this.state.bgColor = color;
  }

  onChangeFormat24() {
    this.setState({
      format24: !this.state.format24
    });
  }

  render() {
    let display = this.getFormattedDate();

    return (
      <View style={[styles.entireView, {backgroundColor: this.state.bgColor}]}>
        <View style={styles.containerView}>
          <TouchableHighlight onPress={() => this.onChangeFormat24()}>
            <View style={styles.boxView}>
              <Text style = {styles.clockText}> {display} </Text>
            </View>
          </TouchableHighlight>

          <View style={styles.palleteContainerView}>
            <TouchableHighlight onPress={() => this.onPressColor('#c94c4c')}>
              <View style={[styles.palleteView, {backgroundColor: '#c94c4c'}]} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.onPressColor('#034f84')}>
              <View style={[styles.palleteView, {backgroundColor: '#034f84'}]} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.onPressColor('#405d27')}>
              <View style={[styles.palleteView, {backgroundColor: '#405d27'}]} />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  entireView: {
    height: '100%', width: '100%',
    flex: 1,flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
  },
  containerView: {
    height: 220, width: '100%',
    flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center',
  },
  boxView: {
    height: 100, width: '90%',

    borderWidth: 4, borderColor: '#FFFFFF',
    justifyContent: 'center', alignItems: 'center'
  },
  palleteContainerView: {
    flex: 1, flexDirection: 'row', marginTop: 20
  },
  palleteView: {
    width: 100, height: 100, borderWidth: 1, borderColor: '#FFFFFF'
  },
  clockText: {
    fontSize: 25, fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center',
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('Clock', () => VictorClock);
