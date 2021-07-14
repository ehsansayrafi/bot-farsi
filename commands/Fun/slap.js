const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "slap",
  run : async (bot, message) =>{
    const data = await fetch("https://nekos.life/api/v2/img/slap").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const slapped = message.author.id === user.id ? "Khodesho" : user.username;

    const embed = new MessageEmbed()
      .setFooter(message.author.username)
      .setColor("#f1ec00")
      .setTitle(`${message.author.username} Slapped ${slapped}`)
      .setDescription(`[Agar Gif Load Nashod Click Konid .](${data.url})`)
      .setImage(`${data.url}`)
      .setTimestamp();

    message.channel.send({ embed });
  },
};
