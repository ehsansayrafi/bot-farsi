const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "randommember",
  run: async (client, message, args) => {
    
    let member = message.guild.members.cache.random();
    
    let embed = new MessageEmbed()
      .setColor(`#fffff`)
      .setTitle(`Random Member `)
      .setDescription(`${member}`)
      .setTimestamp();

    message.channel.send(embed);
  }
};