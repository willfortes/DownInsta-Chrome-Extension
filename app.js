//Script run in browser tab
const code = `(function getUrls(){
    let element = document.querySelectorAll("img.FFVAD")[0];

    const urlImage = element.src;
                
    return { urlImage };
})()`; 

//Select and execute browser tab
chrome.tabs.query({ 
    active: true, 
    lastFocusedWindow: true,
    windowId: chrome.windows.WINDOW_ID_CURRENT 
}, function(tabs) {
        const { id: tabId } = tabs[0].url;
        
        chrome.tabs.executeScript(tabId, { code }, function (result) {

            let { urlImage } = result[0];

            document.getElementById("image").src=urlImage;
        });
});