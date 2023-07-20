chrome.tabs.onUpdated.addListener((tabId, tab) => {
  console.log("Background");
  if (tab.url && tab.url.includes("google.com/search")) {
    const queryParameters = tab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);

    console.log(urlParameters.get("q"));

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlParameters.get("q"),
    });
  }
});
