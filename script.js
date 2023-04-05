// complete the given function

function palindrome(str){
String newStr = str.split("").reverse().join("");
	if(str === newStr){
		return 1;
	}
	return 0;
}
module.exports = palindrome
