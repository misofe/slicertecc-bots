const Discord = require('discord.js')

function selectionEmbed(message, avatarURL){
    var embed = new Discord.MessageEmbed()
	.setColor('#7289DA')
	.setTitle('Announcement Configuration')
	//.setURL('')
    .addFields(
		{ name: 'Regular field title', value: 'Some value here' },
	)
	.setDescription('**Please choose an Embed settings for this announcement**')
	.setThumbnail(avatarURL)
	.setTimestamp(message.createdAt)
    return embed
}

function ChoosingEmbed(){
    var embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Announcements Configuration')
	//.setURL('')
	.setDescription('Please choose an Embed settings for this announcement')
	.setThumbnail()
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
}

module.exports = {
    selectionEmbed
}