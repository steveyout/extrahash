var mysecret = '776F9d67830D3b45010405274fd2593dA9c9c97314cE5b9b834a890dDf890C02'
var mykey = 'ec0bf62154abc8cb7da2a5b44c9120e1847d61da44cf8634d2b9df7391296e96'
var Coinpayments = require('coinpayments');
const client = new Coinpayments({
    key: mykey,
    secret: mysecret
});
client.createWithdrawal({'currency' : 'BTC', 'amount' : 0.002, 'address': '3D7ddfCGif67NBTF2ZMxziKe8Ekd2EWh3g'},function(err,result){
    console.log(result);
    console.log(err)
});