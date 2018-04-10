const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      const embed = new Discord.RichEmbed()
      .setTitle("Announcement:")
      .setDescription(`${args.join(" ")}`)
      .addField("UltimateCraft Bot Sedang BETA Mode Versi: 1.2", "UltimateCraft Bot Was Made By TheBlazePower#7627");
      message.delete().catch();
      message.channel.send(embed);

}

module.exports.help = {
  name: "say"
}
