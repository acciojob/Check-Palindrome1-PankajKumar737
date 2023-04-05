// complete the given function

function palindrome(str){
String newStr = str.split("").reverse().join("");
	if(str === newStr){
		return true;
	}
	return false;
}
//console.log(palindrome("racecar"));
module.exports = palindrome
