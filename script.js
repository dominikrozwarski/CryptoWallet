//wallets
const fake = document.querySelector('.fake');
const real = document.querySelector('.real');

const trade = document.querySelector('.trade'); //trade button

//value possition
const usdtValue = document.querySelector('.usdtValue');
const btcValue = document.querySelector('.btcValue');
const ethValue = document.querySelector('.ethValue');
const bnbValue = document.querySelector('.bnbValue');
const dogeValue = document.querySelector('.dogeValue');

//value for same coin in row  btc-btc usdt-usdt
const usdtValue2 = document.querySelector('.usdtValue2');
const btcValue2 = document.querySelector('.btcValue2');

//value is value in usdt
const usdtBtc = document.querySelector('.usdtBtc');
const usdtEth = document.querySelector('.usdtEth');
const usdtBnb = document.querySelector('.usdtBnb');
const usdtDoge = document.querySelector('.usdtDoge');

//value in value in btc
const btcUsdt = document.querySelector('.btcUsdt');
const btcEth = document.querySelector('.btcEth');
const btcBnb = document.querySelector('.btcBnb');
const btcDoge = document.querySelector('.btcDoge');

//info after trans what have been bought
const total = document.querySelector('.total');
const coinType = document.querySelector('.coinType');

//window that show result of transaction
const transBtn = document.querySelector('.transBtn');
const closeTran = document.querySelector('.closeTran');

const final = document.querySelector('.final'); //showUp window with value we recieved

const walletFake = document.querySelector('.walletFake'); //fake wallet showUp

const close = document.querySelector('.close'); // close fake wallet showUp windom

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

const infoInside = document.querySelector('.infoInside'); //text in transaction showUp window

//websocket to btc
let btc = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let stockPriceElemnt = document.getElementById('stock-btc');

//websocket to eth
let eth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
let stockPriceElement2 = document.getElementById('stock-eth');

//websocket to bnb
let bnb = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade');
let stockPriceElement3 = document.getElementById('stock-bnb');

//websocket to doge
let doge = new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@trade');
let stockPriceElement4 = document.getElementById('stock-doge');

let lastPrice = null; //value used in api
let a = null;
const sellAssets = () => {
	//value we want to trade
	let newInput = parseFloat(input.value);

	//btc price
	let one = Number(stockPriceElemnt.innerHTML);

	//eth price
	let oneEth = Number(stockPriceElement2.innerHTML);

	//bnb price
	let oneBnb = Number(stockPriceElement3.innerHTML);

	//doge price
	let oneDoge = Number(stockPriceElement4.innerHTML);

	//condition if input is higher than wallet usdt value

	const lesserThanUsdt = () => {
		if (Number(newInput) > Number(usdtValue.innerHTML)) {
			infoInside.innerHTML = 'Not enough money';
			total.innerHTML = null;
			coinType.innerHTML = null;
			input.value = null;
			a = 1;
		} else {
			infoInside.innerHTML = 'Amount you have recieved';
			a = 0;
		}
	};

	//conditon if input is higher than wallet btc value
	const lesserThanBtc = () => {
		if (Number(newInput) > Number(btcValue.innerHTML)) {
			infoInside.innerHTML = 'Not enough money';
			total.innerHTML = null;
			coinType.innerHTML = null;
			input.value = null;
			a = 1;
		} else {
			infoInside.innerHTML = 'Amount you have recieved';
			a = 0;
		}
	};

	//conditon if input is higher than wallet eth value

	const lesserThanEth = () => {
		if (Number(newInput) > Number(ethValue.innerHTML)) {
			infoInside.innerHTML = 'Not enough money';
			total.innerHTML = null;
			coinType.innerHTML = null;
			input.value = null;
			a = 1;
		} else {
			infoInside.innerHTML = 'Amount you have recieved';
			a = 0;
		}
	};

	//conditon if input is higher than wallet bnb value
	const lesserThanBnb = () => {
		if (Number(newInput) > Number(bnbValue.innerHTML)) {
			infoInside.innerHTML = 'Not enough money';
			total.innerHTML = null;
			coinType.innerHTML = null;
			input.value = null;
			a = 1;
		} else {
			infoInside.innerHTML = 'Amount you have recieved';
			a = 0;
		}
	};

	const lesserThanDoge = () => {
		if (Number(newInput) > Number(dogeValue.innerHTML)) {
			infoInside.innerHTML = 'Not enough money';
			total.innerHTML = null;
			coinType.innerHTML = null;
			input.value = null;
			a = 1;
		} else {
			infoInside.innerHTML = 'Amount you have recieved';
			a = 0;
		}
	};

	//setting usdt innerHtml to proper value after selling
	const clearUsdt = () => {
		usdtValue.innerHTML = parseFloat(usdtValue.innerHTML) - newInput;
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

	//setting eth innerHtml to proper value after selling

	const clearEth = () => {
		ethValue.innerHTML = (
			Number(ethValue.innerHTML) - Number(newInput)
		).toFixed(3);
		usdtEth.innerHTML = (Number(ethValue.innerHTML) * Number(oneEth)).toFixed(
			2
		);
		btcEth.innerHTML = (Number(usdtEth.innerHTML) / Number(one)).toFixed(3);
		input.value = null;
	};

	//setting bnb innerHtml to proper value after selling

	const clearBnb = () => {
		bnbValue.innerHTML = (
			Number(bnbValue.innerHTML) - Number(newInput)
		).toFixed(3);
		usdtBnb.innerHTML = (Number(bnbValue.innerHTML) * Number(oneBnb)).toFixed(
			2
		);
		btcBnb.innerHTML = (Number(usdtBnb.innerHTML) / Number(one)).toFixed(3);
		input.value = null;
	};

	//setting doge innerHtml to proper value after selling
	const clearDoge = () => {
		dogeValue.innerHTML = (
			Number(dogeValue.innerHTML) - Number(newInput)
		).toFixed(2);
		usdtDoge.innerHTML = (
			Number(dogeValue.innerHTML) * Number(oneDoge)
		).toFixed(2);
		btcDoge.innerHTML = (Number(usdtDoge.innerHTML) / Number(one)).toFixed(3);
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
		} else {
			btcValue.innerHTML = three;
		}
		btcValue2.innerHTML = btcValue.innerHTML;
		usdtBtc.innerHTML = (Number(btcValue.innerHTML) * Number(one)).toFixed(2);
		closeFake();
		clearUsdt();
	};
	//usdt to eth sell
	const sellSecond = () => {
		lesserThanUsdt();
		console.log(a);
		if (newInput > Number(usdtValue.innerHTML)) {
			return;
		}
		let three = Number(newInput / oneEth).toFixed(6);
		total.innerHTML = three;
		coinType.innerHTML = 'ETH';
		let ethSell = Number(ethValue.innerHTML) + Number(three);

		if (ethValue.innerHTML != '---') {
			ethValue.innerHTML = ethSell.toFixed(6);
		} else {
			ethValue.innerHTML = three;
		}
		usdtEth.innerHTML = (Number(ethValue.innerHTML) * Number(oneEth)).toFixed(
			2
		);
		btcEth.innerHTML = (
			Number(usdtEth.innerHTML) / Number(stockPriceElemnt.innerHTML)
		).toFixed(4);
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
		} else {
			bnbValue.innerHTML = three;
		}
		usdtBnb.innerHTML = (Number(bnbValue.innerHTML) * Number(oneBnb)).toFixed(
			2
		);
		usdtBnb.innerHTML = (Number(bnbValue.innerHTML) * Number(oneBnb)).toFixed(
			2
		);
		btcBnb.innerHTML = (
			Number(usdtBnb.innerHTML) / Number(stockPriceElemnt.innerHTML)
		).toFixed(4);
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
		} else {
			dogeValue.innerHTML = three;
		}
		usdtDoge.innerHTML = (
			Number(dogeValue.innerHTML) * Number(oneDoge)
		).toFixed(2);
		btcDoge.innerHTML = (
			Number(usdtDoge.innerHTML) / Number(stockPriceElemnt.innerHTML)
		).toFixed(4);
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
		} else {
			ethValue.innerHTML = Number(three).toFixed(3);
		}

		clearBtc();
		usdtEth.innerHTML = (Number(ethValue.innerHTML) * Number(oneEth)).toFixed(
			2
		);
		btcEth.innerHTML = (Number(usdtEth.innerHTML) / Number(one)).toFixed(6);
	};

	//btc to bnb

	const sellThirdV2 = () => {
		lesserThanBtc();
		if (a == 1) {
			return;
		}

		let three = ((Number(newInput) * Number(one)) / Number(oneBnb)).toFixed(6);
		total.innerHTML = three;
		coinType.innerHTML = 'BNB';

		if (bnbValue.innerHTML != '---') {
			bnbValue.innerHTML = (Number(three) + Number(bnbValue.innerHTML)).toFixed(
				3
			);
		} else {
			bnbValue.innerHTML = Number(three).toFixed(3);
		}

		clearBtc();
		usdtBnb.innerHTML = (Number(bnbValue.innerHTML) * Number(oneBnb)).toFixed(
			2
		);
		btcBnb.innerHTML = (Number(usdtBnb.innerHTML) / Number(one)).toFixed(6);
	};

	//btc to doge

	const sellFourthV2 = () => {
		lesserThanBtc();
		if (a == 1) {
			return;
		}

		let three = ((Number(newInput) * Number(one)) / Number(oneDoge)).toFixed(6);
		total.innerHTML = three;
		coinType.innerHTML = 'DOGE';

		if (dogeValue.innerHTML != '---') {
			dogeValue.innerHTML = (
				Number(three) + Number(dogeValue.innerHTML)
			).toFixed(3);
		} else {
			dogeValue.innerHTML = Number(three).toFixed(3);
		}

		clearBtc();
		usdtDoge.innerHTML = (
			Number(dogeValue.innerHTML) * Number(oneDoge)
		).toFixed(2);
		btcDoge.innerHTML = (Number(usdtDoge.innerHTML) / Number(one)).toFixed(6);
	};

	//eth to usdt

	const sellFirstV3 = () => {
		lesserThanEth();
		if (a == 1) {
			return;
		}

		let three = (Number(newInput) * Number(oneEth)).toFixed(6);
		total.innerHTML = three;
		coinType.innerHTML = 'USDT';

		if (usdtValue.innerHTML != '---') {
			usdtValue.innerHTML = (
				Number(three) + Number(usdtValue.innerHTML)
			).toFixed(2);
		} else {
			usdtValue.innerHTML = Number(three).toFixed(2);
		}
		btcUsdt.innerHTML = (Number(usdtValue.innerHTML) / Number(one)).toFixed(6);
		usdtValue2.innerHTML = usdtValue.innerHTML;

		clearEth();
	};

	//eth to btc

	const sellSecondV3 = () => {
		lesserThanEth();
		if (a == 1) {
			return;
		}

		let three = ((Number(newInput) * Number(oneEth)) / Number(one)).toFixed(6);
		total.innerHTML = three;
		coinType.innerHTML = 'BTC';

		if (btcValue.innerHTML != '---') {
			btcValue.innerHTML = (Number(three) + Number(btcValue.innerHTML)).toFixed(
				6
			);
		} else {
			btcValue.innerHTML = Number(three).toFixed(6);
		}
		btcValue2.innerHTML = btcValue.innerHTML;
		usdtBtc.innerHTML = (Number(btcValue.innerHTML) * Number(one)).toFixed(2);

		clearEth();
	};

	//eth to bnb

	const sellThirdV3 = () => {
		lesserThanEth();
		if (a == 1) {
			return;
		}

		let three = ((Number(newInput) * Number(oneEth)) / Number(oneBnb)).toFixed(
			6
		);
		total.innerHTML = three;
		coinType.innerHTML = 'BNB';

		if (bnbValue.innerHTML != '---') {
			bnbValue.innerHTML = (Number(three) + Number(bnbValue.innerHTML)).toFixed(
				2
			);
		} else {
			bnbValue.innerHTML = Number(three).toFixed(2);
		}

		usdtBnb.innerHTML = (Number(bnbValue.innerHTML) * Number(oneBnb)).toFixed(
			2
		);
		btcBnb.innerHTML = (Number(usdtBnb.innerHTML) / Number(one)).toFixed(6);

		clearEth();
	};

	//eth to doge

	const sellFourthV3 = () => {
		lesserThanEth();
		if (a == 1) {
			return;
		}

		let three = ((Number(newInput) * Number(oneEth)) / Number(oneDoge)).toFixed(
			2
		);
		total.innerHTML = three;
		coinType.innerHTML = 'DOGE';

		if (dogeValue.innerHTML != '---') {
			dogeValue.innerHTML = (
				Number(three) + Number(dogeValue.innerHTML)
			).toFixed(2);
		} else {
			dogeValue.innerHTML = Number(three).toFixed(2);
		}

		usdtDoge.innerHTML = (
			Number(dogeValue.innerHTML) * Number(oneDoge)
		).toFixed(2);
		btcDoge.innerHTML = (Number(usdtDoge.innerHTML) / Number(one)).toFixed(6);

		clearEth();
	};

	//bnb to usdt

	const sellFirstV4 = () => {
		lesserThanBnb();
		if (a == 1) {
			return;
		}

		let three = (Number(newInput) * Number(oneBnb)).toFixed(2);
		total.innerHTML = three;
		coinType.innerHTML = 'USDT';

		if (usdtValue.innerHTML != '---') {
			usdtValue.innerHTML = (
				Number(three) + Number(usdtValue.innerHTML)
			).toFixed(2);
		} else {
			usdtValue.innerHTML = Number(three).toFixed(2);
		}

		usdtValue2.innerHTML = usdtValue.innerHTML;
		btcUsdt.innerHTML = (Number(usdtValue.innerHTML) / Number(one)).toFixed(6);

		clearBnb();
	};

	//bnb to btc

	const sellSecondV4 = () => {
		lesserThanBnb();
		if (a == 1) {
			return;
		}

		let three = ((Number(newInput) * Number(oneBnb)) / Number(one)).toFixed(6);
		total.innerHTML = three;
		coinType.innerHTML = 'BTC';

		if (btcValue.innerHTML != '---') {
			btcValue.innerHTML = (Number(btcValue.innerHTML) + Number(three)).toFixed(
				6
			);
		} else {
			btcValue.innerHTML = Number(three).toFixed(6);
		}

		btcValue2.innerHTML = btcValue.innerHTML;

		usdtBtc.innerHTML = (Number(btcValue.innerHTML) * Number(one)).toFixed(2);

		clearBnb();
	};

	//bnb to eth

	const sellThirdV4 = () => {
		lesserThanBnb();
		if (a == 1) {
			return;
		}

		let three = ((Number(newInput) * Number(oneBnb)) / Number(oneEth)).toFixed(
			6
		);
		total.innerHTML = three;
		coinType.innerHTML = 'ETH';

		if (ethValue.innerHTML != '---') {
			ethValue.innerHTML = (Number(ethValue.innerHTML) + Number(three)).toFixed(
				6
			);
		} else {
			ethValue.innerHTML = Number(three).toFixed(6);
		}

		usdtEth.innerHTML = (Number(ethValue.innerHTML) * Number(oneEth)).toFixed(
			2
		);

		btcEth.innerHTML = (Number(usdtEth.innerHTML) / Number(one)).toFixed(6);

		clearBnb();
	};

	//bnb to doge

	const sellFourthV4 = () => {
		lesserThanBnb();
		if (a == 1) {
			return;
		}

		let three = ((Number(newInput) * Number(oneBnb)) / Number(oneDoge)).toFixed(
			6
		);
		total.innerHTML = three;
		coinType.innerHTML = 'DOGE';

		if (dogeValue.innerHTML != '---') {
			dogeValue.innerHTML = (
				Number(dogeValue.innerHTML) + Number(three)
			).toFixed(2);
		} else {
			dogeValue.innerHTML = Number(three).toFixed(2);
		}

		usdtDoge.innerHTML = (
			Number(dogeValue.innerHTML) * Number(oneDoge)
		).toFixed(2);

		btcDoge.innerHTML = (Number(usdtDoge.innerHTML) / Number(one)).toFixed(6);

		clearBnb();
	};

	//doge to btc
	const sellFirstV5 = () => {
		lesserThanDoge();
		if (a == 1) {
			return;
		}

		let three = (Number(newInput) * Number(oneDoge)).toFixed(2);
		total.innerHTML = three;
		coinType.innerHTML = 'USDT';

		if (usdtValue.innerHTML != '---') {
			usdtValue.innerHTML = (
				Number(usdtValue.innerHTML) + Number(three)
			).toFixed(2);
		} else {
			usdtValue.innerHTML = Number(three).toFixed(2);
		}

		usdtValue2.innerHTML = usdtValue.innerHTML;
		btcUsdt.innerHTML = (Number(usdtValue.innerHTML) / Number(one)).toFixed(6);

		clearDoge();
	};

	//doge to btc
	const sellSecondV5 = () => {
		lesserThanDoge();
		if (a == 1) {
			return;
		}

		let three = ((Number(newInput) * Number(oneDoge)) / Number(one)).toFixed(6);
		total.innerHTML = three;
		coinType.innerHTML = 'BTC';

		if (btcValue.innerHTML != '---') {
			btcValue.innerHTML = (Number(btcValue.innerHTML) + Number(three)).toFixed(
				6
			);
		} else {
			btcValue.innerHTML = Number(three).toFixed(6);
		}
		usdtBtc.innerHTML = (Number(btcValue.innerHTML) * Number(one)).toFixed(2);
		btcValue2.innerHTML = btcValue.innerHTML;

		clearDoge();
	};

	//doge to eth
	const sellThirdV5 = () => {
		lesserThanDoge();
		if (a == 1) {
			return;
		}

		let three = ((Number(newInput) * Number(oneDoge)) / Number(oneBnb)).toFixed(
			6
		);
		total.innerHTML = three;
		coinType.innerHTML = 'ETH';

		if (bnbValue.innerHTML != '---') {
			bnbValue.innerHTML = (Number(bnbValue.innerHTML) + Number(three)).toFixed(
				2
			);
		} else {
			bnbValue.innerHTML = Number(three).toFixed(6);
		}

		usdtBnb.innerHTML = (Number(bnbValue.innerHTML) * Number(oneBnb)).toFixed(
			2
		);
		btcBnb.innerHTML = (Number(usdtBnb.innerHTML) / Number(one)).toFixed(6);

		clearDoge();
	};

	//doge to bnb
	const sellFourthV5 = () => {
		lesserThanDoge();
		if (a == 1) {
			return;
		}

		let three = ((Number(newInput) * Number(oneDoge)) / Number(oneEth)).toFixed(
			6
		);
		total.innerHTML = three;
		coinType.innerHTML = 'BNB';

		if (ethValue.innerHTML != '---') {
			ethValue.innerHTML = (Number(ethValue.innerHTML) + Number(three)).toFixed(
				6
			);
		} else {
			ethValue.innerHTML = Number(three).toFixed(6);
		}

		usdtEth.innerHTML = (Number(ethValue.innerHTML) * Number(oneEth)).toFixed(
			2
		);
		btcEth.innerHTML = (Number(usdtEth.innerHTML) / Number(one)).toFixed(6);

		clearDoge();
	};

	//if same value is traded

	const cannotTrade = () => {
		infoInside.innerHTML = 'Why are you looking for bugs :(';
		total.innerHTML = null;
		coinType.innerHTML = null;
		input.value = null;
	};

	//condition to sell and buy | value :
	// 1-usdt
	// 2-btc
	// 3-eth
	// 4-bnb
	// 5-doge

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
	} else if (whatToSell.value == 3) {
		if (whatToBuy.value == 1) {
			sellFirstV3();
		} else if (whatToBuy.value == 2) {
			sellSecondV3();
		} else if (whatToBuy.value == 3) {
			cannotTrade();
		} else if (whatToBuy.value == 4) {
			sellThirdV3();
		} else if (whatToBuy.value == 5) {
			sellFourthV3();
		}
	} else if (whatToSell.value == 4) {
		if (whatToBuy.value == 1) {
			sellFirstV4();
		} else if (whatToBuy.value == 2) {
			sellSecondV4();
		} else if (whatToBuy.value == 3) {
			sellThirdV4();
		} else if (whatToBuy.value == 4) {
			cannotTrade();
		} else if (whatToBuy.value == 5) {
			sellFourthV4();
		}
	} else if (whatToSell.value == 5) {
		if (whatToBuy.value == 1) {
			sellFirstV5();
		} else if (whatToBuy.value == 2) {
			sellSecondV5();
		} else if (whatToBuy.value == 3) {
			sellThirdV5();
		} else if (whatToBuy.value == 4) {
			sellFourthV5();
		} else if (whatToBuy.value == 5) {
			cannotTrade();
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

//closing conformation block
const closeFinal = () => {
	final.style.zIndex = -10;
	shadow.style.zIndex = 5;
};

//confirmation of transaction

const openFinal = () => {
	final.style.zIndex = 20;
	shadow.style.zIndex = 12;
};

//finishing transaction button

const finish = () => {
	final.style.zIndex = -10;
	shadow.style.zIndex = -10;
	inside.style.zIndex = -10;
};

//adding fake wallet and setting all value to none

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

//closing popUp window of fake wallet info

const closeFake = () => {
	walletFake.style.zIndex = -10;
	shadow.style.zIndex = -5;
	let three =
		parseFloat(usdtValue.innerHTML) / Number(stockPriceElemnt.innerHTML);
	btcUsdt.innerHTML = three.toFixed(4);
};

// opening trade window

const openTrade = () => {
	inside.style.zIndex = 10;
	shadow.style.zIndex = 5;
};

//closing trading window

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
