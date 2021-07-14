const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'finduser',
    aliases: ['fu','find'],
    run: async(bot, message, args)=>{
        if(!args.length) return message.channel.send('Lotfan Esm Member Morede Nazar Ra Benevisid');
        const searchMember = message.guild.members.cache.find(member=>member.user.tag.toLowerCase().includes(args[0].toLowerCase())) || message.mentions.users.first();
        if (!searchMember) return message.channel.send(`Member Morede Nazar Yaft Nashod**${args[0]}**`, {
            allowedMentions: {
              parse: []
            }
          });
        const user = searchMember.user || message.mentions.users.first();
        message.channel.send(`${user}, Ro Payda Kardam 👀`, {
            allowedMentions: {
              parse: []
            }
          });
    }
}