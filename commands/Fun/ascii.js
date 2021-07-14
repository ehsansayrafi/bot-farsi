const discord = require("discord.js");
const figlet = require("figlet"); 

module.exports = {
    name: "ascii",
    usage: "ascii <text>",
    run: async (client, message, args) => {

   let text = args.join(" ");
   if(!text) {
return message.channel.send(`Lotfan Matn Morede Nazar Ra Type Konid`)
}
   let maxlen = 20
if(text.length > 20) {
return message.channel.send(`Lotfan Bish Az 20 characters Matneton Nabashad`)
}
 
figlet(text, function(err, data) {
message.channel.send(data, {
code: 'AsciiArt' 
});
})

    }
};