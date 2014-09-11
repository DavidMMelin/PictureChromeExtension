//alert('content script loaded');

chrome.extension.onMessage.addListener(
function (request, sender, sendResponse) {
    var validUrls = ['org', 'com', 'net'];

    // debugger;
    if (request.action == 'PageInfo') {
        var origin = window.location.origin + '/';
        var pageInfos = [];

        $('img').each(function() {
            var pageInfo = {};
            
            var src = $(this).attr('src');
            var alt = $(this).attr('alt');

            if (util.validSource(src)) {
                //check for min height and width
                if (util.stringExists(validUrls, src)) {
                    if (src.indexOf("http") != 0) {
                        src = 'https:' + src;
                    }
                }

                if (src.indexOf("http") != 0) {
                    src = origin + src;
                }
                pageInfo.url = src;
                pageInfo.alternate = util.validAlternate(alt) ? alt : "No Location Found"
                pageInfos.push(pageInfo);
            }
        });

        sendResponse(pageInfos);
    }
});

// notes:

// - Use the images alternate description
// - Find a dictionary with locations to limit the words used from description
// - Maybe find a way to search in the parent and child divs

// - use image exif geolocation coordinates?
// - check current, parent, and child container for text. Run against dictionary of locations
// API that guesses location based upon landmark