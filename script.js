function toCase(text) {
  // write your code here
	if (!text) {
    return "-";
  } else {
    return text.toLowerCase() + "-" + text.toUpperCase();
	}
}

// DO not change the code belo

const text = prompt("Enter text:");
alert(toCase(text));
