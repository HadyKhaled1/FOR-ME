const Discord = require('discord.js');
const Util = require('discord.js');
const client = new Discord.Client();
const prefix = '$'
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'cc')) {
    if(!args) return ra3d.channel.send('`يرجا عليك كتابه رقم الالوان`');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**انت لا تمتلك صلاحيه MANAGE_ROLES**'); 
              ra3d.channel.send(`**✅ |تم صنع __${args}__ الوان**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });
client.login(process.env.BOT_TOKEN);
