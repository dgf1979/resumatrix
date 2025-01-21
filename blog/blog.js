var converter = new showdown.Converter();

/*
    blogPosts is a dictionary where the key is the markdown file name and the value is an object with the title and date of the blog post.
*/
const blogPosts = {
    "blogtest_1.md": {
        title: "Blog Test 1",
        date: "2021-01-01",
    },
    "blogtest_2.md": {
        title: "Blog Test 2",
        date: "2021-01-01",
    },
}

const postContainerElement = document.getElementById("posts");
const postTemplateElement = document.getElementById("post-template");

for (const [markdownFileName, properties] of Object.entries(blogPosts)) {
    fetch(markdownFileName)
        .then(response => {
            return response.text();
        })
        .then(markdown => {
            var html = converter.makeHtml(markdown);

            addPostMarkup(properties.title, properties.date, html);
        });
}

function addPostMarkup(title, date, content) {
    let postElement = postTemplateElement.content.cloneNode(true);
    // generate an id from title for jump links
    postElement.querySelector(".post").id = title.replaceAll(" ", "-").toLowerCase();
    postElement.querySelector(".post-title").textContent = title;
    postElement.querySelector(".post-date").textContent = date;
    postElement.querySelector(".post-content").innerHTML = content;
    postContainerElement.appendChild(postElement);
}





