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

function LoadSiteNavFragment(parentElementID) {
    loadCSS(navFragmentCSSFilePath);
    parentElement = document.getElementById(parentElementID);
    fetch(navFragmentFilePath)
        .then(response => {
            return response.text();
        })
        .then(siteNavMarkup => {
            parentElement.innerHTML = siteNavMarkup
        });
}
LoadSiteNavFragment('site-nav-container');
