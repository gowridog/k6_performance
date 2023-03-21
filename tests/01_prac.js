import { check } from 'k6';
import http from 'k6/http';
export default function () {
  var url = 'https://reqres.in/api/users';
  var payload = JSON.stringify({
    
      name: "Srinivas",
      job: "Automation",
       
  });


  http.post(url, payload);
 // http.del(url, null, null)
 let responseBody = http.get(url);
 console.log(JSON.parse(responseBody.body))
 console.log("********************************************")
 console.log(JSON.stringify(responseBody.body.length))
 check(responseBody,{
    'Status is 200':(r) =>r.status ===200,
    'body lenght': (r) => r.body.length ==996
 })
}
