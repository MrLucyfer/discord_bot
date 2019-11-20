const Discord = require('discord.js');
const client = new Discord.Client()
const getTweet = require('./scrap')

require('dotenv').config()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', async (msg) => {
    if (msg.content.toLower() === 'bertin') {
      let tweet = await getTweet();
      msg.reply(`Bertin ha twiteado: \n ${tweet.text} \n ${tweet.img}`);
    }
    
  });

  client.on('message', async (msg) => {
    console.log(msg.content);
    if (msg.content === 'españa') {
      console.log('in')
      const img = new Discord.Attachment('./img/espanita.jpeg', 'espanita');
      msg.reply('Españita', {files: img,});
    }
    
  });
 

  
  client.login(process.env.DISCORD_TOKEN);