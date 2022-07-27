const fake = document.querySelector('.fake');
const real = document.querySelector('.real');

const trade = document.querySelector('.trade'); //trade button

const usdtValue = document.querySelector('.usdtValue');
const btcValue = document.querySelector('.btcValue');
const ethValue = document.querySelector('.ethValue');
const bnbValue = document.querySelector('.bnbValue');
const dogeValue = document.querySelector('.dogeValue');

const usdtValue2 = document.querySelector('.usdtValue2');
const btcValue2 = document.querySelector('.btcValue2');

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

const infoInside = document.querySelector('.infoInside');

let btc = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let stockPriceElemnt = document.getElementById('stock-btc');

let eth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
let stockPriceElement2 = document.getElementById('stock-eth');

let bnb = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade');
let stockPriceElement3 = document.getElementById('stock-bnb');

let doge = new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@trade');
let stockPriceElement4 = document.getElementById('stock-doge');

let lastPrice = null;

const sellAssets = () => {
	let newInput = parseFloat(input.value);

	//btc price
	let one = Number(stockPriceElemnt.innerHTML);

	//eth price
	let oneEth = Number(stockPriceElement2.innerHTML);

	//bnb price
	let oneBnb = Number(stockPriceElement3.innerHTML);

	//doge price
	let oneDoge = Number(stockPriceElement4.innerHTML);

	let two = parseFloat(usdtValue.innerHTML);

	let btcAmount = parseFloat(btcValue.innerHTML);

	//condition if input is lesser than wallet money

	const lesserThanUsdt = () => {
		if (newInput > Number(usdtValue.innerHTML)) {
			infoInside.innerHTML = 'Not enough money';
			total.innerHTML = null;
			coinType.innerHTML = null;
			input.value = null;
			return;
		} else infoInside.innerHTML = 'Amount you have recieved';
	};

	//conditon if input is lesser than wallet btc
	const lesserThanBtc = () => {
		if (newInput > Number(btcValue.innerHTML)) {
			infoInside.innerHTML = 'Not enough money';
			total.innerHTML = null;
			coinType.innerHTML = null;
			input.value = null;
			return;
		} else infoInside.innerHTML = 'Amount you have recieved';
	};

	//setting usdt innerHtml to proper value after selling
	const clearUsdt = () => {
		usdtValue.innerHTML = two - newInput;
		usdtValue2.innerHTML = usdtValue.innerHTML;
		input.value = null;
	};

	//setting btc innerHtml to proper value after selling

	const clearBtc = () => {
		btcValue.innerHTML = (
			Number(btcValue.innerHTML) - Number(newInput)
		).toFixed(6);
		btcValue2.innerHTML = btcValue.innerHTML;
		usdtBtc.innerHTML = (Number(btcValue.innerHTML) * Number(one)).toFixed(2);
		input.value = null;
	};

	//usdt to btc sell

	const sellFirst = () => {
		lesserThanUsdt();
		if (newInput > Number(usdtValue.innerHTML)) {
			return;
		}

		let three = Number(newInput / one).toFixed(6);
		total.innerHTML = three;
		coinType.innerHTML = 'BTC';
		let btc = Number(btcValue.innerHTML) + Number(three);

		if (btcValue.innerHTML != '---') {
			btcValue.innerHTML = btc.toFixed(6);
			btcValue2.innerHTML = btcValue.innerHTML;
			usdtBtc.innerHTML = (Number(btcValue.innerHTML) * Number(one)).toFixed(2);
		} else {
			btcValue.innerHTML = three;
			btcValue2.innerHTML = btcValue.innerHTML;
			usdtBtc.innerHTML = (Number(btcValue.innerHTML) * Number(one)).toFixed(2);
		}

		closeFake();
		clearUsdt();
	};
	//usdt to eth sell
	const sellSecond = () => {
		lesserThanUsdt();
		if (newInput > Number(usdtValue.innerHTML)) {
			return;
		}
		let three = Number(newInput / oneEth).toFixed(6);
		total.innerHTML = three;
		coinType.innerHTML = 'ETH';
		let ethSell = Number(ethValue.innerHTML) + Number(three);

		if (ethValue.innerHTML != '---') {
			ethValue.innerHTML = ethSell.toFixed(6);
			usdtEth.innerHTML = (Number(ethValue.innerHTML) * Number(oneEth)).toFixed(
				2
			);
			btcEth.innerHTML = (
				Number(usdtEth.innerHTML) / Number(stockPriceElemnt.innerHTML)
			).toFixed(4);
		} else {
			ethValue.innerHTML = three;
			usdtEth.innerHTML = (Number(ethValue.innerHTML) * Number(oneEth)).toFixed(
				2
			);
			btcEth.innerHTML = (
				Number(usdtEth.innerHTML) / Number(stockPriceElemnt.innerHTML)
			).toFixed(4);
		}

		closeFake();
		clearUsdt();
	};

	//usdt to bnb sell
	const sellThird = () => {
		lesserThanUsdt();
		if (newInput > Number(usdtValue.innerHTML)) {
			return;
		}
		let three = Number(newInput / oneBnb).toFixed(6);
		total.innerHTML = three;
		coinType.innerHTML = 'BNB';
		let bnbSell = Number(bnbValue.innerHTML) + Number(three);

		if (bnbValue.innerHTML != '---') {
			bnbValue.innerHTML = bnbSell.toFixed(6);
			usdtBnb.innerHTML = (Number(bnbValue.innerHTML) * Number(oneBnb)).toFixed(
				2
			);
			btcBnb.innerHTML = (
				Number(usdtBnb.innerHTML) / Number(stockPriceElemnt.innerHTML)
			).toFixed(4);
		} else {
			bnbValue.innerHTML = three;
			usdtBnb.innerHTML = (Number(bnbValue.innerHTML) * Number(oneBnb)).toFixed(
				2
			);
			btcBnb.innerHTML = (
				Number(usdtBnb.innerHTML) / Number(stockPriceElemnt.innerHTML)
			).toFixed(4);
		}

		closeFake();
		clearUsdt();
	};

	//usdt to doge

	const sellFourth = () => {
		lesserThanUsdt();
		if (newInput > Number(usdtValue.innerHTML)) {
			return;
		}
		let three = Number(newInput / oneDoge).toFixed(6);
		total.innerHTML = three;
		coinType.innerHTML = 'DOGE';
		let dogeSell = Number(dogeValue.innerHTML) + Number(three);

		if (dogeValue.innerHTML != '---') {
			dogeValue.innerHTML = dogeSell.toFixed(6);
			usdtDoge.innerHTML = (
				Number(dogeValue.innerHTML) * Number(oneDoge)
			).toFixed(2);
			btcDoge.innerHTML = (
				Number(usdtDoge.innerHTML) / Number(stockPriceElemnt.innerHTML)
			).toFixed(4);
		} else {
			dogeValue.innerHTML = three;
			usdtDoge.innerHTML = (
				Number(dogeValue.innerHTML) * Number(oneDoge)
			).toFixed(2);
			btcDoge.innerHTML = (
				Number(usdtDoge.innerHTML) / Number(stockPriceElemnt.innerHTML)
			).toFixed(4);
		}

		closeFake();
		clearUsdt();
	};

	// btc to Usdt

	const sellFirstV2 = () => {
		lesserThanBtc();
		if (newInput > Number(btcValue.innerHTML)) {
			return;
		}

		let three = Number(newInput * one).toFixed(6);
		total.innerHTML = three;
		coinType.innerHTML = 'USDT';

		usdtValue.innerHTML = (Number(three) + Number(usdtValue.innerHTML)).toFixed(
			2
		);
		usdtValue2.innerHTML = usdtValue.innerHTML;
		btcUsdt.innerHTML = (Number(usdtValue.innerHTML) / Number(one)).toFixed(6);

		clearBtc();
	};

	//btc to eth

	const sellSecondV2 = () => {
		lesserThanBtc();
		if (newInput > Number(btcValue.innerHTML)) {
			return;
		}

		let three = ((Number(newInput) * Number(one)) / Number(oneEth)).toFixed(6);
		total.innerHTML = three;
		coinType.innerHTML = 'ETH';

		if (ethValue.innerHTML != '---') {
			ethValue.innerHTML = (Number(three) + Number(ethValue.innerHTML)).toFixed(
				3
			);
			usdtEth.innerHTML = (Number(ethValue.innerHTML) * Number(oneEth)).toFixed(
				2
			);
		} else {
			ethValue.innerHTML = Number(three).toFixed(3);
			usdtEth.innerHTML = (Number(ethValue.innerHTML) * Number(oneEth)).toFixed(
				2
			);
		}

		clearBtc();

		btcEth.innerHTML = (Number(usdtEth.innerHTML) / Number(one)).toFixed(6);
	};

	//btc to bnb

	const sellThirdV2 = () => {
		lesserThanBtc();
		if (newInput > Number(btcValue.innerHTML)) {
			return;
		}

		let three = ((Number(newInput) * Number(one)) / Number(oneBnb)).toFixed(6);
		total.innerHTML = three;
		coinType.innerHTML = 'BNB';

		if (bnbValue.innerHTML != '---') {
			bnbValue.innerHTML = (Number(three) + Number(bnbValue.innerHTML)).toFixed(
				3
			);
			usdtBnb.innerHTML = (Number(bnbValue.innerHTML) * Number(oneBnb)).toFixed(
				2
			);
		} else {
			bnbValue.innerHTML = Number(three).toFixed(3);
			usdtBnb.innerHTML = (Number(bnbValue.innerHTML) * Number(oneBnb)).toFixed(
				2
			);
		}

		clearBtc();

		btcBnb.innerHTML = (Number(usdtBnb.innerHTML) / Number(one)).toFixed(6);
	};

	//btc to doge

	const sellFourthV2 = () => {
		lesserThanBtc();
		if (newInput > Number(btcValue.innerHTML)) {
			return;
		}

		let three = ((Number(newInput) * Number(one)) / Number(oneDoge)).toFixed(6);
		total.innerHTML = three;
		coinType.innerHTML = 'DOGE';

		if (dogeValue.innerHTML != '---') {
			dogeValue.innerHTML = (
				Number(three) + Number(dogeValue.innerHTML)
			).toFixed(3);
			usdtDoge.innerHTML = (
				Number(dogeValue.innerHTML) * Number(oneDoge)
			).toFixed(2);
		} else {
			dogeValue.innerHTML = Number(three).toFixed(3);
			usdtDoge.innerHTML = (
				Number(dogeValue.innerHTML) * Number(oneDoge)
			).toFixed(2);
		}

		clearBtc();

		btcDoge.innerHTML = (Number(usdtDoge.innerHTML) / Number(one)).toFixed(6);
	};

	//if same value is traded

	const cannotTrade = () => {
		infoInside.innerHTML = 'Why are you looking for bugs :(';
		total.innerHTML = null;
		coinType.innerHTML = null;
		input.value = null;
	};

	//condition to sell and buy

	if (whatToSell.value == 1) {
		if (whatToBuy.value == 1) {
			cannotTrade();
		} else if (whatToBuy.value == 2) {
			sellFirst();
		} else if (whatToBuy.value == 3) {
			sellSecond();
		} else if (whatToBuy.value == 4) {
			sellThird();
		} else if (whatToBuy.value == 5) {
			sellFourth();
		}
	} else if (whatToSell.value == 2) {
		if (whatToBuy.value == 1) {
			sellFirstV2();
		} else if (whatToBuy.value == 2) {
			cannotTrade();
		} else if (whatToBuy.value == 3) {
			sellSecondV2();
		} else if (whatToBuy.value == 4) {
			sellThirdV2();
		} else if (whatToBuy.value == 5) {
			sellFourthV2();
		}
	}
};

tradeBtn.addEventListener('click', sellAssets);

//btc api price
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

//eth api price
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

//bnb api price
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

//doge api price
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
	usdtValue.innerHTML = '10000';
	usdtValue2.innerHTML = '10000';

	ethValue.innerHTML = '---';
	bnbValue.innerHTML = '---';
	dogeValue.innerHTML = '---';
	btcValue.innerHTML = '---';
	usdtBtc.innerHTML = '---';
	usdtEth.innerHTML = '---';
	usdtBnb.innerHTML = '---';
	usdtDoge.innerHTML = '---';
	btcValue2.innerHTML = '---';
	btcEth.innerHTML = '---';
	btcBnb.innerHTML = '---';
	btcDoge.innerHTML = '---';
};

//adding fake wallet

const closeFake = () => {
	walletFake.style.zIndex = -10;
	shadow.style.zIndex = -5;
	let one = Number(stockPriceElemnt.innerHTML);
	let two = parseFloat(usdtValue.innerHTML);
	let three = two / one;
	btcUsdt.innerHTML = three.toFixed(4);
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

closeBtn2.addEventListener('click', closeTrade);
trade.addEventListener('click', openTrade);
fake.addEventListener('click', addFakeUsdt);
close.addEventListener('click', closeFake);
