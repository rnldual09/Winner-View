import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import { RFPercentage } from "react-native-responsive-fontsize";

const signUpStyles = () => StyleSheet.create({

  loginContainer:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  loginSubContainer:{
    width:'85%',
    marginTop:windowHeight * 0.02
  },
  loginIcon:{
    width:RFPercentage(11),
    height:RFPercentage(11),    
    borderRadius:10,
    marginBottom:windowHeight * 0.04
  },
  loginTextInput:{
    borderBottomColor:'#1a8cff',
    borderBottomWidth:1,
    width:'85%',
    marginBottom:windowHeight * 0.01
  },
  loginBtnContainer:{
    flexDirection:'row',
    marginTop:windowHeight * 0.025,
    alignItems:'center'
  },
  loginBtnSubContainer:{
    width:'33%',
    alignItems:'center'
  }
});

export default signUpStyles;
