util = {};

util.stringExists = function (arr, str) {
	return (new RegExp(arr.join("|")).test(str));
};

util.validSource = function (src) {
	var valid = true;

	var invalidKeywords = ['icon', 'avatar', 'logo', 'small', 'menu', 'theme', 'gstatic', 'marker', 'header', 'banner', 'pixel', 'divider', 'button'];

	if (!src) valid = false;
	if (src.indexOf('gif') != -1) valid = false;
	if (src.indexOf('tiff') != -1) valid = false;
	if (util.stringExists(invalidKeywords, src)) valid = false;
    //need to check for min height and width

	return valid;
};

util.isBlank = function (val) {
	return (!val || !val.trim());
};

util.validAlternate = function (alt) {	
	return (!util.isBlank(alt) && 
			!util.stringExists(['IMG', 'photo', 'image', 'com', 'org', 'net', 'http', 'www'], alt));
};