const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="cheekydrazzler@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/cheekydavy/MBUVI-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a7ca8d4777fa8ad977795.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254746440595" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254746440595";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/a7ca8d4777fa8ad977795.jpg",
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©MBUVI-MD" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MBUVI-ᴍᴅ 』```", //*『 MBUVI TECH』*\n https://wa.me/254746440595"),
 
  author : process.env.PACK_AUTHER|| "MBUVI-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "MBUVI-MD",
  ownername:process.env.OWNER_NAME|| "It's MBUVI",

  sessionName:process.env.SESSION_ID || "SUHAIL_04_59_03_22_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTU9YZ2NRQUR0REREZUE1VGVDSjNIRThpeVNMa2tjK2xvM3FCMUEvdTYyVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk1HMWdMMFZWV0NES3IybThtV3ZBWlRrSUROQTNvbXhuVGlFTVZjbGtNMFE9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiV0JrSS9iVitHTkh0UHNCd2hGenFaNUYwNmtGZ3A2OHFyTGRIbi9ZN2gzdz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInNURVN3QXVhNTU3djQxTHByWXBLNUNiU2R3ZDd5WjduTXBvMVdxU1prMUk9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwicUhwR2JNNlZ0SzdPQzA5dEkrc1B0Y2dpVkpNUE4wNmJDcmwvZDhLUWtuQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInZ3OW16TXA3TE43UktBQWdiMEZJalhjbVZEMjZXcFV3SnJRVmIyWEROVkU9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI2UGg3dDIxbitRWGY2UHJ2Q1B0eVdJS25qYitoOWcwUWhSNXY1Ni9ESm0wPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZHMxUnROVW52enI5bnZPaGphNFB2UkJkSXQrV3NGalJaVFF1MmdoWTRsYz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJWTU1XcFU0RTc2eDlxN1l3Wk9wbWtUazBTWUdHMjd6bFk0dFJqK2hmTk45STN3MnZwWks2Y0FBcnQ0aWJVdmNyUTNUZEpQNUExOWpRNSt2cEFLVUVqdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjIsXCJhZHZTZWNyZXRLZXlcIjpcIi9NWDJadS8vVEhYVFFZN2dGSXNVZlREV1diWXo3NndOOUtKRkZLdVZUZVU9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbXSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCIxRzBCZHYzUVF5MmYtT1V3dmdIekZBXCIsXCJwaG9uZUlkXCI6XCIyZWU2MmFmMS0xZGNiLTRjY2EtODNmYy04NTUxNTFkZWQ2MDZcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkFPR0pRaUJLL21DM3JGc2QxVHh0dHpRYzRPWT1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJQVVpMbFM2SElZUzdtdjJJb0tvdFpuSFRZbE09XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiMjM1NUtXVDlcIixcIm1lXCI6e1wiaWRcIjpcIjI1NDc0NjQ0MDU5NTo2NUBzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIxMTAxMDYxMzM5NTQ4MTM6NjVAbGlkXCIsXCJuYW1lXCI6XCJNYnV2aVwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTzY0Kys4REVLaWc5SzhHR0FFZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcImlWUkdqVUsxejZJVWZxazcyTERrRzdaZ1Z4dGdOUnIvNDZXQ0ZIMVVHQ1k9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCI1UFZDeEtiVVFMWkhsV2x2VStnaXdGTTlhVGRxRzAxZFhMWWxaRTNRMk1SK3VUdFJMVC9qejJ2YlY0TWlUUXJac3cwZ2NoVzFEYmZGRE5MT1pyRHhCZz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIkxva29iRm9XVEZOV3diV2U5b252eU1LMHo3Y25vNU4yaDIyaDFSMXRIaE5acUgyQzd0TWZZQVZBQm8wY0VCeWh4Uk5PN2RDRkNlbm8vWUNpV1R1MWdnPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNTQ3NDY0NDA1OTU6NjVAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCWWxVUm8xQ3RjK2lGSDZwTzlpdzVCdTJZRmNiWURVYS8rT2xnaFI5VkJnbVwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTEwODM1NjN9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "MBUVI",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "https://telegra.ph/file/232f475abf82b78b39da2.jpg",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
