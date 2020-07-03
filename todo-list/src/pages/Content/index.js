import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import App from './component/app';

console.log('This is the content page.');
const initTodo = () => {
  // Get space element in Kintone portal
  const portalSpace = document.querySelector('.kintone-portal-content-space');
  // Create div element for react
  const todoEl = document.createElement('div');
  portalSpace.appendChild(todoEl);
  todoEl.id = 'react-hook-todo';
  // Render React into the element
  render(<App /> , todoEl)
};
// Observe whether the node is available
const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (!mutation.addedNodes.length) return;
    for (let i = 0; i < mutation.addedNodes.length; i++) {
      const node = mutation.addedNodes[i];
      if (!node) return;
      if (node && $(node)[0].childNodes.length) {
        if ($(node)[0].className === 'ocean-portal-index') {
          // observer.disconnect();
          chrome.runtime.sendMessage({message: 'initialize the todo list'});
          initTodo();
        }
      }
    }
  })
});
// Start observing
console.log('observing started!');
observer.observe(document.body, { //document.body is node target to observe
  childList: true, //This is a must have for the observer with subtree
  subtree: true //Set to true if changes must also be observed in descendants.
});
