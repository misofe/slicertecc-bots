const Discord = require("discord.js");
const Client = new Discord.Client();
const Color = require("color")
const EmbedModule = require('./embed.js')
var BaseColors = 
{"Green" : "0xBEFE80",
 "Red" : "0xCC0000",
 "Firebrick": "0xB22222",
 "FloralWhite": "0xFFFAF0",
 "AliceBlue": "0xF0F8FF",
 "LightGreen": "0x90EE90",
 "LightSteelBlue": "0xB0C4DE",
 "DeepskyBlue" : "0x00BFFF",
 "CornFlowerBlue": "0x6495ED",
 "Black": "0x000000",
 "Peru" : "0xCD853F",
 "California": "0xE69138",
 "LimeGreen": "0x3FF836"
}
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
            message.channel.send(EmbedModule.ChoosingEmbed(message))
            let filter = m => m.author.id === message.author.id
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 180000,
                errors: ['time']
              })
              .then(message => {
                message = message.first()
                if (message.content[0] == "0" || message.content[0] == "#"){
                    message.channel.send(EmbedModule.messageDescEmbed(message))
                }
                else{
                    message.channel.send("Invalid Color Value")
                }
              })
              .catch(collected => {
                  message.channel.send(`Prompt Cancelled`);
                  console.log("collected1")
              });
        }
    }
})

Client.login(process.env.token)