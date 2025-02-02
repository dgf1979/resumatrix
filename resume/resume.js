(async function XMLtransformation(xslUrl, xmlUrl, elementId) {

    async function getXmlString(url) {
        return (await fetch(url).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error fetching ${url} status: ${response.status}`);
            }
            return response.text();
        }));
    }

    const [xmlString, xslString] = await Promise.all([getXmlString(xmlUrl), getXmlString(xslUrl)]);
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlString, `application/xml`);
    const xsl = parser.parseFromString(xslString, `application/xml`);

    const xsltProcessor = new XSLTProcessor();
    try {
        xsltProcessor.importStylesheet(xsl);
    }
    catch (e) {
        console.error(e.message);
        return
    }

    try {
        var resultDocument = xsltProcessor.transformToFragment(xml, document);
        if (resultDocument === null) {
            document.getElementById(elementId).appendChild(xml.documentElement);
            throw new Error("XSLT Transformation failed.");
        }
    }
    catch (e) {
        console.error(e.message);
        return;
    }

    // Insert the result into the page
    document.getElementById(elementId).appendChild(resultDocument);

})(`resume.xslt`, `resume.xml`, `resume`);