import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

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
    width:RFPercentage(param),
    height:RFPercentage(param),
    borderRadius:50,
  },
  MainItemHeaderText:{
    color:'#000',
    height:RFPercentage(2),
    fontWeight:'bold',
    marginBottom:2,
  },
  MainPictureContainer:{
    marginBottom:windowWidth * 0.03,
    alignItems:'center',
    width:RFPercentage(42),
    height:RFPercentage(42),
    alignSelf:'center'
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
    width:RFPercentage(2.3),
    height:RFPercentage(2.3),
    marginRight:windowWidth * 0.015,
  }
});

export default mainStyles;
