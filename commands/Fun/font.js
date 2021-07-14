const discord = require("discord.js");
module.exports = {
    name: 'font',
/** 
 * @param {Client} client 
 * @param {Message} message 
 * @param {String[]} args 
 */
run : async (args, message) => {
    var lines = ['', '', '', '', '', ''];
    var starter = '➳';
    var letters = {
     a: '𝓪',
     b: '𝓫',
     c: '𝓬',
     d: '𝓭',
     e: '𝓮',
     f: '𝓯',
     g: '𝓰',
     h: '𝓱',
     i: '𝓲',
     j: '𝓳',
     k: '𝓴',
     l: '𝓵',
     m: '𝓶',
     n: '𝓷',
     o: '𝓸',
     p: '𝓹',
     q: '𝓺',
     r: '𝓻',
     s: '𝓼',
     t: '𝓽',
     u: '𝓾',
     v: '𝓿',
     w: '𝔀',
     y: '𝔂',
     x: '𝔁',
     z: '𝔃',
    };
   
    if (!args[0]) {
     message.reply('Lotfan Matn Morede Nazar Ra Benevisid');
    } else {
     console.log(args.join(' ').length);
     message.channel.send(starter + args.slice(0).join(' '));
   
     for (var i = 0; i < args.join(' ').length; i++) {
      var letter = args.join(' ')[i].toLowerCase();
      for (var j = 0; j < 6; j++) {
       lines[j] += letters[letter][j] + '   ';
      }
     }
     console.log(lines);
     message.channel.send(lines.join('\n'));
    }}
   };