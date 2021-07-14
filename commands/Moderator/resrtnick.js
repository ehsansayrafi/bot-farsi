const { Client , Message , MessageEmbed } = require('discord.js')

module.exports = { 
    name : "resetnick",
    description : "نیک نیم را پاک میکنه",

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
            member.setNickname((null));
        } catch (err) {
            console.log(err);
            message.reply("Man Permission Nadaram 🥺😢 Baraye Avaz Kardan " + member.toString() + "Nadaram")
        };
    }}
