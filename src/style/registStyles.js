import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const registStyles = (param) => StyleSheet.create({

  registContainer:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
  },
  RegistStepImgContainer:{
    justifyContent:'center',
    alignContent:'center',
    flexDirection:'row',   
    marginVertical:windowHeight * 0.025
  },
  RegistStepImg:{
    width:10,
    height:10,
    marginHorizontal:5
  },
  rowContainer:{
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    justifyContent:'space-between',
    borderBottomColor:'#000',
    borderBottomWidth:1,
    paddingVertical:windowHeight * param
  },
  explainText:{
    color:param ? '#000' : '#999',
    fontWeight:'400',
    fontSize:RFPercentage(1.8),
    paddingLeft:windowWidth * 0.01
  },
  marginTops:{
    marginTop:param * windowHeight
  },
  regContentContainer:{    
    width:'100%',
    borderBottomColor:'#000',
    borderBottomWidth:1,    
  },
  regContentInp1:{
    textAlignVertical:'top',
    fontWeight:'400',
    fontSize:RFPercentage(1.8),
  },
  regContentInp2:{
    height:200,
    textAlignVertical:'top',
    fontWeight:'400',
    fontSize:RFPercentage(1.8),
  },
  nextBtn:{
    width:'100%',
    height:windowHeight * 0.071,
    backgroundColor:'#000',
    alignItems:'center',
    justifyContent:'center'
  },  
  nextRegistContainer:{
    width:'100%',
    height:'40%',
    justifyContent:'flex-end'
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
    justifyContent:'space-between',
    marginBottom:windowHeight * 0.01
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
  dateImg:{
    width:RFPercentage(1.9),
    height:RFPercentage(1.9),
    resizeMode:'contain',
  },
  rightImg:{
    width:RFPercentage(1.9),
    height:RFPercentage(1.9),
    resizeMode:'contain',
  },
  
});

export default registStyles;
