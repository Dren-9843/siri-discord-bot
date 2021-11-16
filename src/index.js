
const { Client, Intents } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ] });

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = config.prefix;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(config.token);
})();

client.on('messageCreate', (message) => {
  if (message.content.toLowerCase() === 'kami siri') {
      message.reply({
          content: 'Siri is my baby forever and ever :knife: back off.'
      })
  }
})


client.on('messageCreate', (message) => {
  if (message.content.toLowerCase() === 'jirou') {
      message.reply({
          content: 'you better remove that before i get you'
      })
  }
})

client.on('messageCreate', (message) => {
  if (message.content.toLowerCase() === 'kamijiro') {
      message.reply({
          content: 'Thats a fucking sin bitch.'
      })
  }
})

client.on('messageCreate', (message) => {
  if (message.content.toLowerCase() === 'kamisiri') {
      message.reply({
          content: 'YES. I love my siri'
      })
  }
})


