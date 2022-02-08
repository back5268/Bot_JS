require('dotenv').config()

const Discord = require('discord.js')
const fetch = require("node-fetch")
const client = new Discord.Client( {intents: ["GUILDS", "GUILD_MESSAGES"]}, {partials: ['MESSAGE']} );

function getQuote() {
    return fetch("https://zenquotes.io/api/random")
      .then(res => {
        return res.json()
        })
      .then(data => {
        return data[0]["q"] + " -" + data[0]["a"]
      })
  }

sadWords = ["sad", "depressed", "unhappy", "angry", "miserable"]
encouragements = [
    "Cheer up!",
    "Hang in there.",
    "You are a great person / bot!"
]

client.on("ready", () => {
    console.log("Bot is ready")
})

client.on("messageDelete", msg => {
    msg.reply("Stop deleting message !!")
})

client.on("message", msg => {
    if (msg.author.bot) return
    if (msg.content === "$inspire") {
        getQuote().then(quote => msg.channel.send(quote))
    }
    else if (msg.content === "hey") {msg.reply("hi there")}
    else if (msg.content === "u good bro") {msg.channel.send("ok nha")}
    else if (msg.content === "react") {msg.react("❤️")}
    else {msg.reply("ngu")}
})

client.login(process.env.BOT_TOKEN)