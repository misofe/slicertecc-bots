const Discord = require('discord.js')

function selectionEmbed(message, avatarURL){
	var temporary = {}
    var embed = new Discord.MessageEmbed()
	.setColor('#2C2F33')
	.setTitle('Announcement Configuration')
	//.setURL('')
    .addFields(
		{ name: 'Embed Colors', value: '`Input your Embed Color in Hex Color from https://www.htmlcsscolor.com/ or choose from the ones below, e.g 0xBEFE80`' },
	)
	.setDescription('**Please choose an Embed settings for this announcement**')
	.setThumbnail(avatarURL)
	.setTimestamp(message.createdAt)
	.setFooter("Prompt will end in 3 Minutes")
    return embed
}
function ChoosingEmbed(message, avatarURL){
    var embed = new Discord.MessageEmbed()
	.setColor('#2C2F33')
	.setTitle('Announcements Color')
	//.setURL('')
	.setDescription('Choose an Embed color for your announcement message')
	.setThumbnail()
	.addFields(
		{ name: 'Green', value: '0xBEFE80' },
		{ name: 'Red', value: "0xCC0000", },
		{ name: 'Firebrick', value: '0xB22222', inline: true },
		{ name: 'FloralWhite', value: '0xFFFAF0', inline: true },
	)
	.setTimestamp(message.createdAt)
	.setFooter("Prompt will end in 3 Minutes")
	return embed
}

function messageDescEmbed(message){
	var temporary = {}
    var embed = new Discord.MessageEmbed()
	.setColor('#2C2F33')
	.setTitle('Set the description')
	//.setURL('')
	.setThumbnail(avatarURL)
	.setTimestamp(message.createdAt)
	.setFooter("Prompt will end in 3 Minutes")
    return embed
}
module.exports = {
    selectionEmbed,
	ChoosingEmbed,
	messageDescEmbed
}