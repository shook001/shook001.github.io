var tri = "#";



for(tri; tri.length < 8; tri += "#"){

    console.log(tri);
}

count = 0;

for(count; count < 101; count++){
    if(count % 3 == 0 && count % 5 == 0){
        console.log("FizzBuzz");
    }
    if(count % 3 == 0){
        console.log("Fizz");
    }
    else if(count % 5 == 0){
        console.log("Buzz");
    }
    else{
    console.log(count);
    }
}

var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);