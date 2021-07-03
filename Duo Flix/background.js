chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason == "install") {
      if (chrome.runtime.setUninstallURL) {
        chrome.runtime.setUninstallURL('https://forms.gle/Cgv34WVhgms9MChv7');
      }
    }
  });