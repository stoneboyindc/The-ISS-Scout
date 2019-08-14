const geoAPI = "https://api.mapbox.com/geocoding/v5/mapbox.places";

const mpKey;  // <== remember to pluck in your MapBox API Key

const mbToken = `.json?access_token=${mpKey}`


// fetch(`${geoAPI}/${q.value}${mbToken}`).then(resp => {
//     if(resp.ok) {
//         return resp.json();
//     }
// }).then(resp => {
//     console.log(resp);
// }).catch(err => {
//     console.log('Something wrong', err);
// })


let state;

fetch(`${geoAPI}/New York${mbToken}`).then(resp => {
    if(resp.ok) {
        return resp.json();
    }
}).then(resp => {
    state = resp;   // <== the fetch call to ISS-Pass can and should be done within this .then scope

}).catch(err => {
    console.log('Something wrong', err);
})
// {type: "FeatureCollection", query: Array(2), features: Array(5), attribution: "NOTICE: © 2019 Mapbox and its suppliers. All right…y not be retained. POI(s) provided by Foursquare."}attribution: "NOTICE: © 2019 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service (https://www.mapbox.com/about/maps/). This response and the information it contains may not be retained. POI(s) provided by Foursquare."features: Array(5)0: bbox: (4) [-74.2590879797556, 40.477399, -73.7008392055224, 40.917576401307]center: (2) [-73.9808, 40.7648]context: (2) [{…}, {…}]geometry: {type: "Point", coordinates: Array(2)}id: "place.15278078705964500"place_name: "New York, New York, United States"place_type: ["place"]properties: {wikidata: "Q60"}relevance: 1text: "New York"type: "Feature"__proto__: Object1: {id: "region.14044236392855570", type: "Feature", place_type: Array(1), relevance: 1, properties: {…}, …}2: {id: "poi.1056561955217", type: "Feature", place_type: Array(1), relevance: 1, properties: {…}, …}3: {id: "poi.584115553305", type: "Feature", place_type: Array(1), relevance: 1, properties: {…}, …}4: {id: "poi.1314259992998", type: "Feature", place_type: Array(1), relevance: 1, properties: {…}, …}length: 5__proto__: Array(0)query: (2) ["new", "york"]type: "FeatureCollection"__proto__: Object

const [lon, lat] = state.features[0].center


const iSSurl = 'http://api.open-notify.org/iss-pass.json?'

fetch(`${iSSurl}lat=${lat}&lon=${lon}`).then(res=>{
    if(res.ok) {
        return res.json()
    }
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log('Something wrong', err);
})

// VM1948:6 {message: "success", request: {…}, response: Array(4)}message: "success"request: altitude: 100datetime: 1564853203latitude: 40.7648longitude: -73.9808passes: 5__proto__: Objectresponse: Array(4)0: {duration: 617, risetime: 1564864306}duration: 617risetime: 1564864306__proto__: Object1: {duration: 559, risetime: 1564870191}2: {duration: 599, risetime: 1564876031}3: {duration: 650, risetime: 1564881830}length: 4__proto__: Array(0)__proto__: Object
