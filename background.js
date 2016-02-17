




setInterval(function(){
    $.get("http://localhost/chrome-notification/dosya.php", function (data) {
       callback(data);
    });
},500000);

function callback(data){

    var doc=document.getElementById('container');
    doc.innerHTML=data;

}



/*
var opt={
    type: "basic",
    title: "Primary Title",
    message: text,
    iconUrl: "icon.png"
};
setInterval(function(){
    chrome.notifications.create("",opt,function(){});
},5000);
*/
