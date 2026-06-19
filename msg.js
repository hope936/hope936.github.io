function getMsgList(){
    return JSON.parse(localStorage.getItem("msgList")) || [];
}
function addMsg(name,content){
    let list = getMsgList();
    let time = new Date().toLocaleString();
    list.push({name,content,time});
    localStorage.setItem("msgList",JSON.stringify(list));
}
