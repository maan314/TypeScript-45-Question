function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('Atif Aslam', 'Doorie');
var album2 = make_album('Rahat Fateh Ali khan', 'Yaad', 12);
var album3 = make_album('Amanat Ali', 'Yaad', 8);
console.log(album1);
console.log(album2);
console.log(album3);
