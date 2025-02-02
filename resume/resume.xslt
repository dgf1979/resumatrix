<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" />
    <xsl:template match="/">
        <ul>
            <xsl:for-each select="books/book">
                <li>
                    <strong>
                        <xsl:value-of select="title" />
                    </strong> by <em>
                        <xsl:value-of select="author" />
                    </em>
                </li>
            </xsl:for-each>
        </ul>
    </xsl:template>
</xsl:stylesheet>