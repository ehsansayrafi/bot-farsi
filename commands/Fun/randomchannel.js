const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "randomchannel",
  run: async (client, message, args) => {
    let channel = message.guild.channels.cache.random();

    let embed = new MessageEmbed()
      .setColor(`#00000`)
      .setTitle(`Random Channel `)
      .setDescription(`${channel}`)
      .setTimestamp();

    message.channel.send(embed);
  }
};