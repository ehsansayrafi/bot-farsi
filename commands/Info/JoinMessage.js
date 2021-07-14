const client = require('../index');
const {MessageEmbed } = require("discord.js");

client.on('guildCreate' , (guild) =>{
    let channelToSend;

    guild.channels.cache.forEach((channel) =>{
        if (
            channel.type === "text" &&
            !channelToSend &&
            channel.permissionFor(guild.me).has("SEND_MESSAGES")
        ) channelToSend = channel;
        });

    if(!channelToSend) return;
    channelToSend.send(
        new MessageEmbed()
        .setAuthor(guild.name , guild.iconURL({dynamic: true}))
        .setDescription("Merci Mano Invite Dadid , Prefix Man `n!` Hatesh ")
        .setColor('#ffffff')
        .setTimestamp()
    );
});