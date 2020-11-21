/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {
  Text,
  View,
  Animated,
  Dimensions,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';

const {width, height} = Dimensions.get('window');
export class VideoPlay extends PureComponent {
  state = {
    animated: new Animated.Value(0),
    value: 0,
  };
  handleVisible() {
    Animated.timing(this.state.animated, {
      toValue: this.state.value,
      duration: 300,
      useNativeDriver: true,
      //   easing: Easing.inOut(Easing.ease),
    }).start(() => {
      this.setState({
        value: this.state.value === 1 ? 0 : 1,
      });
    });
  }

  render() {
    const translateY = this.state.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, height],
    });
    return (
      <TouchableWithoutFeedback onPress={() => this.handleVisible()}>
        <Animated.View
          {...this.props}
          style={{
            backgroundColor: '#fff',
            transform: [{translateY}],
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}>
          <Text> textInComponent dsjgjhds </Text>
          <Text> textInComponent dsjgjhds </Text>
          <Text> textInComponent dsjgjhds </Text>
          <Text> textInComponent dsjgjhds </Text>
          <Text> textInComponent dsjgjhds </Text>
          <Text> textInComponent dsjgjhds </Text>
          <Text> textInComponent dsjgjhds </Text>
          <Text> textInComponent dsjgjhds </Text>
          <Text> textInComponent dsjgjhds </Text>
          <Text> textInComponent dsjgjhds </Text>
          <Text> textInComponent dsjgjhds </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

export default VideoPlay;
