"use strict";
var evt = {
    attach: function(node, eventName, func) {
        if (node.addEventListener) {
            node.addEventListener(eventName, func, false);
        } 
    },
    detach: function(node, eventName, func) {
        
        if (node.removeEventListener) {
            node.removeEventListener(eventName, func, false);
        } 
    },
    preventDefault: function(e) {

        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    }
};