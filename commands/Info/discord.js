const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "discord",
    description: "با جوین در داخل سرور دیسکورد از اخرین اطلاعات بات با خبر بشید",
    run : async(client , message) =>{
        const embed = new MessageEmbed()
        .setTitle('jack Discord Link ')
        .setDescription('Link Discord : https://discord.gg/3nCWXhPrjt')
        .setColor('#fafafa')
        .setTimestamp()
        message.channel.send(embed)
    }
}