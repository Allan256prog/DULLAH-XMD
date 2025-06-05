const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA61Uy46jRhT9lai2tsa8jS21FMBgaL+wDX5FWWAo3i9XFbbxyJv+kWQxipRNpNHki/oL8gkR7u7MRDPpdKQgFnAp7j333HPue5AXEYYjWIP+e1Ci6OgQ2DySuoSgD+TK9yECbeA5xAF9kJgcKsx5oG/wmMx17XAiGa9O8lFSrV1lVc1p6sAsJHGrunfg2gZltU8j95WEhW3XnWWhznZ+p5PWs5oa2ZPpbriIlpFn+5vN2rMD3DGH9ukOXJuMToSiPFDLEGYQOekI1qYTobfBr2cKWo5FybJsP4o7qGWuw6qV5L24ReS9zy6VjTLW2ETUg7fBH66tMz3LTtxuQ6u9Ks6HrW63DEJjSOu0uEwHTjgYTdO9qVJP8HEU5NAzPJiTiNRv5n07yrKzFM4vVndWHM7TcgSNDR9p7lgs+Vm2TmoSG2urNViLbwM+CSx5ubfmkqqV43LVE2m92wsu2+5YKZ3WZryxB1XvotNO9DfgJnrRSvJfeJfUcrlKkulUm+Y1tu5xbC+V3VCdCot8WoZrNQhbHNwXdHp6G/waUcjXBrqAqE28wbR9YhZSF+k8S1bTWDY2BQ4qvlvYNvcZvkMq9BpKcqDjgciwC43sTmpMnQ7Hjbw3ER5WhumfXUEZWVYGx8lAMQkd9obakImHk7iw94K321WnSxXr6bBi2YBdRNtFcVyhQXB36yiBteGBPn1tAwSDCBPkkKjImxjD023geMcldBEkN3pBD1l8cJzbgbiO6sLfeTLB9paa8MF+bIflIfNDeOzxVm8f3IE2KFHhQoyhp0eYFKieQIydAGLQ/+E2qaZpBLOCwPvIA33A8EJXFHmKpjjme/zuFDoEO2X5LocEtIGPimwCQZ+gCrbB7QeBlySOFRlNZSlNEhSRUymapyRO63EDimWaFrOnolaUQUycrAR9usv1aE7gWPba/n9wKOqA6tKarKk0Q7EKzQtdidUERhD5LkVLwus4OOH6Yxvk8EyedNywz9Jt4EcIEzuvyrRwvBeRv3x0XLeocrKsc1dpHiAC/S/CkJAoD3DTWZU7yA2jI1SaPkDfd1IM/xo4RNB76eV5iSmF1+iQncqUYWv3oMHeJPqKmz5HfU1P+nSM4ziWEuieKLBUc64Jt0HuNKnA48Onx48/N/fDp8eHX757fPj98eHjLfrh8eG3x4dP3/3x04dfG9qeG2rqe5A4UYobvkexzJhbXb2HTCgaw6HEBZISSOAzAS/GehIuoy6YGN0rSs1svTTZVcykoxzDuWtHqh532FboxmvT2a4v9t03koA+yEfEOY+6ZxdVWLaW42QvK8dgH15awXY10MIsSiTF5SwDXTqSyGUWL1RWNjkuu9tFTwrguqO0NtVmxSXo0EX3nnmkzjcXtoEHj5ELvyzWaV0Cttp3ZkFn5JwPUrVsyef1TFUXeYVnfrmeh95S5uv5uoou4zDhpZysVnMotbyhh52ar7c7ndZbJ8Knnen2Yoz2K+nZ8reVkz6v+ujZjNHt1Y/gbXM+T+lfR/0EvFEkdW1/keN5F//DPpO9UPUKoZ4HmGT6bjfck9g8Ic7WNSOUuU6vU2wMOmYyDdPg2lijTB3iFygDfeDkHipuUkJF1UjcyP3ilWKKbBiD+VPnqYOJ9Nk233AiRT+dMlFR6g4OGxcEpn2fNB6opbJcEoe8uBBIzaXsWuD6J/k+aCywCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                 ANTIDELETE3 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
