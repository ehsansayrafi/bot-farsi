const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "say-embed",
run: async(client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`❌ | `+`Shoma Bayad Permission ||Manage Messages|| Ta Betavanid Az In Command Estefade Konid`)
 await message.delete()
  let say = message.content.split(" ").slice(1).join(" ")
  if(!say) return message.channel.send(`❌ | `+"Man Nemitonam Messag Dade Shode Ro Begam")
  let embed = new MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL())
  .setDescription(`${say}`)
  .setColor("#161515")
.setFooter(`Embed by ${message.author.username}`)
.setTimestamp()
  message.channel.send(embed)
}
}