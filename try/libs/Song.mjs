
let date = new Date();
date.setSeconds(3768);
if (3768 > 3600) {
    console.log(date.getHours());
    console.log(date.getMinutes());
    console.log(date.getSeconds());
} else {
    console.log(date.getHours());
}

class Song {
    constructor({idSong, title, duration, artist, album, likes} = {}) {
        this.idSong = idSong
        this.title = title
        this.duration = duration
        this.artist = artist
        this.album = album
        this.likes = likes
    }

    formatDuration(dureeInSec) {
        let date = new Date();
        date.setSeconds(dureeInSec);
        if (dureeInSec > 3600) {
            return date.getMinutes();
        } else {
            return date.getHours();
        }
    }
}