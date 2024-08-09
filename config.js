//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZypgoIyPtaodVKp61o";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaZypgoIyPtaodVKp61o";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "263780597802";
global.owner = process.env.OWNER_NUMBER || "263780597802";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUhDVlR0Tms1S1l2TlJEdzVaaUZLZkVVcGZ3bzFCMnJlWlJCWms5ZGwyMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0hyU0ZXajZNYmdUKytSTEpFZ1p3ZEE5TUdkVThpU1NJRVljNXJ0bi9pST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTWlRbTFGYzBiOGp5cytmZHJlR0htbnNzNXFKVlJjc3grVTVlT0VSU2tBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2M3RkMkg4eHp6QnNJdEt6MHRFQ04zVWFlWnJxbExJN2t5dDVEcVpPRzNRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNFaHVVN3d6ZHJ2YnNGSDNJR09OMlhwUVZydVFEUlROakJNZ1l3MFMya2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjkyL3hnQTFVSWJKTjg1SGdvczFabC9MeXNpK1NkZmFYblBkTlY3K0VyQTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE8zb3VFWXpTLzFNZjl5ZkI3WW1FYjZ4dUJjL29jYVo4LzVDOHhqdm4yWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkZDczgrWXdyeGZzOWJ3NXlGeGo3Tk5NQ3VqcHRQbWlRVXlvcGsrY2FuTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhlTk8wemh5a3M3bFB3RGRYL01RNytROTlNQXpNM3VPV0dXRU1BYThVNkZXTzJkSC9OdFJlS2NjWkYzc0ZwQVhLTHJOOG5qQmRLNUhMS1JBME9CTEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU3LCJhZHZTZWNyZXRLZXkiOiIwWThGcjZVeXQ0aUFUeTJndVRLOVVHcm42TENPQy9mSWQ1T1lkSWhvazVzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMeS1oM1ZOMFIxeXpXRHBRbXJVQk9nIiwicGhvbmVJZCI6ImRhZmQ1ZjI3LTc4ZDgtNGQyYy1hOTlmLWFmMjdmODRlYzg4ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RnZVQkYxMGozZ01LZHVZdXV1OGl0TndEcmc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFMzVmtRZWVnQmF5ZXRqdkZFNjhhekNjZUpjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFQU0FDUEQxIiwibWUiOnsiaWQiOiIyNjM3MTQyOTY1NTA6MTlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lXRnFOUUhFT3FjMTdVR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkUyTzJsdTRHTGJjVExMdENVczIwdWhGSVpKTm16dStCK2pKcWRSTzF4eG89IiwiYWNjb3VudFNpZ25hdHVyZSI6IjhPRThxSFNwdXlNMEgrN0FWN2gxc0lEZUFmQ3V3TTVBalNJZlE0OHJMK2NTT3lsTkdTN3pYdW1JRmpvVHJyTHdlRUk0eVdyQVhuMVhmNCt3Q3BKMUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJycFZZWnR5NkFCMEVLem82MVlRVGkrejU5UkVNOVdIZTFFSVhXVjBtUWltNWFXUDdic3FHc0xFdlpyWFFocXVzT1dNaFEzWFpqbEJCWGVpUVdBYXdCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxNDI5NjU1MDoxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSTmp0cGJ1QmkyM0V5eTdRbExOdExvUlNHU1Raczd2Z2ZveWFuVVR0Y2NhIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzMTkwOTA0fQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`Sir DICKSON MD™`",
  author: process.env.PACK_AUTHER || "SAGE_DICKSON-V2",
  packname: process.env.PACK_NAME || "DIGITAL DYNAMO LAB",
  botname: process.env.BOT_NAME || "SAGE_DICKSON_V2",
  ownername: process.env.OWNER_NAME || "Mr Dickson",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "Mr Dickson Modes").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
