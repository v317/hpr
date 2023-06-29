// ==UserScript==
// @name         Remove Humble Bundle Partner Parameter
// @namespace    https://github.com/v317/hpr/
// @version      1.0
// @description  Removes the "?partner=username" query parameter from Humble Bundle URLs
// @author       Alt
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Get all the links on the page
    const links = document.getElementsByTagName('a');

    // Loop through each link
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        const url = new URL(link.href);

        // Check if the hostname is for Humble Bundle and it has the partner parameter
        if (url.hostname === 'www.humblebundle.com' && url.searchParams.has('partner')) {
            // Remove the partner parameter
            url.searchParams.delete('partner');
            link.href = url.href;
        }
    }
})();
