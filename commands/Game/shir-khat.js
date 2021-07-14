const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "shir-khat",
   run : async (bot, message) => {
        const replies = ["**You landed on Heads**", "**You landed on Tails**"];

        const reply = replies[Math.floor(Math.random() * replies.length)];

        const embed = new MessageEmbed()
            .setTitle("🦁shir-khat👛")
            .setTitle(`${reply}`)
            .setColor("#005fbe")
            .setFooter(message.author.username)
            .setTimestamp();

        message.channel.send(embed);
    }
};
