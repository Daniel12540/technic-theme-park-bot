const Discord = require("discord.js")
require("dotenv").config()


const TOKEN = "OTMwMjE1NjI1MjYxOTk4MTgx.Ydyozw.9pHlfOUPtqiMsuA-TwvkWlhQZ_o"

const client = new Discord.Client({
	intents: [
		"GUILDS",
		"GUILD_MESSAGES"
	]
})

client.on("ready", () => {
	console.log('Logged in as ${client.user.tag}')
})

client.on("messageCreate", (message) => {
	if (message.content == "hi"){
		message.reply("Hello Guest!")
	}
})

client.on("messageCreate", (message) => {
	if (message.content == "bye"){
		message.reply("Bye, see you soon!!")
	}
}

client.login(process.env.TOKEN)