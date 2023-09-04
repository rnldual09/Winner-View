import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const dateModalStyles = (param) => StyleSheet.create({

  /***** DateModal.jsx *****/
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
  
  /***** DateHeader.jsx *****/
  dateHeaderContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'60%',
    marginTop:windowHeight * 0.01
  },
  dateHeaderYearMonth:{
    alignItems:'center',
    justifyContent:'center',
    width:'50%',
    flexDirection:'row', 
  },
  leftRigntBtn:{
    width:RFPercentage(2),
    height:RFPercentage(2),
    opacity:param
  },
  dateHeaderText:{
    color:'#000',
    fontSize:RFPercentage(2.1),
    fontWeight:'500',
  },

  /***** DateContentWeek.jsx *****/
  dateContentContainer:{
    width:'91%',
    marginTop:windowHeight * 0.03,    
  },
  dateContentSubContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  days:{
    width:'14%',
    height:windowHeight * 0.055,
    alignItems:'center',
    justifyContent:'center'
  },
  dayText:{
    color:param,
    fontSize:RFPercentage(1.7),
    fontWeight:'500'
  }
  

});

export default dateModalStyles;
