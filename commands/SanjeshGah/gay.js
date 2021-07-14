const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "gay",
    run : async(bot, message) => {
        const gay = Math.floor(Math.random() * 100) + 1;

        const embed = new MessageEmbed()
            .setTitle(`:rainbow_flag: Darsad Gay Bodan Shoma: ${gay}% :rainbow_flag:`)
            .setColor("#161515")
            .setFooter(message.author.username)
            .setTimestamp();
           
        message.channel.send(embed);
    }
};