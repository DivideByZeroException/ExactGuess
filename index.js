


import axios from 'axios';
import express from "express"
import dotenv from 'dotenv';

const app = express();
app.use(express.json());

const port = 5000;
app.listen(port, () => console.log(`Listening to port ${port}`));
import { Client, GatewayIntentBits } from 'discord.js';
import { EmbedBuilder } from 'discord.js';

const client = new Client({
  intents: Object.keys(GatewayIntentBits).map((a) => GatewayIntentBits[a]),
});
client.on('ready', () => {
    console.log(`Бот запущен как ${client.user.tag}`);
    //setImg();
});

client.login(process.env.DISCORD_TOKEN);