const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
client.on('ready', () => {
    console.log('你好 我好 大家好');
  });
  client.on('message', (msg) => {
    if (msg.content.indexOf("<@!824131767916560444>") !== -1){
        if (msg.content.indexOf("你好") !== -1) {
            msg.reply("\n衝\n三\n小");
        }
        else if (msg.content.indexOf("排一下") !== -1) {
            let str = msg.content;
            let strs = str.split(' ');
            let out = [];
            while (strs.length > 0) {
                let idx = Math.floor(strs.length * Math.random());
                if (strs[idx] !== "排一下" && strs[idx] !== '<@!824131767916560444>')
                    out.push(strs[idx]);
                strs.splice(idx, 1);
            }
            let outString = "";
            let number = 1;
            for (o of out) {
                outString = outString + "\n" + number + "." + o
                number++;
            }
            msg.reply(outString);
        }
    }
  });
  