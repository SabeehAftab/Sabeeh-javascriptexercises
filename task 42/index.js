var names = [ 'harry', 'james', 'potter', 'Thomas'];
show_magicians.apply(this, names);

function show_magicians(){
 	for(var i=0; i<names.length; i++){
 		console.log("great",names[i]);
    }
}