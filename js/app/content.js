﻿//alert('content script loaded');

chrome.extension.onMessage.addListener(
function (request, sender, sendResponse) {
    var validUrls = ['org', 'com', 'net'];

    // debugger;
    if (request.action == 'PageInfo') {
        var origin = window.location.origin;
        var pageInfos = [];

        $('img').each(function() {
            var pageInfo = {};
            
            var src = $(this).attr('src');
            var alt = $(this).attr('alt');

            if (util.validSource(src)) {

                //only add urls that start with http
                //check for min height and width
                //check url for words like (avatar, icon, logo, small)
                if (util.stringExists(validUrls, src)) {
                    if (src.indexOf("http") != 0) {
                        src = 'https:' + src;
                    }
                }

                if (src.indexOf("http") != 0) {
                    src = origin + src;
                }
                pageInfo.url = src;
                alt ? pageInfo.alternate = alt : "Missing Description"
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