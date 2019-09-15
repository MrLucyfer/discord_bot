const Discord = require('discord.js');
const client = new Discord.Client()
const getTweet = require('./scrap')

require('dotenv').config()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', async (msg) => {
    if (msg.content === 'bertin') {
      let tweet = await getTweet();
      msg.reply(`Bertin ha twiteado: \n ${tweet.text} \n ${tweet.img}`);
    }
  });
  
  client.login(process.env.DISCORD_TOKEN);