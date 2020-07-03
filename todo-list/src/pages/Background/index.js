import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';

console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.tabs.onActivated.addListener(tab => {
  console.log('tab: ', tab);
  chrome.tabs.get(tab.tabId, current_tab_info => {
    console.log('current_tab_info: ', current_tab_info);
    // chrome.tabs.executeScript(null, {
    //       file: '../Content/index.js'
    //     }, () => {
    //       console.log('inject index')
    //   })
  })
})
// chrome.tabs.executeScript(null, { file: '../Content/index.js'}, () => {
//   console.log('inject ')
// })
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === '') {
    console.log('Nothing'); 
  } else {
    console.log(request.message);
  }
})