chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'www.facebook.com', urlContains: 'events' },
            css: ["input[name='checkableitems[]']"]
          }),
              new chrome.declarativeContent.PageStateMatcher({
                css: ["form[action='/ajax/pages/invite/send/?ref=friend_summary_section']"]
              })
       ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});
