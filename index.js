const Discord = require('discord.js');
const client = new Discord.Client();
const referendum = require('./commands/poll.js');
const {bertinMsg, soyProgramador, sing, kick} = require('./commands.js');
require('dotenv').config()


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', async (msg) => {
  if (msg.content.includes('!bertin')) {
    bertinMsg(msg);
  } else if (msg.content.includes('!programador')) {
    soyProgramador(msg);
  } else if (msg.content.includes('!canta')) {
    sing(msg);
  } else if(msg.content.includes('!referendum')) {
    referendum(msg);
  } else if(msg.content.includes('!kick')) {
    kick(msg);
  }
});

client.login(process.env.DISCORD_TOKEN);
