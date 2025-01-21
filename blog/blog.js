import { waitForElement } from '../lib/domutils.js';

var converter = new showdown.Converter();
converter.setFlavor('github');

/*
    blogPosts is a dictionary where the key is the markdown file name and the value is an object with the title and date of the blog post.
*/
const blogPosts = {
    "blogtest_1.md": {
        title: "First Post!",
        date: "2025-01-20",
        id: "first-post",
    },
    "blogtest_2.md": {
        title: "Markdown for blog content - so far so good",
        date: "2025-01-20",
        id: "markdown-for-blog-content-so-far-so-good",
    },
}

const postContainerElement = document.getElementById("posts");
const postTemplateElement = document.getElementById("post-template");

for (const [markdownFileName, properties] of Object.entries(blogPosts).reverse()) {
    fetch(markdownFileName)
        .then(response => {
            return response.text();
        })
        .then(markdown => {
            var html = converter.makeHtml(markdown);

            addPostMarkup(properties.title, properties.date, properties.id, html);
        });
}

function addPostMarkup(title, date, id, content) {
    let postElement = postTemplateElement.content.cloneNode(true);
    // generate an id from title for jump links
    postElement.querySelector(".post").id = id;
    postElement.querySelector(".post-title").textContent = title;
    postElement.querySelector(".post-date").textContent = date;
    postElement.querySelector(".post-content").innerHTML = content;
    postContainerElement.appendChild(postElement);
}

// Scroll to requested hash
// since the page is generated dynamically, we need to wait for the element to exist before scrolling to it
if (location.hash) {
    var requested_hash = location.hash.slice(1);
    waitForElement(location.hash, (element) => {
        console.log('Element exists:', element);
        document.getElementById(requested_hash).scrollIntoView();
    });
}







