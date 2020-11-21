/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  FlatList,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Animated,
  Modal,
} from 'react-native';
import Header from '../components/Header';
import Search from '../components/Search';
import VideoList from '../components/VideoList';
import VideoPlay from '../components/VideoPlay';
const data = [1, 1, 1, 1, 1, 1, 1, 1, 1];
const {width, height} = Dimensions.get('window');
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      viewsAnimated: new Animated.Value(0),
      value: 1,
      keyBoard: false,
    };
    this.scrollY = new Animated.Value(0);
    this.clamp = new Animated.diffClamp(this.scrollY, 0, width * 0.1);
  }

  visibleModal = () => {
    const ref = this.searchRef;
    ref.visibleModal();
  };
  render() {
    const headerAnimatedHeight = this.clamp.interpolate({
      inputRange: [0, width * 0.1],
      outputRange: [0, -width * 0.12],
    });

    return (
      <SafeAreaView>
        <ScrollView
          onScroll={(e) => {
            this.scrollY.setValue(e.nativeEvent.contentOffset.y);
          }}>
          {data.map((item, i) => (
            <VideoList key={i} />
          ))}
        </ScrollView>

        <Animated.View
          style={{
            transform: [{translateY: headerAnimatedHeight}],
            zIndex: 100,
            elevation: 3,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
          }}>
          <Header
            ref={(ref) => (this.headerRef = ref)}
            onPress={this.visibleModal}
          />
        </Animated.View>
        <Search ref={(r) => (this.searchRef = r)} />
      </SafeAreaView>
    );
  }
}

export default Home;
