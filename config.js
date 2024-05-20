const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_31_05_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDM0LFxuICAgICAgICA5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDczLFxuICAgICAgICAyMTgsXG4gICAgICAgIDY5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxODgsXG4gICAgICAgIDkwLFxuICAgICAgICA1MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDU2LFxuICAgICAgICA0MixcbiAgICAgICAgODUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDYwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUxLFxuICAgICAgICAzNCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA2MixcbiAgICAgICAgNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDg2LFxuICAgICAgICA2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDkwLFxuICAgICAgICA0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU1LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMixcbiAgICAgICAgOTksXG4gICAgICAgIDE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDYwLFxuICAgICAgICA3LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDMwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDczLFxuICAgICAgICAyMjMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDksXG4gICAgICAgIDU4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSVhCa0JONUJPMThOekZ2RDhDRFk2TlBpMW1PSDk5bUhGcTJRTTFlUTVjdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT1RMRnZKdldTaWVBZU9qejFVbWYtQVwiLFxuICBcInBob25lSWRcIjogXCI4MTRhNjM3MC1iOTQ1LTQzM2ItYjRhZC01ODQ2OThjZDBmN2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEwLFxuICAgICAgNzcsXG4gICAgICAyNCxcbiAgICAgIDE1OCxcbiAgICAgIDE2MCxcbiAgICAgIDI3LFxuICAgICAgNzcsXG4gICAgICA4LFxuICAgICAgMjEyLFxuICAgICAgMjQxLFxuICAgICAgMjAwLFxuICAgICAgMzEsXG4gICAgICA5NixcbiAgICAgIDE5NyxcbiAgICAgIDEzNixcbiAgICAgIDIxMixcbiAgICAgIDMsXG4gICAgICA4MixcbiAgICAgIDE0NixcbiAgICAgIDEyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzksXG4gICAgICA4NixcbiAgICAgIDE4NixcbiAgICAgIDg4LFxuICAgICAgMjEsXG4gICAgICA4MCxcbiAgICAgIDEyMixcbiAgICAgIDI0MCxcbiAgICAgIDU0LFxuICAgICAgMTMwLFxuICAgICAgMjQxLFxuICAgICAgNzAsXG4gICAgICA5NyxcbiAgICAgIDM2LFxuICAgICAgMTkwLFxuICAgICAgMzQsXG4gICAgICAxOTMsXG4gICAgICAxNjQsXG4gICAgICAyNDYsXG4gICAgICA5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyWlBUQks2RFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQ2NDQwNTk1Ojg1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTAxMDYxMzM5NTQ4MTM6ODVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTWJ1dmlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQSzQrKzhERU5EY3E3SUdHQXNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImlWUkdqVUsxejZJVWZxazcyTERrRzdaZ1Z4dGdOUnIvNDZXQ0ZIMVVHQ1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVWFlb0tmRjI0QTNwekUvN2xTbS84djA3UUs4Ky9rdVR6eFpIQkxVcU85NHVSMkpxN1dMSkpPWjgwYXZXZVNTaVVwNTgwTEVvQlVkZSt6RkNiZk41QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwib0o2Sm82WE4rQUozTHJyaDZ6eDByYURLQm9rclBGS0VDWDNvRTU3SzJEaXZxc0loSHlqZFBmRS9aVmFuS2J2ak9ndzFyeTN6Z3cza1lnSUxCWE5LQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQ2NDQwNTk1Ojg1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTYxODY3MDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGT0xcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZPTC5qc29uIjogIntcImtleURhdGFcIjpcIlVXL096alMxeXQrdkhNcUdHek8veGVWWUxsTjZvNTBPRmloTVFSTEEzMk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA0MDExMjc1MyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
