(() => {
  let chatgptPrompt = "ChatGPT Loading...";
  let chatgptResponse = "";
  let googleResults = document.getElementById("res");
  let chatgptEmbed = document.createElement("div");
  let chatgptEmbeddingPrompt = document.createElement("div");
  let chatgptEmbeddingResponse = document.createElement("div");

  chrome.runtime.onMessage.addListener((data) => {
    chatgptPrompt = data.prompt;
    chatgptResponse = data.response;
    renderEmbedding(chatgptPrompt, chatgptResponse);
  });

  chatgptEmbeddingPrompt.id = "chatgpt-prompt";
  chatgptEmbeddingPrompt.style.background = "#363540";
  chatgptEmbeddingPrompt.style.color = "#d1d5db";
  chatgptEmbeddingPrompt.style.fontWeight = "700";
  chatgptEmbeddingPrompt.style.borderTopLeftRadius = "10px";
  chatgptEmbeddingPrompt.style.borderTopRightRadius = "10px";
  chatgptEmbeddingPrompt.style.padding = "20px";
  chatgptEmbeddingPrompt.style.lineHeight = "20px";
  chatgptEmbeddingPrompt.innerHTML = chatgptPrompt;

  chatgptEmbeddingResponse.id = "chatgpt-response";
  chatgptEmbeddingResponse.style.background = "#454655";
  chatgptEmbeddingResponse.style.color = "#d1d5db";
  chatgptEmbeddingResponse.style.borderBottomLeftRadius = "10px";
  chatgptEmbeddingResponse.style.borderBottomRightRadius = "10px";
  chatgptEmbeddingResponse.style.padding = "20px";
  chatgptEmbeddingResponse.style.lineHeight = "20px";
  chatgptEmbeddingResponse.innerHTML = chatgptResponse;

  googleResults.insertBefore(chatgptEmbed, googleResults.firstChild);
  chatgptEmbed.append(chatgptEmbeddingPrompt);
  chatgptEmbed.append(chatgptEmbeddingResponse);

  function renderEmbedding(prompt, response) {
    chatgptEmbeddingPrompt = document.getElementById("chatgpt-prompt");
    chatgptEmbeddingResponse = document.getElementById("chatgpt-response");

    chatgptEmbeddingPrompt.innerHTML = prompt;
    chatgptEmbeddingResponse.innerHTML = response;
  }
})();
