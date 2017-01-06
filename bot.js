// set const's
const Discord = require("discord.js");
const client = new Discord.Client();

// log when the bot successfully connected
client.on('ready', () => {
	// display join message, bot name and bot status (if the bot has a bot tag or not)
	console.log("Great success! Connected as " + client.user.username + " (bot status: " + client.user.bot + ")\n");
	client.user.setGame("with code"); // set game playing
});

// new message
client.on('message', message => {
	// print author & text to console (unless it's the bot itself saying something)
	if(message.author.username !== client.user.username){
		console.log(message.author.username + ": " + message.content);
	}


	// reply to a user saying ping
	if(message.content.toLowerCase() === 'ping'){
		message.reply("Pong! :ping_pong:");
	}


	// explain !roll
	if(message.content.toLowerCase() === '!roll'){
		message.reply("Usage: !roll high (50 or higher) | !roll low (50 or under)");
	}

	// !roll high, number must be 50 or higher to win
	if(message.content.toLowerCase() === '!roll high'){
		rnum = Math.floor(Math.random() * (100 - 1)) + 1;
		if(rnum == 50){
			message.reply("Woah, you hit 50! Nice :clap:!");
		} else if(rnum > 50){
			message.reply("You won! The number was " + rnum);
		} else {
			message.reply("Bummer, you lost. The number was " + rnum);
		}
	}

	// !roll low, number must be 50 or lower to win
	if(message.content.toLowerCase() === '!roll low'){
		rnum = Math.floor(Math.random() * (100 - 1)) + 1;
		if(rnum == 50){
			message.reply("Woah, you hit 50! Nice :clap:!");
		} else if(rnum < 50){
			message.reply("You won! The number was " + rnum);
		} else {
			message.reply("Bummer, you lost. The number was " + rnum);
		}
	}


	// delete message & reply to user saying it (if we have the privilege)
	if(message.content.toLowerCase().indexOf("somebadword") > -1){
		if(message.deletable === true){
			message.delete();
			message.reply("Hey, don't say that :no_good:! Message deleted.");
		} else {
			console.log("\nUser " + message.author.username + " said something bad (" + message.content + "), but we do not have the privilege to delete the message!\n");
		}
	}

	
});

// Bot token, register app, add bot and click "click to reveal": https://discordapp.com/developers/applications/me
// Screenshot: http://i.imgur.com/6XqgrwG.png

client.login('token');
