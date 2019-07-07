// ex 1

function numbersFromString(str) {
	var n = "";
	for(var i =0; i<str.length; i++) {
		if(!isNaN(parseInt(str[i]))){
			n = n + str[i];
		}
	}
	return n;
}

console.log(numbersFromString("12abc4c"));

// ex 2

function lettersFromString (str) {
	var letters = "";
	for(var i=0; i<str.length; i++) {
		if(isNaN(str[i])) {
			letters = letters + str[i];
		}
	}
	return letters;
}

console.log(lettersFromString("123abc4d"));

// ex 3

function firstFiveLetters (str) {
	var first = "";
	var i = 0;
	while (first.length<5) {
		if(!str[i]) {
				return "there are not 5 numbers in the string";
		}
		if(isNaN(str[i])) {
			first += str[i];
			}
			i++;
		}
		return first;
	}
console.log(firstFiveLetters("ab12cde345f"));
console.log(firstFiveLetters("ab124s145"));

// ex 4

function concatStrings (arr) {
	var concat = "";
	for(i = 0; i<arr.length; i++) {
		concat = concat + arr[i];
	}
	return concat;
}

console.log(concatStrings(["afara","este","cald"]));

// ex 5

function concatNumbFromArr (arr) {
	var numb = "";
	for (i = 0; i<arr.length; i++) {
		for(j=0; j<arr[i].length; j++){
		if(!isNaN(parseInt(arr[i][j]))) {
			numb += arr[i][j];
		}
	}
	}
	return numb;
}

console.log(concatNumbFromArr(["ab12","45af","sa542"]));


// ex 6

function inverseArr (arr) {
	var inverse = [];
	for (i = 0; i<arr.length; i++) {
		var string = "";
		for(var j = arr[i].length-1; j>=0; j--) {
			string += arr[i][j];
		}
		inverse.push(string); 
	}
	return inverse;
}

console.log(inverseArr(["ana","are","mere"]));

// ex 7

function factorial (n) {
	var f = 1;
	for(var i = 1; i<=n; i++) {
		f = f * i;
	}
	return f;
}

console.log(factorial(5));
console.log(factorial(3));

// ex 8

function mareDivizorComun (a, b) {
    if(a < b){
      var x = a;
      a = b;
      b = x;
    }
    for(var i = a; i > 0; i--){
      if(a % i === 0 && b % i === 0){
      	return i;
      }
    }
  }

  console.log(mareDivizorComun(20, 10));
  console.log(mareDivizorComun(14, 77));

  // ex 9

  function cmmmc (a, b) {
  	 if(a<b){
      var x = a;
      a = b;
      b = x;
    }
    for(var i=b; ; i++){
    	if(i%b === 0 && i%a ===0) {
    		return i;
    	}
    }
  }

  console.log(cmmmc(4,8));
  console.log(cmmmc(15, 45));

// ex 10

function totiDivizoriiNr (n) {
	var divizori = [];
    for(var i = 0; i <= n; i++){
      if(n % i === 0){
        divizori.push(i);
      }
    }
    return divizori;
  }

  console.log(totiDivizoriiNr(64));


// ex 11
function palindrom (str) {
	str = str + "";
	for (i=0; i < str.length/2; i++){
		if (str[i] !== str[str.length - i - 1]) {
			return false;
		}
	}
	return true;
}

console.log(palindrom(1234321));
console.log(palindrom(123456));

// ex 12

function sortNumbers(n){
    n = n + "";
    var arrFinal = [];
    for(var i = 0; i < n.length; i++){
      if(parseInt(n[i]) % 2 ===0){
        arrFinal.push(parseInt(n[i]));
      }
    }
    arrFinal.sort(function(a,b) {
      return a - b;
    });
    return arrFinal;
  }

  console.log(sortNumbers(2594751258));

  // ex 13

  function sortOddEven(arr) {
    arr.sort(function(a,b) {
      if(a % 2 === 0 && b % 2 !== 0 || a % 2 !== 0 && b % 2 === 0){
        return;
      } else if(a % 2 === 0 && b % 2 === 0){
        return a - b;
      } else if(a % 2 !== 0 && b % 2 !== 0){
        if(a < b){
          return 1;
        } else if(a > b) {
          return -1;
        } else {
          return 0;
        }
      }
    });
    return arr;
  }

  console.log(sortOddEven([57896]));

  // ex14 

   function binarNb(arr,n) {
    var left = 0;
    var right = arr.length -1
    arr.sort(function(a,b){
      return a - b;
    })
    while(left <= right){
      var middle = parseInt((left + right)/2);
      if(arr[middle] < n){
        left = middle + 1;
      } else if(arr[middle] > n){
        right = middle - 1;
      } else {
        return n + "este in array";
      }
    }
    return n + "nu este in array";
  }

  console.log(binarNb([1,2,3,5,7,9],1));
  console.log(binarNb([2,7,4,5,,9,4],7));

  // ex 15

  

