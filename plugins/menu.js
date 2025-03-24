const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋 Hello ${pushname}*
    
     *꧁ྀི*𝐒𝐇𝐄𝐈𝐊𝐇 𝐀𝐋𝐈 𝐌𝐃*ྀི꧂*
*❖╭─────────────···▸*
> *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
> *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
> *ɴᴀᴍᴇ ʙᴏᴛ* : *𝐒𝐇𝐄𝐈𝐊𝐇 𝐀𝐋𝐈 𝐌𝐃*
> *ᴄʀᴇᴀᴛᴏʀ* : *𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*
> *ᴠᴇʀsɪᴏɴ* : *ᴠ.2.0*
*❖╰────────────···▸▸*
*♡︎•━━━━━━☻︎━━━━━━•♡︎*
*╭╼╼╼╼╼╼╼╼╼╼*
*├➤ 1 • ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ
*├➤ 2 • ᴀɪ ᴍᴇɴᴜ
*├➤ 3 • ᴀɴɪᴍᴇ ᴍᴇɴᴜ
*├➤ 4 • ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ
*├➤ 5 • ғᴜɴ ᴍᴇɴᴜ
*├➤ 6 • ᴍᴀɪɴ ᴍᴇɴᴜ
*├➤ 7 • ɢʀᴏᴜᴘ ᴍᴇɴᴜ
*├➤ 8 • ᴏᴡɴᴇʀ ᴍᴇɴᴜ
*├➤ 9 • ᴏᴛʜᴇʀ ᴍᴇɴᴜ
*├➤ 10 • ǫᴜʀᴀɴ ᴍᴇɴᴜ
*├➤ 11 • ʀᴇᴀᴄᴛɪᴏɴs
*├➤ 12 • sᴄᴀᴍᴍᴇʀ 
*╰╼╼╼╼╼╼╼╼╼╼*
* ▣▣▣▣▣▣▣▣▣▣▣▣*⁠⁠⁠⁠

*ׂ╰┈➤ 🔢Reply with the Number you want to select

> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`;

        const vv = await conn.sendMessage(from, { image: { url: "https://i.ibb.co/YdSKMhv/6767.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`*꧁◈╾───☉ ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃◈┃• facebook
┃◈┃• mediafire
┃◈┃• tiktok
┃◈┃• twitter
┃◈┃• Insta
┃◈┃• apk
┃◈┃• img
┃◈┃• tt2
┃◈┃• pins
┃◈┃• apk2
┃◈┃• fb2
┃◈┃• pinterest 
┃◈┃• spotify
┃◈┃• play
┃◈┃• play2
┃◈┃• play3
┃◈┃• play4
┃◈┃• play5
┃◈┃• play6
┃◈┃• play7
┃◈┃• play8
┃◈┃• play9
┃◈┃• play10
┃◈┃• audio
┃◈┃• video
┃◈┃• video2
┃◈┃• video3
┃◈┃• video4
┃◈┃• video5
┃◈┃• video6
┃◈┃• video7
┃◈┃• video8
┃◈┃• video9
┃◈┃• video10
┃◈┃• ytmp3
┃◈┃• ytmp4
┃◈┃• song
┃◈┃• darama
┃◈┃• gdrive
┃◈┃• ssweb
┃◈┃• tiks
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                        break;
                    case '2':               
                        reply(`*꧁◈╾───☉ ᴀɪ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃◈┃• ai
┃◈┃• gpt3
┃◈┃• gpt2
┃◈┃• gptmini
┃◈┃• gpt
┃◈┃• meta
┃◈┃• blackbox
┃◈┃• luma
┃◈┃• dj 
┃◈┃• khan
┃◈┃• jawad
┃◈┃• gpt4
┃◈┃• bing
┃◈┃• imagine 
┃◈┃• imagine2
┃◈┃• copilot
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                        break;
                    case '3':               
                        reply(`*꧁◈╾───☉ ᴀɴɪᴍᴇ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃◈┃• fack
┃◈┃• dog
┃◈┃• awoo
┃◈┃• garl
┃◈┃• waifu
┃◈┃• neko
┃◈┃• megnumin
┃◈┃• neko
┃◈┃• maid
┃◈┃• loli
┃◈┃• animegirl
┃◈┃• animegirl
┃◈┃• animegirl1
┃◈┃• animegirl2
┃◈┃• animegirl3
┃◈┃• animegirl4
┃◈┃• animegirl5
┃◈┃• anime1
┃◈┃• anime1
┃◈┃• anime2
┃◈┃• anime3
┃◈┃• anime4
┃◈┃• anime5
┃◈┃• animenews
┃◈┃• foxgirl
┃◈┃• naruto
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                        break;
                    case '4':               
                        reply(`*꧁◈╾───☉ ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃◈┃• sticker
┃◈┃• sticker2
┃◈┃• emojimix
┃◈┃• fancy
┃◈┃• take
┃◈┃• tomp3
┃◈┃• tts
┃◈┃• trt
┃◈┃• base64
┃◈┃• unbase64
┃◈┃• binary
┃◈┃• dbinary
┃◈┃• tinyurl
┃◈┃• urldecode
┃◈┃• urlencode
┃◈┃• url
┃◈┃• repeat 
┃◈┃• ask
┃◈┃• readmore
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                        break;
                    case '5':               
                        reply(`*꧁◈╾───☉ ғᴜɴ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃◈┃• shapar
┃◈┃• rate
┃◈┃• insult
┃◈┃• hack
┃◈┃• ship
┃◈┃• character
┃◈┃• pickup 
┃◈┃• joke
┃◈┃• hrt
┃◈┃• hpy
┃◈┃• syd
┃◈┃• anger
┃◈┃• shy
┃◈┃• kiss
┃◈┃• mon
┃◈┃• cunfuzed
┃◈┃• setpp
┃◈┃• hand
┃◈┃• nikal
┃◈┃• hold
┃◈┃• hug
┃◈┃• nikal
┃◈┃• hifi
┃◈┃• poke
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                        break;
                    case '6':               
                        reply(`*꧁◈╾───☉ ᴍᴀɪɴ  ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃◈┃• ping
┃◈┃• live 
┃◈┃• alive
┃◈┃• runtime
┃◈┃• uptime 
┃◈┃• repo
┃◈┃• owner
┃◈┃• menu
┃◈┃• menu2
┃◈┃• restart
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                        break;
                    case '7':               
                        reply(`*꧁◈╾───☉ ɢʀᴏᴜᴘ  ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃◈┃• grouplink
┃◈┃• kickall
┃◈┃• kickall2
┃◈┃• kickall3
┃◈┃• add
┃◈┃• remove
┃◈┃• kick
┃◈┃• promote 
┃◈┃• demote
┃◈┃• dismiss 
┃◈┃• revoke
┃◈┃• setgoodbye
┃◈┃• setwelcome
┃◈┃• delete 
┃◈┃• getpic
┃◈┃• ginfo
┃◈┃• delete 
┃◈┃• disappear on
┃◈┃• disappear off
┃◈┃• disappear 7D,24H
┃◈┃• allreq
┃◈┃• updategname
┃◈┃• updategdesc
┃◈┃• joinrequests
┃◈┃• senddm
┃◈┃• nikal
┃◈┃• mute
┃◈┃• unmute
┃◈┃• lockgc
┃◈┃• unlockgc
┃◈┃• invite
┃◈┃• tag
┃◈┃• hidetag
┃◈┃• tagall
┃◈┃• tagadmins
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                       break;
                    case '8':               
                        reply(`*꧁◈╾───☉ ᴏᴡɴᴇʀ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃◈┃• owner
┃◈┃• menu
┃◈┃• menu2
┃◈┃• listcmd
┃◈┃• allmenu
┃◈┃• repo
┃◈┃• block
┃◈┃• unblock
┃◈┃• fullpp
┃◈┃• setpp
┃◈┃• restart
┃◈┃• shutdown
┃◈┃• updatecmd
┃◈┃• alive
┃◈┃• ping 
┃◈┃• gjid
┃◈┃• jid
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                        break;
                    case '9':               
                        reply(`*꧁◈╾───☉ ᴏᴛʜᴇʀ ᴍᴇɴᴜ ☉───╼◈꧂*
                        
╭────────●●►
┃◈┃• timenow
┃◈┃• date
┃◈┃• count
┃◈┃• calculate
┃◈┃• countx
┃◈┃• flip
┃◈┃• coinflip
┃◈┃• rcolor
┃◈┃• roll
┃◈┃• fact
┃◈┃• cpp
┃◈┃• rw
┃◈┃• pair
┃◈┃• pair2
┃◈┃• pair3
┃◈┃• fancy
┃◈┃• logo <text>
┃◈┃• define
┃◈┃• news
┃◈┃• movie
┃◈┃• weather
┃◈┃• srepo
┃◈┃• insult
┃◈┃• save
┃◈┃• wikipedia
┃◈┃• gpass
┃◈┃• githubstalk
┃◈┃• yts
┃◈┃• ytv
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                        break;
                    case '10':               
                        reply(`*꧁◈╾───☉ ǫᴜʀᴀɴ ᴍᴇɴᴜ ☉───╼◈꧂*
                        
╭────────●●►
 💫 𝘈𝘭𝘭 𝘴𝘶𝘳𝘢𝘩 𝘢𝘯𝘥 𝘵𝘩𝘦𝘪𝘳 𝘯𝘶𝘮𝘣𝘦𝘳𝘴 𝘭𝘪𝘴𝘵
𝘧𝘰𝘳 𝘨𝘦𝘵𝘵𝘪𝘯𝘨 𝘴𝘶𝘳𝘢𝘩 𝘵𝘺𝘱𝘦 .𝘴𝘶𝘳𝘢𝘩 1 💫🌸 

1. 🕌 𝐀𝐋-𝐅𝐀𝐓𝐈𝐇𝐀 (The Opening) - الفاتحہ (پہلا سورہ)
2. 🐄 𝐀𝐋-𝐁𝐀𝐐𝐀𝐑𝐀𝐇 (The Cow) - البقرہ (گائے)
3. 🏠 𝐀𝐋 𝐈𝐌𝐑𝐀𝐍 (The Family of Imran)- آل عمران (عمران کا خاندان)
4. 👩 𝐀𝐍-𝐍𝐈𝐒𝐀 (The Women) - النساء (عورتیں)
5. 🍽️ 𝐀𝐋-𝐌𝐀𝐈𝐃𝐀𝐇 (The Table Spread) - المائدہ (پھیلی ہوئی میز)
6. 🐪 𝐀𝐋-𝐀𝐍'𝐀𝐌 (The Cattle) - الانعام (مویشی)
7. ⛰️ 𝐀𝐋-𝐀'𝐑𝐀𝐅 (The Heights) - الأعراف (بلندیاں)
8. ⚔️ x20𝐀𝐋-𝐀𝐍𝐅𝐀𝐋 (The Spoils of War) - الانفال (غنائم)
9. 🙏 𝐀𝐓-𝐓𝐀𝐔𝐁𝐀𝐇 (The Repentance) - التوبہ (توبہ)
10. 🐟 𝐘𝐎𝐔𝐍𝐔𝐒 (Prophet Younus) - یونس (یونس)
11. 🌩️ 𝐇𝐎𝐃 (Prophet Hod) - ہود (ہود)
12. 👶 𝐘𝐎𝐔𝐒𝐔𝐅 (prophet Yousuf) - یوسف (یوسف)
13. ⚡ 𝐀𝐑-𝐑𝐀𝐃 (The Thunder) - الرعد (گرج)
14. 🕊️ 𝐈𝐁𝐑𝐀𝐇𝐈𝐌 (Prophet Abrahim) - ابراہیم (ابراہیم)
15. 🪨 𝐀𝐈-𝐇𝐈𝐉𝐑 (The Rocky Tract) - الحجر (پتھرائی زمین)
16. 🐝 𝐈𝐁𝐑𝐀𝐇𝐈𝐌 (Prophet Abrahim) - ابراہیم (ابراہیم)
17. 🌙 𝐀𝐍-𝐍𝐀𝐇𝐋 (The Bee) - النحل (مکھی)
18. 🕳️ 𝐀𝐋-𝐊𝐀𝐇𝐅 (The Cave) - الکہف (غار)
19. 🧕🏻 𝐌𝐀𝐑𝐘𝐀𝐌 (Mary) - مریم (مریم)
20. 📜 𝐓𝐀-𝐇𝐀 (Ta-Ha) - طٰہٰ (طٰہٰ)
21. 📖 𝐀𝐋-𝐀𝐍𝐁𝐈𝐘𝐀 (The Prophets)
22. 🕋 𝐀𝐋-𝐇𝐀𝐉𝐉 (The Pilgrimage) - الحج (حج)
23. 🙌 𝐀𝐋-𝐌𝐔'𝐌𝐈𝐍𝐔𝐍 (The Believers) - المؤمنون (ایمان والے)
24. 💡 𝐀𝐋-𝐍𝐎𝐎𝐑 (The Light)
25. ⚖️ 𝐀𝐋-𝐅𝐔𝐑𝐐𝐀𝐍 (The Criterion) - الفرقان (فرق کرنے والا)
26. 🎤 𝐀𝐋-𝐒𝐇𝐔𝐀𝐑𝐀 (The Poets) - الشعراء (شاعر)
27. 🐜 𝐀𝐋-𝐍𝐀𝐌𝐋 (The Ants) - النمل (چڑیا)
28. 📚 𝐀𝐋-𝐐𝐀𝐒𝐀𝐒 (The Stories) - القصص (کہانیاں)
29. 🕷️ 𝐀𝐋-𝐀𝐍𝐊𝐀𝐁𝐎𝐎𝐓 (The Spider) - الأنعام (مکڑی)
30. 🏛️ 𝐀𝐋-𝐑𝐎𝐎𝐍 (The Romans)
31. 📖 𝐋𝐔𝐐𝐌𝐀𝐍 (Luqman) - لقمان (لقمان)
32. 🙇 𝐀𝐒-𝐒𝐀𝐉𝐃𝐀 (The Prostration) - السجدہ (سجدہ)
33. ⚔️ 𝐀𝐋-𝐀𝐇𝐙𝐀𝐁 (The Coalition) - الاحزاب (مخلوط قوتیں)
34. 🌸 𝐒𝐀𝐁𝐀 (Sheva) - سبا (سبا)
35. 🛠️ 𝐅𝐀𝐓𝐈𝐑 (The Originator) - فاطر (خالق)
36. 📖 𝐘𝐀-𝐒𝐄𝐄𝐍 (Yaseen) - یس (یس)
37. 🛡️ 𝐀𝐒-𝐒𝐀𝐀𝐅𝐅𝐀𝐓 (Those who set the Ranks) - الصافات (صفیں مرتب کرنے والے)
38. 🅱️ 𝐒𝐀𝐃 (The Arabic Letter Sad) - صاد (حرف صاد)          
39. 🪖 𝐀𝐙-𝐙𝐔𝐌𝐀𝐑 (The Companies) - الزمر (جنگی دستے)40. 🤲 𝐆𝐀𝐅𝐈𝐑 (The Forgiver) - غافر (بخشنے والا)
41. 📜 𝐅𝐔𝐒𝐒𝐈𝐋𝐀𝐓 (Explained in Detail) - فصلت (تفصیل سے بیان)
42. 🗣️ 𝐀𝐒𝐇-𝐒𝐇𝐔𝐑𝐀 (Council) - الشوری (مشاورت)
43. 💰 𝐀𝐙-𝐙𝐔𝐊𝐇𝐑𝐔𝐅 (The ornaments of Gold) - الزخرف (سونے کے زیور)
44. 💨 𝐀𝐃-𝐃𝐔𝐊𝐇𝐀𝐍 (The Smoke) - الدخان (دھواں)
45. 🐊 𝐀𝐋-𝐉𝐀𝐒𝐈𝐘𝐀𝐇 (The Crouching) - الجاثیہ (جھکنا)
46. 🌪️ 𝐀𝐋-𝐀𝐇𝐐𝐀𝐅 (The Sandhills) - الأحقاف (ہوائی چکروں والی ریت کی پہاڑیاں)
47. 🕋 𝐌𝐔𝐇𝐀𝐌𝐌𝐀𝐃 (Muhammad) - محمد (محمد)
48. 🏆 𝐀𝐋-𝐅𝐀𝐓𝐇 (The Victory) - الفتح (فتح)
49. 🏠 𝐀𝐋-𝐇𝐔𝐉𝐔𝐑𝐀𝐓 (The Rooms) - الحجرات (کمرے))
50. 🔤 𝐐𝐀𝐅 (The Letter Qaf) - قاف (حرف قاف)
51. 🌬️ 𝐀𝐃𝐇-𝐃𝐇𝐀𝐑𝐈𝐘𝐀𝐓 (The Winnowing Winds) - الذاریات (پھٹنے والی ہوائیں)
52. ⛰️ 𝐀𝐓-𝐓𝐔𝐑 (The Mount) - الطور (پہاڑ)
53. 🌟 𝐀𝐍-𝐍𝐀𝐉𝐌 (The Star) - النجم (ستارہ)
54. 🌙 𝐀𝐋-𝐐𝐀𝐌𝐀𝐑 (The Moon) - القمر (چاند)
55. 💖 𝐀𝐑-𝐑𝐀𝐇𝐌𝐀𝐍 (The Beneficent) - الرحمن (بہت مہربان)
56. 🌌 𝐀𝐋-𝐖𝐀𝐐𝐈𝐀𝐇 (The Inevitable) - الواقعہ (ہونے والا)
57. 🔩 𝐀𝐋-𝐇𝐀𝐃𝐈𝐃 (The Iron) - الحدید (لوہا)
58. 👩‍⚖️ 𝐀𝐋-𝐌𝐔𝐉𝐀𝐃𝐀𝐋𝐀𝐇 (The Pleading Woman) - المجادلہ (مدعی عورت)
59. 🏴 𝐀𝐊-𝐇𝐀𝐒𝐇𝐑 (The Exile) - الحشر (اخراج)
60. 🔍 𝐀𝐋-𝐌𝐔𝐌𝐓𝐀𝐇𝐈𝐍𝐀𝐇 (She that is to be examined) - الممتحنہ (جانچنے والی)
61. 📊 𝐀𝐒-𝐒𝐀𝐅𝐅 (The Ranks) - الصف (صفیں)
62. 🕌 𝐀𝐋-𝐉𝐔𝐌𝐔𝐀𝐇 (Friday) - الجمعة (جمعہ)
63. 🤥 𝐀𝐋-𝐌𝐔𝐍𝐀𝐅𝐈𝐐𝐎𝐍 (The Hypocrites) - المنافقون (منافق)
64. 🌪️ 𝐀𝐓-𝐓𝐀𝐆𝐇𝐀𝐁𝐔𝐍 (Mutual Disillusion) - التغابن (آپس کی بے وقوفی)
65. 💔 𝐀𝐓-𝐓𝐀𝐋𝐀𝐐 (The Divorce) - الطلاق (طلاق)
66. 🚫 𝐀𝐓-𝐓𝐀𝐇𝐑𝐈𝐌 (The Prohibition) - التحریم (پابندی)
67. 👑 𝐀𝐋-𝐌𝐔𝐋𝐊 (The Sovereignty) - المُلك (حکومت)
68. 🖋️ 𝐀𝐋-𝐐𝐀𝐋𝐀𝐌 (The Pen) - القلم (قلم)
69. 🔍 𝐀𝐋-𝐇𝐀𝐐𝐐𝐀𝐇 (The Reality) - الحقہ (حقیقت)
70. ⬆️ 𝐀𝐋-𝐌𝐀'𝐀𝐑𝐈𝐉 (The Ascending Stairways) - المعارج (چڑھنے کی سیڑھیاں)
71. 🌊 𝐍𝐔𝐇 (Noah) - نوح (نوح)
72. 👻 𝐀𝐋-𝐉𝐈𝐍𝐍 (The Jinn) - الجن (جنات)
73. 🕵️‍♂️ 𝐀𝐋-𝐌𝐔𝐙𝐙𝐀𝐌𝐌𝐈𝐋 (The Enshrouded One) - المزمل (چادر اوڑھے ہوئے)
74. 🧕 𝐀𝐋-𝐌𝐔𝐃𝐃𝐀𝐓𝐇𝐓𝐇𝐈𝐑 (The Cloaked One) - المُدثر (پوشیدہ)
75. 🌅 𝐀𝐋-𝐐𝐈𝐘𝐀𝐌𝐀𝐇 (The Calamity) - القارعة (آفت)
76. 🧑‍🤝‍🧑 𝐀𝐋-𝐃𝐀𝐇𝐑 (Eternity) - ابدیت (ابدیت)
77. ✉️ 𝐀𝐋-𝐌𝐔𝐑𝐒𝐀𝐋𝐀𝐓 (The Emissaries) - المُرسلات (پہنچانے والے
78. 📣 𝐀𝐍-𝐍𝐀𝐁𝐀 (The Tidings) - النبأ (خبریں)
79. 🪤 𝐀𝐍-𝐍𝐀𝐙𝐈𝐀𝐓 (Those who drag forth) - النازعات (کھینچنے والے)
80. 😠 𝐀𝐁𝐀𝐒𝐀 (He frowned) - عبس (اس نے چہرہ بدلا)
81. 💥 𝐀𝐓-𝐓𝐀𝐊𝐖𝐈𝐑 (The Overthrowing) - التکوير (پھٹنا)
82. 💔 𝐀𝐋-𝐈𝐍𝐅𝐈𝐓𝐀𝐀𝐑 (The Cleaving) - الانفطار (پھٹنا)83. ⚖️ 𝐀𝐋-𝐌𝐔𝐓𝐀𝐅𝐅𝐈𝐅𝐈𝐍 (Defrauding) - المطففين (کم تولنے والے)
84. 🌀 𝐀𝐋-𝐈𝐍𝐒𝐇𝐈𝐐𝐀𝐐 (The Splitting Open) - الانشقاق (پھٹنا)
85. 🌌 𝐀𝐋-𝐁𝐔𝐑𝐎𝐎𝐉 (The Mansions of the Stars) - البروج (ستاروں کے گھر)
86. 🌠 𝐀𝐓-𝐓𝐀𝐑𝐈𝐐 (The Morning Star) - الطارق (صبح کا ستارہ)
87. 🌍 𝐀𝐋-𝐀𝐋𝐀 (The Most High) - الأعلى (سب سے بلند)
88. 🌊 𝐀𝐋-𝐆𝐇𝐀𝐀𝐒𝐇𝐈𝐘𝐀𝐇 (The Overwhelming) - الغاشیہ (پرامن)
89. 🌅 𝐀𝐋-𝐅𝐀𝐉𝐑 (The Dawn) - الفجر (صبح)
90. 🏙️ 𝐀𝐋-𝐁𝐀𝐋𝐀𝐃 (The City) - البلد (شہر)
91. ☀️ 𝐀𝐒𝐇-𝐒𝐇𝐀𝐌𝐒 (The Sun) - الشمس (سورج)
92. 🌜 𝐀𝐋-𝐋𝐀𝐈𝐋 (The Night) - اللیل (رات)
93. 🌅 𝐀𝐃-𝐃𝐔𝐇𝐀 (The Morning Hours) - الضحی (صبح کے گھنٹے)
94. 📖 𝐀𝐋-𝐈𝐍𝐒𝐇𝐈𝐑𝐀𝐇 (The Relief) - الشرح (آرام)
95. 🍈 𝐀𝐓-𝐓𝐈𝐍 (The Fig) - التین (انجیر)
96. 💧 𝐀𝐋-𝐀𝐋𝐀𝐐 (The Clot) - العلق (خون کا لوتھڑا)
97. ⚡ 𝐀𝐋-𝐐𝐀𝐃𝐑 (The Power) - القدر (قدرت)
98. 📜 𝐀𝐋-𝐁𝐀𝐈𝐘𝐈𝐍𝐀𝐇 (The Clear Proof) - البینة (واضح دلیل)
99. 🌍 𝐀𝐙-𝐙𝐈𝐋𝐙𝐀𝐋 (The Earthquake) - الزلزلة (زلزلہ)
100. 🐎 𝐀𝐋-𝐀𝐃𝐈𝐘𝐀𝐓 (The Chargers) - العادیات (چارج کرنے والے)
101. ⚡ 𝐀𝐋-𝐐𝐀𝐑𝐈𝐀𝐇 (The Calamity) - القارعة (آفت)
102. 💰 𝐀𝐓-𝐓𝐀𝐊𝐀𝐓𝐇𝐔𝐑 (The Abundance of Wealth) - التکاثر (مال کی کثرت)
103. ⏳ 𝐀𝐋-𝐀𝐒𝐑 (The Time) - العصر (وقت)
104. 😠 𝐀𝐋-𝐇𝐔𝐌𝐀𝐙𝐀𝐇 (The Scandal-Monger) - الہمزہ (چغلی کرنے والا)
105. 🐘 𝐀𝐋-𝐅𝐈𝐋 (The Elephant) - الفیل (ہاتھی)
106. 🕌 𝐐𝐔𝐑𝐀𝐈𝐒𝐇 (Quraysh) - قریش (قریش)
107. 🤲 𝐀𝐋-𝐌𝐀'𝐔𝐍 (Acts of Kindness) - الماعون (نیکی کے کام)
108. 🍇 𝐀𝐋-𝐊𝐀𝐔𝐓𝐇𝐀𝐑 (The Abundance) - الکوثر (کثرت)
109. ❌ 𝐀𝐋-𝐊𝐀𝐅𝐈𝐑𝐔𝐍 (The Disbelievers) - الکافرون (کافر)
110. 🛡️ 𝐀𝐍-𝐍𝐀𝐒𝐑 (The Help) - النصر (مدد)
111. 🔥 𝐀𝐋-𝐋𝐀𝐇𝐀𝐁 (The Flame) - اللہب (شعلہ)
112. ❤️ 𝐀𝐋-𝐈𝐊𝐇𝐋𝐀𝐒 (The Sincerity) - الإخلاص (اخلاص)
113. 🌅 𝐀𝐋-𝐅𝐀𝐋𝐀𝐐 (The Daybreak)- الفلق (طلوع صبح)
114. 🌐 𝐀𝐍-𝐍𝐀𝐒 (Mankind) - الناس (انسانیت)             
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                        break;
                    case '11':               
                        reply(`*꧁◈╾───☉ ʀᴇᴀᴄᴛɪᴏɴs ᴍᴇɴᴜ ☉───╼◈꧂*
                        
╭────────●●►
┃◈┃• bully @tag
┃◈┃• cuddle @tag
┃◈┃• cry @tag
┃◈┃• hug @tag
┃◈┃• awoo @tag
┃◈┃• kiss @tag
┃◈┃• lick @tag
┃◈┃• pat @tag
┃◈┃• smug @tag
┃◈┃• bonk @tag
┃◈┃• yeet @tag
┃◈┃• blush @tag
┃◈┃• smile @tag
┃◈┃• wave @tag
┃◈┃• highfive @tag
┃◈┃• handhold @tag
┃◈┃• nom @tag
┃◈┃• bite @tag
┃◈┃• glomp @tag
┃◈┃• slap @tag
┃◈┃• kill @tag
┃◈┃• happy @tag
┃◈┃• wink @tag
┃◈┃• poke @tag
┃◈┃• dance @tag
┃◈┃• cringe @tag   
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                        break;
                    case '12':               
                        reply(`*꧁◈╾───☉ sᴄᴀᴍᴍᴇʀ ɪɴғᴏʀᴍᴀᴛɪᴏɴ ☉───╼◈꧂*
                        
╭────────●●►
┃★│ • BC tatta 1🖕🏻: https://api.whatsapp.com/send?phone=923181093514&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL🖕🏻
┃★│ • BC tatta 2🖕🏻: https://api.whatsapp.com/send?phone=923094230218&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL🖕🏻
┃★│ • BC tatta 3🖕🏻: https://api.whatsapp.com/send?phone=447715929714&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL🖕🏻
┃★│ • BC tatta 4🖕🏻: https://api.whatsapp.com/send?phone=923092342318&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL🖕🏻
┃★│ • BC tatta 5🖕🏻: https://api.whatsapp.com/send?phone=923304093758&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL🖕🏻
┃★│ • BC tatta 6🖕🏻: https://api.whatsapp.com/send?phone=923202231275&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL🖕🏻
┃★│ • BC tatta 7🖕🏻: https://api.whatsapp.com/send?phone=923134885399&text=hi+bc+scammer🖕🏻
┃★│ • BC gashti 1🖕🏻: https://api.whatsapp.com/send?phone=923299539369&text=hi+bc+scammer🖕🏻
╰────────────────────●●►

*꧁◈╾───☉ ɪᴍᴘᴏʀᴛᴀɴᴛ ᴍᴇssᴀɢᴇ ☉───╼◈꧂*
╭────────●●►
┃★│ • Please report to all these scammers's numbers.
┃★│ • If you have more scammers's number so contact me. I will add in my bot.
┃★│ • Owner: https://api.whatsapp.com/send?phone=923143702270&text=Hello+𓄂.𝑺𝑯𝑬𝑰𝑲𝑯+𝑨𝑳𝑰+🔥༽༼+♡+I+have+scammer's+number.+Please+add+his/her+number+in+your+bot🥰.
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                        
                        
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
