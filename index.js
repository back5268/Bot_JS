require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client( {intents: ["GUILDS", "GUILD_MESSAGES"]}, {partials: ['MESSAGE']} );

client.on("ready", () => {
    console.log("Bot is ready")
})

client.on("messageDelete", msg => {
    msg.reply("Stop deleting message !!")
})

client.on("message", msg => {
    if (msg.content === "hey") {msg.reply("hi there")}
    else if (msg.content === "u good bro") {msg.channel.send("ok nha")}
    else if (msg.content === "react") {msg.react("❤️")}
})

client.login(process.env.BOT_TOKEN)