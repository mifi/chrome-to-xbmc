$(function() {
	chrome.tabs.query({'active': true}, function(tabs) {
		var urls = chrome.extension.getBackgroundPage().tabUrls[tabs[0].id];
		if (urls != null && urls.length > 0) {
			$('#url-list').text(urls[0]);
		}
	});
});
