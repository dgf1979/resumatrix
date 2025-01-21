var converter = new showdown.Converter();

fetch("blogtest_1.md")
    .then(response => {
        return response.text();
    })
    .then(markdown => {
        var html = converter.makeHtml(markdown);

        const element = document.createElement('div');
        element.innerHTML = html;
        document.body.appendChild(element);
    });


