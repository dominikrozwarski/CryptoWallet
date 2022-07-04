let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let stockPriceElemnt = document.getElementById('stock-btc');
let lastPrice = null;


let eth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade')
let stockPriceElement2 = document.getElementById('stock-eth')

eth.onmessage = (event)=>{
    let stockObject = JSON.parse(event.data)
    let price = parseFloat(stockObject.p).toFixed(2);
    console.log(price);

    stockPriceElement2.innerText =  price;
    
    stockPriceElement2.style.color =!lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red' ; 
    
    lastPrice = price; 

}





ws.onmessage = (event) => {
	let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    
	stockPriceElemnt.innerText =  price;
    
    stockPriceElemnt.style.color =!lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red' ; 
    
    lastPrice = price; 
};


