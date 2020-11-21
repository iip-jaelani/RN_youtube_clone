/* eslint-disable react-native/no-inline-styles */
import React, {Component, PureComponent} from 'react';
import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {COLOR_GREY} from '../styles/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Button} from 'react-native-elements';
//video
import Video from 'react-native-video';
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';

const {width, height} = Dimensions.get('window');

const IconButton = ({}) => (
  <Button
    type="clear"
    icon={() => (
      <MaterialCommunityIcons
        name="dots-vertical"
        color={COLOR_GREY}
        size={20}
      />
    )}
    buttonStyle={{
      paddingRight: 0,
      marginLeft: width * 0.033,
    }}
  />
);

export class VideoList extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <TouchableWithoutFeedback onPress={this.props.onPress}>
          <Image
            style={Styles.image}
            source={{uri: 'https://cdns.klimg.com/resized/476x/p/_mgm9999.JPG'}}
          />
        </TouchableWithoutFeedback>
        <View style={Styles.containerDetail}>
          <View style={Styles.contentLeft}>
            <View style={Styles.avatar} />
            <View style={Styles.leftItems}>
              <Text style={Styles.label}>
                Labore ex veniam laborum ullamco.
              </Text>
              <Text style={Styles.detail}>
                Labore ex veniam laborum ullamco.
              </Text>
            </View>
          </View>
          <View>
            <IconButton />
          </View>
        </View>
      </View>
    );
  }
}

export default VideoList;

const Styles = StyleSheet.create({
  container: {
    marginBottom: width * 0.025,
    backgroundColor: '#fff',
  },
  containerDetail: {
    padding: width * 0.025,
    paddingRight: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  contentLeft: {
    flexDirection: 'row',
  },
  avatar: {
    width: width * 0.07,
    height: width * 0.07,
    backgroundColor: COLOR_GREY,
    borderRadius: 100,
  },
  leftItems: {
    marginLeft: width * 0.025,
  },
  detail: {
    color: COLOR_GREY,
  },
  label: {},
  image: {
    width,
    height: width * 0.5,
    resizeMode: 'cover',
  },
  backgroundVideo: {
    backgroundColor: 'red',
    width,
    height: width * 0.5,
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: 'white',
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   toolbar: {
//     marginTop: 30,
//     backgroundColor: 'white',
//     padding: 10,
//     borderRadius: 5,
//   },
//   mediaPlayer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//     backgroundColor: 'black',
//   },

//   fullScreen: {
//     // position: 'absolute',
//     width,
//     height: width,
//     // backgroundColor: 'red',
//     // zIndex: 200,
//   },
//   controls: {
//     backgroundColor: 'transparent',
//     borderRadius: 5,
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     right: 20,
//   },
//   progress: {
//     flex: 1,
//     flexDirection: 'row',
//     borderRadius: 3,
//     overflow: 'hidden',
//   },
//   innerProgressCompleted: {
//     height: 20,
//     backgroundColor: '#cccccc',
//   },
//   innerProgressRemaining: {
//     height: 20,
//     backgroundColor: '#2C2C2C',
//   },
//   generalControls: {
//     flex: 1,
//     flexDirection: 'row',
//     borderRadius: 4,
//     overflow: 'hidden',
//     paddingBottom: 10,
//   },
//   rateControl: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   volumeControl: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   resizeModeControl: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   controlOption: {
//     alignSelf: 'center',
//     fontSize: 11,
//     color: 'white',
//     paddingLeft: 2,
//     paddingRight: 2,
//     lineHeight: 12,
//   },
// });

//  state = {
//    rate: 1,
//    volume: 1,
//    muted: false,
//    resizeMode: 'contain',
//    duration: 0.0,
//    currentTime: 0.0,
//    paused: false,

//    isFullScreen: false,
//    isLoading: true,
//    playerState: PLAYER_STATES.PLAYING,
//    screenType: 'content',
//  };
//  onSeek = (seek) => {
//    this.videoPlayer.seek(seek);
//  };
//  onPaused = (playerState) => {
//    this.setState({
//      paused: !this.state.paused,
//      playerState,
//    });
//  };
//  onReplay = () => {
//    this.setState({playerState: PLAYER_STATES.PLAYING});
//    this.videoPlayer.seek(0);
//  };
//  onProgress = (data) => {
//    const {isLoading, playerState} = this.state;
//    // Video Player will continue progress even if the video already ended
//    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
//      this.setState({currentTime: data.currentTime});
//    }
//  };
//  onLoad = (data) => this.setState({duration: data.duration, isLoading: false});
//  onLoadStart = (data) => this.setState({isLoading: true});
//  onEnd = () => this.setState({playerState: PLAYER_STATES.ENDED});
//  onError = () => alert('Oh! ', error);
//  exitFullScreen = () => {
//    alert('Exit full screen');
//  };
//  enterFullScreen = () => {};
//  onFullScreen = () => {
//    if (this.state.screenType == 'content') this.setState({screenType: 'cover'});
//    else this.setState({screenType: 'content'});
//  };
//  renderToolbar = () => (
//    <View>
//      <Text> toolbar </Text>
//    </View>
//  );
//  onSeeking = (currentTime) => this.setState({currentTime});

{
  /* 
<Video
          onEnd={this.onEnd}
          onLoad={this.onLoad}
          onLoadStart={this.onLoadStart}
          onProgress={this.onProgress}
          paused={this.state.paused}
          ref={(videoPlayer) => (this.videoPlayer = videoPlayer)}
          resizeMode={this.state.screenType}
          onFullScreen={this.state.isFullScreen}
          source={{
            uri:
              'https://res.cloudinary.com/musikbagus/video/upload/v1551241577/musikologi/musikbagus_day_vol2.mp4',
            type: 'mp4',
            cache: true,
          }}
          style={styles.mediaPlayer}
          volume={10}
          minLoadRetryCount={5}
          automaticallyWaitsToMinimizeStalling={true}
          bufferConfig={{
            minBufferMs: 2,
            maxBufferMs: 50000,
            bufferForPlaybackMs: 2500,
            bufferForPlaybackAfterRebufferMs: 5000,
          }}
        />
        <MediaControls
          duration={this.state.duration}
          isLoading={this.state.isLoading}
          mainColor="orange"
          onFullScreen={this.onFullScreen}
          onPaused={this.onPaused}
          onReplay={this.onReplay}
          onSeek={this.onSeek}
          playerState={this.state.playerState}
          progress={this.state.currentTime}
          toolbar={this.renderToolbar()}
        />
      </View> */
}
