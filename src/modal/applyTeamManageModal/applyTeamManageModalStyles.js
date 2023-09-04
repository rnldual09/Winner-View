import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const applyTeamManageModalStyles = (param) => StyleSheet.create({

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

  /***** ApplyTeamManageModalHeader.jsx *****/
  headerContainer:{
    width:'90%',
    height:windowHeight * 0.03,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:windowHeight * 0.01
  },
  headerText:{
    color:'#000',
    fontSize:RFPercentage(1.9)
  },
  
  /***** ApplyTeamManageModalBody.jsx *****/
  bodyContainer:{
    width:'90%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    marginVertical:windowHeight * 0.005,
  },
  postion:{
    color:'#000',
    fontSize:RFPercentage(1.7),
  },
  profile:{
    width:RFPercentage(6),
    height:RFPercentage(6),
    marginLeft:windowWidth * 0.025
  },
  profileText:{
    color:'#000',
    fontSize:RFPercentage(1.7),
    marginVertical:windowHeight * 0.001
  },
  textContainer:{
    marginLeft:windowWidth * 0.025
  },

  /***** ApplyTeamManageModalFooter.jsx *****/
  footerContainer:{
    width:'90%',
    marginTop:windowHeight * 0.02,
    marginBottom:windowHeight * 0.03,
    alignItems:'center'    
  },
  endBtn:{
    backgroundColor:'#000',
    borderRadius:5,
    width:windowHeight * 0.12,
    height:windowHeight * 0.045,
    alignItems:'center',
    justifyContent:'center'
  },
  endBtnText:{
    color:'#fff',
    fontSize:RFPercentage(1.7),
  }

});

export default applyTeamManageModalStyles;
