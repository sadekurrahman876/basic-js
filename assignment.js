function kilometerToMeter(n) {
    var kilo = 1000;
    var meter = n * kilo;
    return meter;
}

// var result = kilometerToMeter(2);
// console.log(result);


function budgetCalculator(w,p,l){
    var watch = w * 50;
    var phone = p * 100;
    var laptop = l * 500;
    var total = watch + phone + laptop; 
    return total;
}

// var result = budgetCalculator(2, 2, 2);
// console.log(result);

function hotelCost(day){
    if(day<=10){
        var rent = 10 * 100;
    }else if (day<=20) {
        var firstTen = 10 * 100;
        var remaining = day - firstTen;
        var secondTen = 80 * remaining;
        rent = firstTen + secondTen;
    }else {
        var firstTen = 10 * 100;
        var secondTen = 10 * 80;
        var remaining = day - 20;
        var restdays = remaining * 50;
        rent = firstTen + secondTen + restdays; 
    }
    
    return rent;
}

// var totalRent = hotelCost(31);
// console.log(totalRent);


function megaFriend(array) {
    var longestName = "";
  
    array.forEach(function(name) {
      if(name.length > longestName.length) {
        longestName = name;
      }
    });
  
    return longestName;
  }
  
//   var FriendsName = megaFriend(["rofik","karim","jabbar", "Mubarak", "rubel", "pollob"]);
//   console.log(FriendsName);