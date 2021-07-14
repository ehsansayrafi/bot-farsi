const { Message, MessageEmbed } = require("discord.js");

const Discord = require("discord.js");
//const db = require("wio.db");
const moment = require("moment");
const fetch = require("node-fetch");

const url = require("url");

module.exports = {
  name: "ss",
  aliases: ["screenshot"],
  discription : "شما کافی هستش لینک جای که عکس میخواید رو میدید و بات از اون لینک یه اسکرین شات میگیره",
  run: async (client, message, args) => {
    message.delete();
    const user = message.author.tag
    const urls = args[0];
    if (!urls)
      return message.channel
        .send(`\`\`\`\n${user},Link Ko ?  -_-\n\`\`\``)
        .then(m => m.delete({ timeout: 5000 }).catch(e => {}));
    if (urls.length < 8)
      return message
        .reply(
          "<a:failed:798526823976796161> https Kam Hastesh Hadeaghal Bayad - 8  Bashad"
        )
        .then(m => m.delete({ timeout: 9000 }).catch(e => {}));

    const site = /^(https?:\/\/)/i.test(urls) ? urls : `http://${urls}`;
    try {
      const { body } = await fetch(
        `https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`
      );

      return message.channel.send(
        `\`\`\`\nScreen Shot Az Linki Ke Dade Bodid\n\`\`\``,
        {
          files: [{ attachment: body, name: "Screenshot.png" }]
        }
      );
    } catch (err) {
      if (err.status === 404)
        return message.channel
          .send("Chizi Payda Nakardam. URL Ghalat Mibashad")
          .then(m => m.delete({ timeout: 14000 }).catch(e => {}));
      return message
        .reply(`Error: \`${err.message}\`. Dobare Talash Konid!`)
        .then(m => m.delete({ timeout: 13000 }).catch(e => {}));
    }
  }
};
