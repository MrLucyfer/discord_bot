// Captar id usuario cuando comando !kick

let voted = [];

function filter(reaction, user) {
    if ((reaction.emoji.name === '👍' || reaction.emoji.name === '👎') && !voted.includes(user.id)) {
        voted.push(user.id);
        return true;
    } else {
        return false;
    }
}

function parseResults(collected) {
    let res = [];
    try {
        res[0] = collected.get('👍').count - 1;
    } catch(err) {
        res[0] = 0;
    }

    try {
        res[1] = collected.get('👎').count;
    } catch(err) {
        res[1] = 0;
    }

    return res;
}


function kick(msg) {

    let guildID = msg.guild.roles.find(role => role.name === 'Padres Fundadores').id;
    let user;
    if(msg.mentions.users.size == 1 && msg.member.roles.has(guildID)) {
        msg.mentions.members.forEach(element => {
            user = element;
        });
        msg.react('👍').then(() => msg.react('👎'));
        voted = [];
        const collector = msg.createReactionCollector(filter, { time: 20000 });
        collector.on('end', collected => {
            let results = parseResults(collected);
            msg.channel.send(`@everyone Final de la votación! \nVotos totales: ${collected.size} \nResultado: 👍 -> ${results[0]}  ------  👎 -> ${results[1]}`)
            if(results[0] > results[1]) {
                user.kick('El popla ha parlat')
                  .then(()=> {console.log('User kicked')})
                  .catch((err) => {console.error(err)});
                msg.channel.send('El popla ha parlat!');
            }
        });
    } else {
        msg.channel.send('No puedes hechar a nadie');
    }
}




module.exports = kick;