let voted = [];

function filter(reaction, user) {
    if ((reaction.emoji.name === '👍' || reaction.emoji.name === '👎') && !voted.includes(user.id)) {
        voted.push(user.id);
        return true;
    } else {
        return false;
    }
}

function referendum(msg) {
    let guildID = msg.guild.roles.find(role => role.name === 'Padres Fundadores').id;
    if (msg.member.roles.has(guildID)) {
        msg.react('👍').then(() => msg.react('👎'));
        voted = [];
        const collector = msg.createReactionCollector(filter, { time: 30000 });
        collector.on('end', collected => {
            msg.channel.send(`Final de la votación! \nVotos totales: ${collected.size} \nResultado: 👍 - ${collected.get('👍').count}    👎 - ${collected.get('👎').count + 1}`)
        });
    } else {
        msg.channel.send('Referendum no disponible');
    }
}

module.exports = referendum;