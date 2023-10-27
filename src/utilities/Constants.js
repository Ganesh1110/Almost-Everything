import {Dimensions} from 'react-native';

const DIM = {
  deviceWidth: Math.round(Dimensions.get('screen').width),
  deviceHeight: Math.round(Dimensions.get('screen').height),
  deviceFont: Math.round(Dimensions.get('screen').fontScale),
};

const Colors = {
  White: '#FFFFFF',
  Black: '#000000',
  PurplyBlue: '#72709C',
};

const Gif = {};

const Icons = {};

export {DIM, Colors, Gif, Icons};
