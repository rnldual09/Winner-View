import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const mainStyles = (param) => StyleSheet.create({

  MainHeaderContainer:{
    backgroundColor:'#fff',
    height:windowHeight * param,
    flexDirection:'row',
  },
  MainHeaderIconContainer:{
    width:'35%',          
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  MainItemHeaderContainer:{
    flexDirection:'row',
    margin:windowWidth * 0.039,
    alignItems:'center',
  },
  MainItemHeaderSubContainer:{
    marginLeft:windowWidth * 0.03,
    justifyContent:'center',
  },
  MainItemHeaderPicture:{
    resizeMode:'cover',
    width:windowWidth * 0.12,
    height:windowWidth * 0.12,
    borderRadius:50,
  },
  MainItemHeaderText:{
    color:'#000',
    fontSize:windowWidth * 0.033,
    fontWeight:'bold',
    marginBottom:2,
  },
  MainPictureContainer:{
    marginBottom:windowWidth * 0.03,
    alignItems:'center',
  },
  MainItemContentContainer:{
    width:'95%',
    alignItems:'center',
    alignSelf:'center',
  },
  HashTagContainer:{
    flexDirection:'row',
    margin:windowWidth * 0.033,
    justifyContent:'flex-start',
    flexWrap:'wrap'
  },
  MainFooterContainer:{
    flexDirection:'row',
    marginTop:windowWidth * 0.01,
    paddingTop:windowWidth * 0.03,
    paddingBottom:windowWidth * 0.03,
    borderTopColor:'#b3d7ff',
    borderTopWidth:1,
    justifyContent:'center',     
  },
  MainFooterButton:{
    flexDirection:'row',
    width:'33%',          
    justifyContent:'center',
    alignItems:'center',
  },
  MainFooterImage:{
    resizeMode:'cover',
    width:windowWidth * 0.048,
    height:windowWidth * 0.048,
    marginRight:windowWidth * 0.015,
  }
});

export default mainStyles;
