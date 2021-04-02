const Discord = require("discord.js");
const Client = new Discord.Client();
const Color = require("color")
const EmbedModule = require('./embed.js')

require('dotenv').config()
var Prefix = "+"
var fs = require('fs');

Client.once(`ready`, () => {
    console.log("h")
})

Client.on("message", message => {
const args = message.content
    .slice(Prefix.length) 
    .trim() 
    .split(" "); 
const command = args.shift().toLowerCase(); 

    if (command === "announce") {
        var Author = message.author;
        var AuthorTag = message.author.username;
        var AuthorUsername = message.author.username;
        var AvUrl = Author.displayAvatarURL();
        if (message.member.hasPermission("MANAGE_ROLES") || message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send(EmbedModule.selectionEmbed(message, Client.user.displayAvatarURL()))
        }
    }
})

Client.login(process.env.token)