import React from 'react';
import {
  Button, View, ListView, Text, StyleSheet, PixelRatio, TouchableOpacity
} from 'react-native';

export default class ScreenComponentOne extends React.Component {
  static navigationOptions = {
    headerTitle: 'React Native Examples',
  };

  constructor(props) {
		super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        ['Clock - 배경색이 변하는 시게', 'RouteNameTwo'],
        ['hello', 'RouteNameTwo'],
        ['diamond', 'RouteNameTwo'],
        ['Clock - 배경색이 변하는 시게', 'RouteNameTwo'],
        ['hello', 'RouteNameTwo'],
        ['diamond', 'RouteNameTwo'],
        ['Clock - 배경색이 변하는 시게', 'RouteNameTwo'],
        ['hello', 'RouteNameTwo'],
        ['diamond', 'RouteNameTwo'],
        ['Clock - 배경색이 변하는 시게', 'RouteNameTwo'],
        ['hello', 'RouteNameTwo'],
        ['diamond', 'RouteNameTwo'],
        ['Clock - 배경색이 변하는 시게', 'RouteNameTwo'],
        ['hello', 'RouteNameTwo'],
        ['diamond', 'RouteNameTwo'],
      ])
    };
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            // <Button
            //   title={rowData[0]}
            //   onPress={() =>
            //     this.props.navigation.navigate('RouteNameTwo', {
            //       titleName: 'Clock',
            //     })
            //   }
            // />

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('RouteNameTwo', {
                  titleName: 'Clock',
                })
                }
              >
              <View style={styles.rowItem}>
                <Text style={styles.rowText}>{rowData[0]}</Text>
              </View>
            </TouchableOpacity>

          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowItem: {
    height: 60, width: '100%',
    flex: 1,flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start',
    borderBottomColor: '#47315a',
    borderBottomWidth: 1 / PixelRatio.get(),
  },
  rowText: {
    fontSize: 16, fontWeight:'bold', marginLeft: 18
  }
});
