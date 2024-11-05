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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_42_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDYxLFxuICAgICAgICAyOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTksXG4gICAgICAgIDM5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDU4LFxuICAgICAgICA3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQwLFxuICAgICAgICA2MCxcbiAgICAgICAgNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgzLFxuICAgICAgICA3NixcbiAgICAgICAgNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDMwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3LFxuICAgICAgICA4LFxuICAgICAgICA1NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTMsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MixcbiAgICAgICAgMTEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMixcbiAgICAgICAgMTg2LFxuICAgICAgICA4MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMixcbiAgICAgICAgODMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4MixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTzl3T2I0YW91WmZ5QXZZYlNrajVGZ0dpT1JJbjNtV0laVUNpK2lLYmQ5RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicmtLdXVkRk5ScGlLakUtazd6ZTR4Z1wiLFxuICBcInBob25lSWRcIjogXCJjYzgzZDBjMy01NGE3LTQ4NmUtYjgzZi1kOWQ0NmU4ZGJkZjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAsXG4gICAgICAyMTUsXG4gICAgICAyMjgsXG4gICAgICA1MSxcbiAgICAgIDIzOCxcbiAgICAgIDEzNyxcbiAgICAgIDIwMCxcbiAgICAgIDEyOSxcbiAgICAgIDIyOCxcbiAgICAgIDEzNCxcbiAgICAgIDE2NCxcbiAgICAgIDE1NSxcbiAgICAgIDE2MyxcbiAgICAgIDIyNixcbiAgICAgIDIyOCxcbiAgICAgIDEwMixcbiAgICAgIDYyLFxuICAgICAgNixcbiAgICAgIDE5NixcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MCxcbiAgICAgIDU0LFxuICAgICAgMjQwLFxuICAgICAgOTUsXG4gICAgICA5LFxuICAgICAgMjM2LFxuICAgICAgMTQxLFxuICAgICAgMjcsXG4gICAgICAyMjUsXG4gICAgICAyMzEsXG4gICAgICAxOTYsXG4gICAgICAyMDQsXG4gICAgICAxNCxcbiAgICAgIDgsXG4gICAgICAxNTIsXG4gICAgICAyMDYsXG4gICAgICAxMTYsXG4gICAgICA1MCxcbiAgICAgIDE3MSxcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpGVlJUM1pTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDkzNDk2MDMzMTo4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzk5OTQyMTg4OTc2MDc6ODlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVhuamZZQkVLL2dwcmtHR0EwZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTbnRZL0w3aURtS0R2cHgxY3FIdndmUktjYmZ6WGM2WHN5TlZlVEUvV244PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImdXdEdEaW9GbmVMUXMyeEFlOWgxSFdoeTJQT2dENk9EK1RGcGRyeUl2cFZRajQzVjlzZGZOWEVROUllVmJFWU1VbkNicnROZzJuOXAyVGVtcHdaZkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInA4TE40REtOeEJJc0JteWY2aDlYWmFqcDdnUWxPK05wUFVORkhIQWx4dVhDNmp3S3NreVZuRVNpMFY1VkIwcjdZZndrUGxMbnFMcG9GNzJDWTd1Z0NRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTM0OTYwMzMxOjg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDc4NTMzMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
