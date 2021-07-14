const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "randomrole",
  run: async (client, message, args) => {
    
    let role = message.guild.roles.cache.random();
    
    let embed = new MessageEmbed()
      .setColor('#ffffff')
      .setTitle(`Random Role `)
      .setDescription(`${role}`)
      .setTimestamp();

    message.channel.send(embed);
  }
};