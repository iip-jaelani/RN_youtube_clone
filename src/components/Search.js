/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  Keyboard,
} from 'react-native';

const {width, height} = Dimensions.get('window');
export class Search extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      viewsAnimated: new Animated.Value(0),
      opacity: new Animated.Value(0),
      value: 1,
    };
    this.scrollY = new Animated.Value(0);
    this.clamp = new Animated.diffClamp(this.scrollY, 0, width * 0.1);
  }
  visibleModal = () => {
    Animated.timing(this.state.viewsAnimated, {
      duration: 300,
      toValue: this.state.value,
      useNativeDriver: true,
    }).start(() => {
      this.setState({
        value: this.state.value === 1 ? 0 : 1,
      });
    });
    Animated.timing(this.state.opacity, {
      toValue: this.state.value,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };
  render() {
    const heightView = this.state.viewsAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [height - width * 0.1, 0],
    });

    const opacity = this.state.opacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Animated.View
          {...this.props}
          style={{
            position: 'absolute',
            backgroundColor: '#fff',
            left: 0,
            right: 0,
            marginTop: width * 0.1,
            bottom: 0,
            top: 0,
            transform: [{translateY: heightView}],
            flex: 1,
            opacity,
          }}>
          <Text>dslkhds</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Search;
