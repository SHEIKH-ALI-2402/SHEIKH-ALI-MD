const fetch = require('node-fetch'); 
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');
const { translate } = require('@vitalets/google-translate-api');
const axios = require('axios')

cmd({
  pattern: "quran",
  alias: ["surah"],
  react: "🤍",
  desc: "Get Quran Surah details and explanation.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {

    let surahInput = args[0];

    if (!surahInput) {
      return reply('Type Surah Number or Type *.Surahmenu* for getting Surah numbers');
    }

    let surahListRes = await fetchJson('https://quran-endpoint.vercel.app/quran');
    let surahList = surahListRes.data;

    let surahData = surahList.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    );

    if (!surahData) {
      return reply(`Couldn't find surah with number or name "${surahInput}"`);
    }

    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`);
    
    if (!res.ok) {
      let error = await res.json(); 
      return reply(`API request failed with status ${res.status} and message ${error.message}`);
    }

    let json = await res.json();

    let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur', autoCorrect: true });

    let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true });

    let quranSurah = `
🕋 *Quran: The Holy Book ♥️🌹قرآن مجید🌹♥️*\n
📖 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
💫Type: ${json.data.type.en}\n
✅Number of verses: ${json.data.ayahCount}\n
⚡🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
⚡🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}`;

    await conn.sendMessage(
      from,
      {
        image: { url: `https://i.ibb.co/chcyQbkP/Snapchat-850352165.jpg` },
        caption: quranSurah,
        contextInfo: {
          mentionedJid: [m.sender], 
          forwardingScore: 999,  
          isForwarded: true,   
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363333032882285@newsletter', 
            newsletterName: '𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡', 
            serverMessageId: 143
          }
        }
      },
      { quoted: mek }
    );

    if (json.data.recitation.full) {
      await conn.sendMessage(from, {
        audio: { url: json.data.recitation.full },
        mimetype: 'audio/mpeg',  
        ptt: true
      }, { quoted: mek });
    }

  } catch (error) {
    console.error(error);
    reply(`Error: ${error.message}`);
  }
});


cmd({
    pattern: "quranmenu",
    alias: ["surahmenu", "surahlist"],
    desc: "menu the bot",
    category: "menu",
    react: "❤️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body,isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `❤️  ⊷┈ *QURAN KAREEM* ┈⊷  🤍

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
114. 🌐 𝐀𝐍-𝐍𝐀𝐒 (Mankind) - الناس (انسانیت)`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/chcyQbkP/Snapchat-850352165.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363333032882285@newsletter',
                        newsletterName: '𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/XdTechPro/KHAN-DATA/raw/refs/heads/main/autovoice/Quran.m4a' },
            mimetype: 'audio/mp4',
            ptt: false
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
