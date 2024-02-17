import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const tournamentStyles = (params) => StyleSheet.create({

  tournamentContainer:{ 
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center'
  },
  toutitleContainer:{
    marginTop:windowHeight * 0.2,
    alignItems:'center'
  },
  touTitle:{
    fontSize:RFPercentage(3),
    color:'#000',
    fontWeight:'500'
  },
  touTitle2:{
    fontSize:RFPercentage(2),
    color:'#000',
  },
  touTitle3:{
    fontSize:RFPercentage(2.3),
    color:'#000',
    marginTop:windowHeight * 0.01    
  },
  touMatchContainer:{
    marginTop:windowHeight * 0.05,
    flexWrap:'wrap',
    width:windowWidth * 0.6,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  touMatchBtn:{
    borderColor:'#000',
    borderWidth:1,
    borderRadius:5,
    width:windowWidth * 0.25,
    height:windowHeight * 0.05,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:windowWidth * 0.02,
    marginVertical:windowHeight * 0.01
  },
  touMatchBtnTitle:{
    fontSize:RFPercentage(2),
    color:'#000',
  },

  /******* TouMatch.jsx *******/
  
 
});

export default tournamentStyles;
