const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaiOvsV1iUxQRXWnv40R";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaiOvsV1iUxQRXWnv40R" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/rd62lp.jpg" || "https://files.catbox.moe/zqb0ar.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© ⏤͟͟͞∘̥⃟𝐃𝐘𝐁𝐘 𝐓𝐄𝐂𝐇 🕸️" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50934960331";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/rd62lp.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_53_11_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDI1LFxuICAgICAgICAyNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ4LFxuICAgICAgICA3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODksXG4gICAgICAgIDU3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDczLFxuICAgICAgICA1NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2OSxcbiAgICAgICAgNyxcbiAgICAgICAgNixcbiAgICAgICAgMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDksXG4gICAgICAgIDgyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjAyLFxuICAgICAgICA3MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjksXG4gICAgICAgIDg5LFxuICAgICAgICAyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU1LFxuICAgICAgICA4NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDM3LFxuICAgICAgICA0NixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQzLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDcsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMixcbiAgICAgICAgMixcbiAgICAgICAgMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDc2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIweHZwVmFBOG15U0h0S0V3SGpBY05QdTlsSHFLYlRMWkFUK01zcC9nWTg0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEcjgyRWtNdFItNjgxTlk1OThjR0RBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjkzNzM2ZWMzLWE3MjMtNDk2Zi05MjZmLTFkNGNhODRlODk5YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTYsXG4gICAgICAyNDksXG4gICAgICAyNDgsXG4gICAgICAxMDgsXG4gICAgICAxMzAsXG4gICAgICAyMjUsXG4gICAgICAxMDgsXG4gICAgICAyMDEsXG4gICAgICAxODUsXG4gICAgICA0MixcbiAgICAgIDE2OSxcbiAgICAgIDE2MixcbiAgICAgIDE4NixcbiAgICAgIDUwLFxuICAgICAgMTE3LFxuICAgICAgMzIsXG4gICAgICAxNjQsXG4gICAgICAxOTEsXG4gICAgICA0MixcbiAgICAgIDY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NSxcbiAgICAgIDUzLFxuICAgICAgMTk1LFxuICAgICAgMjM1LFxuICAgICAgMTgzLFxuICAgICAgMTcwLFxuICAgICAgMTEzLFxuICAgICAgNTksXG4gICAgICA0OCxcbiAgICAgIDEyMyxcbiAgICAgIDIzNSxcbiAgICAgIDE3LFxuICAgICAgMTU4LFxuICAgICAgMTgxLFxuICAgICAgMTk4LFxuICAgICAgNDUsXG4gICAgICAyMjYsXG4gICAgICAxNzIsXG4gICAgICAxNDYsXG4gICAgICAxNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFNFTlZDUURcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTMyNTY2MzI5OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJJc2FnaVwiLFxuICAgIFwibGlkXCI6IFwiMzk5NDM3ODMxMTI4MDU6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKYU9ySjBGRU15bDVya0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjdWbWhDOURmWWRGWnV6eWFEcXJYYUo5RGdYTnRNSVlzZHFFUlN5MzdSMkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRmt0MnIwWWowbHUzQWowOHZrSnhvZGVSYjlYTmZaTE92TWpKd3AwdXIyVmt2L0JSbGNBWGxUeVRlSC83QkZEV2V2OXI0VFFLTlhFdUdVZk1zZ2VPQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidCs4N2tjS3haeXJkcUdYR0VzRWRNbGszMzAySi9OTm0vT2l0MHBRWDNtcS9xcDBkS1BjdG53aEhvSk9semZMRUI0KzVCcHo5a0tKZnp6SUFEdlVVRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNTA5MzI1NjYzMjk6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE4MjYzODNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ⏤͟͟͞∘̥⃟𝐃𝐘𝐁𝐘 𝐓𝐄𝐂𝐇 🕸️" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "⏤͟͟͞∘̥⃟𝐃𝐘𝐁𝐘 𝐓𝐄𝐂𝐇 🕸️",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "⏤͟͟͞∘̥⃟𝐃𝐘𝐁𝐘 𝐓𝐄𝐂𝐇 🕸️",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
