$(document).ready(function() {
	"use strict";
	var tickerNames2 = ["MMM","ACN","AFL","V","VHS","VVV","VNTR","VNTV","WY","WYY","WHR",
	"WIT","XRX","AJG","APTS","ATR","AVT","ANTM","ANTX","CAJ","CL","CMI","DNB","WD","DVMT",
	"EMN","ECL","ECR","EW","EWJ","EWW","LLY","GE","GER","GNRC","GNRT","G","GDI","GLOP",
	"GTES","FLR","HASI","HCA","HLT","HGV","JCI","DAR","IP","IPSC","VXX","JILL","LDOS",
	"KMT","MSO","GNRT","M","MMD","TUC","NGG","PXD","NOK","OSK","DPS","PX","PXD","PFGC","RLGY",
	"PBIPB","RSG","CRM","SNDR","TEL","TDOC","TDC","AES"];

	$("#stockSearch").keyup(function() {
		var input = this.value.toUpperCase();
		$("#searchTable").html("");
		for (var i = 0; i < tickerNames2.length; i++) {
			var ticker = tickerNames2[i];
			if (ticker.indexOf(input) > -1) {
				$("#searchTable").append('<li><a href = "javascript:clicked(\'' + ticker + '\')">' + ticker + '</a></li>');
			} 
		}
	});
});