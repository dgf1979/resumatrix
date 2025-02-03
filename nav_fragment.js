/**
 * This script is used to load a navigation fragment into a parent element.
 * iife is used to prevent global scope pollution.
 * 
 * @param {string} navFragmentFilePath - The URL of the navigation fragment file.
 * @param {string} navFragmentCSSFilePath - The URL of the navigation fragment CSS file.
 * @param {string} elementId - The ID of the element to which the navigation fragment will be appended.
 */
(function LoadSiteNavFragment(navFragmentFilePath, navFragmentCSSFilePath, elementId) {

    //just call a function to load your CSS
    //this path should be relative your HTML location
    function loadCSS(filename) {
        var file = document.createElement("link");
        file.setAttribute("rel", "stylesheet");
        file.setAttribute("type", "text/css");
        file.setAttribute("href", filename);
        document.head.appendChild(file);
    }

    // real bad hack, considering the use of synchronous XMLHttpRequest
    function fetchTextSynchronous(url) {
        const request = new XMLHttpRequest();
        request.open("GET", url, false); // `false` makes the request synchronous (deprecated)
        request.send(null);

        if (request.status === 200) {
            console.log(request.responseText);
        }
        return request.responseText;
    }

    function LoadSiteNavFragment(parentElementID) {
        loadCSS(navFragmentCSSFilePath);
        parentElement = document.getElementById(parentElementID);
        const siteNavMarkup = fetchTextSynchronous(navFragmentFilePath);
        parentElement.innerHTML = siteNavMarkup;
    }
    LoadSiteNavFragment(elementId);

})('/nav_fragment.html', '/nav_fragment.css', 'site-nav-container');
