const { Client , Message , MessageEmbed } = require('discord.js')

module.exports = {
    name : "say",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */

    run : async(client , message ,args) => {
        message.channel.send(`${args.join(" ")}`)
    }}
    
