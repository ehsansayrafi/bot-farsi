const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "invite",
    description: "با اینوایت کردن با در اخل سرورتون از ما حمایت کنید",
    run : async(client , message) =>{
        const embed = new MessageEmbed()
        .setTitle('Link Invite Add Kardan Bot')
        .setDescription('Link Invite : https://discord.com/api/oauth2/authorize?client_id=831198311796572180&permissions=8&scope=bot')
        .setColor('#00050e')
        .setFooter(`Bot Developed By farzadzx12345#7074`)
        .setThumbnail('https://cdn.discordapp.com/icons/814913263858745375/a_73e7b567ee4292339d42c52c31804e63.gif?size=1024')
        .setTimestamp()
        message.channel.send(embed)
    }
}