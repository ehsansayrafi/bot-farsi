module.exports = {
    name: "voicemute",
   run :  async (bot, message, args) => {
      if (!message.guild.me.hasPermission("MUTE_MEMBERS"))
        return message.channel.send("Shoma Permission Nadarid 💩");
  
      const muteUser = message.guild.member(
        message.mentions.users.first() || message.guild.members.cache.get(args[0])
      );
      const muteReason = args.join(" ").slice(23);
  
      if (!message.member.hasPermission("MUTE_MEMBERS" || "ADMINISTRATOR"))
        return message.channel.send("Shoma Permission Nadarid 💩");
  
       if (!muteUser)
        return message.channel.send("Member Morede Nazar Payda Nashod");
  
      if (muteUser.voice.serverMute) {
        return message.channel.send(
          "Member Morede Nazar Ya Dar Voice Nist Ya Dar Hal Hazar Mute Hstesh"
        );
      }
  
      muteUser.voice.setMute(true, "muteReason");
  
      muteUser.user.send(
        `Shoma **Mute** Shodid Dar Server **${message.guild.name}**, Dalil: **${muteReason}**`
      );
      message.channel.send(
        `${muteUser} Member Morede Nazar Mute Shod ✅. Dalil: **${muteReason}**. Man Dar DM Member Behesh Etela Dadam`
      );
    },
  };