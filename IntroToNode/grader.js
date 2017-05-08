function average(scores){
    
    //take array and return average score, rounded to whole number
    var sum = 0;
    for (var i = 0; i < scores.length; i++){
        sum+=scores[i];
    }
    var newAverage = sum/scores.length;
    return Math.round(newAverage);
}

var scores = [90,98, 89, 100, 100, 86, 94];
console.log(average(scores));

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));
