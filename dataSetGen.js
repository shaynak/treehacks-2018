$( document ).ready(function() {
	var compNames = ['3M', 'accenture', 'aflac', 'alyeska pipeline', 'anthem', 
	'applied materials', 'apt', 'arthur j gallagher & co', 'avnet', 'baptist health south florida', 
	'BDP international ', 'blue california ', 'BMO financial group', 'bon secours', 'bright star', 
	'california technologies', 'cambia health solutions ', 'canon', 'capgemini', 'carefirst', 'cbre', 
	'cementos progreso', 'cleveland clinic', 'colgate-palmolive company', 'covenant health', 'cummins', 
	'dcc', 'john deere', 'dell', 'dun & bradstreet', 'eastman', 'ecolab', 'edp', 'edwards', 'elbow systems of america', 
	'lilly', 'fluor', 'general electric', 'genpact', 'granite', 'ghvhs ', 'grupo bimbo', 'hasbro', 'HCA', 
	'HCSC', 'henry schein', 'hilton', 'iberdrola', 'illy', 'ingredient', 'intel', 'international paper', 
	'jill', 'johnson controls', 'kao', 'kellogg’s', 'kennametal', 'knights of columbus', 'l’areal', 'leidos', 
	'lincoln electric', 'linked in', 'manpower group', 'm & s', 'marriott', 'mars incorporated', 'mass mutual', 
	'master card', 'microsoft', 'milliken', 'national grid', 'natura', 'next era energy', 'ni source', 'noblis', 
	'nokia ', 'north well health', 'old national bank', 'on semiconductor', 'oshkosh', 'owen corning', 
	'pacific life', 'parsons', 'paychex', 'pepsico', 'orlen', 'praxair', 'premier', 'principal', 'prudential', 
	'realogy', 'republic services', 'rockwell automation', 'royal caribbean cruises ltd.', 'RTI internation', 
	'salesforce', 'Schneider electric', 'schnitzer', 'singtel ', 'sinyi realty', 'starbucks ', 'symantec', 
	't mobile', 'tata steel', 'te connectivity', 'teachers mutual bank', 'teradata', 'texas instruments', 
	'AES', 'the hartford', 'the nature conservancy', 'the residor hotel group', 'timken', 'thrivent financial ', 
	'TIAA', 'tote', 'TSYS', 'US bank', 'university hospitals', 'USAA', 'vanity fair', 'visa ', 'vizient', 'volvo', 
	'soya financial', 'weyerhaeuser ', 'whirlpool corporation', 'connor sourcing the future', 'wipro', 
	'wps health solutions', 'wyndham worldwide', 'xerox'];
	var tickerNames = [];
	var data_values = [];

	var tickerNames2 = ["MMM","ACN","AFL","V","VHS","VVV","VNTR","VNTV","WY","WYY","WHR",
	"WIT","XRX","AJG","APTS","APTV","ATR","AVT","ANTM","ANTX","CAJ","CL","CMI","DNB","WD","DVMT",
	"EMN","ECL","ECR","EW","EWJ","EWW","LLY","GE","DNA","GER","GNRC","GNRT","G","GDI","GLOP",
	"GTES","FLR","HASI","HCA","HLT","HGV","JCI","DAR","IP","IPSC","IPOA U","VXX","JILL","LDOS",
	"KMT","MSO","GNRT","M","MMD","TUC","NGG","PXD","NOK","OSK","DPS","PX","PXD","PFGC","RLGY",
	"PBIPB","ROK","RSG","CRM","SNDR","TEL","TDOC","TDC","AES","TKR"];

	    var dict = new Object();

    function dataVals() {
        // Beautiful kludge pt. I
        var count = tickerNames2.length;

        for (i = 0; i < tickerNames2.length; i++) {
            var timestep = "Daily";
            var apikey = "EQ806SLRGC5UC9DF";
            var accessString = "Time Series (" + timestep + ")";
            var json2URL = "https://www.alphavantage.co/query?function=TIME_SERIES_" + timestep + "&symbol=" + tickerNames2[i] + "&outputsize=compact&datatype=json&apikey=" + apikey;
            $.getJSON(json2URL, function(response) {
                var vals = [];
                var name = response["Meta Data"]["2. Symbol"];
                $.each(response["Time Series (Daily)"], function(key, val) {
                    vals.push(val);
                });
                dict[name] = vals;
                // Beautiful kludge pt. II
                if (--count === 0) {
                    accumulationFinished();
                }
            });
        }
    }

    function accumulationFinished() {
        console.log("2");
        console.log(dict);
    }

    dataVals();
    console.log("1");
    console.log(dict);
});