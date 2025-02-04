<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" />
    <xsl:template match="/">
        <section class="info">
            <span class="name">
                <xsl:value-of select="resume/info/name" />
            </span>
            <span class="pronouns">
                <xsl:value-of select="resume/info/pronouns" />
            </span>
            <span class="email">
                <xsl:value-of select="resume/info/email" />
            </span>
            <span class="phone">
                <xsl:value-of select="resume/info/phone" />
            </span>
            <span class="links">
                <xsl:for-each select="resume/info/links/link">
                    <ul>
                        <li>
                            <a href="{@url}">
                                <xsl:value-of select="." />
                            </a>
                        </li>
                    </ul>
                </xsl:for-each>
            </span>
        </section>
        <section class="experiences">
            <h2>Experience</h2>
            <xsl:for-each select="resume/experiences/experience">
                <div class="experience">
                    <span class="title">
                        <xsl:value-of select="title" />
                    </span>
                    <span class="company">
                        <xsl:value-of select="company" />
                    </span>
                    <span class="location">
                        <xsl:value-of select="location" />
                    </span>
                    <span class="dates">
                        <xsl:apply-templates select="dates" />
                    </span>
                    <span class="description">
                        <xsl:value-of select="description" />
                    </span>
                </div>
            </xsl:for-each>

        </section>
    </xsl:template>

    <xsl:template match="dates">
        <!-- <xsl:value-of select="start/month" /> -->
        <xsl:apply-templates select="start/month" />
        <xsl:text>&#xa;</xsl:text>
        <xsl:value-of select="start/year" />
        <xsl:text> - </xsl:text>
        <!-- <xsl:value-of select="end/month" /> -->
        <xsl:apply-templates select="end/month" />
        <xsl:text>&#xa;</xsl:text>
        <xsl:value-of select="end/year" />
    </xsl:template>

    <!-- this template is used to convert month number to name -->
    <xsl:template match="month">
        <xsl:choose>
            <xsl:when test=". = '01'">JAN</xsl:when>
            <xsl:when test=". = '02'">FEB</xsl:when>
            <xsl:when test=". = '03'">MAR</xsl:when>
            <xsl:when test=". = '04'">APR</xsl:when>
            <xsl:when test=". = '05'">MAY</xsl:when>
            <xsl:when test=". = '06'">JUN</xsl:when>
            <xsl:when test=". = '07'">JUL</xsl:when>
            <xsl:when test=". = '08'">AUG</xsl:when>
            <xsl:when test=". = '09'">SEP</xsl:when>
            <xsl:when test=". = '10'">OCT</xsl:when>
            <xsl:when test=". = '11'">NOV</xsl:when>
            <xsl:when test=". = '12'">DEC</xsl:when>
        </xsl:choose>
    </xsl:template>
</xsl:stylesheet>