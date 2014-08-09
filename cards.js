var deck = [];
var box = [];
var table = [];
var player = [];
var card = [
    //Moderator
	{	character: "Moderator",				value: 0,		color: "Gray",		team: null,			copies: 1,	set: 'Core',		},
    //Villagers
    {	character: "Villager",				value: 1,		color: "Blue",		team: "Village",	copies: 15,	set: 'Core',		},
    {	character: "Apprentice Seer",		value: 4,		color: "Blue",		team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Aura Seer",				value: 3,		color: "Blue",		team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Bodyguard",				value: 3,		color: "Blue",		team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Cupid",					value: -3,		color: "Blue",		team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Diseased",				value: 3,		color: "Blue",		team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Doppelg&#228;nger",		value: -2,		color: "Blue",		team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Drunk",					value: 4,		color: "Blue",		team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Ghost",					value: 2,		color: "Blue",		team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Hunter",				value: 3,		color: "Blue",		team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Lycan",					value: -1,		color: "Blue",		team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Mason",					value: 2,		color: "Blue",		team: "Village",	copies: 3,	set: 'Core',		},
    {	character: "Mayor",					value: 2,		color: "Blue",		team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Old Hag",				value: 1,		color: "Blue",		team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Pacifist",				value: -1,		color: "Blue",		team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Priest",				value: 3,		color: "Blue",		team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Prince",				value: 3,		color: "Blue",		team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Private Investigator",	value: 3,		color: "Blue",		team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Seer",					value: 7,		color: "Blue",		team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Spellcaster",			value: 1,		color: "Blue",		team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Tough Guy",				value: 3,		color: "Blue",		team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Troublemaker",			value: -3,		color: "Blue",		team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Village Idiot",			value: 2,		color: "Blue",		team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Virginia Woolf",		value: -2,		color: "Blue",		team: "Village",	copies: 1,	set: 'Wolf Pack',	},
    {	character: "Witch",					value: 4,		color: "Blue",		team: "Village",	copies: 1,	set: 'Core',		},

    //Werewolves
    {	character: "Werewolf",				value: -6,		color: "Red",		team: "Wolf",		copies: 12,	set: 'Core',		},
    {	character: "Big Bad Wolf",			value: -9,		color: "Red",		team: "Wolf",		copies: 1,	set: 'Wolf Pack',	},
    {	character: "Dire Wolf",				value: -4,		color: "Red",		team: "Wolf",		copies: 1,	set: 'Wolf Pack',	},
    {	character: "Fang Face",				value: -5,		color: "Red",		team: "Wolf",		copies: 1,	set: 'Wolf Pack',	},
    {	character: "Fruit Brute",			value: -3,		color: "Red",		team: "Wolf",		copies: 1,	set: 'Wolf Pack',	},
    {	character: "Lone Wolf",				value: -5,		color: "Red",		team: "Wolf",		copies: 1,	set: 'Core',		},
    {	character: "Minon",					value: -6,		color: "Red",		team: "Wolf",		copies: 1,	set: 'Core',		},
    {	character: "Sorceress",				value: -3,		color: "Red",		team: "Wolf",		copies: 1,	set: 'Core',		},
    {	character: "Wolf Cub",				value: -8,		color: "Red",		team: "Wolf",		copies: 1,	set: 'Core',		},
    {	character: "Wolverine",				value: -4,		color: "Red",		team: "Wolf",		copies: 1,	set: 'Wolf Pack',	},

    //Vampires
    {	character: "Vampire",				value: -7,		color: "Purple",	team: "Vampire",	copies: 8,	set: 'Core',		},
	
    //Special
    {	character: "Cult Leader",			value: 1,		color: "Green",		team: "Cult",		copies: 1,	set: 'Core',		},
    {	character: "Cursed",				value: -3,		color: "Blue/Red",	team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Hoodlum",				value: 0,		color: "Brown",		team: "Village",	copies: 1,	set: 'Core',		},
    {	character: "Tanner",				value: -2,		color: "Tan",		team: "Tanner",		copies: 1,	set: 'Core',		},
];


function BuildDeck(){
    //cycle through all cards and build the deck array
    var cardNum = 0;
    for (i = 0; i < card.length; i++) {
        for (x = 0; x < card[i].copies; x++) {
            var newCard = JSON.parse(JSON.stringify(card[i]));
            deck.push(newCard);
            var y = x+1;
            deck[cardNum].constructor.name = deck[cardNum].copies > 1 ? card[i].character + y : card[i].character;
            cardNum = cardNum + 1;
        }
    }

    //put all cards in the box and give ids
    for (i=0; i < deck.length; i++){
        deck[i].location='box';
        deck[i].id=i;
		box[i]=deck[i];
    }

	//sort the deck alphabetically
    //deck.sort(function(a,b) {return (a.character > b.character) ? 1 : ((b.character > a.character) ? -1 : 0);} );
	

    //print the deck values
    document.getElementById('count').innerHTML = 'Deck Size: ' + deck.length;
}

function BuildScenario(players){
    //find count of normal villiagers and other card
    var normal = players<15 ? Math.round(players/2): Math.min(Math.round(players/4),15);
    var special = players-normal;
    var ratio = Math.round((special/normal)*10)/10;

    //print counts
    document.getElementById('players').innerHTML = 'Players: ' + players;
    document.getElementById('normal').innerHTML = 'Normal: ' + normal;
    document.getElementById('special').innerHTML = 'Special: ' + special + '  (' + ratio + ':1)' ;

    //get must have cards
	DrawModerator();
	DrawSeer();
}

function DrawModerator(){
    DrawCard(Search(deck,"Moderator"));
}

function DrawSeer(){
    var seer = Roll(1,100) < 95 ? 'Seer' : 'other';
    if (seer=='other'){
        seer = Roll(1,2) == 1 ? 'Aura Seer' : 'Apprentice Seer';
    }
    DrawCard(Search(deck,seer));
}

function DrawCard(index){
    deck[index].location='table';
    box.splice(index,1);
    table.splice(index,0,deck[index]);
}

function TrashCard(index){
    deck[index].location='box';
    table.splice(index,1);
    box.splice(index,0,deck[index]);
}

function Roll(min,max){
    return Math.round(Math.random()*(max-min)+min);
}

function Search(list,card){
    for (i=0; i<list.length; i++){
        if (list[i].character == card){
			return i;
        }
    }
}

function ShowDeck(list){
    document.getElementById('list').innerHTML = '';
    for (i=0; i<list.length; i++){
        document.getElementById('list').innerHTML = document.getElementById('list').innerHTML +
            '<li>' + list[i].id + ': ' + list[i].character +	': ' + list[i].location +'</li>';
    }
}

BuildDeck();
BuildScenario(Math.floor(Roll(5,75)));
ShowDeck(table);