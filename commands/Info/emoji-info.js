const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "emoj-info",
    run: async (client, message, args) => {

        //Start

        if (!args[0] || !args[0].startsWith("<") || !args[0].endsWith(">") || !args[0].includes(":")) return message.channel.send(`Please Give A Valid Custom Emoji!`);

        let Thinger = args[0].split(":");

        let Animated;
        if (Thinger[0] === "<a") {
          Animated = true;
        } else {
          Animated = false;
        };

        const Name = Thinger[1];
        const ID = Thinger[2].slice(0, -1);
        const Link = `https://cdn.discordapp.com/emojis/${ID}.${Animated ? "gif" : "png"}?v=1`;

        const Embed = new MessageEmbed()
        .setColor(Color)
        .setThumbnail(Link)
        .setTitle(` اطلاعات ایموجی`)
        .addField(`اسم`, Name, true)
        .addField(`ایدی`, ID, true)
        .addField(`Moteharek`, Animated ? "Hast" : "Nist", true)
        .addField(`Link`, `[Click Konid](${Link})`)

        return message.channel.send(Embed);

        

    }
};