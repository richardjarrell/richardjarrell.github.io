var deck = []
var cards = [
	
	//Moderator
	{	name: "Moderator",				value: 0,		color: "Gray",		team: null,			quantity: 1,	},
	
	//Villagers
	{	name: "Villager",				value: 1,		color: "Blue",		team: "Village",	quantity: 15,	},
	{	name: "Apprentice Seer",		value: 4,		color: "Blue",		team: "Village",	quantity: 1,	},
	{	name: "Aura Seer",				value: 3,		color: "Blue",		team: "Village",	quantity: 1,	},
	{	name: "Bodyguard",				value: 3,		color: "Blue",		team: "Village",	quantity: 1,	},
	{	name: "Cupid",					value: -3,		color: "Blue",		team: "Village",	quantity: 1,	},
	{	name: "Diseased",				value: 3,		color: "Blue",		team: "Village",	quantity: 1,	},
	{	name: "Doppelgänger",			value: -2,		color: "Blue",		team: "Village",	quantity: 1,	},
	{	name: "Drunk",					value: 4,		color: "Blue",		team: "Village",	quantity: 1,	},
	{	name: "Ghost",					value: 2,		color: "Blue",		team: "Village",	quantity: 1,	},
	{	name: "Hunter",					value: 3,		color: "Blue",		team: "Village",	quantity: 1,	},
	{	name: "Lycan",					value: -1,		color: "Blue",		team: "Village",	quantity: 1,	},
	{	name: "Mason",					value: 2,		color: "Blue",		team: "Village",	quantity: 3,	},
	{	name: "Mayor",					value: 2,		color: "Blue",		team: "Village",	quantity: 1,	},
	{	name: "Old Hag",				value: 1,		color: "Blue",		team: "Village",	quantity: 1,	},
	{	name: "Pacifist",				value: -1,		color: "Blue",		team: "Village",	quantity: 1,	},
	{	name: "Priest",					value: 3,		color: "Blue",		team: "Village",	quantity: 1,	},
	{	name: "Prince",					value: 3,		color: "Blue",		team: "Village",	quantity: 1,	},
	{	name: "Private Investigator",	value: 3,		color: "Blue",		team: "Village",	quantity: 1,	},
	{	name: "Seer",					value: 7,		color: "Blue",		team: "Village",	quantity: 1,	},
	{	name: "Spellcaster",			value: 1,		color: "Blue",		team: "Village",	quantity: 1,	},
	{	name: "Tough Guy",				value: 3,		color: "Blue",		team: "Village",	quantity: 1,	},
	{	name: "Troublemaker",			value: -3,		color: "Blue",		team: "Village",	quantity: 1,	},
	{	name: "Village Idiot",			value: 2,		color: "Blue",		team: "Village",	quantity: 1,	},
	{	name: "Virginia Woolf",			value: -2,		color: "Blue",		team: "Village",	quantity: 1,	},
	{	name: "Witch",					value: 4,		color: "Blue",		team: "Village",	quantity: 1,	},
	
	//Special
	{	name: "Cult Leader",			value: 1,		color: "Green",		team: "Cult",		quantity: 1,	},
	{	name: "Cursed",					value: -3,		color: "Blue/Red",	team: "Village",	quantity: 1,	},
	{	name: "Hoodlum",				value: 0,		color: "Red",		team: "Village",	quantity: 1,	},
	{	name: "Tanner",					value: -2,		color: "Brown",		team: "Tanner",		quantity: 1,	},

	//Werewolves
	{	name: "Werewolf",				value: -6,		color: "Red",		team: "Wolf",		quantity: 12,	},
	{	name: "Big Bad Wolf",			value: -9,		color: "Red",		team: "Wolf",		quantity: 1,	},
	{	name: "Dire Wolf",				value: -4,		color: "Red",		team: "Wolf",		quantity: 1,	},
	{	name: "Fang Face",				value: -5,		color: "Red",		team: "Wolf",		quantity: 1,	},
	{	name: "Fruit Brute",			value: -3,		color: "Red",		team: "Wolf",		quantity: 1,	},
	{	name: "Lone Wolf",				value: -5,		color: "Red",		team: "Wolf",		quantity: 1,	},
	{	name: "Minon",					value: -6,		color: "Red",		team: "Wolf",		quantity: 1,	},
	{	name: "Sorceress",				value: -3,		color: "Red",		team: "Wolf",		quantity: 1,	},
	{	name: "Wolf Cub",				value: -8,		color: "Red",		team: "Wolf",		quantity: 1,	},
	{	name: "Wolverine",				value: -4,		color: "Red",		team: "Wolf",		quantity: 1,	},

	//Vampires
	{	name: "Vampire",				value: -7,		color: "Purple",	team: "Vampire",	quantity: 8,	},
]


function BuildDeck(){
	var cardCount = 0
	for (i=0; i<cards.length; i++){
		cardCount = cardCount + cards[i].quantity;
		for (x=0; x<cards[i].quantity; x++){
			deck.push(cards[i]);
		}
	}
	
	deck.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} );
	
	
	document.getElementById('count').innerHTML = 'Deck Size: ' + deck.length;
}

function ShowDeck(){
	document.getElementById('list').innerHTML = '';
	for (i=0; i<deck.length; i++){
		document.getElementById('list').innerHTML = document.getElementById('list').innerHTML + '<li>' + deck[i].name + ': ' + deck[i].value + '</li>';
	}
}

BuildDeck()
ShowDeck()