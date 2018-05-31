import React from 'react';
import {
  AppRegistry,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
  StyleSheet,
  YellowBox
} from 'react-native';

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

export default class ScreenComponentTwo extends React.Component {
  static navigationOptions = {
    headerTitle: '두번째 화면 - Clock',
  };

  constructor(props) {
    super(props);

    this.state = {
      menuShowing: false,
      tictoc: true,
      bgColor:'#fbd4c8',
      format24: true
    };

    this.onPressSetting = this.onPressSetting.bind(this);
    this.renderDropDownBox = this.renderDropDownBox.bind(this);
    this.onPressColor = this.onPressColor.bind(this);
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

  onPressSetting() {
    this.setState({
      menuShowing: !this.state.menuShowing
    });
  }

  renderDropDownBox() {
    if (this.state.menuShowing) {
      return (
        <View style={styles.dropDownBox}>
          <TouchableHighlight onPress={() => this.onPressColor('#ffb6c0')}>
            <View style={[styles.palleteView, {backgroundColor: '#ffb6c0'}]} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.onPressColor('#fbd4c8')}>
            <View style={[styles.palleteView, {backgroundColor: '#fbd4c8'}]} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.onPressColor('#f7f2d1')}>
            <View style={[styles.palleteView, {backgroundColor: '#f7f2d1'}]} />
          </TouchableHighlight>
        </View>
      );
    } else {
      return null;
    }
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
      <View style={styles.entireLayout}>
        <View style={styles.contentLayout}>

          <View style={[styles.entireView, {backgroundColor: this.state.bgColor}]}>

            <View style={styles.containerView}>
              <TouchableHighlight onPress={() => this.onChangeFormat24()}>
                <View style={styles.boxView}>
                  <Text style = {styles.clockText}> {display} </Text>
                </View>
              </TouchableHighlight>
            </View>

          </View>

        </View>

        <View style={styles.topLayout}>
          <TouchableOpacity onPress={() => this.onPressSetting()}>
            <Image style={styles.settingIcon} source={require('../img/icon_setting.png')}/>
          </TouchableOpacity>
          {this.renderDropDownBox()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  entireLayout: {
      flex:1,
  },
  contentLayout: {
      width: '100%',
      height: '100%',
  },
  topLayout: {
      width: '100%',
      height:'100%',
      position: 'absolute',
      justifyContent: 'flex-start',
      alignItems: 'flex-end'
  },
  dropDownBox: {
    width: 90,
    height: 300,
    marginTop: 10,
    marginRight: 10,
    flex: 1,
    flexDirection: 'column'
  },
  settingIcon: {
    width: 50,
    height: 50,
    marginTop: 20,
    marginRight: 30
  },
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
  }
});
