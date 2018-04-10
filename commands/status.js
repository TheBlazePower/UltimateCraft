const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle(`${bot.user.username}: Status`)
    .setDescription("===========================================")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", `${bot.user.username}`)
    .addField(":man_in_tuxedo: Owner:", "TheBlazePower#7627")
    .addField(":floppy_disk: Memory:", "6.88 MB")
    .addField(":computer: Version:", "BETA 1.3")
    .addField(":book: Library:", "Discord.JS")
    .addField(`${bot.user.username} Bot Was Currently BETA Mode Version: 1.2`, `${bot.user.username} Bot Was Made By TheBlazePower#7627`);

    message.channel.send(botembed);
}

module.exports.help = {
  name:"status"
}
