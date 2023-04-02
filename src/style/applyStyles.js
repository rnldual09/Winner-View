import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const registStyles = () => StyleSheet.create({

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
});

export default registStyles;
