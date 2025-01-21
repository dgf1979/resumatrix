const navFragmentFilePath = '/nav_fragment.html';

function LoadSiteNavFragment(parentElementID) {
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
