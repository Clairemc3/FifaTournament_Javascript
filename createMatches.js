//http://code.activestate.com/recipes/65200/

//shuffle an array - script copied from stackoverflow
function shuffleArray(array) {
  var i, j, temp;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function flatten(list){
var flattened = list.reduce(function(a, b) {
  return a.concat(b);
});
return flattened;
}  


function creatematches(playerslist){
  var players=flatten(shuffleArray(playerslist));
  if (players.length % 2){
    players.push(null)
  }
var nPlayers = players.length;
var half = nPlayers / 2 ;
var schedule = [];
  for (var x = 0;x<nPlayers-1;x++){
    var pairings = [];
    for (var y=0;y<half;y++){
      if (players[y+half] && players[y]){
        if (players[y] == null || players[nPlayers-y-1] == null){
          1+1;
        } else if (x % 3 && y == 0){        
          pairings.push([players[nPlayers-y-1],'vs',players[y]]);
        } else {
          pairings.push([players[y],'vs',players[nPlayers-y-1]]);
        }
      }
   }
    players.splice(1,0,players.pop());
    schedule.push(pairings);
  }
return flatten(schedule);
}