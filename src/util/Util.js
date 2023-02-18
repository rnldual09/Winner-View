import AsyncStorage from "@react-native-async-storage/async-storage";

export const phonePattern = /^(050[0-9]{1}|01[016789]{1}|02|0[3-9]{1}[0-9]{1})([0-9]{3,4})([0-9]{4})$/; //전화번호 정규식
export const mobilePattern = /^(01[016789]{1})(\d{3,4})(\d{4})$/; //휴대폰 정규식
export const enNumPassWordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,12}$/; //영문, 숫자를 포함하는 4~12자리 비밀번호
export const emailPattern = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/i; //이메일 정규식
export const emailProviderPattern = /^([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/i; //이메일 도메인 정규식
export const birthDtPattern = /(\d{4})(\d{2})(\d{2})/; //생년월일 하이픈 정규식

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