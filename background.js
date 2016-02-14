


var word=function(){
    $.get("http://localhost/chrome-notification/dosya.php", function(data){
        $('#container').html(data);
    });

};
setInterval(word,2000);