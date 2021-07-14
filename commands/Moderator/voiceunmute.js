module.exports = {
    name: "voiceunmute",
   run :  async(bot, message, args)  =>{
      if (!message.guild.me.hasPermission("MUTE_MEMBERS"))
        return message.channel.send("Shoma Permission Nadarid 💩");
  
      const unmuteUser = message.guild.member(
        message.mentions.users.first() || message.guild.members.cache.get(args[0])
      );
  
      if (!message.member.hasPermission("MUTE_MEMBERS" || "ADMINISTRATOR"))
        return message.channel.send("Shoma Permission Nadarid 💩");
  
       if (!unmuteUser)
        return message.channel.send("Member Morede Nazar Payda Nashod");
  
      if (!unmuteUser.voice.serverMute) {
        return message.channel.send(
          "Member Morede Nazar Ya Dar Voice Nist Ya Dar Hal Hazar UnMute Hstesh"
        );
      }
  
      unmuteUser.voice.setMute(false, "unmuteReason");
  
      unmuteUser.user.send(
        `Shoma **Unmuted** Shodid Az Server **${message.guild.name}**`
      );
      message.channel.send(
        `${unmuteUser} Member Morede Nazar UnMute Shod ✅ Man Dar DM Member Behesh Etela Dadam`
      );
    },
  };