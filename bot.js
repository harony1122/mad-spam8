const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("542222103236182036")
setInterval(function() {
channel.send(`loveveolyharon`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
