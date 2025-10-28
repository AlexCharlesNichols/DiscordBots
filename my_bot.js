const Discord = require('discord.js')
const client = new Discord.Client()
const YTDL = require('ytdl-core')
var generalChannel = client.channels.get("559727926480732182") // general channel id
dispatcher = {}
connection = {}
client.on('ready', () => {
    // List servers the bot is connected to
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(' -'  + guild.name)

        // List all channels
       // guild.channels.forEach((channel) => {
       //     console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}} `)
       // })

   
        // Alternatively, you can set the activity to any of the following:
        // PLAYING, STREAMING, LISTENING, WATCHING
        // For example:
        client.user.setActivity("Sam fail at coding", {type: "WATCHING"})
        // Provide a URL to a file
        //const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/559727926480732182/559777947993636884/TheNips.jpg')
        //const localFileAttachment = new Discord.Attachment('C:/Users/gojam/Pictures/TheNips.jpg') //this directory doesnt wanna work ??
       // generalChannel.send(localFileAttachment)
        

    })
    client.on('message', (receivedMessage) => {
        // Prevent bot from responding to its own messages
        if (receivedMessage.author == client.user) {
            return
        }
        if (receivedMessage.content.startsWith("!")) {
            processCommand(receivedMessage)
        }
        if (receivedMessage.author.id == "559733151476482050") {
            receivedMessage.reply("You are the worst bot i have EVER seen")
        }
        if (receivedMessage.author.id == "266831074657697803") {
            receivedMessage.reply("SHuT tHE fUck uP CuNt")
        }
        //Reacting with emojis

        // You can copy/paste the actual unicode emoji in the code (not _every_ unicode emoji works)
        receivedMessage.react("😎")

        // Unicode emojis: https://unicode.org/emoji/charts/full-emoji-list.html

        // Get every custom emoji from the server (if any) and react with each one
       
          //  receivedMessage.guild.emojis.forEach(customEmoji => {
           //     console.log(`Reacting with custom emoji: ${customEmoji.name} (${customEmoji.id})`)
           //     receivedMessage.react(customEmoji)
         //  })
        
        // If you know the ID of the custom emoji you want, you can get it directly with:
        // let customEmoji = receivedMessage.guild.emojis.get(emojiId)

        // Check if the bot's user was tagged in the message
        if (receivedMessage.content.includes(client.user.toString())) {
            receivedMessage.channel.send("**Do Not Fucking Tag Me**")
        }
    })
    function processCommand(receivedMessage) {
        let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
        let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
        let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
        let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

        console.log("Command received: " + primaryCommand)
        console.log("Arguments: " + arguments) // There may not be any arguments

        if (primaryCommand == "help") {
            helpCommand(arguments, receivedMessage)
        }
        else if (primaryCommand == "botfight") {
            botfight(arguments, receivedMessage)
        }
        //playing audio file when mentioned
        else if (primaryCommand === "join") {
            musicbotjoin(arguments, receivedMessage)
        }
        else if (primaryCommand ==="pause") {
            musicbotpause(arguments, receivedMessage)
        }
        else if (primaryCommand === "resume")
        {
                musicbotresume(arguments, receivedMessage)
            
        }
        else if (primaryCommand === "skip") {
            musicbotskip(arguments, receivedMessage)

        }
        else if (primaryCommand == "oft") {
            oft(arguments, receivedMessage)
        }  
            // posting a photo of an eye when !photo
        else if (primaryCommand == "photo") {
            const localFileAttachment = new Discord.Attachment('C:/Users/gojam/Pictures/TheNips.jpg') //this directory doesnt wanna work ??
            receivedMessage.channel.send(localFileAttachment)
        }
        else {
            receivedMessage.channel.send("I don't understand that command. Try `!help` or `!join` or `!photo` or `!botfight`")
        }
    }

    function helpCommand(arguments, receivedMessage) {
        if (arguments.length > 0) {
            receivedMessage.channel.send("It looks like you might need help with " + arguments)
        } else {
            receivedMessage.channel.send("I'm not sure what you need help with. Try `!help [topic]`")
        }
    }
    //function to insult sams bot
    function botfight(arguments, receivedMessage) {
        receivedMessage.channel.send("NipBot is better than <@559733151476482050>")
        
    }

    function musicbotjoin(arguments, receivedMessage) {
        // Only try to join the sender's voice channel if they are in one themselves
     
            if (receivedMessage.member.voiceChannel) {

                receivedMessage.member.voiceChannel.join()
                  .then(connection => { // Connection is an instance of VoiceConnection
                      receivedMessage.reply('I have successfully connected to the channel!');
                      //Now to start playing something
                       dispatcher = connection.playFile('C:/Users/gojam/Documents/Discord_Bot/Nipbot/getnoscoped.mp3');
      
                      //when the song finishes
                      dispatcher.on('end', () => {
                          // The song has finished
                          receivedMessage.reply('I have fulfilled my purpose');
                          connection.disconnect()
                      });

                      dispatcher.on('error', e => {
                          // Catch any errors that may arise
                          console.log(e);
                      });

                      dispatcher.setVolume(0.05); // Set the volume to 5%

         
                  })
            
              .catch(console.log);
            }
            else {
                receivedMessage.reply('You are actually a troll, join the channel first');
            }

    }
    function oft(arguments, receivedMessage) {
        // Voice only works in guilds, if the message does not come from a guild,
        // we ignore it
        if (!receivedMessage.guild) return;

        // Only try to join the sender's voice channel if they are in one themselves
        if (receivedMessage.member.voiceChannel) {
            const streamOptions = { seek: 0, volume: 10 };
            const stream = YTDL("https://www.youtube.com/watch?v=HoBa2SyvtpE", { filter: 'audioonly' })
            receivedMessage.member.voiceChannel.join()
            .then(connection => { dispatcher = connection.playStream(stream, streamOptions) })
            .catch(console.error);
            
        }
        else {
            receivedMessage.reply('You need to join a voice channel first!');
        }
    }
    function musicbotpause(arguments, receivedMessage) {
        
                      dispatcher.pause(); // pauses music
                      console.log("Music paused")
                      receivedMessage.reply('did it pause??');
                  
    }
    function musicbotresume(arguments, receivedMessage) {

                      dispatcher.resume(); // Carry on playing
                      console.log("Music resumed")
                      receivedMessage.reply('hopefully it resumed?');
                      dispatcher.setVolume(0.05); // Set the volume to 5%
        }
    function musicbotskip(arguments, receivedMessage){
                      dispatcher.end(); // End the dispatcher, emits 'end' even
                      console.log("bot should have disconnected")
                 
        }
})
client.login("XXXX") // Replace XXXXX with your bot token