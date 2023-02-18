import AsyncStorage from "@react-native-async-storage/async-storage";

const fetchWithNotToken = async ( url, data ) => {
  
  const result = await fetch('http://localhost:8080' + url, 
                      {
                        method : 'POST',
                        body : JSON.stringify(data),
                        headers: { 'Content-Type': 'application/json'}
                      }).then(function(response) {
                        return response.json();                    
                      }).then(async function (responseText) {      
                        return responseText;
                      }).catch(function(err){
                        console.log(err);
                      });

  return result;
};

const fetchWithToken = async ( url, data, token ) => {

  const result = await fetch('http://localhost:8080' + url, 
                      {
                        method : 'POST',
                        body : JSON.stringify(data),
                        headers: { 'Content-Type': 'application/json', 'token' :token }
                      }).then(function(response) {
                        return response.json();                    
                      }).then(async function (responseText) {      
                        return responseText;
                      }).catch(function(err){
                        console.log(err);
                      });

  return result;
};

// 유저 정보 가져오기
const getUsrInfo = async () => {
  const usrInfo = await AsyncStorage.getItem('usrInfo');
  return JSON.parse(usrInfo);
};

// 유저 토큰 가져오기
const getUsrtoekn = async () => {
  const token = await AsyncStorage.getItem('token');
  return token;
};

const Util = { fetchWithNotToken, fetchWithToken, getUsrInfo, getUsrtoekn };

export default Util;