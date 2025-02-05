<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" />
    <xsl:template match="/">
        <section class="info">
            <div class="name">
                <xsl:value-of select="resume/info/name" />
            </div>
            <div class="pronouns">
                <xsl:value-of select="resume/info/pronouns" />
            </div>
        </section>
        <section class="contact">
            <div class="email">
                redacted@email.com
            </div>
            <div class="phone">
                (123)456-7890
            </div>
            <div class="location">
                123 No Doxxing St. City, State 12345
            </div>
        </section>
        <section class="links">
            <xsl:for-each select="resume/info/links/link">
                <a href="{@url}">
                    <xsl:value-of select="." />
                </a>
            </xsl:for-each>
        </section>
        <section class="experiences">
            <h1>Experience</h1>
            <xsl:for-each select="resume/experiences/experience">
                <div class="experience">
                    <h2>
                        <span class="title">
                            <xsl:value-of select="title" />
                        </span>
                        <xsl:text> @ </xsl:text>
                        <span class="company">
                            <xsl:value-of select="company" />
                        </span>
                        <xsl:text> — </xsl:text>
                        <span class="location">
                            <xsl:value-of select="location" />
                        </span>
                    </h2>
                    <div class="dates">
                        <xsl:apply-templates select="dates" />
                    </div>
                    <span class="description">
                        <xsl:value-of select="description" />
                    </span>
                </div>
            </xsl:for-each>

        </section>
        <section class="skills">
            <aside>
                <section>
                    <h1>Languages</h1>
                    <ul>
                        <xsl:for-each select="resume/languages/language">
                            <li>
                                <xsl:value-of select="." />
                            </li>
                        </xsl:for-each>
                    </ul>
                </section>
                <section>
                    <h1>Frameworks</h1>
                    <ul>
                        <xsl:for-each select="resume/frameworks/framework">
                            <li>
                                <xsl:value-of select="." />
                            </li>
                        </xsl:for-each>
                    </ul>
                </section>
                <section>
                    <h1>Stacks</h1>
                    <ul>
                        <xsl:for-each select="resume/stacks/stack">
                            <li>
                                <xsl:value-of select="." />
                            </li>
                        </xsl:for-each>
                    </ul>
                </section>
                <section>
                    <h1>Tools</h1>
                    <ul>
                        <xsl:for-each select="resume/tools/tool">
                            <li>
                                <xsl:value-of select="." />
                            </li>
                        </xsl:for-each>
                    </ul>
                </section>
            </aside>
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
            <xsl:when test=". = '1'">JAN</xsl:when>
            <xsl:when test=". = '2'">FEB</xsl:when>
            <xsl:when test=". = '3'">MAR</xsl:when>
            <xsl:when test=". = '4'">APR</xsl:when>
            <xsl:when test=". = '5'">MAY</xsl:when>
            <xsl:when test=". = '6'">JUN</xsl:when>
            <xsl:when test=". = '7'">JUL</xsl:when>
            <xsl:when test=". = '8'">AUG</xsl:when>
            <xsl:when test=". = '9'">SEP</xsl:when>
            <xsl:when test=". = '10'">OCT</xsl:when>
            <xsl:when test=". = '11'">NOV</xsl:when>
            <xsl:when test=". = '12'">DEC</xsl:when>
        </xsl:choose>
    </xsl:template>
</xsl:stylesheet>