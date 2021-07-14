const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "iq",
    run : async(bot, message) => {
        const iq = Math.floor(Math.random() * 100) + 1;

        const embed = new MessageEmbed()
            .setTitle(`IQ Shoma: ${iq}`)
            .setColor("#161515")
            .setFooter(message.author.username)
            .setTimestamp();

        message.channel.send(embed);
    }
};