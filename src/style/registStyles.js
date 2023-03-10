import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const registStyles = () => StyleSheet.create({

  registContainer:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
  },
  registSubContainer:{
    width:'90%',          
    marginTop:10
  },
  explainText:{
    color:'#1a8cff',
    fontWeight:'400',
    fontSize:RFPercentage(1.9),    
  },
  registBtnContainer:{
    justifyContent:'center',            
    alignItems:'center',
    marginRight:windowWidth * 0.02
  },
  registBtn:{
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    borderColor:'#000',
    borderWidth:1,                  
    width:RFPercentage(8),
    height:RFPercentage(8),
  },
  registBtnImg:{
    width:RFPercentage(2.6),
    height:RFPercentage(2.6),
    resizeMode:'contain',
    marginBottom:5,
  },
  addedImg:{
    width:RFPercentage(8),
    height:RFPercentage(8),
    resizeMode:'contain',
    marginRight:windowWidth * 0.02,
    borderRadius:10,
  },
  registGubunContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  registGubunCheck:{
    backgroundColor:'#1a8cff',
    width:'49%',
    height:windowHeight * 0.04,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
  },
  registGubunUnCheck:{
    borderColor:'#1a8cff',
    borderWidth:1,
    width:'49%',
    height:windowHeight * 0.04,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
  },
  registComponentMargin:{
    marginTop:windowHeight * 0.01,
    marginBottom:windowHeight * 0.02
  }
});

export default registStyles;
