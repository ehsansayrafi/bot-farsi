const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "kiss",
  run : async (bot, message) => {
    const data = await fetch("https://nekos.life/api/kiss").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const kissed = message.author.id === user.id ? "Khodesho" : user.username;

    const embed = new MessageEmbed()
      .setTitle(`${message.author.username} Kissed ${kissed}`)
      .setFooter(message.author.username)
      .setColor("#f1ec00")
      .setDescription(`[Agar Gif Load Nashod Click Konid .](${data.url})`)
      .setImage(`${data.url}`)
      .setTimestamp();

    message.channel.send({embed});
  },
};
