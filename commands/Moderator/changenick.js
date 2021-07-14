const { Client , Message , MessageEmbed } = require('discord.js')

module.exports = { 
    name : "changenick",
    description : "عوض کردن نیک نیم",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */

    run : async(client , message ,args) =>{
        const member = message.mentions.members.first();
        if(!member) return message.reply('Lotfan Member Morede Nazar Ra Mention Konid. ❗️');
        const arguments = args.slice(1).join(" ");
        if(!arguments) return message.reply('Lotfan Nickname Ke Mikhahid Bedahid Ra Benevisid');

        try{
            member.setNickname((arguments));
        } catch (err) {
            console.log(err);
            message.reply("Man Permission 🥺😢 Baraye Avaz Kardan " + member.toString() + "Nadaram")
        };
    }}
