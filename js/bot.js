var VK = require("VK-Promise");
var vk = new VK("token");

vk.init_longpoll(); // Запускаем получение сообщений через LongPoll 
var rl = require("main");
 

vk.on("message",function (event, msg) { // Обрабатываем сообщения 

        if(msg.out) return;
        if(msg.from_id == "admin id"){
            if(msg.body.substr(0, 1) == "ll") {msg.send(JSON.stringify(eval(msg.substr(2))));}

        }

});