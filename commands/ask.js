const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!ask <question fjdksf>
  if(!args[2]) return message.reply(":warning: Please Ask a Full Question With Indonesia `Usage: .gardask apakah <question>`");
  let replies = ["Ya", "Tidak", "Tidak Mungkin", "Mungkin", "Saya Tidak Tahu", "Sangat Mungkin", "Mungkin Anda Kebanyakan Makan Micin", "Saya Semoga Itu Pasti"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let askembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#FF9900")
  .addField(":question: Question:", `${question}`)
  .addField(":pencil: Answering:", `${replies[result]}`);

  message.channel.send(askembed);



}

module.exports.help = {
  name: "gardask"
}
