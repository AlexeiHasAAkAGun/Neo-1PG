import { Client, Intents } from 'discord.js'; 
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
bot.on('ready', () => console.log('ready'));
bot.login('OTM0MzM1OTUwNzk0OTMyMjI0.YeumKQ.aLZCTRC2-QUbwPsJMFLet_cpQzo');
