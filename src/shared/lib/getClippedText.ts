function getClippedText(text: string, length = 80) {
	if (text.length <= length) return text;
	else return text.slice(0, length + 1) + "...";
}

export { getClippedText };
