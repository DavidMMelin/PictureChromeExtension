util = {};
util.stringExists = function (arr, str) {
	return (new RegExp(arr.join("|")).test(str));
}