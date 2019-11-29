const getTweet = require('./commands/scrap.js');
const kick = require('./commands/kick.js');

async function bertinMsg(msg) {
    let tweet = await getTweet();
    msg.reply(`Bertin ha twiteado: \n ${tweet.text} \n ${tweet.img}`);
}

function soyProgramador(msg) {
    let gif_programador = 'https://thumbs.gfycat.com/MildVigilantAntarcticgiantpetrel-size_restricted.gif'
    msg.reply(`Soy Programador: ${gif_programador}`);
}

function sing(msg) {
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
} 


module.exports = {
    bertinMsg,
    sing,
    soyProgramador,
    kick
}