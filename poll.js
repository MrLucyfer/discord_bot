function poll(qst) {
    let question = qst.split(' ');
    question.shift();
    question = question.join(' ');
    return question;
}

function referendum(msg) {
    let guildID = msg.guild.roles.find(role => role.name === 'Padres Fundadores').id;
    if(msg.member.roles.has(guildID)) {
        msg.channel.send('Comença el referendum: ');
        let question = poll(msg.content);
        msg.channel.send(question)
            .then(async(pollMessage) => {
                await pollMessage.react('👍🏽');
                await pollMessage.react('👎🏽');
            });
    } else {
        msg.channel.send('Referendum no disponible');
    }
}

module.exports = referendum;