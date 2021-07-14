const { Message, Client, MessageEmbed } = require('discord.js')
const { waifuR } = require('waifur')

module.exports = {
    name: 'anime-girl',
    description: 'Sends Best Waifu.',
    aliases: ['BestGirl'],
    run: async({message, args, client}) => {
        async function Waifu() {
            await waifuR(res => {
                const embed = new MessageEmbed()
                .setColor('#00050e')
                .setTitle(res.name + ' Best Waifu.')
                .setDescription(res.description)
                .setFooter('Anime: ' + res.appears_in)
                .setImage(res.background_image)
                message.channel.send(embed)
            })
        }

        Waifu()
    }
}