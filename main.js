var Game = {};

Game.cities = {
	"Killville":{
		name:"Killville",
		houses : {
			"house1": {
				key:"house1", 
				name:"John Hawthorne", 
				age:23, 
				occupation:"Baker", 
				image:"red_house.png", 
				intelligence:70, 
				security:10
			},
			"house2": {
				key:"house2", 
				name:"Amanda Singer", 
				age:53, 
				occupation:"Engineer", 
				image:"green_house.png", 
				intelligence:70, 
				security:20
			},
			"house3": {
				key:"house3", 
				name:"Jesse Blotchley", 
				age:24, 
				occupation:"Dancer", 
				image:"white_house.png", 
				intelligence:70, 
				security:50
			}
		},
		message:"Killville citizens are nice and fat and keep you fed for a long time. Learn to hide and wait them out. If all else fails, use the full moon to your advantage",
		winmessage:"You ate everyone in Killville. Time to move on to Spyton.",
		houseamount:3,
		startfeed: 6,
		startmoon: 3,
		turned:0,
		feedfor: 6,
		mooncyclelength: 7,
		hide:true,
		eat:true,
		unlock: "Spyton"
	},
	"Spyton": {
		name:"Spyton",
		houses : {
			"house1": {
				key:"house1", 
				name:"Gerome Markoff", 
				age:34, 
				occupation:"Mechanic", 
				image:"red_house2.png", 
				intelligence:10, 
				security:50
			},
			"house2": {
				key:"house2", 
				name:"Sarah Barlov", 
				age:46, 
				occupation:"Gardener", 
				image:"blue_house.png", 
				intelligence:0, 
				security:50
			},
			"house3": {
				key:"house3", 
				name:"Catherine Blake", 
				age:54, 
				occupation:"Manager", 
				image:"green_house.png", 
				intelligence:50, 
				security:50
			},
			"house4": {
				key:"house4", 
				name:"Mark Heinz", 
				age:34, 
				occupation:"Teacher", 
				image:"blue_house2.png", 
				intelligence:35, 
				security:50
			}
		},
		message:'In Spyton you cannot hide and wait for suspicions to lower. You must actively study your prey. Plan well and do not starve.',
		winmessage: 'You have once again eaten everyone. Maybe Castle Rock will offer a bigger challenge?',
		houseamount:4,
		startfeed: 4,
		startmoon: 3,
		turned:0,
		feedfor: 4,
		mooncyclelength: 7,
		prowl:true,
		eat:true,
		unlock: "Castle Rock"
	},
	"Castle Rock": {
		name:"Castle Rock",
		houses : {
			"house1": {
				key:"house1", 
				name:"Jane Springer", 
				age:19, 
				occupation:"Sentry", 
				image:"tower.png", 
				intelligence:50, 
				security:50,
				friends: ["house2", "house3", "house4"]
			},
			"house2": {
				key:"house2", 
				name:"Carl Jameson", 
				age:21, 
				occupation:"Lookout", 
				image:"tower2.png", 
				intelligence:50, 
				security:50,
				friends: ["house1", "house3", "house4"]
			},
			"house3": {
				key:"house3", 
				name:"Mary Parker", 
				age:28, 
				occupation:"Guard", 
				image:"gate.png", 
				intelligence:50, 
				security:50,
				friends: ["house1", "house2", "house4"]
			},
			"house4": {
				key:"house4", 
				name:"William Burns", 
				age:37, 
				occupation:"Captain", 
				image:"guardhouse.png", 
				intelligence:50, 
				security:100,
				friends: ["house1", "house2", "house3"]
			}
		},
		message: "The guards of Castle rock are very close to each other. Turn them all within 3 moons.",
		winmessage: "The guard force are all turned now but here comes the General!",
		houseamount:4,
		startfeed: 17,
		startmoon: 3,
		turned:0,
		feedfor: 20,
		mooncyclelength: 6,
		timelimit: 17,
		prowl:true,
		bite:true,
		hide:true,
		hunt:true,
		unlock: "General"
	},
	"General": {
		name:"General",
		houses : {
			"house1": {
				key:"house1", 
				name:"General Derringer", 
				age:49, 
				occupation:"General", 
				image:"armour.png", 
				intelligence:50, 
				security:1000,
				friends: ["house1"]
			}
		},
		message: "The general is after you. There is nothing to do but hope for a miracle.",
		winmessage: "We need to flee to somewhere remote.",
		houseamount: 1,
		startfeed: 10,
		startmoon: 2,
		turned: 0,
		feedfor: 10,
		mooncyclelength: 3,
		prowl:true,
		bite:true,
		hide:true,
		eat:true,
		hunt:true,
		unlock: "Bergen"
	},
	"Bergen": {
		name:"Bergen",
		houses : {
			"house1": {
				key:"house1", 
				name:"Maria Lyngen", 
				age:24, 
				occupation:"Student", 
				image:"yellow_house.png", 
				intelligence:10, 
				security:0,
				friends: ["house6"]
			},
			"house2": {
				key:"house2", 
				name:"Geir Olsen", 
				age:35, 
				occupation:"Businessman", 
				image:"brown_house.png", 
				intelligence:0, 
				security:70,
				friends: ["house6"]
			},
			"house3": {
				key:"house3", 
				name:"Janne Heia", 
				age:21, 
				occupation:"Guide", 
				image:"guardhouse.png", 
				intelligence:50, 
				security:50,
				friends: ["house6"]
			},
			"house4": {
				key:"house4", 
				name:"Knut Mortensen", 
				age:25, 
				occupation:"Bus driver", 
				image:"white_house.png", 
				intelligence:35, 
				security:10,
				friends: ["house6"]
			},
			"house5": {
				key:"house5", 
				name:"Elin Eriksen", 
				age:33, 
				occupation:"Shop clerk", 
				image:"red_house.png", 
				intelligence:10, 
				security:0,
				friends: ["house6"]
			},
			"house6": {
				key:"house6", 
				name:"Morten Aas", 
				age:46, 
				occupation:"Friendly Police", 
				image:"blue_house.png", 
				intelligence:0, 
				security:100,
				friends:["house1", "house2", "house3", "house4", "house5", "house7", "house8"]
			},
			"house7": {
				key:"house7", 
				name:"Sigrid Stordal", 
				age:74, 
				occupation:"Retired", 
				image:"blue_house2.png", 
				intelligence:20, 
				security:50,
				friends: ["house6"]
			},
			"house8": {
				key:"house8", 
				name:"Erik Ruud", 
				age:37, 
				occupation:"Politician", 
				image:"red_house2.png", 
				intelligence:35, 
				security:90,
				friends: ["house6"]
			}
		},
		message: "Go nuts and use everyhting you have learned",
		winmessage: "This was easy. Let's go to Hell's Kitchen.",
		houseamount:8,
		startfeed: 4,
		startmoon: 3,
		turned:0,
		feedfor: 4,
		mooncyclelength: 7,
		prowl:true,
		bite:true,
		hide:true,
		eat:true,
		unlock: "Hells Kitchen"
	},
	"Hells Kitchen": {
		name:"Hells Kitchen",
		houses : {
			"house1": {
				key:"house1", 
				name:"Matt Murdock", 
				age:34, 
				occupation:"Lawyer", 
				image:"red_house.png", 
				intelligence:30, 
				security:70,
				friends: ["house2", "house3"]
			},
			"house2": {
				key:"house2", 
				name:"Natasha Romanova", 
				age:31, 
				occupation:"Spy", 
				image:"white_house.png", 
				intelligence:20, 
				security:70,
				friends: ["house1", "house4", "house5"]
			},
			"house3": {
				key:"house3", 
				name:"Elektra Natchios", 
				age:28, 
				occupation:"Assassin", 
				image:"red_house2.png", 
				intelligence:0, 
				security:70,
				friends: ["house1"]
			},
			"house4": {
				key:"house4", 
				name:"Steve Rogers", 
				age:97, 
				occupation:"Captain", 
				image:"blue_house.png", 
				intelligence:15, 
				security:60,
				friends: ["house2", "house5"]
			},
			"house5": {
				key:"house5", 
				name:"Clint Barton", 
				age:24, 
				occupation:"Head of Security", 
				image:"green_house.png", 
				intelligence:10, 
				security:100,
				friends: ["house2", "house4"]
			}
		},
		message: "This is the final challenge. There is some randomness so you will probably have to try many times.",
		winmessage: "Thanks for playing!",
		houseamount:5,
		startfeed: 4,
		startmoon: 5,
		turned:0,
		feedfor: 5,
		mooncyclelength: 7,
		prowl:true,
		bite:true,
		hide:true,
		eat:true,
	}
};

Game.context = {
	unlocked : ["Killville"]
	//unlocked : ["Hells Kitchen"]
};

Game.turnHelp = [];

Game.renderTo = function(template_id, output){
	//console.log(template_id);
	if(!Templates[template_id]){
		var template = makeTemplate(template_id);
		if(!template)
			console.log("Could not compile template " + template_id);
		else
			Templates[template_id] = template;
	}
	var rendered = Templates[template_id](Game.context);
	if(output)
		output.html(rendered);
	return rendered;
};

Game.start = function(cityname){
	var citydata = JSON.parse(JSON.stringify(Game.cities[cityname]));
	Game.context.currentcity = citydata;
	Game.context.currentcity.bitten = [];
	Game.context.currentcity.hunters = [];
	Game.context.currentcity.timeleft = Game.context.currentcity.timelimit;
	Game.turnHelp = [];
	Game.context.currenthousekey = undefined;
	Game.context.selectedhouse = undefined;
	Game.context.currentcity.days = 0;
	Game.context.currentcity.feed = citydata.startfeed;
	Game.context.currentcity.mooncycle = citydata.startmoon;
	Game.renderAll();
	Game.cityHelp();
};

Game.cityHelp = function(){
	console.log("displaying moon help");
	var $modal = $("#helpModal");
	Game.renderTo("#cityHelpModal", $("#helpModalInsert"));
	$modal.modal();
};

Game.about = function(){
	console.log("displaying about");
	var $modal = $("#helpModal");
	Game.renderTo("#aboutModal", $("#helpModalInsert"));
	$modal.modal();
};

Game.moonHelp = function(){
	console.log("displaying moon help");
	var $modal = $("#helpModal");
	Game.renderTo("#moonHelpModal", $("#helpModalInsert"));
	$modal.modal();
};

Game.starveHelp = function(){
	console.log("displaying starve help");
	var $modal = $("#helpModal");
	Game.renderTo("#starveHelpModal", $("#helpModalInsert"));
	$modal.modal();
};

Game.selectHouse = function(house_key){
	var oldkey = Game.context.currenthousekey;
	Game.context.currenthousekey = house_key;
	if(oldkey){
		Game.context.currentcity.houses[oldkey].selected = false;
	}
	if(house_key){
		Game.context.currentcity.houses[house_key].selected = true;
		Game.context.selectedhouse = Game.context.currentcity.houses[house_key];
		Game.calculateChances(house_key);
		if(Game.context.selectedhouse.friends)
			Game.context.selectedhouse.friendobjs = Game.context.selectedhouse.friends.map(function(houseKey){
				return Game.context.currentcity.houses[houseKey];
			});
	}else{
		Game.context.selectedhouse = undefined;
	}
	Game.renderAll();
};

Game.actionModal = function(id){
	var $modal = $("#actionModal");
	Game.renderTo(id, $modal, true);
	$modal.modal();
}

Game.calculateChances = function(house){
	//console.log("calculate chances for " + house);
	var difference = 
		Game.context.currentcity.houses[house].intelligence -
		Game.context.currentcity.houses[house].security ; 
	if(difference < 0){
		Game.context.currentcity.houses[house].bitechance = 0;
		Game.context.currentcity.houses[house].feedchance = 0;
	}else{
		var normalized = difference / 100; //could still be over 100...
		var skewed = normalized * normalized;

		//console.log("skewed  " + skewed);

		var bite = Math.floor(
			90 * skewed + 15
		);
		if(bite > 100) bite = 100;
		Game.context.currentcity.houses[house].bitechance = bite;

		var feed = Math.floor(
			75 * skewed + 25
		);
		if(feed > 100) feed = 100;
		Game.context.currentcity.houses[house].feedchance = feed;
	}
};

Game.gainIntelligence = function(house, amount){
	Game.context.currentcity.houses[house].intelligence += amount;
	if(Game.context.currentcity.houses[house].intelligence < 0) Game.context.currentcity.houses[house].intelligence = 0;
	Game.calculateChances(house);
	if(house == Game.context.currenthousekey){
		Game.context.selectedhouse = Game.context.currentcity.houses[house];
	}
};

Game.gainSecurity = function(house, amount){
	Game.context.currentcity.houses[house].security += amount;
	if(Game.context.currentcity.houses[house].security < 0) Game.context.currentcity.houses[house].security = 0; 
	Game.calculateChances(house);
	if(house == Game.context.currenthousekey){
		Game.context.selectedhouse = Game.context.currentcity.houses[house];
	}
};

Game.bite = function(){
	var house = Game.context.selectedhouse;
	//calculate stuff
	var roll = Math.floor(Math.random() * 100);
	Game.context.modal = {};
	Game.context.modal.success = house.bitechance > roll;
	if(Game.context.modal.success)
		Game.biteSuccess(Game.context.currenthousekey);
	else
		Game.biteFail();
	Game.actionModal("#biteModal");
};

Game.biteSuccess = function(key){
	console.log("bite success " + key);
	if(Game.context.currenthousekey == key)
		Game.context.selectedhouse.bitten = true;
	Game.context.currentcity.houses[key].bitten = true;
	if($.inArray(key, Game.context.currentcity.bitten) != -1)
		console.log("Bitten already had " + key);
	else
		Game.context.currentcity.bitten.push(key);
	console.log("bitten is now " + Game.context.currentcity.bitten);
	console.log(Game.context.currentcity.bitten);
};

Game.biteFail = function(){
	console.log("bite fail");
	Game.context.modal.securitygain = Math.floor(Math.random() * 15) + 20;
	var key = Game.context.currenthousekey;
	Game.gainSecurity(key, Game.context.modal.securitygain);
	var friends = Game.context.selectedhouse.friends;
	console.log("adding security on all friends... " + friends);
	if(friends)
		friends.forEach(function(friend){
			Game.gainSecurity(friend, Game.context.modal.securitygain / 2);
		});
};

Game.prowl = function(){
	//all prowls are successful
	Game.context.modal = {};
	Game.context.modal.intelligencegain =  Math.floor(Math.random() * 25) + 10;
	//Game.context.selectedhouse.intelligence += Game.context.modal.intelligencegain;

	var key = Game.context.currenthousekey;
	Game.gainIntelligence(key, Game.context.modal.intelligencegain);
	//Game.context.currentcity.houses[key].intelligence = Game.context.selectedhouse.intelligence;

	Game.actionModal("#prowlModal");
};

Game.hide = function(){
	Game.context.modal = {};
	Game.context.modal.securitygain =  Math.floor(Math.random() * 20) + 10;
	
	for(key in Game.context.currentcity.houses){
		Game.gainSecurity(key, -Game.context.modal.securitygain);
	}
	Game.actionModal("#hideModal");
};

Game.feed = function(){
	var house = Game.context.selectedhouse;
	//calculate stuff
	var roll = Math.floor(Math.random() * 100);
	Game.context.modal = {};
	Game.context.modal.success = Game.context.currentcity.fullmoon || house.feedchance > roll;
	if(Game.context.modal.success)
		Game.feedSuccess();
	else
		Game.feedFail();
	Game.actionModal("#feedModal");
};

Game.feedSuccess = function(){
	console.log("feed success");
	Game.context.selectedhouse.cleared = "eaten";
	Game.context.selectedhouse.eaten = true;
	Game.context.currentcity.feed = Game.context.currentcity.feedfor;
	var key = Game.context.currenthousekey;
	Game.context.currentcity.houses[key].cleared = "eaten";
	Game.context.currentcity.houses[key].eaten = true;
};

Game.feedFail = function(){
	console.log("feed fail");
	Game.context.modal.securitygain = Math.floor(Math.random() * 25) + 20;
	//Game.context.selectedhouse.security += Game.context.modal.securitygain;
	var key = Game.context.currenthousekey;
	Game.gainSecurity(key, Game.context.modal.securitygain);
	//Game.context.currentcity.houses[key].security = Game.context.selectedhouse.security;
	var friends = Game.context.selectedhouse.friends;
	console.log("adding security on all friends... " + friends);
	if(friends)
		friends.forEach(function(friend){
			Game.gainSecurity(friend, Game.context.modal.securitygain / 2);
		});
};

Game.turn = function(house_key){
	var house = Game.context.currentcity.houses[house_key];
	if(house.eaten) return;
	console.log("turning " + house.name);
	if(!Game.context.modal.bitten)
		Game.context.modal.bitten = [];
	var amount = Math.floor(Math.random() * 20) + 10;
	Game.context.modal.bitten.push({name:house.name, amount:amount});
	house.cleared = "turned";
	house.bitten = false;
	var friends = house.friends;
	Game.context.currentcity.turned += 1;
	console.log("adding intelligence on all friends... " + friends);
	if(friends)
		friends.forEach(function(friend){
			Game.gainIntelligence(friend, amount);
		});
};

Game.hunt = function(){
	console.log("calculating hunt for " + Game.context.currentcity.hunters);
	var hunterActions = [];
	Game.context.modal = {};
	var fullmoon = Game.context.currentcity.fullmoon;
	Game.context.currentcity.hunters.forEach(function(hunter){
		var name = Game.context.currentcity.houses[hunter].name;
		if(Game.context.currentcity.houses[hunter].cleared) return; //if they are dead, they do not hunt.
		if(!fullmoon){
			var roll = Math.floor(Math.random() * 20) + 1;
			console.log("roll: " + roll);
			if(roll < 5){
				//hunter got bitten
				Game.biteSuccess(hunter);
				hunterActions.push({name: name, roll:roll, found:true, bitten:true});
			}else if(roll > 10){
				//you got shot
				hunterActions.push({name: name, roll:roll, found:true});
				Game.context.killed = true;
			}else{
				//you managed to hide
				if(Game.context.currentcity.hide)
					roll = Math.floor(Math.random() * 25) + 15;
				hunterActions.push({name: name, roll:roll, found:false});
				Game.gainSecurity(hunter, -roll);
			}
		}else{
			var roll = Math.floor(Math.random() * 10) + 1;
			if(roll < 5){
				//hunter got bitten
				Game.biteSuccess(hunter);
				hunterActions.push({name: name, roll:roll, found:true, bitten:true});
				Game.context.killed = true;
			}else if(roll == 10){
				//you got shot
				hunterActions.push({name: name, roll:roll, found:true});
			}else{
				//there was a struggle
				hunterActions.push({name: name, roll:roll, found:false});
			}
		}
	});
	Game.context.modal.hunters = hunterActions;
	Game.context.currentcity.hunters = [];
	if(hunterActions.length > 0){
		Game.actionModal("#huntModal");
	}
};

Game.advanceTime = function(){
	console.log("advancing time...");
	if(Game.context.killed){
		Game.killed();
		return;
	}
	Game.context.currentcity.days += 1;
	Game.context.currentcity.timeleft -= 1;
	Game.context.currentcity.feed -= 1;
	//check for loss
	if(Game.context.currentcity.feed < 0){
		Game.starved();
		return;
	}
	Game.context.currentcity.starve = Game.context.currentcity.feed == 0;
	if(Game.context.currentcity.starve)
		Game.turnHelp.push("#starveHelpModal");
	Game.context.currentcity.mooncycle -= 1;
	Game.context.currentcity.fullmoon = Game.context.currentcity.mooncycle == 0;
	if(Game.context.currentcity.fullmoon){
		Game.turnHelp.push("#moonHelpModal");
		if(Game.context.currentcity.bitten && Game.context.currentcity.bitten.length > 0){
			console.log(Game.context.currentcity.bitten + " are turning!");
			Game.turnHelp.push("#bittenHelpModal");
		}else{
			console.log("Game.bitten was empty");
		}
		Game.context.currentcity.bitten.forEach(Game.turn);
		Game.context.currentcity.bitten = [];
	}
	
	if(Game.context.currentcity.mooncycle < 0)
		Game.context.currentcity.mooncycle = Game.context.currentcity.mooncyclelength;

	//check for victory
	var done = true;
	for (var key in Game.context.currentcity.houses) {
	   	var house = Game.context.currentcity.houses[key];
	   	if(!house.cleared)
			done = false;
		if(house.security > 100 && !house.cleared && $.inArray(key, Game.context.currentcity.hunters) == -1){
			console.log("Added a hunter!");
			Game.context.currentcity.hunters.push(key);
		}
	}
	
	Game.renderAll();
	if(Game.turnHelp && Game.turnHelp.length > 0){
 		console.log("displaying turn help " + Game.turnHelp);
		var $modal = $("#helpModal");
		var $insert = $("#helpModalInsert");
		$insert.empty();
		Game.turnHelp.forEach(function(modalName){
			var html = Game.renderTo(modalName);
			$insert.append(html);
		});
		
		$modal.modal();
	}else{
		Game.hunt();
	}
	if(Game.context.currentcity.fullmoon){
		$(".modal-content").css("background-image", "url(img/moon.jpg)");
	}else{
		$(".modal-content").css("background-image", "");
	}
	Game.turnHelp = [];
	if(done){
		console.log("everyone in this city have been tagged!");
		Game.win();
		//return;
	}
};

Game.starved = function(){
	console.log("starved");
	var $modal = $("#gameOverModal");
	Game.renderTo("#lose", $modal);
	$modal.modal();
};

Game.killed = function(){
	console.log("killed");
	var $modal = $("#gameOverModal");
	Game.renderTo("#lose", $modal);
	Game.context.killed = undefined;
	$modal.modal();
};

Game.win = function(){
	console.log("won");
	var $modal = $("#gameOverModal");
	Game.renderTo("#win", $modal);
	var unlocked = Game.context.currentcity.unlock;
	console.log("unlocked " + unlocked);
	if(unlocked && $.inArray(unlocked, Game.context.unlocked) == -1)
		Game.context.unlocked.push(unlocked);
	console.log(Game.context.unlocked);
	$modal.modal();
};

Game.menu = function(){
	$("#infobar").empty();
	Game.renderTo("#mainMenu", $("#renderTo"));
};

Game.renderAll = function(){
	var $city = $("div.city");
	//console.log($city);
	var scrollposition = $city.scrollLeft();
	//console.log("scroll position was: " + scrollposition);
	Game.renderTo("#game", $("#renderTo"));
	Game.renderTo("#cityInfo", $("#infobar"));
	var $cityAfterRender = $("div.city");
	$cityAfterRender.scrollLeft(scrollposition);
	//console.log("scrollposition is now " + $cityAfterRender.scrollLeft());
};

$('#infoModal').on('hidden.bs.modal', function () {
    Game.hunt();
});
$('#actionModal').on('hidden.bs.modal', function () {
    Game.advanceTime();
});
$('#gameOverModal').on('hidden.bs.modal', function () {
    Game.menu();
});

Game.menu();