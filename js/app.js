var players = [{   
	img: "Roman-Burki.png",
	name: "Roman",
	lastName: "Burki",
	number: 1,
	position: "Goalkeeper",
	age: 29
},
{   
	img: "paco-alcacer.png",
	name: "Paco",
	lastName: "Alcacer",
	number: 9,
	position: "Attacker",
	age: 27
},
{   
	img: "mats-hummels.png",
	name: "Mats",
	lastName: "Hummels",
	number: 15,
	position: "Defender",
	age: 31
},
{   
	img: "marcel-schmelzer.png",
	name: "Marcel",
	lastName: "Schmelzer",
	number: 29,
	position: "Defender",
	age: 32
},
{   
	img: "nico-schulz.png",
	name: "Nico",
	lastName: "Schulz",
	number: 14,
	position: "Defender",
	age: 27
},
{   
	img: "lukasz-piszczek.png",
	name: "Lukasz",
	lastName: "Piszczek",
	number: 26,
	position: "Defender",
	age: 35
},
{   
	img: "thomas-delaney.png",
	name: "Thomas",
	lastName: "Delaney",
	number: 6,
	position: "Midfielder",
	age: 28
},
{   
	img: "julian-brandt.png",
	name: "Julian",
	lastName: "Brandt",
	number: 19,
	position: "Midfielder",
	age: 24
},
{   
	img: "thorgan-hazard.png",
	name: "Thorgan",
	lastName: "Hazard",
	number: 23,
	position: "Midfielder",
	age: 27
},
{   
	img: "mario-gotze.png",
	name: "Mario",
	lastName: "Gotze",
	number: 10,
	position: "Midfielder",
	age: 28
},
{   
	img: "marco-reus.png",
	name: "Marco",
	lastName: "Reus",
	number: 11,
	position: "Attacker",
	age: 30
},
{   
	img: "marwin-hitz.png",
	name: "Marwin",
	lastName: "Hitz",
	number: 35,
	position: "Goalkeeper",
	age: 29
},
{   
	img: "jacob-bruun-larsen.png",
	name: "Jacob",
	lastName: "Bruun-Larsen",
	number: 34,
	position: "Attacker",
	age: 29
},
{   
	img: "jacob-bruun-larsen.png",
	name: "Jacob",
	lastName: "Bruun-Larsen",
	number: 34,
	position: "Attacker",
	age: 29
},
{   
	img: "tobias-raschl.png",
	name: "Tobias",
	lastName: "Raschl",
	number: 37,
	position: "Midfielder",
	age: 19
}];

function getRandomNumber(arr) {
	return Math.floor(Math.random() * arr.length);

}

function addPlayers() {

	while(players.length){
         console.log(players);

		 var firstTeam = document.querySelector('.first-team');
		 var subs = document.querySelector('.subs');
		 var randomNumber = getRandomNumber(players);
		 var container = players.length > 4 ? firstTeam : subs;

         // Add player to the page
         container.appendChild(createPlayer(players[randomNumber]));

         // Remove player from players
         players.splice(randomNumber, 1);
     }
}

function createPlayer(playerData) {
	var player = document.createElement("div");
	player.classList.add("player");

	var img = '<img src="img/' + playerData.img + '" />';
	var name = '<div>' + playerData.name + " " + playerData.lastName + '</div>';
	var num = '<div>Number: ' + playerData.number + '</div>';
	var position = '<div>Position: ' + playerData.position + '</div>';
	var age = '<div>Age: ' + playerData.age + '</div>';

	player.innerHTML = img + name + num + position + age;

	return player;
}

function makeSubstitution() {
	var firstTeam = document.querySelectorAll(".first-team .player");
	var subs = document.querySelectorAll(".subs .player");
    
    var firstTeamNumber = getRandomNumber(firstTeam);
    var subsNumber = getRandomNumber(subs);

    var firstTeamPlayer = firstTeam[firstTeamNumber];
    var substitutionPlayer = subs[subsNumber];

    var subPrevious = substitutionPlayer.previousSibling;
    var subNext = substitutionPlayer.nextSibling;

    firstTeamPlayer.after(substitutionPlayer);

    subPrevious ? subPrevious.after(firstTeamPlayer) : subNext.before(firstTeamPlayer);

}


// Initialize functions
addPlayers();
setInterval(makeSubstitution, 10000);