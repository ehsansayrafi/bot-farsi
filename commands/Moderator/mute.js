const discord = require('discord.js')
module.exports = {
    name: "mute",

run : async (client, message, args) => {

    const muteRoleId = message.guild.roles.cache.get('762199219074367508')
    let muteRole;

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) 
      return message.channel.send('Member Morede Nazar Ra Tag Konid');
    if (member === message.member)
      return message.channel.send('Shoma Nemitavanid Khodetono Mute Konid');
    if (member === message.guild.me) return message.channel.send(message, 0, 'Ajab Mano Nemitoni Mute Koni');
    if (member.roles.highest.position >= message.member.roles.highest.position)
      return message.channel.send('Nemitoni Mute Koni Member Morede Nazaro Rolesh Balatar Hastesh');
    if (!args[1])
      return message.channel.send('Modat Zaman Mute Bayad Az 14 Roz Kamtar Bashe (1s/m/h/d)');
    let time = ms(args[1]);
    if (!time || time > 1209600000) // Cap at 14 days, larger than 24.8 days causes integer overflow
      return message.channel.send('Modat Zaman Mute Bayad Az 14 Roz Kamtar Bashe (1s/m/h/d)');

    let reason = args.slice(2).join(' ');
    if (!reason) reason = '`Dalil Neveshte Nashod`';
    if (reason.length > 1024) reason = reason.slice(0, 1021) + '...';

    if (member.roles.cache.has(muteRoleId))
      return message.channel.send('Member Morede Nazar Dar Hazer Mute Hastesh');

    // Mute member
    try {
      await member.roles.add(muteRole);
    } catch (err) {
      console.log(err)
      return message.channel.send('Lotfan Role Ra Check Konid', err.message);
    }
    const muteEmbed = new MessageEmbed()
      .setTitle('Mute Member')
      .setDescription(`${member} Mute Shod Be Modate => **${ms(time, { long: true })}**.`)
      .addField('Moderator', message.member, true)
      .addField('Member', member, true)
      .addField('Time', `\`${ms(time)}\``, true)
      .addField('Dalil', reason)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(muteEmbed);

    // Unmute member
    member.timeout = message.client.setTimeout(async () => {
      try {
        await member.roles.remove(muteRole);
        const unmuteEmbed = new MessageEmbed()
          .setTitle('Unmute Member')
          .setDescription(`${member} Unmute Shod`)
          .setTimestamp()
          .setColor(message.guild.me.displayHexColor);
        message.channel.send(unmuteEmbed);
      } catch (err) {
        console.log(err)
        return message.channel.send('Lotfan Role Ra Check Konid', err.message);
      }
    }, time);
  }
};