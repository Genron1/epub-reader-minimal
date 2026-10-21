/*!
 *
 *  # # Bibi Extension: Unaccessibilizer ("What a...")
 *
 *  * Reluctantly coded by Satoru Matsushima - https://bibi.epub.link or https://github.com/satorumurmur/bibi
 *  * Released into the public domain under the Unlicense - http://unlicense.org/UNLICENSE
 *
 */Bibi.x({id:"Unaccessibilizer",description:"What a...",author:"Satoru Matsushima (@satorumurmur)",version:"1.2.0"})(function(){"use strict";var e=this,t=["-webkit-","-moz-","-ms-",""];E.bind("bibi:postprocessed-item",function(n){"prevent"==e["select-elements"]&&t.forEach(function(e){["user-select","user-drag"].forEach(function(t){n.Body.style[e+t]="none"})}),"prevent"==e["save-images"]&&sML.forEach(n.Body.querySelectorAll("img, svg, image"))(function(e){t.forEach(function(t){["user-select","user-drag"].forEach(function(n){e.style[t+n]="none"}),O.Touch&&(e.style[t+"pointer-events"]="none")}),e.draggable=!1,e.addEventListener("contextmenu",O.preventDefault)}),"prevent"==e["use-contextmenu"]&&n.contentDocument.addEventListener("contextmenu",O.preventDefault)})});