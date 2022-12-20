chrome.action.onClicked.addListener(function() {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tab) {
			var url = tab[0].url
			var item = tab[0].title
			chrome.bookmarks.create({
			'title': item,
			'url': url,
			'parentId': '2'
		})
	});

});