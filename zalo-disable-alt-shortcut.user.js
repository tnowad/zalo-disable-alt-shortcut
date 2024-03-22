// ==UserScript==
// @name         Disable Alt Shortcut in Zalo
// @namespace    http://tampermonkey.net/
// @version      2024-03-22
// @description  Disables the Alt key shortcut functionality in Zalo chat to prevent interference with user interactions.
// @author       tnowad
// @homepage     https://github.com/tnowad/zalo-disable-alt-shortcut
// @run-at       document-start
// @match        https://chat.zalo.me/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zalo.me
// @grant        none
// ==/UserScript==

(() => {
  const container = document.querySelector("body");

  container.addEventListener(
    "keydown",
    function (e) {
      if (e.altKey) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    { passive: true },
  );
})();
