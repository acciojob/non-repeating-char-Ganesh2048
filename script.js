function firstNonRepeatedChar(str) {
 // Write your code here
	for (let i = 0; i < str.length; i++) {
		var c=0;
		for (let j = 0; j < str.length; j++) {
			if(str.charAt(i)===str.charAt(j))
				c++;
		}
		if(c===1)
			return str.charAt(i);
		
	}
	return None;
}
//const input = prompt("Enter a string");
//alert(firstNonRepeatedChar(input)); 
