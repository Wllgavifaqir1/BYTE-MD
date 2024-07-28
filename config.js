
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "+252685625385";
global.sudo = process.env.SUDO || "+252685625385";
global.owner = process.env.OWNER_NUMBER || "+252685625385";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVB1ai9tOGhEM1lWUEpMeW81VmU4UjhQTEYraUhHZFpIUzk5ZjVxZlhsOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZklXcGhYRE5lQXNHREtSZWp1RHdPMG1yOEhUa3lFMEtuOFpSaFNpSFRVQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRk12WUxBNVF6bktmRld2cjgwN0E3cXlKV3BPYkVZSEdZQlNxdjJkY21JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTWNFbHhqS25FNnF5Qk55djNrekxhZzg2ajAwZEwya3ZvKzhxOFlSenhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1HUnJyaUV2R0t3S2FNNkJZWTk1YTlNd2RhRVlTUUliT1poUVFqdWJFM2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjMyb2pRd2g5bytTbko1Nk8vN0ZNS24ya3R2Z1hOOTBzUDNUbTRUbklNaFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0VPckcraHpwdVFYQ1JUSzNuMXFEdm41bjExb0JiREpzVVR1NUtXd0VGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjRneTFtU0U2ZThTUHJCUExkVnpZNytadFdxaFJJMzlSSWNZNVpaSWpWMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQ1cnRjVjByWTFuRjVsbXg3YkxOcCtjMlQxQ094M2huVVdYTWd2WWoxbVZBcEt4VlNlTSs4M0tqMGI2R096UzFlV3ZJY0FZSTAvR0duLytzV2RjdEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjAsImFkdlNlY3JldEtleSI6ImdqbXRMWHVqWjFSb3FLOGs4SWM5V2dXdEVTUnhpVjhsZC9sSFRBTTdkR2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjUyNjg1NjI1Mzg1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlEMUU2NDM3QzU5Rjc2RUIzREQyQjhDOUZFREY2MERFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIxMzkxMDl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjF6NDg1REc1U0RhV2o4VGpMZ3ZyNWciLCJwaG9uZUlkIjoiZWNkNmMxZDMtNGEyOS00ZWY2LThkN2EtNDEyNTZjZjU3YzY4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik83clhJSjFqNkx6bTNJd3JjYk1GVjdoQjFBYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHUWdHS3liUVhjOHVVdkdNQ1JVVjE1dTVEdkE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUVRUMVBUUloiLCJtZSI6eyJpZCI6IjI1MjY4NTYyNTM4NToxNEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHpXeHJFRkVOU0RsN1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoialV1VFQyUmdQd2krVVFpZXRQdXdrRGVpbHdzK2FZdEI1dlhKUkhSangxVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWkdZbGZ5WDBaN2pnTXVETURxeEk2OWZ4YmVrRE54a1IwcXc1M25hR0I5TFM1bmNtTlYzRmpRRnBQYnB6VFY4L3pZaWdTTGo1UDJHMVU3Z1FXQU9TQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6Ii9mUnBxd3NSMkNBckZjNjNUZkVGa3VzdmRlOGJza3ZqT0o4ZVhVUnI1N0xhT3BQMjRhS091VHZjZTcvWnJ3YlhvR0d5Z0xuN2xXMEdMUGU2M1NXZ0RBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjUyNjg1NjI1Mzg1OjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlkxTGswOWtZRDhJdmxFSW5yVDdzSkEzb3BjTFBtbUxRZWIxeVVSMFk4ZFYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIxMzkxMDUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQW5WIn0= ||





  


//___________________________________________________________________________________________________


  
  "Your session ID" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
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
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
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
