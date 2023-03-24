import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const modalStyles = (param) => StyleSheet.create({

  modalContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(0, 0, 0, 0.3)' 
  },
  modalSubContainer:{
    backgroundColor:'#fff',
    width:'85%',
    height:'45%',
    borderColor:'#999',
    borderWidth:1,
    borderRadius:20,
    alignItems:'center',
  },
  modalCloseBtn:{
    width:RFPercentage(2),
    height:RFPercentage(2),
  },
  modalCloseBtnContainer:{
    width:'87%',
    alignItems:'flex-end',
    marginTop:windowHeight * 0.025,    
  },
  dateHeaderContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'60%'    
  },
  dateHeaderYearMonth:{
    alignItems:'center',
    justifyContent:'center',
    width:'50%',
    flexDirection:param,
  },
  leftRigntBtn:{
    width:RFPercentage(2),
    height:RFPercentage(2),
    opacity:param
  },
  week:{
    width:'15%',
    alignItems:'center',
    justifyContent:'center',    
  },
  date:{
    width:'14%',
    alignItems:'center',
    justifyContent:'center',
  },
  date2:{
    width:'14%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#1a8cff',    
    borderRadius:10
  },
  dateContentContainer:{
    width:'92%',
    height:'75%',
    marginTop:windowHeight * 0.02,    
  },
  dateContentSubContainer:{
    flexDirection:'row',
    height:param,
    width:'100%',
  },
  selTimeScrollItem:{    
    alignItems:'center',
    justifyContent:'center',
    height:30, 
  },
  gijun:{
    borderColor:'#999',
    borderWidth:1,
    backgroundColor:'#999',
    height:30,
    width:'90%',
    position:'absolute',
    top:'34.7%',
    borderRadius:20,    
  },
  scrollItemContainer:{
    width:'90%',
    height:'70%',    
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  scrollItemSubContainer:{
    width:'33.3%',
    alignItems:'center'
  },
  successBtn:{
    width:windowWidth * 0.27,
    height:windowHeight * 0.05,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:4,
    alignItems:'center',
    justifyContent:'center'
  }
});

export default modalStyles;
