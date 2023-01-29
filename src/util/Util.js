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

const fetchBlob = async ( data ) => {

  const result = await fetch('http://localhost:8080/common/usrProfile.do', 
                      {
                        method : 'POST',
                        body : JSON.stringify(data),
                        headers: { 'Content-Type': 'application/json' }
                      }).then(function(response) {
                        return response.arrayBuffer();                    
                      }).then(async function (responseText) {      
                        return responseText;
                      }).catch(function(err){
                        console.log(err);
                      });

  return result;
};

const Util = { fetchWithNotToken, fetchWithToken, fetchBlob };

export default Util;