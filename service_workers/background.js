chrome.tabs.onUpdated.addListener(async (tabId, tab) => {
  if (tab.url && tab.url.includes("google.com/search")) {
    const queryParameters = tab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);
    const prompt = urlParameters.get("q");

    const rawData = await (
      await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.7,
        }),
      })
    ).json();

    console.log(prompt);
    console.log(getResponse(rawData));

    chrome.tabs.sendMessage(tabId, {
      prompt: prompt,
      response: getResponse(rawData),
    });
  }
});

function getResponse(rawData) {
  return String(rawData.choices[0].message.content);
}
