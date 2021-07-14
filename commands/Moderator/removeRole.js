const  { Message }  = require('discord.js')

module.exports = {
    name : "removerole",
    description : "گرفتن رول از ممبر مورد نظر",

    run : async(client , message , args) => {
        /**
         * @param { Message } message
         */
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Shoma Permission Nadarid 💩")

        const target = message.mentions.members.first()
        if(!target) return message.channel.send('Lotfan Member Morede Nazar Ra Mention Konid. ❗️')
        const role = message.mentions.roles.first()
        if(!role) return message.channel.send('Role Morede Nazar Ra Lotfan Mention Konid. ❗️')
        await target.roles.remove(role)
        message.channel.send( `Az ${target.user.username} Role  Gerfte Shod. ✅`)
    
        }

}