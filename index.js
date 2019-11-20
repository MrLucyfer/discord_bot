const Discord = require('discord.js');
const client = new Discord.Client()
const getTweet = require('./scrap')
const ytdl = require('ytdl-core');

require('dotenv').config()

let gif_programador = 'https://thumbs.gfycat.com/MildVigilantAntarcticgiantpetrel-size_restricted.gif'

function play() {
  let title = 'song.mp3'
  
}


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (msg) => {
  if (msg.content.toLower() === 'bertin') {
    let tweet = await getTweet();
    msg.reply(`Bertin ha twiteado: \n ${tweet.text} \n ${tweet.img}`);
  } else if (msg.content.includes('programador')) {
    msg.reply(`Soy Programador: ${gif_programador}`);
  } else if (msg.content.includes('-canta')) {
    play();
  }

});




client.login(process.env.DISCORD_TOKEN);
