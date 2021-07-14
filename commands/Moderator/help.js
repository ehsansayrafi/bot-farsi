const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;

module.exports = {
  name: "help",
  aliases : ['h'],
  description: "Shows all available bot commands.",
  run: async (client, message, args) => {


    const roleColor =
      message.guild.me.displayHexColor === "#000000"
        ? "#ffffff"
        : message.guild.me.displayHexColor;

    if (!args[0]) {
      let categories = [];

      readdirSync("./commands/").forEach((dir) => {
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          let file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return "No command name.";

          let name = file.name.replace(".js", "");

          return `\`${name}\`\n`;
        });

        let data = new Object();

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "In progress." : cmds.join(" "),
        };

        categories.push(data);
      });

      const embed = new MessageEmbed()
        .setTitle("👇 تمامی کامند های من 👇")
        .addFields(categories)

        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embed);
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(`Commends Type Shode Ghalat Mibashad Lotfan Az Command  \`${prefix}help\` Estefade Namaid`)
          .setColor("FF0000");
        return message.channel.send(embed);
      }

      const embed = new MessageEmbed()
        .setTitle("اطلاعات کامند : ")
        .addField("پرفیکس بات", `\`${prefix}\``)
        .addField(
          "کامند : ",
          command.name ? `\`${command.name}\`` : "کامند ندارد"
        )
        .addField(
          "مخفف کامند : ",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "این کامند مخفف ندارد"
        )
        .addField(
          "پرفیکس + کامند :",
          command.usage
            ? `\`${prefix}${command.name} ${command.usage}\``
            : `\`${prefix}${command.name}\``
        )
        .addField(
          "توضیحات کامند : ",
          command.description
            ? command.description
            : "توضیحی این کامند ندارد"
        )
        .setFooter(
          `درخواست شده توسط ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embed);
    }
  },
};
