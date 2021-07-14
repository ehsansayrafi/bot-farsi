const { Message } = require('discord.js');

module.exports ={
    name : "nuke",
    description : "این کامند چنل مورد نظر را پاک میکند و یک چنل جدید به همراه پرمیشن های قبلی چنل براتون میسازه",
    /**
     * @param {*} client
     * @param {Message} message
     * @param {*} args
     */

    run : async(client , message ,args) => {
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
        if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) 
            return message.reply('Man Niyaz Be Permission Manage Channel Daram')

        await message.channel.clone().then((ch) => {
            ch.setParent(message.channel.parent.id);
            ch.setPosition(message.channel.position);
            message.channel.delete();
            ch.send('In Channel Be Sorat Kamel Nuke Shod ✅ \n https://images-ext-1.discordapp.net/external/aq5Kyl8ALAfnrs-m_2SPtSdd5P-IfjODPYda3R3IiIE/%3Fcid%3D73b8f7b14268890a2bd204a7ed65424ef08a3877f5b183c1%26rid%3Dgiphy.mp4/https/media2.giphy.com/media/3oKIPwoeGErMmaI43S/giphy.mp4')

        })


    
    }}
