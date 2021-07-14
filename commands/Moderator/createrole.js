const Discord = require("discord.js");
const toHex = require("colornames");

module.exports = {
    name: "createrole",
    run: async (client, message, args) => {
        const name = args.slice(1).join(" ")
        const regex = !/[^a-zA-Z0-9]+/g.test(name)
        if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("Shoma Permission Nadarid 💩")
        }
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("Man Permission Nadaram 😭")
        }
        if (!args[0]) {
        return message.channel.send("`createrole <colorname> <Name>\nMesal: = n!createrole red Test`")
        }
        if (!name) {
        return message.channel.send("Lotfan Yek Esm Baraye Role Jadid Type Konid")
        }
        if (regex === false) {
        return message.channel.send("In Esm Ghabol Nemibashad Faghat Add Ya Esm ")
        }
        if (name.length > 100) {
        return message.channel.send("Esm Role Jadid Nabayad Bishtar Az 100 characters Bahshad")
        }
        message.guild.roles.create({
            data: {
                name: name,
                color: toHex(args[0])
            }
        })
        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username} - (${message.author.id})`, message.author.displayAvatarURL())
        .setColor("#00ffe2")
        .setDescription(`
**Role: ** ${name}
**Action: ** Role Jadid Sakhte Shod
**Role Color: ** ${args[0]}
**Channel: ** ${message.channel}
**Sakhte Shode Tavasot: ** ${message.member}
      `)
   message.channel.send(embed);
    }
}