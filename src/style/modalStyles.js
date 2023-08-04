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
  modalHeaderContainer:{
    marginVertical:windowHeight * 0.01,
  },
  modalFooterContainer:{
    marginTop:windowHeight * 0.02,
    marginBottom:windowHeight * 0.025
  },
  areaContentContainer:{
    width:'90%',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'flex-start',
    alignSelf:'center',
    
  },
  areaContent:{
    borderColor:'#999',
    borderWidth:1,
    width:windowWidth * 0.165,
    height:windowHeight * 0.045,
    marginHorizontal:'1.5%',
    marginVertical:windowHeight * 0.005,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
  areaContentPicked:{
    backgroundColor:'#000',
    width:windowWidth * 0.165,
    height:windowHeight * 0.045,
    marginHorizontal:'1.5%',
    marginVertical:windowHeight * 0.005,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
  nextBtn1:{
    borderColor:'#000',
    borderWidth:1,
    width:windowWidth * 0.19,
    height:windowHeight * 0.043,
    marginHorizontal:windowWidth * 0.01,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
  nextBtn2:{
    backgroundColor:'#000',
    width:windowWidth * 0.19,
    height:windowHeight * 0.043,
    marginHorizontal:windowWidth * 0.01,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
  footerContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bringBtn:{
    backgroundColor:'#1a8cff',
    width:'98%',
    height:windowHeight * 0.04,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    //position : 'absolute', //버튼 위치 때문에 임시로 해놓음 수정 필요
    //top:380, //버튼 위치 때문에 임시로 해놓음 수정 필요
    //bottom:0, //버튼 위치 때문에 임시로 해놓음 수정 필요
    //left:3, //버튼 위치 때문에 임시로 해놓음 수정 필요
    //right:0 //버튼 위치 때문에 임시로 해놓음 수정 필요
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
