const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("544368853568716809")
setInterval(function() {
channel.send(`spaaamamaa`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
