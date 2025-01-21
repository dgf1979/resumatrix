var converter = new showdown.Converter();

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

for (const [markdownFileName, properties] of Object.entries(blogPosts)) {
    fetch(markdownFileName)
        .then(response => {
            return response.text();
        })
        .then(markdown => {
            var html = converter.makeHtml(markdown);
            console.debug(properties, html);
            const element = document.createElement('div');
            element.innerHTML = html;
            document.body.appendChild(element);
        });
}




