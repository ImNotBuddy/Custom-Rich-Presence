var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity : {
            state: "bored lol", //footer like text
            details : "i see you", //description
            assets : {
            large_image : "logo name", //logo. You must have an image uploaded to your rpc assets in 'https://discord.com/developers/applications' under rpc tab. The name must be exact to the uploaded name
              large_text : "idk" //this is the hover text
            },
            buttons : [{label : "Click me" , url : "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},{label : "Nosey noob",url : "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}] //you can change names and links
        }
    })
})

client.login({ clientId : "<your client id>" }).catch(console.error); //replace id with your one. To get an application id go to 'https://discord.com/developers/applications' and create a new application. Click on it and press copy id
console.log('RPC online :)')

//to start the bot do 'node index.js'