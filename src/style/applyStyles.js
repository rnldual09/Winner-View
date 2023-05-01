import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const applyStyles = () => StyleSheet.create({

  applyGubunContainer:{ 
    marginBottom: windowHeight * 0.015,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  applyGubunCheck:{
    backgroundColor:'#1a8cff',
    width:'49%',
    height:windowHeight * 0.04,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
  },
  applyGubunUnCheck:{
    borderColor:'#1a8cff',
    borderWidth:1,
    width:'49%',
    height:windowHeight * 0.04,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
  },
  applyGubunDisabled:{
    backgroundColor:'#D5D5D5',
    width:'49%',
    height:windowHeight * 0.04,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
  },
  applyBtn:{
    backgroundColor:'#1a8cff',
    width:'98%',
    height:windowHeight * 0.04,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
  },
  memDelBtn:{
    backgroundColor:'red',
    width:'15%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
  },
  teamAddBtn:{
    backgroundColor:'#1a8cff',
    width:'35%',
    height:windowHeight * 0.04,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    marginTop:5,
    marginBottom:8,
  },
  teamMember:{
    width:'85%',
    borderWidth:1,
    borderColor:'#1a8cff'
  },
});

export default applyStyles;
