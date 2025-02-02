const navFragmentFilePath = '/nav_fragment.html';
const navFragmentCSSFilePath = '/nav_fragment.css';

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
    request.open("GET", url, false); // `false` makes the request synchronous
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
LoadSiteNavFragment('site-nav-container');
