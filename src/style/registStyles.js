import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const registStyles = (params) => StyleSheet.create({
    
  registContainer:{
    backgroundColor:'#fff',
    flex:1
  },
  nextBtn:{
    backgroundColor:'#000',
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  nextBtnText:{
    color:'#fff',
    fontSize:RFPercentage(2)
  },

  /***** ChooseOpenYn.jsx *****/
  openYnContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginVertical:windowHeight * 0.02 
  },
  openYnSelectedBtn:{
    backgroundColor:'#000',
    width:windowWidth * 0.3,
    height:windowHeight * 0.04,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:5,
    borderRadius:10
  },
  openYnNotSelectBtn:{
    borderColor:'#000',
    borderWidth:1,
    width:windowWidth * 0.3,
    height:windowHeight * 0.04,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:5,
    borderRadius:10
  },
  openYnSelectedText:{
    color:'#fff',
    fontSize:RFPercentage(1.7)
  },
  openYnNotSelectText:{
    color:'#000',
    fontSize:RFPercentage(1.7)
  },

  /***** ChoosePicture.jsx *****/


  /***** ChoosePostTit.jsx *****/
  postTitContainer:{
    width:'90%',
    alignSelf:'center',
    marginTop:windowHeight * 0.01
  },
  postTitText:{
    color:'#000',
    fontSize:RFPercentage(1.9),
    alignSelf:'flex-start',
    marginBottom:windowHeight * 0.01
  },
  postTitTextInp:{
    borderColor:'#000',
    borderWidth:1,
    width:'100%',
    height:windowHeight * 0.05,
    alignSelf:'center',
    borderRadius:5
  },

  /***** ChoosePostCont.jsx *****/
  postContContainer:{
    width:'90%',
    alignSelf:'center',
    marginTop:windowHeight * 0.01
  },
  postContText:{
    color:'#000',
    fontSize:RFPercentage(1.9),
    alignSelf:'flex-start',
    marginBottom:windowHeight * 0.01
  },
  postContTextInp:{
    borderColor:'#000',
    borderWidth:1,
    width:'100%',
    height:windowHeight * 0.12,
    alignSelf:'center',
    textAlignVertical:'top',
    borderRadius:5
  },

  /***** ChoosePostArea.jsx *****/
  postAreaContainer:{
    width:'90%',
    alignSelf:'center',
    marginTop:windowHeight * 0.01
  },
  postAreaSubContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  postAreaText:{
    color:'#000',
    fontSize:RFPercentage(1.9),
    alignSelf:'flex-start',
    marginBottom:windowHeight * 0.01
  },
  postAreaText2:{
    color:'#fff',
    fontSize:RFPercentage(1.6),
  },
  postAreaText3:{
    color:'#000',
    fontSize:RFPercentage(1.6),
  },
  postAreaBtn:{
    backgroundColor:'#000',
    width:'30%',
    height:windowHeight * 0.05,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
  },
  postAreaTextContainer:{
    width:'70%',
    paddingLeft:windowWidth * 0.03
  },

  /***** ChoosePostDate.jsx *****/
  postDateContainer:{
    width:'90%',
    alignSelf:'center',
    marginTop:windowHeight * 0.01
  },
  postDateSubContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  postDateText:{
    color:'#000',
    fontSize:RFPercentage(1.9),
    alignSelf:'flex-start',
    marginBottom:windowHeight * 0.01
  },
  postDateText2:{
    color:'#fff',
    fontSize:RFPercentage(1.6),
  },
  postDateText3:{
    color:'#000',
    fontSize:RFPercentage(1.6),
  },
  postDateBtn:{
    backgroundColor:'#000',
    width:'30%',
    height:windowHeight * 0.05,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
  },
  postDateTextContainer:{
    width:'70%',
    paddingLeft:windowWidth * 0.03
  },

  /***** ChooseTeamOrPer.jsx *****/
  teamOrPerContainer:{
    width:'90%',
    alignSelf:'center',
    marginTop:windowHeight * 0.01
  },
  teamOrPerSubContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%'
  },
  teamOrPerText:{
    color:'#000',
    fontSize:RFPercentage(1.9),
    alignSelf:'flex-start',
    marginBottom:windowHeight * 0.01
  },
  teamOrPerSelectedBtn:{
    backgroundColor:'#000',
    width:'32.5%',
    height:windowHeight * 0.05,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
  teamOrPerNotSelectBtn:{
    borderColor:'#000',
    borderWidth:1,
    width:'32.5%',
    height:windowHeight * 0.05,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
  teamOrPerSelectedText:{
    color:'#fff',
    fontSize:RFPercentage(1.7)
  },
  openYnNotSelectText:{
    color:'#000',
    fontSize:RFPercentage(1.7)
  },

  /***** ChooseTeamCnt.jsx *****/  
  teamCntContainer:{    
    marginTop:windowHeight * 0.01,
    width:'100%'
  },
  teamCntSubContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  teamCntBtnContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  teamCntText:{
    color:'#000',
    fontSize:RFPercentage(1.8)
  },
  teamCntBtn:{
    width:windowWidth * 0.1,
    height:windowHeight * 0.05,
    alignItems:'center',
    justifyContent:'center',
  },
  teamCntBtnText:{
    color:'#000',
    fontSize:RFPercentage(2.2)
  },

  /***** ChooseGrade.jsx *****/
  gradeContainer:{
    width:'90%',
    alignSelf:'center',
    marginTop:windowHeight * 0.01
  },
  gradeText:{
    color:'#000',
    fontSize:RFPercentage(1.9),
    alignSelf:'flex-start',
    marginBottom:windowHeight * 0.01
  },
  gradeInsertContainer:{
    borderBottomColor:'#000',
    borderBottomWidth:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:windowHeight * 0.06
  },
  gradeTextInp:{    
    width:'80%',
    height:'100%',    
  },  
  gradeAddBtn:{
    width:'20%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  gradeAddBtnText:{
    color:'#000',
    fontSize:RFPercentage(1.7),
  },

  /***** GradeList.jsx *****/
  gradeListContainer:{
    height:'70%',
    marginTop:windowHeight * 0.02
  },
  gradeListSubContainer:{
    width:'90%',
    alignSelf:'center',
    borderColor:'#000',
    borderWidth:1,
    marginTop:windowHeight * 0.02
  },
  gradeComponent:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:'#000',
    borderBottomWidth:1,
    borderStyle:'dashed',
  },
  grdNmView:{    
    alignItems:'flex-start',
    width:'70%',
  },
  grdNmText:{
    color:'#000',
    fontSize:RFPercentage(1.7),
    paddingLeft:windowWidth * 0.02
  },
  grdCntView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'30%'
  },
  grdCntBtn:{    
    alignItems:'center',
    justifyContent:'center',
    width:'40%',
    height:windowHeight * 0.05
  },
  grdCntView2:{
    alignItems:'center',
    justifyContent:'center',
    width:'20%',
    height:windowHeight * 0.05
  },
  grdCntText:{
    color:'#000',
    fontSize:RFPercentage(1.7),
  },
  deleteContainer:{
    width:'90%',
    alignSelf:'center',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:windowWidth *  0.01
  },
  deleteText:{
    color:'#000',
    fontSize:RFPercentage(1.7),
  },
  deleteBtnContainer:{
    height:windowHeight * 0.05,
    width:'100%',
    alignItems:'flex-end',
    justifyContent:'center',
    paddingRight:windowWidth * 0.04,
  },
  checkDeleteBtn:{
    backgroundColor:'#000',
    width:RFPercentage(1.8),
    height:RFPercentage(1.8),
    borderRadius:100
  },
  unCheckDeleteBtn:{
    borderColor:'#000',
    borderWidth:1,
    width:RFPercentage(1.8),
    height:RFPercentage(1.8),
    borderRadius:100
  }

});

export default registStyles;
