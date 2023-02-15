const axios = require('axios');

console.log("HELLOO");

axios.get('https://livepeer.studio/api/asset',{
headers : {
    'Authorization' : 'Bearer APIKEY'
}
}).then(data => {
    console.log(data.data.length);
    for(var i=6;i<data.data.length;i++){
        console.log(data.data[i].id);
        axios.delete(`https://livepeer.studio/api/asset/${data.data[i].id}`,{ headers : {
            'Authorization' : 'Bearer API KEY'
        }})
    }
})
