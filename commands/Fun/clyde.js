const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "clyde",
 
run :   async (bot, message, args)  => {
    const text = args.join(" ");
    if (!text) return message.reply("Lotfan Matn Morede Nazar Ra Benevisid");

    const data = await fetch(
      `https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`
    ).then((res) => res.json());

    const embed = new MessageEmbed()
      .setTitle("Clyde")
      .setImage(data.message)
      .setFooter(message.author.username)
      .setColor("#ffffff")
      .setDescription(
        `[Agar Aks Load Nashod Click Konid ](${data.message})`
      );

    message.channel.send(embed);
  },
};