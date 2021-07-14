const { Client , Message , MessageEmbed } = require("discord.js");

module.exports = { 
    name : "delchannel",
    description : "پاک کردن تکست چنل مورد نظر",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */

    run : async(client , message ,args) => {
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('Shoma Permission Nadarid 💩')
      
        const channelTarget = message.mentions.channels.first() || message.channel;
        channelTarget.delete()
            .then(ch => {
                message.author.send('Channel Delete Shod ✅');
            });

}}   