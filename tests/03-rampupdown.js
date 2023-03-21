import http from 'k6/http'

// Rampup nd Ramp down users
export let options = {
    stages: [
        { duration: '10s', target: 5 }, // 5 users for 10 secodns

        { duration: '20s', target: 3 }, // again 3 users for 20 seconds,

        { duration: '20s', target: 0 } // again 3 users for 20 seconds
    ]
  //  , vus :10, duration: "1m3s" // k6 run name of the spec file
  

}

export default function () {
    http.get('https://www.google.com')
    http.get('https://www.wikipedia.com')
}


// k6 run --vus 10 [name of spec file]