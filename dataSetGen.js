$( document ).ready(function() {
	var compNames = ['3M', 'accenture', 'adobe', 'aflac', 'allstate', 'alyeska pipeline', 'anthem', 'applied materials', 'apt', 'arthur j gallagher & co', 'avnet', 'baptist health south florida', 'BDP international ', 'blue california ', 'BMO financial group', 'bon secours', 'bright star', 'california technologies', 'cambia health solutions ', 'canon', 'capgemini', 'carefirst', 'cbre', 'cementos progreso', 'cleveland clinic', 'colgate-palmolive company', 'covenant health', 'cummins', 'dcc', 'john deere', 'dell', 'dun & bradstreet', 'eastman', 'ecolab', 'edp', 'edwards', 'elbow systems of america', 'lilly', 'fluor', 'general electric', 'genpact', 'granite', 'ghvhs ', 'grupo bimbo', 'hasbro', 'HCA', 'HCSC', 'henry schein', 'hilton', 'iberdrola', 'illy', 'ingredient', 'intel', 'international paper', 'jill', 'johnson controls', 'kao', 'kellogg’s', 'kennametal', 'knights of columbus', 'l’areal', 'leidos', 'lincoln electric', 'linked in', 'manpower group', 'm & s', 'marriott', 'mars incorporated', 'mass mutual', 'master card', 'microsoft', 'milliken', 'national grid', 'natura', 'next era energy', 'ni source', 'noblis', 'nokia ', 'north well health', 'old national bank', 'on semiconductor', 'oshkosh', 'owen corning', 'pacific life', 'parsons', 'paychex', 'pepsico', 'orlen', 'praxair', 'premier', 'principal', 'prudential', 'realogy', 'republic services', 'rockwell automation', 'royal caribbean cruises ltd.', 'RTI internation', 'salesforce', 'Schneider electric', 'schnitzer', 'singtel ', 'sinyi realty', 'starbucks ', 'symantec', 't mobile', 'tata steel', 'te connectivity', 'teachers mutual bank', 'teradata', 'texas instruments', 'AES', 'the hartford', 'the nature conservancy', 'the residor hotel group', 'timken', 'thrivent financial ', 'TIAA', 'tote', 'TSYS', 'US bank', 'university hospitals', 'USAA', 'vanity fair', 'visa ', 'vizient', 'volvo', 'soya financial', 'weyerhaeuser ', 'whirlpool corporation', 'connor sourcing the future', 'wipro', 'wps health solutions', 'wyndham worldwide', 'xerox'];
	var tickerNames = [];
	var data_values = [];

// for (i = 0; i < compNames.length; i++) {
// 	var jsonURL = "https://cors-anywhere.herokuapp.com/http://d.yimg.com/aq/autoc?query=" + compNames[i] + "&region=US&lang=en-US";
// 	$.getJSON( jsonURL, function( response ) {
// 	  $.each( response.ResultSet.Result, function( key, val ) {
// 	    if (val.exchDisp == "NYSE") {
// 	    	tickerNames.push(val.symbol);
// 	    }
// 	  });
// 	});
// }
var tickerNames2 = ["ACN","MMM","AFL","ALL-PB","V","VHS","VVV","VNTR","VNTV","WY","WYY","WHR",
"WIT",

"XRX",

"AJG",

"APTS",

"APTV",

"ATR",

"AVT",

"ANTM",

"ANTX",

"CAJ",

"CL",

"CMI",

"DNB",

"WD",

"DVMT",

"EMN",

"ECL",

"ECR",

"EW",

"EWJ",

"EWW",

"LLY",

"GE",

"DNA",

"GER",

"GNRC",

"GNRT",

"G",

"GDI",

"GLOP",

"GTES",

"FLR",

"HASI",

"HCA",

"HLT",

"HGV",

"JCI",

"DAR",

"IP",

"IPSC",

"IPOA U",

"VXX",

"JILL",

"LDOS",

"KMT",

"MSO",

"GNRT",

"M",

"MMD",

"TUC",

"NGG",

"PXD",

"NOK",

"OSK",

"DPS",

"PX",

"PXD",

"PFGC",

"RLGY",

"PBIPB",

"ROK",

"RSG",

"CRM",

"SNDR",

"TEL",

"TDOC",

"TDC",

"AES",

"TKR"];

// async function waitForTickers() {
// 	console.log('hi');
// 	await resolveAfter2Seconds(tickerNames.length);
// 	console.log(tickerNames.length);
// 	dataVals();
// }

function dataVals() {
for (var name in tickerNames2) {
	var timestep = "DAILY";
	var apikey = "M8QJDBY8PEMN93KA";
	var json2URL = "https://www.alphavantage.co/query?function=TIME_SERIES_" + timestep + "&symbol=" + name + "&apikey=" + apikey;
	$.getJSON(json2URL, function( response ) {
		$.each( response, function( key, val ) {
			data_values.push(val);
		});
	});

}}
// waitForTickers();

// console.log(tickerNames);
dataVals();
console.log(data_values);
});

function resolveAfter2Seconds(x) {
	return new Promise(resolve => {
		setTimeout(() => {
			console.log(5);
			if (x > 10) {
				console.log('pies!!');
				resolve(x);
			}
		}, 5000);
	});
}