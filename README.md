# Simple Discord Bot
A small project which showcases some different uses of the Discord.js package.

# Installation
Make sure you have these two installed:
<br>&bull; NodeJS
<br>&bull; Discord.js (https://www.npmjs.com/package/discord.js)

Running the bot is easy:
<br><code>cd /path && node bot.js</code>

# Functions
The bot has some basic functions:
<br>&bull; detect & reply to commands
<br>&bull; log messages to console
<br>&bull; detect & delete certain words
<br>&bull; play Roll: !roll high | !roll low | !roll

# Adding commands
Adding commands is really easy, just add:
<br><code>if(message.content.toLowerCase() === '!command'){ // code }</code>
<br>The !command part will be your command. Doesn't have to have the exclamation mark (!), but it does have to be lowercase, since it checks the user message in lowercase. Put this piece of code after/under any of the existing commands, like ping.

# Support
If you're having problems with the bot, <a href="https://github.com/SPETS1337/Simple-Discord-Bot/issues">post the issue</a>
