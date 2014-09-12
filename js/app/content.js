chrome.extension.onMessage.addListener(
function (request, sender, sendResponse) {

    if (request.action == 'PageInfo') {
        var validUrls = ['org', 'com', 'net'];
        var origin = window.location.origin + '/';
        var pageInfos = [];

        $('img').each(function() {
            var pageInfo = {};
            
            var src = $(this).attr('src');
            var alt = $(this).attr('alt');

            if (util.validSource(src)) {
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