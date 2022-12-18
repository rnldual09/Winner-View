const fetchNotToken = async (  ) => {

  const url = 'https://http://localhost:8080/test.do';
  const data = {'data1':'data_1','data2':'data_2','data3':'data_3'};
  
  fetch(url, 
  {
    method : 'POST',
    body : JSON.stringify(data),
    headers: { 'Content-Type': 'application/json'}
  }).then(function(response) {
    return response.json();                    
  }).then(function (responseText) {      
    
    console.log(responseText);

  }).catch(function(err){
    console.log(err);
    reject(err);
  });

};

const Util = {  };

export default Util;