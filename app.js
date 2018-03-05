const Discord = require('discord.js');
const client = new Discord.Client();
var opusscript = require("opusscript");
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
const broadcast = client.createVoiceBroadcast();

client.login('NDE5NDQ5NjUzNTc5NDgxMDg5.DXwX6g.oJigyEXDW4S0ym_E7WqEEZbiF98');

client.on('ready', () => {
  console.log('Bot ready!');

  var channel = client.channels.get('418794813597548545');
  channel.join().then(connection =>{
  const dispatcher = connection.playArbitraryInput('http://streaming.radionomy.com/Minetopia-fm?lang=nl-NL%2cnl%3bq%3d0.9%2cen-US%3bq%3d0.8%2cen%3bq%3d0.7');
  })
})
