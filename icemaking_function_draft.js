function iceBank(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13, num14, num15, num16,
	num17, num18, num19, num20, num21, num22, num23, num24, type1, type2, type3, type4, type5, type6, type7, type8, 
	type9, type10, type11, type12, type13, type14, type15, type16, type17, type18, type19, type20, type21, type22,
	type23, type24){

	function maxOf(a,b) {
	if(a > b) {
		return a; 
	} else {return b;}
	}

	function minOf(a,b) {
	if(a > b) {
		return b; 
	} else {return a;}
	}

	var numArray = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13, num14, num15, num16, num17, num18, num19, num20, num21, num22, num23, num24];
	var typeArray = [type1, type2, type3, type4, type5, type6, type7, type8, type9, type10, type11, type12, type13, type14, type15, type16, type17, type18, type19, type20, type21, type22, type23, type24];
	var partialTons = 0, partialHrs = 0, fullTons = 0, fullHrs = 0, iceTons = 0; iceHrs = 0;

	for (var i = 0; i <= 23; i++) {
		if (typeArray[i] == "partial" && numArray[i] > 0) {
			partialTons += numArray[i]; 
			partialHrs++;
		} else if (typeArray[i] == "icemaking") {
			iceTons += numArray[i]; 
			iceHrs++;	
		} else if (typeArray[i] == "full") {
			fullTons += numArray[i];
			fullHrs++;
		}
	}
	console.log("Number of Partial Storage hours: " + partialHrs);
	console.log("Total Partial Storage tons: " + partialTons);
	console.log("Number of Full Storage hours: " + fullHrs);
	console.log("Total Full Storage tons: " + fullTons);

// Calculate Full Storage Contribution first
	var fullTonsPerHour = fullTons / iceHrs; 
	var fullTonsContribution = fullTonsPerHour / 0.65;
	console.log("Full tons needed to make per hr: " + fullTonsPerHour);
	console.log("Full tons 'contribution' to daytime load: " + fullTonsContribution);

// Calculate key Partial Storage values 
	var maxPartialTons = 0, partialDiversity = 0, effectivePartialHrs = 0;

	for (i=0; i < 24; i++) {
		if (typeArray[i] == "partial" && numArray[i] > maxPartialTons) {
			maxPartialTons = numArray[i];
		}
	}

	partialDiversity = (partialTons/partialHrs) / maxPartialTons;
	effectivePartialHrs = iceHrs * partialDiversity;

	console.log("The highest Partial Storage hour is: " + maxPartialTons);
	console.log("The diversity factor for Partial is: "  + partialDiversity);
	console.log("The effective partial hours are: " + effectivePartialHrs);

// Important "bottom of the spreadsheet" calculations
	var totalPartialTonHrsAfterFullChiller = partialTons - (fullTonsContribution * partialHrs);
	var partialTonsContribution = totalPartialTonHrsAfterFullChiller / (partialHrs + (0.65 * effectivePartialHrs)); 
	var chillerSize = Math.ceil((partialTonsContribution + fullTonsContribution) / 10) * 10;
	console.log("Chiller size is: " + chillerSize);

// Number of IceBanks needed to satisy load
// IBKey is the ton-hours per tank, based on the effective number of ice dispatch hours 
	var IBkey = [0, 42.5, 70, 103, 123.5, 130, 142, 148, 152, 152.5, 152.5, 153, 153];
	var IBhours = Math.round(effectivePartialHrs);
	var tonHrsPerTank = IBkey[IBhours];
	var IBtonHrs = iceHrs * (chillerSize * 0.65);
	var IceBanks = Math.ceil(IBtonHrs / tonHrsPerTank); 

	console.log("Ton hours of ice needed: " + IBtonHrs);
	console.log("Ton hours per tank is: " + tonHrsPerTank);
	console.log("Number of IceBanks: " + IceBanks);

// Define the hourly chiller operations and the ice making and dispatch
	var icemakingTons = [], chillerTons = [], iceDispatchTons = [];
	for (var i=0; i < 24; i++) {
		if (typeArray[i] == "icemaking") {
			icemakingTons.push(chillerSize * 0.65);
		} else { icemakingTons.push(0);}
	}
	for (var i=0; i < 24; i++) {
		if (typeArray[i] == "full") {
			iceDispatchTons.push(numArray[i]);
		} else { iceDispatchTons.push(0);}
	}
	for (var i=0; i < 24; i++) {
		chillerTons[i] = 0;
		if (typeArray[i] == "partial") {
			chillerTons[i] = minOf(chillerSize, numArray[i]);
			iceDispatchTons[i] = maxOf((numArray[i] - chillerSize), 0); 
		} 
	}

	console.log("Ice-making schedule: " + icemakingTons);
	console.log("Chiller schedule: " + chillerTons);
	console.log("Ice Dispatch schedule: " + iceDispatchTons);

// Create the Stacked Bar Chart Array
	var stackedBar = [];
	for (var i=0; i < 24; i++) {
		stackedBar[i] = ["HE" + (i+1), icemakingTons[i], chillerTons[i], iceDispatchTons[i]]
	}
	console.log(stackedBar); 
	// return stackedBar;
}

// D3 Bar Graph - I have yet to figure out the D3 stuff, it's next on my list
var data = iceBank(0, 0, 0, 0, 0, 0, 200, 300, 400, 500, 800, 1000, 1000, 1000, 1000, 1000, 
	900, 800, 600, 600, 600, 0, 0, 0, "icemaking", "icemaking", "icemaking", "icemaking", 
	"icemaking", "icemaking", "full", "full", "partial", "partial", "partial", "partial", 
	"partial", "partial", "partial", "partial", "partial", "partial", "partial", "partial", 
	"partial", "icemaking", "icemaking", "icemaking");



	d3.select("div").text("Working on D3 here..."); 
	console.log(d3);

// (0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 75, 100, 100, 100, 100, 100, 75, 75, 50, 0, 0, 0, 0, 0, "icemaking", "icemaking", "icemaking", "icemaking", "icemaking", "icemaking", "icemaking", "icemaking", "no action", "full", "partial", "partial", "partial", "partial", "partial", "partial", "partial", "partial", "no action", "no action", "no action", "no action", "icemaking", "icemaking")






