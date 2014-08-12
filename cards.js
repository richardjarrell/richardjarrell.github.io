//settings
var players = 20;
var useCore = true;
var useWolf = true;
var useVampire = false;
//decks
var characterDeck = [];
var artifactDeck = [];
//lists
var collection = [];
var box = [];
var table = [];
var player = [];
//globals
var normal, normal;
var special, special;
var balance;
//sets
var coreSet = [
    //Moderator
    {
        cardname: "Moderator",
        type: "character",
        impact: 0,
        color: "Gray",
        team: null,
        copies: 1
    },
    //Villagers
    {
        cardname: "Villager",
        type: "character",
        impact: 1,
        color: "Blue",
        team: "Village",
        copies: 15
    }, {
        cardname: "Apprentice Seer",
        type: "character",
        impact: 4,
        color: "Blue",
        team: "Village",
        copies: 1
    }, {
        cardname: "Aura Seer",
        type: "character",
        impact: 3,
        color: "Blue",
        team: "Village",
        copies: 1
    }, {
        cardname: "Bodyguard",
        type: "character",
        impact: 3,
        color: "Blue",
        team: "Village",
        copies: 1
    }, {
        cardname: "Cupid",
        type: "character",
        impact: -3,
        color: "Blue",
        team: "Village",
        copies: 1
    }, {
        cardname: "Diseased",
        type: "character",
        impact: 3,
        color: "Blue",
        team: "Village",
        copies: 1
    }, {
        cardname: "Doppelg&#228;nger",
        type: "character",
        impact: -2,
        color: "Blue",
        team: "Village",
        copies: 1
    }, {
        cardname: "Drunk",
        type: "character",
        impact: 4,
        color: "Blue",
        team: "Village",
        copies: 1
    }, {
        cardname: "Ghost",
        type: "character",
        impact: 2,
        color: "Blue",
        team: "Village",
        copies: 1
    }, {
        cardname: "Hunter",
        type: "character",
        impact: 3,
        color: "Blue",
        team: "Village",
        copies: 1
    }, {
        cardname: "Lycan",
        type: "character",
        impact: -1,
        color: "Blue",
        team: "Village",
        copies: 1
    }, {
        cardname: "Mason",
        type: "character",
        impact: 2,
        color: "Blue",
        team: "Village",
        copies: 3
    }, {
        cardname: "Mayor",
        type: "character",
        impact: 2,
        color: "Blue",
        team: "Village",
        copies: 1
    }, {
        cardname: "Old Hag",
        type: "character",
        impact: 1,
        color: "Blue",
        team: "Village",
        copies: 1
    }, {
        cardname: "Pacifist",
        type: "character",
        impact: -1,
        color: "Blue",
        team: "Village",
        copies: 1
    }, {
        cardname: "Priest",
        type: "character",
        impact: 3,
        color: "Blue",
        team: "Village",
        copies: 1
    }, {
        cardname: "Prince",
        type: "character",
        impact: 3,
        color: "Blue",
        team: "Village",
        copies: 1
    }, {
        cardname: "Private Investigator",
        type: "character",
        impact: 3,
        color: "Blue",
        team: "Village",
        copies: 1
    }, {
        cardname: "Seer",
        type: "character",
        impact: 7,
        color: "Blue",
        team: "Village",
        copies: 1
    }, {
        cardname: "Spellcaster",
        type: "character",
        impact: 1,
        color: "Blue",
        team: "Village",
        copies: 1
    }, {
        cardname: "Tough Guy",
        type: "character",
        impact: 3,
        color: "Blue",
        team: "Village",
        copies: 1
    }, {
        cardname: "Troublemaker",
        type: "character",
        impact: -3,
        color: "Blue",
        team: "Village",
        copies: 1
    }, {
        cardname: "Village Idiot",
        type: "character",
        impact: 2,
        color: "Blue",
        team: "Village",
        copies: 1
    }, {
        cardname: "Witch",
        type: "character",
        impact: 4,
        color: "Blue",
        team: "Village",
        copies: 1
    },

    //Werewolves
    {
        cardname: "Werewolf",
        type: "character",
        impact: -6,
        color: "Red",
        team: "Wolf",
        copies: 12
    }, {
        cardname: "Lone Wolf",
        type: "character",

        impact: -5,
        color: "Red",
        team: "Wolf",
        copies: 1
    }, {
        cardname: "Minon",
        type: "character",

        impact: -6,
        color: "Red",
        team: "Wolf",
        copies: 1
    }, {
        cardname: "Sorceress",
        type: "character",

        impact: -3,
        color: "Red",
        team: "Wolf",
        copies: 1
    }, {
        cardname: "Wolf Cub",
        type: "character",

        impact: -8,
        color: "Red",
        team: "Wolf",
        copies: 1
    },

    //Vampires
    {
        cardname: "Vampire",
        type: "character",

        impact: -7,
        color: "Purple",
        team: "Vampire",
        copies: 8
    },

    //Special
    {
        cardname: "Cult Leader",
        type: "character",

        impact: 1,
        color: "Green",
        team: "Cult",
        copies: 1
    }, {
        cardname: "Cursed",
        type: "character",

        impact: -3,
        color: "Blue/Red",
        team: "Village",
        copies: 1
    }, {
        cardname: "Hoodlum",
        type: "character",

        impact: 0,
        color: "Brown",
        team: "Village",
        copies: 1
    }, {
        cardname: "Tanner",
        type: "character",

        impact: -2,
        color: "Tan",
        team: "Tanner",
        copies: 1
    },
];

var wolfpackSet = [
    //Werewolves
    {
        cardname: "Virginia Woolf",
        type: "character",

        impact: -2,
        color: "Blue",
        team: "Village",
        copies: 1
    }, {
        cardname: "Big Bad Wolf",
        type: "character",

        impact: -9,
        color: "Red",
        team: "Wolf",
        copies: 1
    }, {
        cardname: "Dire Wolf",
        type: "character",

        impact: -4,
        color: "Red",
        team: "Wolf",
        copies: 1
    }, {
        cardname: "Fang Face",
        type: "character",

        impact: -5,
        color: "Red",
        team: "Wolf",
        copies: 1
    }, {
        cardname: "Fruit Brute",
        type: "character",

        impact: -3,
        color: "Red",
        team: "Wolf",
        copies: 1
    }, {
        cardname: "Wolverine",
        type: "character",

        impact: -4,
        color: "Red",
        team: "Wolf",
        copies: 1
    },
]

function BuildCardCollection() {
    if (useCore) {
        AddToCollection(coreSet);
    }
    if (useWolf) {
        AddToCollection(wolfpackSet);
    }
    for (i = 0; i < collection.length; i++) {
        collection[i].ID = i;
        box.push(collection[i]);
    }
}

function AddToCollection(set) {
    for (a = 0; a < set.length; a++) {
        do {
            collection.push(JSON.parse(JSON.stringify(set [a])));
            set [a].copies--;
        } while (set [a].copies > 0);
    }
}

function CreateDecks() {
    var toSort = box.length;
    for (i = 0; i < toSort; i++) {
        if (box[0].type == 'character') {
            characterDeck.push(box[0]);
        } else if (box[0].type == 'artifact') {
            artifactDeck.push(box[0]);
        }
        box.splice(0, 1);
    }
    characterDeck = Shuffle(characterDeck);
    artifactDeck = Shuffle(artifactDeck);
    //characterDeck.Shuffle();
}

function BuildScenario() {
    var nonmods = players - 1; //remove the moderator from the count
    normal = nonmods < 15 ? Math.round(nonmods / 2) : Math.min(Math.round(nonmods / 4), 15); //find count of normal villagers using ratio from rulebook
    special = nonmods - normal;

    document.getElementById('normal').innerHTML = 'Villagers: ' + normal;
    document.getElementById('special').innerHTML = 'Others: ' + special;

    DrawStaticCharacters();
    DrawDynamicCharacters();
    GetBalance();
		BalanceTable();
}

function DrawStaticCharacters() {
    var villagers = normal
    DrawExact(characterDeck, "Moderator");
    var seer = Roll(1, 100) < 95 ? 'Seer' : 'other';
    if (seer == 'other') {
        seer = Roll(1, 2) == 1 ? 'Aura Seer' : 'Apprentice Seer';
    }
    DrawExact(characterDeck, seer);
    special--;
    while (normal > 0) {
        DrawExact(characterDeck, "Villager");
        normal--;
    }
    BoxCards(characterDeck, "Villager");
    DrawExact(characterDeck, "Werewolf");
    if (useVampire) {
        DrawExact(characterDeck, "Vampire");
    } else {
        BoxCards(characterDeck, "Vampire");
    }
    special--;
}

function DrawDynamicCharacters() {
    while (special > 0) {
        if (GetBalance() > 0) {
            ScryCard(characterDeck,findBad);
        } else {
            ScryCard(characterDeck,findGood);
        }
        special--;
    }
}

function BalanceTable(){
	var temp = [];//create list of removable cards
	for (i=0; i < table.length; i++){
		temp.push(table[i]);
	}
	if(GetIndex(temp,"Moderator")!=null){
		temp.splice(GetIndex(temp,"Moderator"),1);
		}
var seers= SaveSeers(temp);
		if(seers.length > 0){
				temp.splice(seers[0],1);
			}
var villagers = SaveVillagers(temp);
		for (i=0; i < villagers.length; i++){
			temp.splice(villagers[i],1);
		}

	var balance = GetBalance();
	var unbalance = Math.abs(GetBalance())
//	while (unbalance > 1){
		//find swappable pair by finding the delta between the top card of temp and each card of the character deck
	}
}

function DrawCard(deck) {
    table.push(deck[0]);
    deck.splice(0, 1);
}

function ScryCard(deck, validation) {
    var temp = [];
    var redraw = true;
    do {
        if (validation(deck[0])) {
            DrawExact(deck, deck[0].cardname);
            redraw = false;
        } else {
            temp.push(deck[0]);
            deck.splice(0, 1);
        }
    }
    while (redraw);
    for (i = 0; i < temp.length; i++) {
        deck.push(temp[i]);
    }
    deck = Shuffle(deck);
}

function DrawExact(deck, card) {
    var idx = GetIndex(deck, card);
    if (idx != null) {
        table.push(deck[idx]);
        deck.splice(idx, 1);
    }
}

function BoxCards(deck, card) {
    var idx = GetIndex(deck, card);
    while (idx != null) {
        box.push(deck[idx]);
        deck.splice(idx, 1);
        idx = GetIndex(deck, card);
    }
}

function GetBalance() {
    balance = 0;
    for (i = 0; i < table.length; i++) {
        balance = table[i].impact + balance;
    }
		return balance;
}

function Roll(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function GetIndex(list, card) {
    for (i = 0; i < list.length; i++) {
        if (list[i].cardname == card) {
            return i;
        }
    }
    return null;
}

function SaveSeers(deck){
	var seers = [];
	for (i=0; i < deck.length; i++){
		if (deck[i].cardname.indexOf("Seer")!=-1)
			seers.push(i);
	}
	return seers;
}

function SaveVillagers(deck){
	var villagers = [];
	for (i=0; i < deck.length; i++){
		if (deck[i].cardname == "Villager")
			villagers.push(i);
	}
	return villagers;
}

function Shuffle(deck) {
    var counter = deck.length,
        temp, index;
    while (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        temp = deck[counter];
        deck[counter] = deck[index];
        deck[index] = temp;
    }
    return deck;
}

function findGood(firstCard) {
    return firstCard.impact > 0;
}

function findBad(firstCard) {
    return firstCard.impact < 0;
}

function findTeam(firstCard, team) {
    return firstcard.team == team;
}

function ShowDeck(deck) {
    document.getElementById('box').innerHTML = '';
    document.getElementById('table').innerHTML = '';
    document.getElementById('characters').innerHTML = '';
    document.getElementById('artifacts').innerHTML = '';

    for (i = 0; i < box.length; i++) {
        document.getElementById('box').innerHTML = document.getElementById('box').innerHTML + '<li>' + box[i].cardname + '</li>';
    }
    for (i = 0; i < table.length; i++) {
        document.getElementById('table').innerHTML = document.getElementById('table').innerHTML + '<li>' + table[i].cardname + ' : ' + table[i].impact + '</li>';
    }
    for (i = 0; i < characterDeck.length; i++) {
        document.getElementById('characters').innerHTML = document.getElementById('characters').innerHTML + '<li>' + characterDeck[i].cardname + '</li>';
    }
    for (i = 0; i < artifactDeck.length; i++) {
        document.getElementById('artifacts').innerHTML = document.getElementById('artifacts').innerHTML + '<li>' + artifactDeck[i].cardname + '</li>';
    }
}

function PrintData() {
    document.getElementById('count').innerHTML = 'Deck Size: ' + collection.length;
    document.getElementById('players').innerHTML = 'Players: ' + (players-1) + ' + 1 moderator';

    document.getElementById('stacks').innerHTML =
        'Box: ' + box.length + '<p>' +
        'Character Deck: ' + characterDeck.length + '<p>' +
        'Artifact Deck: ' + artifactDeck.length + '<p>' +
        'Table: ' + table.length + '<p>' +
        '';
    document.getElementById('balance').innerHTML = 'Balance: ' + balance;
}

BuildCardCollection();
CreateDecks();
BuildScenario();
ShowDeck(box);
PrintData();
