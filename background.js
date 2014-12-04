chrome.runtime.onInstalled.addListener(function(details) {
  console.log("onInstalled invoked; reason: " + details.reason);
});
