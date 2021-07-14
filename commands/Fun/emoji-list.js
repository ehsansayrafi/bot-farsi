const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'emoji-list',

  
    run: async(bot, message, args)=>{
        try{
        let Emojis = "";
        let EmojisAnimated = "";
        let EmojiCount = 0;
        let Animated = 0;
        let OverallEmojis = 0;
        function Emoji(id){
            return bot.emojis.cache.get(id).toString()
        }
        message.guild.emojis.cache.forEach(emoji => {
            OverallEmojis++;
            if(emoji.animated) {
                Animated++;
                EmojisAnimated+=Emoji(emoji.id)
            }else {
                EmojiCount++;
                Emojis+=Emoji(emoji.id)
            }
        })
        let emn = new Discord.MessageEmbed()
        emn.setTitle(`Emojis Haye Server [ ${message.guild.name} ]`)
        emn.setThumbnail(message.guild.iconURL({ dynamic: true, format: 'png', size: 512 }))
        emn.setDescription(`**Moteharek [${Animated}]**:\n${EmojisAnimated}\n**Mamoli [${EmojiCount}]**:n${Emojis}`)
        emn.setColor(0x2f3136)
        message.channel.send(emn);
        }catch(err){
            if(err) return message.channel.send(` Error  : ${err.message}`)
        }
    }
}