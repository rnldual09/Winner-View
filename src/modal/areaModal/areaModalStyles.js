import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const areaModalStyles = (param) => StyleSheet.create({

  /***** AreaModal.jsx *****/
  modalContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(0, 0, 0, 0.3)' 
  },
  modalSubContainer:{
    backgroundColor:'#fff',
    width:'90%',
    borderRadius:20,
    alignItems:'center',
  },

  /***** ModalCloseBtn.jsx *****/
  modalCloseBtnContainer:{
    width:'87%',
    alignItems:'flex-end',
    marginTop:windowHeight * 0.025,    
  },
  modalCloseBtn:{
    width:RFPercentage(2),
    height:RFPercentage(2),
  },
  
  /***** AreaModalHeader.jsx *****/
  modalHeaderContainer:{
    marginVertical:windowHeight * 0.01,
  },
  modalHeaderTitle:{
    color:'#000',
    fontSize:RFPercentage(2.2),
    fontWeight:'500',
  },

  /***** AreaModalFooter.jsx *****/
  modalFooterContainer:{
    marginTop:windowHeight * 0.04,
    marginBottom:windowHeight * 0.035
  },
  beforeBtn:{
    borderColor:'#000',
    borderWidth:1,
    width:windowWidth * 0.19,
    height:windowHeight * 0.043,
    marginHorizontal:windowWidth * 0.01,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
  nextBtn:{
    backgroundColor:'#000',
    width:windowWidth * 0.19,
    height:windowHeight * 0.043,
    marginHorizontal:windowWidth * 0.01,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
  beforeText:{
    color:'#000',
    fontSize:RFPercentage(1.8),
    fontWeight:'500'
  },
  nextText:{
    color:'#fff',
    fontSize:RFPercentage(1.8),
    fontWeight:'500'
  },
  footerBtnContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },

  /***** AreaModalContent.jsx *****/
  areaContentContainer:{
    width:'95%',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'flex-start',
    alignSelf:'center',    
  },
  areaButtonNotPicked:{
    borderColor:'#999',
    borderWidth:1,
    width:'31.3%',
    height:windowHeight * 0.05,
    marginVertical:windowHeight * 0.005,
    marginHorizontal:'1%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
  areaButtonPicked:{
    backgroundColor:'#000',
    width:'31.3%',
    height:windowHeight * 0.05,
    marginVertical:windowHeight * 0.005,
    marginHorizontal:'1%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
  areaTextNotPicked:{
    color:'#000',
    fontSize:RFPercentage(1.4),
    fontWeight:'500',
  },
  areaTextPicked:{
    color:'#fff',
    fontSize:RFPercentage(1.4),
    fontWeight:'500',
  }
});

export default areaModalStyles;
