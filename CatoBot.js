const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
   console.log("Server up!");
});

bot.on('message', message=> {
    if(message.content == "/cato"){

        var voiceChannel = message.member.voice.channel;

        if(!voiceChannel){

            return message.reply('Unete a un canal de voz primero');

        }
        voiceChannel.join().then(connection =>{

            const dispatcher = connection.play('./audioCato.mp3');

            dispatcher.on('finish', ()=>{
                voiceChannel.leave();
            });

        });

    }

})

bot.login(token);
