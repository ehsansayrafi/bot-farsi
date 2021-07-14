const discord = require("discord.js");

module.exports = {
    name: "avatarhd",
    run: async (client, message, args) => {

let user = message.author || message.mentions.users.first();

let embed = new discord.MessageEmbed()
.setTitle(`${user.username}'s Avatar!`)
.setImage(user.avatarURL({size: 2048, dynamic: true, format: "png"}))
.setColor("#ffffff");
message.channel.send(embed);

    }
};