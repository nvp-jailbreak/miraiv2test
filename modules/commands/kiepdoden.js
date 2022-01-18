const fs = require("fs");
module.exports.config = {
	name: "kiepdoden",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "NVP", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "bỏ đê",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Kiếp đỏ đen")==0 || (event.body.indexOf("kiếp đỏ đen")==0)) {
		var msg = {
				body: "QUAY XE ĐI BẠN Ơi =)))",
				attachment: fs.createReadStream(__dirname + `/noprefix/kiepdoden.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}