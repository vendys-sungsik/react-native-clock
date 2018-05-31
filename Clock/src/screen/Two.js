import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
  StyleSheet,
  YellowBox
} from 'react-native';
import Clock from './modules/Clock';

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
    };

    this.onPressSetting = this.onPressSetting.bind(this);
    this.renderDropDownBox = this.renderDropDownBox.bind(this);
    this.onPressColor = this.onPressColor.bind(this);
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

  onPressColor(color) {
    this.setState({
      bgColor : color
    });
  }

  render() {
    return (
      <View style={styles.entireLayout}>
        <View style={styles.contentLayout}>

          <View style={[styles.entireView, {backgroundColor: this.state.bgColor}]}>
            <Clock />
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
  entireView: {
    height: '100%', width: '100%',
    flex: 1,flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
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
  palleteContainerView: {
    flex: 1, flexDirection: 'row', marginTop: 20
  },
  palleteView: {
    width: 100, height: 100, borderWidth: 1, borderColor: '#FFFFFF'
  }
});
