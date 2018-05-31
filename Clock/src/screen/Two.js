import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
  StyleSheet,
  YellowBox,
  Alert,
} from 'react-native';
import Clock from './modules/Clock';

export default class ScreenComponentTwo extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: `${navigation.getParam('titleName')}`,
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      menuShowing: false,
    };

    this.onPressSetting = this.onPressSetting.bind(this);
    this.renderDropDownBox = this.renderDropDownBox.bind(this);
    this.onSelectColor = this.onSelectColor.bind(this);
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
          <TouchableHighlight onPress={() => this.onSelectColor('#bbbbbb')}>
            <View style={[styles.palleteView, {backgroundColor: '#bbbbbb'}]} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.onSelectColor('#fbd4c8')}>
            <View style={[styles.palleteView, {backgroundColor: '#fbd4c8'}]} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.onSelectColor('#f7f2d1')}>
            <View style={[styles.palleteView, {backgroundColor: '#f7f2d1'}]} />
          </TouchableHighlight>
        </View>
      );
    } else {
      return null;
    }
  }

  onSelectColor(color) {
    this.setState({
      bgColor : color
    });

    this.onPressSetting();
  }

  componentWillMount() {
    this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      payload => {
        //Alert.alert('___willFocus___');
      }
    );
    this.didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      payload => {
        //Alert.alert('___didFocus___');
      }
    );
    this.willBlurSubscription = this.props.navigation.addListener(
      'willBlur',
      payload => {
        //Alert.alert('___willBlur___');
      }
    );
    this.didBlurSubscription = this.props.navigation.addListener(
      'didBlur',
      payload => {
        //Alert.alert('___didBlur___');
      }
    );
  }

  componentWillUnmount() {
    this.willFocusSubscription.remove();
    this.didFocusSubscription.remove();
    this.willBlurSubscription.remove();
    this.didBlurSubscription.remove();
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
    width: 40,
    height: 40,
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
