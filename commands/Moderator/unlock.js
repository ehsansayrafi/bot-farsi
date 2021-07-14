const Discord = module.require("discord.js");

module.exports = {
   name: "unlock",
   run: async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("Shoma Permission Nadarid 💩")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        null : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Update Shod")
   .setDescription(`🔓 ${message.channel}  Unlock Shod`)
   .setColor("#00ff20");
   await message.channel.send(embed);
   message.delete();
}
}