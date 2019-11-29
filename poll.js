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
        res[0] = collected.get('👍').count
    } catch(err) {
        res[0] = 0;
    }

    try {
        res[1] = collected.get('👎').count
    } catch(err) {
        res[1] = 0;
    }

    return res;
}

function referendum(msg) {
    let guildID = msg.guild.roles.find(role => role.name === 'Padres Fundadores').id;
    if (msg.member.roles.has(guildID)) {
        msg.react('👍').then(() => msg.react('👎'));
        voted = [];
        const collector = msg.createReactionCollector(filter, { time: 600000 });
        collector.on('end', collected => {
            let results = parseResults(collected);
            msg.channel.send(`@everyone Final de la votación! \nVotos totales: ${collected.size} \nResultado: 👍 -> ${results[0]}  ------  👎 -> ${results[1]}`)
        });
    } else {
        msg.channel.send('Referendum no disponible');
    }
}

module.exports = referendum;
