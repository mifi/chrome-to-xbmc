var mimeTypes = ['video/mp4', 'video/f4m', 'video/quicktime'];

var tabUrls = {};

chrome.webRequest.onHeadersReceived.addListener(function(details) {
	var tabId = details.tabId;

	for (var i=0; i<details.responseHeaders.length; i++) {
		var header = details.responseHeaders[i];
		if (tabId != -1 && header.name.toLowerCase() === 'content-type' && mimeTypes.indexOf(header.value.toLowerCase()) != -1) {
			console.log("Cat intercepted: " + details.url);

			if (!(tabId in tabUrls)) {
				tabUrls[tabId] = [];
			}

			tabUrls[tabId].push(details.url);
			// TODO cleanup
		}
	}
},
// filters
{
	urls: ["<all_urls>"]
},
['responseHeaders']);


/*chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.windows.create({
		url: "action.html", type: "popup", width: 200, height: 200});
});*/
