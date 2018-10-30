function load() {
    var MUSIC_API = " https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs";
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsObject = JSON.parse(http.responseText);
            var content = '';
            for (var i = 0; i < jsObject.length; i++) {
                var videoItem = '';
                videoItem += ''+ jsObject[i].id +'';
                videoItem += ' ';
                videoItem += ''+ jsObject[i].name +'';
                videoItem += ' Click Me!';
                videoItem += '';
                content += videoItem;
            }
            document.getElementById('myMusic').innerHTML = content;
        }
    };
    http.open("GET", MUSIC_API, true);
    http.send();
}

var musicLink = document.getElementById('musicFrame');

function doSomeThing(musicLink1) {
    musicLink.src = musicLink1;
}