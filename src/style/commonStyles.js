import { Dimensions, StyleSheet } from "react-native";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

const commonStyles = (param) => StyleSheet.create({
  
  onlyMargin:{
    margin:param * windowWidth
  },
  CommonImage:{
    resizeMode:'cover',
    width:windowWidth * param,
    height:windowWidth * param,
  },  
  CommonContainer:{
    backgroundColor:'#f0f0f5',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    marginTop:windowWidth * 0.036,
    marginBottom:windowWidth * 0.008,
  },
  CommonSubContainer:{
    backgroundColor:'#fff',
    width:'93%',
    borderRadius:20,
  },
  Font_000:{
    color:'#000',
    fontSize:windowWidth * param,
    fontWeight:'500'
  },
  Font_fff:{
    color:'#fff',
    fontSize:windowWidth * param,
    fontWeight:'500'
  },
  Font_1a8cff:{
    color:'#1a8cff',
    fontSize:windowWidth * param,
    fontWeight:'500'
  },

});

export default commonStyles;
