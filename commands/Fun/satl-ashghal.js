const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const axios = require("axios");

module.exports = {
  name: "satle-ashghal",
  run : async (message, args) => {
    let user =
      message.mentions.members.first() 
    const url = `https://api.no-api-key.com/api/v1/trash?image=${user.user.displayAvatarURL(
      { format: "png" }
    )}`;

    let response, data;
    try {
      response = await axios.get(url);
      data = response.data;
    } catch (e) {
      return message.channel.send(`Error :/`);
    }

    const embed = new MessageEmbed()
      .setAuthor(
        `${message.guild.name} Estefade Shode `,
        message.guild.iconURL({ dynamic: true })
      )
      .setImage(data.url)
      .setColor("#79ff00")
      .setFooter(
        `${message.author.username} Soal Bepors`,
        message.author.displayAvatarURL({ dynamic: true })
      );

    await message.channel.send(embed);
  },
};