function BeerOnTheWall(numberOfBottle) {
    while (numberOfBottle >= 1) {
        var bottleWord = numberOfBottle === 1 ? "bottle" : "bottles";
        console.log(numberOfBottle + bottleWord + " of beer on the wall, " + numberOfBottle + bottleWord + " of beer.");
        console.log("Take one down and pass it around, ");

        numberOfBottle--; 

        if (numberOfBottle >= 1) {

            console.log(numberOfBottle + bottleWord + " of beer on the wall");
        } else {
            console.log("No more bottles of beer on the wall, no more bottles of beer.");
            console.log("Go to the store and buy some more, " + numberOfBottle + bottleWord + " of beer on  the wall");
        }
    }

    
}

BeerOnTheWall(99);

//while loop end here

// Now the same code is written using the "for" loop

function BeerOnTheWall(NewNumber) {
    for (i = NewNumber; i >= 1; i--) {
        var bottleWord = i === 1 ? "bottle": "bottles"; 
        console.log(i + " " + bottleWord + " of beer on the wall, " + i + " " + bottleWord + " of beer,");
        console.log("takes one down, and passes it around,");

        //recalculate the number of bottles
        bottleWord = (i - 1) === 1 ? "bottle" : "bottles";
        if ((i - 1) >= 1) {
            console.log((i - 1) + " " + bottleWord + " of beer on the wall.");
        } else {
            console.log("No more bottles of beer on the wall, no more bottles of beer,");
            console.log("Go to store and boy some more, 99 bottles of beer on the wall.");
        }
    }
    console.log(i);
}
BeerOnTheWall(99);
