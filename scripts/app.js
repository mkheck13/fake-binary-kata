// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
//  Return the resulting string.

// Note: input will never be an empty string




// I should be able to do this in a if else statement
// if x is below 5 return 0
// else return 1
// okay I misunderstood it, time to change my plan of attack
// can still do an if else but need to also use a for loop to iterate thru the array
// make a empty array to store our data
// 
function fakeBin(x){
    let data = "";
    for(let i = 0; i < x.length; i++){
        if(x[i] < 5){
            data += 0;
        }else{
            data += 1;
        }
    }
    return data;
}

// one that doesn't use and if else

function fakeBin(x){
    let data = "";
    for(let i of x){
        (i < 5) ? data += '0' : data += '1';
    }
    return data;
}