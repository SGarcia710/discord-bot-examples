const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require("node-fetch");//https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined


client.on('ready', () => {
    console.log("Conectado como " + client.user.tag);
    //client.user.setActivity("con ella"); //esto es para hacer que diga que está jugando a algo
    //Se puede cambiar el jugando a, streaming, viendo, escuchando
    client.user.setActivity("PornHub", {type:"WATCHING"});
    //client.user.setActivity("ares", {type:"LISTENING"});
    var servers = 0;
    client.guilds.forEach((guild) => {
        console.log(guild.name);
        servers++;
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
        //lobby id de lotus army: 342480011414077450
    }) 
    console.log("Conectado en " + servers + " servidores.")

});

const response = null;

const getGearData = async function(name, server, message){
    const url = `https://raider.io/api/v1/characters/profile?region=us&realm=${server}&name=${name}&fields=gear`
    //console.log(url)
    const response = await fetch(url);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (see below)
        let json = await response.json();
        const respuesta = json['name'] + " - " + json['class'] + " " + json['active_spec_name'] + ". ItemLevel " + json['gear']['item_level_total'] + ".";
        message.channel.send(respuesta)
      } else {
        alert("HTTP-Error: " + response.status);
      }
}

client.on('message', message => {
    // If the message is '!rip'
    
    const mensaje = message.content.split(" ")
    if(mensaje[0] === '!wgear'){
        getGearData(mensaje[1], mensaje[2], message)
    }
    //console.log(mensaje)
    /*if (message.content === '!wgear') {
        // Create the attachment using Attachment
        const attachment = new Discord.Attachment('https://i.imgur.com/w3duR07.png');
        // Send the attachment in the message channel
        message.channel.send(`${message.author},`, attachment);
        //message.channel.send(attachment);
        getGearData();
    }*/
});


client.login("NjA1OTExOTIwNTQ5MDM2MDMz.XUDZww.aqshyE9umMxA-dvPDF72GZoHoOY");
//bot token
//NjA1OTExOTIwNTQ5MDM2MDMz.XUDZww.aqshyE9umMxA-dvPDF72GZoHoOY
