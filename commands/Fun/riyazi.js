const { MessageEmbed } = require("discord.js");
const math = require("mathjs");

module.exports = {
  name: "riyazi",

  run: async (client, message, args) => {
    try {
      if (!args[0]) return message.channel.send("Lotfan Soal Khod Ra Beporsid\n Mesal : n!riyazi 1+1 ");

      const embed = new MessageEmbed()
        .setColor(`#0000`)
        .setTitle(` 👇Javab 👇`)
        .setDescription(math.evaluate(args.join(" ")))
        .setTimestamp();

      message.channel.send(embed);
    } catch (error) {
      message.channel.send(`Soal Shoma Ghalat Ast Lotfan Dobare Talash Konid`).then(() => console.log(error));
    }
  }
};
