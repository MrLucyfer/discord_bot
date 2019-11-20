const Discord = require('discord.js');
const client = new Discord.Client()
const getTweet = require('./scrap')
const ytdl = require('ytdl-core');

require('dotenv').config()

let gif_programador = 'https://thumbs.gfycat.com/MildVigilantAntarcticgiantpetrel-size_restricted.gif'

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', async (msg) => {
    if (msg.content === 'bertin') {
      let tweet = await getTweet();
      msg.reply(`Bertin ha twiteado: \n ${tweet.text} \n ${tweet.img}`);
    } else if(msg.content.includes('programador')) {
	msg.reply(`Soy Programador: ${gif_programador}`);
    } else if(msg.content.includes('-canta')) {
	msg.channel.send('-play como un vagabundo');
    }
  });
const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
 .on('end', () => {
  console.log('Music ended!');
  // Deletes the finished song from the queue
  serverQueue.songs.shift();
  // Calls the play function again with the next song
  play(guild, serverQueue.songs[0]);
})
 .on('error', error => {
  console.error(error);
 });
dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);  
  client.login(process.env.DISCORD_TOKEN);
