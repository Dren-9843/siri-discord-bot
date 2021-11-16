const { GuildMember, Interaction } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'Moderation', []);
  }
    
  run(client, message, args, member) {
    if(!message.member.permissions.has('KICK_MEMBERS', checkAdmin)) {
      message.channel.send(":wheeze:")
    }
    else {
      run: async (client, message, args, Discord) => {

       const member = message.mentions.members.first();
       if (!member) return message.reply("Who tf do u want me to kick :umm:")

       if(message.member.roles.highest.position <= member.roles.highest.position) return message.reply(`You can't kick someone with a higher rank than you bozo`)

      

        }

    }
}
    }