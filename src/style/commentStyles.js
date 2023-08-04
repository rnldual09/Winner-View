import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const commentStyles = (params) => StyleSheet.create({

  commentContainer:{ 
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'space-between'
  },

  /******* CommentWriting.jsx *******/
  writngContainer:{
    borderColor:'#999',
    borderWidth:0.8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    height:windowHeight * 0.045,
    paddingHorizontal:windowWidth * 0.04
  },
  writingText:{
    color:'#999',
    fontSize:RFPercentage(1.5)
  },
  writingImage:{
    width:RFPercentage(1.2),
    height:RFPercentage(1.2),
  },

  /****** CommentTextInput.jsx *******/
  textInpContainer:{
    alignSelf:'center',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:windowHeight * 0.045,
    width:'95%',
    borderColor:'#999',
    borderWidth:1,
    borderRadius:18,
    marginVertical:windowHeight * 0.008
  },
  textInp:{    
    fontSize:13,
    width:'80%',
    height:'100%'
  },
  textInpBtn:{
    width:'12%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    fontSize:RFPercentage(1.5),
    color:'#000'
  },
  textInpText:{
    fontSize:RFPercentage(1.5),
    color:'#000'
  },

  /****** CommentList.jsx *******/
  noCommentContainer:{
    width:'100%',
    marginTop:'60%',
    alignItems:'center'
  },
  noCommentText:{
    color:'#000',
    fontSize:RFPercentage(2)
  },
  showHideCommentBtn:{
    height:windowHeight * 0.03,
    justifyContent:'center'
  },
  showHideCommentText:{
    fontSize:RFPercentage(1.6),
    color:'#000'
  },

  /****** CommentComponent.jsx *******/
  componentContainer:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  componentImgContainer:{
    width:'15%',
    alignItems:'center'
  },
  componentImg:{
    width:RFPercentage(5.5),
    height:RFPercentage(5.5),
    borderRadius:50,
  },
  componentTextContainer:{
    width:'85%',
    paddingVertical:windowHeight * 0.005
  },
  componentText1:{
    color:'#000',
    fontSize:RFPercentage(1.6),
    marginVertical:windowHeight * 0.001
  },
  componentText2:{
    color:'gray',
    fontSize:RFPercentage(1.45),
    marginVertical:windowHeight * 0.001
  }
 
});

export default commentStyles;
