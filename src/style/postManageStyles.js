import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const postManageStyles = (params) => StyleSheet.create({

  managerContainer:{
    flex:1,
    backgroundColor:'#f0f0f5',
  },
  managerSubContainer:{
    width:'92%',
    backgroundColor:'#fff',
    alignSelf:'center',
    marginTop:windowHeight * 0.012,
    paddingHorizontal:windowWidth * 0.035,
    paddingVertical:windowHeight * 0.015,
    borderRadius:10,
    elevation:5
  },

  /******* PostManageHeader.jsx *******/
  headerContainer:{
    borderBottomColor:'#d0d0e1',
    borderBottomWidth:1,
    paddingBottom:windowHeight * 0.01,
    marginBottom:windowHeight * 0.015
  },
  insDtText:{
    fontSize:RFPercentage(1.4),
    color:'#000',
    fontWeight:'600',
  },
  postTitText:{
    fontSize:RFPercentage(1.6),
    color:'#000',
    fontWeight:'600',
    marginTop:windowHeight * 0.01
  },

  /******* PostManageContent.jsx *******/
  contentContainer:{
    marginBottom:windowHeight * 0.015
  },
  areaTextContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:windowHeight * 0.005
  },
  areaText:{
    fontSize:RFPercentage(1.5),
    color:'#000',
  },
  teamTypeContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:windowHeight * 0.005
  },
  teamTypeText:{
    fontSize:RFPercentage(1.5),
    color:'#000',
  },

  /******* PostManageFooter.jsx *******/
  footerContainer:{
    marginBottom:windowHeight * 0.005,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  footerBtn:{
    width:'32%',
    height:windowHeight * 0.04,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#ff',
    borderWidth:1,
    borderRadius:5
  },
  footerText:{
    fontSize:RFPercentage(1.5),
    color:'#000',
  },


});

export default postManageStyles;
