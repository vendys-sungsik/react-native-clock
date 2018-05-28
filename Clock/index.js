import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet } from 'react-native';

import nativeShop from './src/App';
AppRegistry.registerComponent('Clock', () => nativeShop);
