const fake = document.querySelector('.fake');
const real = document.querySelector('.real');

const trade = document.querySelector('.trade'); //trade button

const usdtValue = document.querySelector('.usdtValue');
const btcValue = document.querySelector('.btcValue');
const ethValue = document.querySelector('.ethValue');
const bnbValue = document.querySelector('.bnbValue');
const dogeValue = document.querySelector('.dogeValue');

const usdtValue2 = document.querySelector('.usdtValue2');
// const usdtValue2 = document.querySelector('.');

const usdtBtc = document.querySelector('.usdtBtc');
const usdtEth = document.querySelector('.usdtEth');
const usdtBnb = document.querySelector('.usdtBnb');
const usdtDoge = document.querySelector('.usdtDoge');

const btcUsdt = document.querySelector('.btcUsdt');
const btcEth = document.querySelector('.btcEth');
const btcBnb = document.querySelector('.btcBnb');
const btcDoge = document.querySelector('.btcDoge');

const total = document.querySelector('.total');
const coinType = document.querySelector('.coinType');

const transBtn = document.querySelector('.transBtn');
const closeTran = document.querySelector('.closeTran');

const final = document.querySelector('.final');

const walletFake = document.querySelector('.walletFake');

const close = document.querySelector('.close');

const shadow = document.querySelector('.shadow'); //shadow while trading

const closeBtn2 = document.querySelector('.closeBtn2'); //closing button of trade block

const inside = document.querySelector('.inside'); //trading block

const input = document.querySelector('.toSellInput'); //trade input
const tradeBtn = document.querySelector('.tradeBtn'); //trade mooney for crytpo btn
const whatToSell = document.querySelector('.SelectOne'); //select coin to sell
const whatToBuy = document.querySelector('.SelectTwo'); //select coin to buy

const BtcInside = document.querySelector('#stock-btc'); // btc price
const EthInside = document.querySelector('#stock-eth'); // eth price
const BnbInside = document.querySelector('#stock-bnb'); // bnb price
const DogeInside = document.querySelector('#stock-doge'); //doge price


let btc = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let stockPriceElemnt = document.getElementById('stock-btc');

let eth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
let stockPriceElement2 = document.getElementById('stock-eth');

let bnb = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade');
let stockPriceElement3 = document.getElementById('stock-bnb');

let doge = new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@trade');
let stockPriceElement4 = document.getElementById('stock-doge');

let lastPrice = null;

btc.onmessage = (event) => {
	let stockObject = JSON.parse(event.data);
	let price = parseFloat(stockObject.p).toFixed(2);

	stockPriceElemnt.innerText = price;

	stockPriceElemnt.style.color =
		!lastPrice || lastPrice === price
			? 'white'
			: price > lastPrice
			? 'green'
			: 'red';

	lastPrice = price;
};


//Value in BTC



const UsdtToBtc = () =>{


let one = Number(stockPriceElemnt.innerHTML);
let two = parseFloat(usdtValue.innerHTML);
let three = two/one
btcUsdt.innerHTML = three.toFixed(4);


}

trade.addEventListener('click', UsdtToBtc)

eth.onmessage = (event) => {
	let stockObject = JSON.parse(event.data);
	let price = parseFloat(stockObject.p).toFixed(2);

	stockPriceElement2.innerText = price;

	stockPriceElement2.style.color =
		!lastPrice || lastPrice === price
			? 'white'
			: price > lastPrice
			? 'green'
			: 'red';

	lastPrice = price;
};

bnb.onmessage = (event) => {
	let stockObject = JSON.parse(event.data);
	let price = parseFloat(stockObject.p).toFixed(2);

	stockPriceElement3.innerText = price;

	stockPriceElement3.style.color =
		!lastPrice || lastPrice === price
			? 'white'
			: price > lastPrice
			? 'green'
			: 'red';

	lastPrice = price;
};

doge.onmessage = (event) => {
	let stockObject = JSON.parse(event.data);
	let price = parseFloat(stockObject.p).toFixed(5);

	stockPriceElement4.innerText = price;

	stockPriceElement4.style.color =
		!lastPrice || lastPrice === price
			? 'white'
			: price > lastPrice
			? 'green'
			: 'red';

	lastPrice = price;
};

let inputValue;
let sell;
let buy;
const usdt = 1;
sell = whatToSell.value;
buy = whatToBuy.value;




const closeFinal = () => {
	final.style.zIndex = -10;
	shadow.style.zIndex = 5;
};

//closing conformation block 

const openFinal = () => {
	final.style.zIndex = 20;
	shadow.style.zIndex = 12;
};

//confirmation of transaction

const finish = () => {
	final.style.zIndex = -10;
	shadow.style.zIndex = -10;
	inside.style.zIndex = -10;
};

//finishing transaction button



const addFakeUsdt = () => {
	walletFake.style.zIndex = 10;
	shadow.style.zIndex = 5;
};

//adding fake wallet

const closeFake = () => {
	walletFake.style.zIndex = -10;
	shadow.style.zIndex = -5;
	usdtValue.innerHTML = '10 000';
	usdtValue2.innerHTML = '10 000';
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


transBtn.addEventListener('click', finish);
tradeBtn.addEventListener('click', openFinal);
closeTran.addEventListener('click', closeFinal);

closeBtn2.addEventListener('click', closeTrade);
trade.addEventListener('click', openTrade);
fake.addEventListener('click', addFakeUsdt);
close.addEventListener('click', closeFake);



