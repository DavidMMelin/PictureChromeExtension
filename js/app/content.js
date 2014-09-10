//alert('content script loaded');

chrome.extension.onMessage.addListener(
function (request, sender, sendResponse) {
    // debugger;
    if (request.action == 'PageInfo') {
        var pageInfos = [];

        $('img').each(function() {
            var pageInfo = {};
            
            var src = $(this).attr('src');

            if (src != null )//&& href.indexOf("http") == 0)
            {
                //only add urls that start with http
                //check for min height and width
                pageInfo.url = src;
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