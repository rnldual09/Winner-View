import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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
  Font_999:{
    color:'#999',
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
  commonBtn:{
    width:'100%',
    height:'100%',
    backgroundColor:'#1a8cff',
    alignItems:'center',
    justifyContent:'center'
  },
  commonErrMsgContainer:{
    alignItems:'flex-start',
    justifyContent:'center',
    marginTop:windowHeight * 0.008
  },
  commonErrMsgText:{
    color:'red',
    fontSize:RFPercentage(1.5),    
  },

});

export default commonStyles;
