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

const fake = document.querySelector('.fake');
const real = document.querySelector('.real');
const trade = document.querySelector('.trade');
const usdtValue = document.querySelector('.usdtValue');
const btcValue = document.querySelector('.btcValue');
const ethValue = document.querySelector('.ethValue');
const bnbValue = document.querySelector('.bnbValue');
const dogeValue = document.querySelector('.dogeValue');
const usdtBtc = document.querySelector('.usdtBtc');
const usdtEth = document.querySelector('.usdtEth');
const usdtBnb = document.querySelector('.usdtBnb');
const usdtDoge = document.querySelector('.usdtDoge');
const btcUsdt = document.querySelector('.btcUsdt');
const btcEth = document.querySelector('.btcEth');
const btcBnb = document.querySelector('.btcBnb');
const btcDoge = document.querySelector('.btcDoge');
const walletFake = document.querySelector('.walletFake');
const close = document.querySelector('.close');
const shadow = document.querySelector('.shadow');
const closeBtn2 = document.querySelector('.closeBtn2');
const inside = document.querySelector('.inside');

const addFakeUsdt = () => {
	walletFake.style.zIndex = 10;
	shadow.style.zIndex = 5;
};

//adding fake wallet

const closeFake = () => {
	walletFake.style.zIndex = -10;
	shadow.style.zIndex = -5;
	usdtValue.innerHTML = '10 000';
};

// closing fake wallet

const openTrade = () => {
	inside.style.zIndex = 10;
	shadow.style.zIndex = 5;
};

const closeTrade = () => {
	inside.style.zIndex = -10;
	shadow.style.zIndex = -5;
};

closeBtn2.addEventListener('click', closeTrade);
trade.addEventListener('click', openTrade);
fake.addEventListener('click', addFakeUsdt);
close.addEventListener('click', closeFake);
