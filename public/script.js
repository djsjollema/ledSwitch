$(document).ready(function(){
    var button01 = $("#button01");
    var state = false;
    var socket = io.connect();
    
    button01.on("click",function(){
        if(state){
            button01.val("aan");
            socket.emit("switch","uit");
            
        }else{
            button01.val("uit");
            socket.emit("switch","aan");
        }
        state = !state;
    });
});