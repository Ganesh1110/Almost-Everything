import { Dimensions, Platform } from "react-native";

const DIM = {
  deviceWidth: Math.round(Dimensions.get("window").width),
  deviceHeight: Math.round(Dimensions.get("window").height),
  deviceFont: Math.round(Dimensions.get("window").fontScale),
};

const iconWidth =
  Platform.OS == "android" ? DIM.deviceWidth * 0.06 : DIM.deviceWidth * 0.055;
const iconHeight =
  Platform.OS == "android" ? DIM.deviceHeight * 0.03 : DIM.deviceHeight * 0.025;

const Colors = {
  Black: "#000000",
  PurplyBlue: "#72709C",
  CuriousBlue: "#2EA3DC",
  CuriousBlueOp: "#2EA3DC26",
  White: "#FFFFFF",
  Charcoal: "#373A36",
  Iceberg: "#E7EEF6",
  DustyRed: "#BD4343",
  DustyRed_Op: "#BD43431A",
  GhostWhite: "#FAFAFA",
  Zodiac_BlueOp: "#18274b14",
  Zodiac_Dark_BlueOp: "#18274bbf",
  Martini: "#A6A7A5",
  CarbonGrey: "#636562",
  CarbonGreyOp: "#63656226",
  Mist: "#8F918F",
  Mercury: "#e5e5e5",
  Silver: "#C6C6C6",
  Loafer: "#EBF5E3",
  SnakeGreen: "#77BD43",
  SnakeGreenOp: "#77BD4326",
  Mango: "#ffb75d26",
  Orange: "#FFB75D",
  paleBlue: "#CCECFA",
  paleBlue_Op: "#CCECFA4D",
  VeniceBlue: "#0E5E81",
  VeniceBlueOp: "#0E5E814D",
  Platinum: "#E2E2E2",
  TRANSPARENT: "#0404045c",
  Gunmetal: "#292D32",
  CyanBlue: "#DFE6EE",
  PurpleJam: "#662D91",
  PurpleJamOp: "#662D914D",
  AliceBlue: "#F0FAFE",
  DustyOrange: "#DE9336",
  IronsideGrey: "#6C6C6C",
  CoralBlue: "#99D9F5",
  DarkGrey: "#363A36",
  ButteryWhite: "#FFFBEB",
  SplashYellow: "#FFB313",
};

const Gif = {
  Splash: require("../assets/gif/Splash.gif"),
};

const Icons = {
  listen: require("../assets/Icons/listen.png"),
  mail: require("../assets/Icons/email.png"),
  leftArrow: require("../assets/Icons/left-chevron.png"),
  showEye: require("../assets/Icons/eye_show.png"),
  hideEye: require("../assets/Icons/eye_hide.png"),
  forgot: require("../assets/Icons/forgot.png"),
  openEmail: require("../assets/Icons/open-email.png"),
  Menu: require("../assets/Icons/menu.png"),
  ResetPass: require("../assets/Icons/ResetPass.png"),
  home: require("../assets/Icons/home.png"),
  person: require("../assets/Icons/person.png"),
  settings: require("../assets/Icons/settings.png"),
  search: require("../assets/Icons/search.png"),
  // english: require("../assets/Icons/english.png"),
  // tamil: require("../assets/Icons/tamil.png"),
  // malayalam: require("../assets/Icons/malayalam.png"),
  // hindi: require("../assets/Icons/hindi.png"),
  // telegu: require("../assets/Icons/telegu.png"),
  world: require("../assets/Icons/world.png"),
  checked: require("../assets/Icons/checked.png"),
  unChecked: require("../assets/Icons/unchecked.png"),
};

const Images = {
  drawerBg: require("../assets/Images/Drawer-Bg.png"),
  profileImage: require("../assets/Images/face.png"),
};

export { DIM, Colors, Gif, Icons, Images, iconWidth, iconHeight };
