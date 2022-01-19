const fs = require("fs");
module.exports.config = {
	name: "hảo",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Thế mới là hảo hán 👍 ",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("hảo")==0 || (event.body.indexOf("Hảo")==0)) {
		var msg = {
				body: "Hảo hán👌",
				attachment: fs.createReadStream(__dirname + `/noprefix/hao.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }