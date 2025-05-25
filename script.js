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