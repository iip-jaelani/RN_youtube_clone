/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Button, Input} from 'react-native-elements';
//icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

//colors
import {COLOR_GREY, COLOR_PRIMARY, COLOR_WHITE} from '../styles/colors';
const {width} = Dimensions.get('window');

const IconButton = ({Component, onPress, margin}) => (
  <Button
    onPress={onPress}
    type="clear"
    icon={() => <Component />}
    buttonStyle={{
      borderRadius: 100,
      padding: 0,
      marginLeft: margin ? 0 : width * 0.033,
    }}
  />
);

export class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeSearch: false,
    };
  }

  handleSearch(conf) {
    this.setState({
      activeSearch: !this.state.activeSearch,
    });
    if (conf) {
      Keyboard.listeners();
    } else {
      Keyboard.dismiss();
    }
    return this.props.onPress();
  }
  render() {
    return (
      <View {...this.props}>
        {this.state.activeSearch ? (
          <View style={Styles.containerSearch}>
            <IconButton
              margin
              onPress={this.handleSearch.bind(this, false)}
              Component={() => (
                <Feather name="arrow-left" size={24} color={COLOR_GREY} />
              )}
            />
            <Input
              placeholder="Search"
              containerStyle={{
                padding: 0,
                margin: 0,
                paddingVertical: 0,
                paddingHorizontal: 0,
                flex: 1,
                height: width * 0.07,
                marginHorizontal: width * 0.02,
              }}
              autoFocus={true}
              selectionColor={'red'}
              selectTextOnFocus
              inputContainerStyle={{
                padding: 0,
                margin: 0,
                borderBottomWidth: 0,
                paddingVertical: 0,
                backgroundColor: '#ddd',
                height: width * 0.07,
                borderRadius: 5,
                paddingHorizontal: width * 0.02,
              }}
              inputStyle={{
                fontSize: width * 0.035,
              }}
            />
            <IconButton
              margin
              // onPress={this.handleSearch.bind(this, false)}
              Component={() => (
                <Ionicons name="md-mic" size={24} color={COLOR_GREY} />
              )}
            />
          </View>
        ) : (
          <View style={Styles.container}>
            <View style={Styles.contentLeft}>
              <FontAwesome
                name="youtube-play"
                color="red"
                size={width * 0.065}
              />
              <Text style={Styles.labelYouTube}>YouTube</Text>
            </View>
            <View style={Styles.contentRight}>
              <IconButton
                Component={() => (
                  <MaterialCommunityIcons
                    name="video"
                    size={24}
                    color={COLOR_GREY}
                  />
                )}
              />
              <IconButton
                onPress={this.handleSearch.bind(this, true)}
                Component={() => (
                  <MaterialIcons name="search" size={24} color={COLOR_GREY} />
                )}
              />
              <IconButton
                Component={() => (
                  <MaterialCommunityIcons
                    name="account-circle"
                    size={24}
                    color={COLOR_GREY}
                  />
                )}
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default Header;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_WHITE,
    paddingHorizontal: width * 0.025,
    paddingVertical: width * 0.02,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: width * 0.1,
  },
  containerSearch: {
    backgroundColor: COLOR_WHITE,
    paddingHorizontal: width * 0.025,
    paddingVertical: width * 0.02,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: width * 0.1,
  },
  contentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelYouTube: {
    fontWeight: 'bold',
    fontSize: width * 0.05,
    letterSpacing: -1.5,
    // fontFamily: 'Oswald-SemiBold',
    marginLeft: 2,
  },
});
