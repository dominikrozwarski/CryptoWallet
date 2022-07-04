let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let stockPriceElemnt = document.getElementById('stock-price');
let lastPrice = null;

ws.onmessage = (event) => {
	let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    
	stockPriceElemnt.innerText =  price;
    
    stockPriceElemnt.style.color =!lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red' ; 
    
    lastPrice = price; 
};


