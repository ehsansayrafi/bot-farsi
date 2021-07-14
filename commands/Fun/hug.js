const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "hug",
  run : async (bot, message)  => {
    const data = await fetch("https://nekos.life/api/hug").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const hugged = message.author.id === user.id ? "Khodesho" : user.username;

    const embed = new MessageEmbed()
      .setTitle(`${message.author.username} Hugged ${hugged}`)
      .setFooter(message.author.username)
      .setColor("#f1ec00")
      .setDescription(`[Agar Gif Load Nashod Click Konid .](${data.url})`)
      .setImage(`${data.url}`)
      .setTimestamp();

    message.channel.send(embed);
  },
};
