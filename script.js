// let btc = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
// let stockPriceElemnt = document.getElementById('stock-btc');


// let eth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade')
// let stockPriceElement2 = document.getElementById('stock-eth')


// let bnb = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade')
// let stockPriceElement3 = document.getElementById('stock-bnb')

// let doge = new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@trade')
// let stockPriceElement4 = document.getElementById('stock-doge')

// let lastPrice = null;

// eth.onmessage = (event)=>{
//     let stockObject = JSON.parse(event.data)
//     let price = parseFloat(stockObject.p).toFixed(2);
//     console.log(price);

//     stockPriceElement2.innerText =  price;
    
//     stockPriceElement2.style.color =!lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red' ; 
    
//     lastPrice = price; 

// }

// btc.onmessage = (event) => {
// 	let stockObject = JSON.parse(event.data);
//     let price = parseFloat(stockObject.p).toFixed(2);
    
// 	stockPriceElemnt.innerText =  price;
    
//     stockPriceElemnt.style.color =!lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red' ; 
    
//     lastPrice = price; 
// };

// bnb.onmessage = (event)=>{
//     let stockObject = JSON.parse(event.data)
//     let price = parseFloat(stockObject.p).toFixed(2);
//     console.log(price);

//     stockPriceElement3.innerText =  price;
    
//     stockPriceElement3.style.color =!lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red' ; 
    
//     lastPrice = price; 

// }


// doge.onmessage = (event)=>{
//     let stockObject = JSON.parse(event.data)
//     let price = parseFloat(stockObject.p).toFixed(5);
//     console.log(price);

//     stockPriceElement4.innerText =  price;
    
//     stockPriceElement4.style.color =!lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red' ; 
    
//     lastPrice = price; 

// }



