import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const mypageStyles = (params) => StyleSheet.create({

  mypageContainer:{ 
    flex:1,
    backgroundColor:'#f0f0f5',
    justifyContent:'space-between'
  },
  mypageSubContainer:{ 
    width:'100%',
    alignItems:'center',
  },

  /******* MyPageMoveBtn.jsx *******/
  moveBtnContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',
    height:windowHeight * 0.06,
    backgroundColor:'#fff',
    marginTop:windowHeight * 0.01,
    paddingHorizontal:windowWidth * 0.05,
    elevation:3
  },
  moveBtnImg:{
    width:RFPercentage(1.4),
    height:RFPercentage(1.4),
  },
  moveBtnText:{
    color:'#000',
    fontSize:RFPercentage(1.7)
  }

  
  
 
});

export default mypageStyles;
