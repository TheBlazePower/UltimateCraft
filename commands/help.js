const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let helpembed = new Discord.RichEmbed()
    .setTitle(`${message.guild.name} Command List`)
    .setDescription("===========================================")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("General Commands:", "`.gardask apakah <text>` `.botinfo` `.serverinfo` `.report <@user> <reason>`")
    .addField("Moderator Commands:", "`.kick <@user> <reason>` `.clear <1-100>` `.ban <@user> <reason>` `.prefix <prefix>` `.warn <@user> <reason>` `.warnlevel <@user>` `.say <message>`")
    .addField(`${bot.user.username} Bot Was Currently BETA Mode Version: 1.2`, `${bot.user.username} Bot Was Made By TheBlazePower#7627`);

    message.author.send(helpembed);
    message.channel.send(`:mailbox_with_mail: Sending Help Page To Your DM ${message.author}`)
}

module.exports.help = {
  name:"help"
}
