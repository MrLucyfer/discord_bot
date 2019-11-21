const Discord = require('discord.js');
const client = new Discord.Client()
const getTweet = require('./scrap')
const referendum = require('./poll.js')


require('dotenv').config()

let gif_programador = 'https://thumbs.gfycat.com/MildVigilantAntarcticgiantpetrel-size_restricted.gif'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', async (msg) => {
  if (msg.content.includes('bertin')) {
    let tweet = await getTweet();
    msg.reply(`Bertin ha twiteado: \n ${tweet.text} \n ${tweet.img}`);
  } else if (msg.content.includes('programador')) {
    msg.reply(`Soy Programador: ${gif_programador}`);
  } else if (msg.content.includes('-canta')) {
    msg.reply('cantando');
    if (msg.member.voiceChannel) {
      msg.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          const dispatcher = connection.playFile('/home/ubuntu/bot/song.mp3');
          dispatcher.on('error', e => {
            // Catch any errors that may arise
            console.log(e);
          });
          dispatcher.on('end', e => {
            // Catch any errors that may arise
            msg.member.voiceChannel.leave();
          });
        })
        .catch(console.log);
    } else {
      msg.reply('Unete a algun canal de voz');
    }
  } else if(msg.content.includes('!referendum')) {
    referendum(msg);
  }
});
client.login(process.env.DISCORD_TOKEN);
