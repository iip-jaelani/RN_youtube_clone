import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from '../components/Header';
export class Collection extends Component {
  render() {
    return (
      <View>
        <Header />
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default Collection;
