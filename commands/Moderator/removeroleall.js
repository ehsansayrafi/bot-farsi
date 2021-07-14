module.exports = {
    name: "removeroleall",
    description: "گرفتن رول از تمامی اعضای داخل سرور",
    run : async (bot, message, args) => {
      if (!message.guild.me.hasPermission("MANAGE_ROLES"))
        return message.channel.send("Man Permission Nadaram");
  
      if (!message.member.hasPermission("MANAGE_ROLES" || "ADMINISTRATOR"))
        return message.channel.send("Shoma Permission Nadarid 💩");
  
      const role =
        message.guild.roles.cache.find(
          (role) => role.name === args.join(" ").slice(1)
        ) || message.mentions.roles.first() || message.guild.roles.cache.get(args.join(" ").slice(1));
  
      if (message.guild.me.roles.highest.comparePositionTo(role) < 0) {
        return message.channel.send(`Role Man Ro Az**${role.name}** Balatar Bebarid`);
      }
  
      if (message.member.roles.highest.comparePositionTo(role) < 0) {
        return message.channel.send(`Role Shoma Bayad Balatar Az **${role.name}** Bashad`);
      }
      
      if (!role) {
        return message.channel.send("Lotfan Role Morede Nazar Ra Mention Konid");
      }
  
      message.guild.members.cache.forEach(member => member.roles.remove(role));
  
      message.channel.send(` **${role.name}** Ba Movafaghiyat Az Tamamiye Afrad Gerfte Shod`);
    },
  };