import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const registStyles = (param) => StyleSheet.create({

  registContainer:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'space-between'
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
    justifyContent:'space-between',
    borderBottomColor:'#000',
    borderBottomWidth:1,
    height:windowHeight * 0.053,
    width:'100%'
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
    textAlignVertical:'center',
    fontWeight:'400',
    fontSize:RFPercentage(1.8),
    height:windowHeight * 0.053,
  },
  regContentInp2:{
    height:windowHeight * 0.15,
    textAlignVertical:'top',
    fontWeight:'400',
    fontSize:RFPercentage(1.8),    
  },
  nextBtn:{
    width:'100%',
    height:windowHeight * 0.063,
    backgroundColor:'#000',
    alignItems:'center',
    justifyContent:'center'
  },  
  nextRegistContainer:{
    width:'100%',
    height:'10%',
    justifyContent:'flex-end',
  },
  registGubunCheck:{
    backgroundColor:'#000',
    width:'49%',
    height:windowHeight * 0.04,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
  },
  registGubunUnCheck:{
    borderColor:'#000',
    borderWidth:1,
    width:'49%',
    height:windowHeight * 0.04,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
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
  addedImg1:{
    width:RFPercentage(44),
    height:RFPercentage(44),
    resizeMode:'contain',
    borderRadius:10,
  },
  addedImg2:{
    width:RFPercentage(8),
    height:RFPercentage(8),
    resizeMode:'contain',
    marginRight:windowWidth * 0.02,
    borderRadius:10,
  },
  registGubunContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:windowHeight * 0.015
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
  imgContainer:{
    marginTop:windowHeight * 0.015,
    alignItems:'center',
    justifyContent:'center',
  },
  regHashTagContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',        
  },
  hashInformation:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start'    
  },
  hashTagInp:{
    borderBottomWidth:1,
    borderBottomColor:'#000',
    width:'70%',    
    height:windowHeight * 0.053,
    textAlignVertical:'center',
    fontWeight:'400',
    fontSize:RFPercentage(1.8),    
  },
  addBtn:{
    backgroundColor:'#000',
    width:'27%',
    height:windowHeight * 0.045,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
  hashTextContainer:{
    height:windowHeight * 0.13,
    marginTop:windowHeight * 0.007,    
  },
  TeamUnCheck:{
    borderColor:'#000',
    borderWidth:1,
    width:'32.5%',
    height:windowHeight * 0.04,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:3,
  },
  TeamCheck:{
    backgroundColor:'#000',
    width:'32.5%',
    height:windowHeight * 0.04,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
  },
  teamMinMaxCntContainer:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    borderBottomColor:'#000',
    borderBottomWidth:1,
    justifyContent:'space-between'
  },
  minMaxInp:{
    
    width:100,
    height:windowHeight * 0.047,
    color:'#000',
    fontSize:RFPercentage(1.9),
    textAlign:'center',
  }
});

export default registStyles;
