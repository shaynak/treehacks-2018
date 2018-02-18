$(document).ready(function() {
	"use strict";
	var tickerNames2 = ["MMM","ACN","AFL","V","VVV","VNTR","VNTV","WY","WYY","WHR",
	"WIT","XRX","AJG","APTS","ATR","AVT","ANTM","ANTX","CAJ","CL","CMI","DNB","WD","DVMT",
	"EMN","ECL","ECR","GNRT","G","GDI","GLOP",
	"GTES","FLR","HASI","HCA","HLT","HGV","JCI","DAR","IP","VXX","JILL","LDOS",
	"KMT","GNRT","M","MMD","NGG","PXD","NOK","OSK","DPS","PX","PXD","PFGC","RLGY"];

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