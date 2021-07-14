const Discord = require('discord.js')

module.exports = {
name: "kick",
run: async (client, message, args) => {
    
        let user = message.mentions.users.first();
        let reasonkick = message.content.split(' ').slice(2).join(' ');
        let guild = message.guild;
        let memberkick = message.guild.member;
    
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`Shoma Bayad Permission  ||KICK MEMBERS|| Ro Dashte Bashid`)
    
     if (message.mentions.users.size < 1) {
            return message.channel.send('Lotfan Member Morede Nazar Ra Mention Konid');
        }
    
     if (!reasonkick) {
            reasonkick = "Bedon Dalil"
        }
    
    if (!message.guild.member(user).kickable) {
            return message.channel.send("Member Nemishe Kik She Chon Rolesh Balatar Hatsesh");
        }
    
    message.guild.member(user).kick();
    
    let embed = new Discord.MessageEmbed()
    .setTitle("Member Ba Movafaghiyat Kik Shod ✅")
    .setDescription(`${user.username}#${user.discriminator} Kik Shod Tavasote ${message.author.username}`)
    .addField(`Dalil:-`, `${reasonkick}`)
    .setColor("#ff0000")
    message.channel.send(embed)
    
     let DmEmbed = new Discord.MessageEmbed()
    .setDescription(`Shoma  Kick Shodid Dar Server ${guild} Be Dalil: ${reasonkick}`)
    .setColor("#00ffac")
    user.send(DmEmbed)
  }
}