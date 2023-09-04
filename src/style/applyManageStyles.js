import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const applyManageStyles = (params) => StyleSheet.create({

  managerContainer:{
    flex:1,
    backgroundColor:'#fff',
  },
  

  /******* ApplyManageHeader.jsx *******/
  managerHeaderContainer:{
    width:'100%',
    alignItems:'center'
  },
  endYnContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'80%',
    height:windowHeight * 0.05,
    marginBottom:windowHeight * 0.01
  },
  endYnText:{
    fontSize:RFPercentage(1.6),
    fontWeight:'500',
    color:'#000'
  },
  manageTypeContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'100%'
  },
  selectManageType:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'50%',
    height:windowHeight * 0.05,
  },
  selectedManageType:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'50%',
    borderBottomColor:'#000',
    borderBottomWidth:1,
    height:windowHeight * 0.05,
  },
  managerTypeText:{
    color:'#000',
    fontSize:RFPercentage(1.7)
  },

  /******* ApplyManageCnf.jsx *******/
  cnfYnContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:windowHeight * 0.02,
    width:'90%',
    alignSelf:'center'
  },
  cnfYnSubContainer:{
    width:'89%',
    alignSelf:'center',
    marginTop:windowHeight * 0.01
  },
  cnfYnText:{
    color:'#000',
    fontSize:RFPercentage(1.5)
  },
  cnfYnBtnContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },  
  cnfYnBtn1:{
    backgroundColor:'#000',
    height:windowHeight * 0.032,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    marginHorizontal:windowWidth * 0.007,
    paddingHorizontal:windowWidth * 0.01
  },
  cnfYnBtn2:{
    borderColor:'#000',
    borderWidth:1,
    height:windowHeight * 0.032,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    marginHorizontal:windowWidth * 0.007,
    paddingHorizontal:windowWidth * 0.01
  },
  cnfYnBtnText1:{
    color:'#fff',
    fontSize:RFPercentage(1.5)
  },
  cnfYnBtnText2:{
    color:'#000',
    fontSize:RFPercentage(1.5)
  },

  /******* ApplyTeamManage.jsx *******/
  managerTeamContainer:{
    alignSelf:'center',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    paddingHorizontal:windowWidth * 0.03,
    paddingVertical:windowHeight * 0.008,
    marginVertical:windowHeight * 0.005,
    width:'100%'
  },
  radioBtn1:{
    borderColor:'#000',
    borderWidth:1.2,
    width:RFPercentage(2),
    height:RFPercentage(2),
    borderRadius:100
  },
  radioBtn2:{
    backgroundColor:'#000',
    width:RFPercentage(2),
    height:RFPercentage(2),
    borderRadius:100
  },
  ceoProfile:{
    width:RFPercentage(6),
    height:RFPercentage(6),
  },
  ceoInfo:{
    color:'#000',
    fontSize:RFPercentage(1.6),
    marginVertical:windowHeight * 0.001,
  },
  moreBtn:{
    backgroundColor:'#000',
    width:windowWidth * 0.2,
    height:windowHeight * 0.03,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
  },
  moreBtnText:{
    color:'#fff',
    fontSize:RFPercentage(1.5)
  },

});

export default applyManageStyles;
