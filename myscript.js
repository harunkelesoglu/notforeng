
var progress=0;
setInterval(function myFunction() {
   var word=document.getElementById('container').innerHTML;

var opt={
    type: "progress",
    title: "Vocabulary Improvement",
    message:word,
    iconUrl: "yo.png",
    progress:progress
};
    progress=progress+5;
    chrome.notifications.create(opt)
},600000);

