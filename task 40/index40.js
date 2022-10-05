function make_album (artist, title, tracks)
{
var album_dict = {
"artist": artist,
"title": title,
}
if(tracks){
album_dict["tracks"]= tracks;
return album_dict;

}
};
album = make_album ('metallica', 'ride the lightning','0');
console.log(album);

album = make_album ('beethoven', 'ninth symphony', '0');
console.log(album);

album = make_album ('willie nelson', 'red-headed stranger', '0');
console.log(album);
album =make_album ('iron maiden', 'piece of mind', tracks=8);
console.log(album);