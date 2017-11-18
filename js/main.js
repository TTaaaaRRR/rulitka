function userhash(user){
    users[user].hash = md5(JSON.stringify(users[user]));
}


function newUser(id) {
    users.push({litid: id, balanse: 0, lastTr: null});
    userhash(users.length - 1);
}

function newTr(params){
    op.his.push(params);
    op.his[op.his.length - 1].prevHash = md5(JSON.stringify(op.his[op.his.length - 2]));
}

var users = [
        {
            litid: 0,
            balanse: 100,
            lastTr: null,
            hash: "0" 
        },
        {
            litid: 1,
            balanse: 0,
            lastTr: null,
            hash: "0" 
        },

    ];



var methods = {
    push: function(x, id){
        users[id].balanse += x;
        userhash(id);

    },
    pop: function(x){
        
    },
    bet: function(x){
        
    },
    send: 0
    
}

var op = {

    

    his: [
        {coin: 0, val: "PUSH 100", loss: "0", user: users.Lit},
        {coin: 100, val: "BET 10", loss: "0", user: users.Fed, prevHash: "0"},
    ]
};