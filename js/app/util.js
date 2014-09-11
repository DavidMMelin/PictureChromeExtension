util = {};
util.stringExists = function (arr, str) {
	return (new RegExp(arr.join("|")).test(str));
}

util.validSource = function (src) {
	var valid = true;

	var invalidKeywords = ['icon', 'avatar', 'logo', 'small'];

	if (!src) valid = false;
	if (src.indexOf('gif') != -1) valid = false;
	if (util.stringExists(invalidKeywords, src)) valid = false;

	return valid;
}