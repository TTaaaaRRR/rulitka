var base = {
    newUser: function(id) {
        this.users.push({litid: id, balanse: 0, lastTr: null});
        userhash(this.users.length - 1);
    },

    users: [
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

    ]

};

function userhash(user){
    base.users[user].hash = md5(JSON.stringify(base.users[user]));
}

var methods = {
    push: function(x, id){
        base.users[id].balanse += x;
        userhash(id);

    },
    pop: function(x){
        
    },
    bet: function(x){
        
    },
    send: 0
    
}

var op = {

    newTr: function(params){
        this.his.push(params);
        this.his[this.his.length - 1].prevHash = md5(JSON.stringify(this.his[this.his.length - 2]));
    },

    his: [
        {coin: 0, val: "PUSH 100", loss: "0", user: base.users.Lit},
        {coin: 100, val: "BET 10", loss: "0", user: base.users.Fed, prevHash: "0"},
    ]
};