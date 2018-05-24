//import React from 'react'
//import TextExample from './TextExample.js'

import React, { Component } from 'react';
import {
  AppRegistry,
  Modal,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Image,
  StyleSheet
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuShowing: true
    };

    this.onPressSetting = this.onPressSetting.bind(this);
    this.renderDropDownBox = this.renderDropDownBox.bind(this);
  }

  onPressSetting() {
    this.setState({
      menuShowing: !this.state.menuShowing
    });

    if (this.state.menuShowing) {

    }
  }

  renderDropDownBox() {
    if (this.state.menuShowing) {
      return (<View style={styles.dropDownBox} />);
    } else {
      return null;
    }
  }

  render() {
    return (
      <View style={styles.entireLayout}>
          <View style={styles.contentLayout}></View>
          <View style={styles.topLayout}>
            <TouchableOpacity onPress={() => this.onPressSetting()}>
              <Image style={styles.settingIcon} source={require('../img/icon_setting.png')}/>
            </TouchableOpacity>
            {this.renderDropDownBox()}
          </View>
      </View>
    )
  }
};

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
      backgroundColor: '#c94c4c',
      position: 'absolute',
      justifyContent: 'flex-start',
      alignItems: 'flex-end'
  },
  dropDownBox: {
    width: 90,
    height: 300,
    marginTop: 10,
    marginRight: 10,
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10
  },
  settingIcon: {
    width: 50,
    height: 50,
    marginTop: 20,
    marginRight: 30
  }
});
