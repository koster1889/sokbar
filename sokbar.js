// ==UserScript==
// @name        SokBar
// @namespace   com.koster1889.dev
// @description Search bar selection by key shortcut.
// @include     *
// @version     1
// @grant       none
// ==/UserScript==


LKey = 76

currentLocation = new URL(window.location).hostname

searchElementFinder = {
  "sv.wikipedia.org": function() {
    return document.getElementById("searchInput");
  },"en.wikipedia.org": function() {
    return document.getElementById("searchInput");
  } // More to be added as we go
}

if (currentLocation in searchElementFinder) {
  finder = searchElementFinder[currentLocation]
} else {
  finder = function () {
    // Standard stuff
    return document.getElementsByName("q")[0];
  }
}

window.onkeyup = function(e) {
  var key = e.keyCode ? e.keyCode : e.which;
  if (e.shiftKey && key == LKey && e.ctrlKey) {
    finder().select();
  }
	}
