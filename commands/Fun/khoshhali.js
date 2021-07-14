const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "khoshhali",
    run : async(bot, message) => {
        const iq = Math.floor(Math.random() * 100) + 1;

        const embed = new MessageEmbed()
            .setTitle(`Mizan Khoshhali Shoma: ${iq}%`)
            .setColor("#161515")
            .setFooter(message.author.username)
            .setTimestamp();

        message.channel.send(embed);
    }
};