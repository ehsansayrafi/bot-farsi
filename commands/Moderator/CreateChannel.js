const { Client , Message , MessageEmbed } = require('discord.js')

module.exports = { 
    name : "createchannel",
    description : "ساختن تکست چنل با اسم که خودتون بگید",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */

    run : async(client , message ,args) => {
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('Shoma Permission Nadarid 💩')
        
        const channelNameQuery = args.join(" ")
        if(!channelNameQuery) return message.reply('Lotfan Yek Esm Bararye Channel Benevisid');

        message.guild.channels.create(channelNameQuery).
        then(ch => {
            message.channel.send(` ${ch} Channel Sakhte Shod ✅`);
        })


    }
}    