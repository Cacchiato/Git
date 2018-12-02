# HTML5 Study

## Features
- [I. DOCTYPE Declaration](#i-doctype-declaration)
- [II. HTML5 Elements](#ii-html5-elements)
	- [1. HTML5 New Elements](#1-html5-new-elements)
		- [1.1 Sectioning](#11-sectioning)
			- [&lt;article&gt;](#article)
			- [&lt;hgroup&gt;](#hgroup)
			- [&lt;header&gt;](#header)
			- [&lt;nav&gt;](#nav)
			- [&lt;aside&gt;](#aside)
			- [&lt;section&gt;](#section)
			- [&lt;footer&gt;](#footer)
		- [1.2 Text Content](#12-text-content)
			- [&lt;figure&gt;](#figure)
			- [&lt;figcaption&gt;](#figcaption)
		- [1.3 Inline Text Semantics](#13-inline-text-semantics)
			- [&lt;ruby&gt;](#ruby)
			- [&lt;rt&gt;](#rt)
			- [&lt;rp&gt;](#rp)
			- [&lt;mark&gt;](#mark)
			- [&lt;time&gt;](#time)
		- [1.4 Image and Multimedia](#14-image-and-multimedia)
			- [&lt;audio&gt;](#audio)
			- [&lt;video&gt;](#video)
		- [1.5 Embedded content](#15-embedded-content)
			- [&lt;source&gt;](#source)
			- [&lt;embed&gt;](#embed)
		- [1.6 Scripting](#16-scripting)
			- [&lt;canvas&gt;](#canvas)
		- [1.7 Form](#17-form)
			- [&lt;datalist&gt;](#datalist)
			- [&lt;meter&gt;](#meter)
			- [&lt;progress&gt;](#progress)
			- [&lt;output&gt;](#output)
		- [1.8 Interactive Elements](#18-interactive-elements)
			- [&lt;details&gt;](#details)
			- [&lt;summary&gt;](#summary)
			- [&lt;dialog&gt;](#dialog)
			- [&lt;menu&gt;](#menu)
			- [&lt;menuitem&gt;](#menuitem)
	- [2. Redefined Elements](#2-redefined-elements)
		- [2.1 Text content](#21-text-content)
			- [&lt;hr&gt;](#hr)
			- [&lt;dd&gt;](#dd)
			- [&lt;dt&gt;](#dt)
		- [2.2 Inline Text Semantics](#22-inline-text-semantics)
			- [&lt;small&gt;](#small)
			- [&lt;b&gt;](#b)
			- [&lt;i&gt;](#i)
			- [&lt;strong&gt;](#strong)
	- [3. Deleted Elements](#3-deleted-elements)
- [III. HTML5 Attributes](#iii-html5-attributes)
- [IV. HTML5 Website Layout](#iv-html5-website-layout)

## I. DOCTYPE Declaration 
- The `<!DOCTYPE>` declaration must be the very first thing in an HTML document, before the `<html>` tag.
- The `<!DOCTYPE>` declaration is not an `<html>` tag. 
- The `<!DOCTYPE>` declaration is an instruction to the `web browser` about what `version` of HTML the page is written in.

```HTML
<!-- DOCTYPE declaration for HTML5 -->
<!DOCTYPE html> 
<html>
<head>
  <!-- character encoding declaration -->
  <meta charset="UTF-8">   
  <title>Document</title>
</head>
<body>
	
</body>
</html>
```
- [Recommended list of DOCTYPE Declarations](https://www.w3.org/QA/2002/04/valid-dtd-list.html)
- [SGML](https://en.wikipedia.org/wiki/Standard_Generalized_Markup_Language), [XML](https://en.wikipedia.org/wiki/XML), [XHTML](https://en.wikipedia.org/wiki/XHTML) and [HTML](https://en.wikipedia.org/wiki/HTML)
	+ `SGML`
		* Standard Generalized Markup Language is a standard which tells how to specify document markup. 
		* It is only a meta language which describes how a markup language document should be.
		
	+ `XML`
		* XML is a subset of SGML. 
		* It is designed to ease the implementation of the parser compared to a full SGML parser.
		* It also adds a number of additional restrictions on the kinds of SGML syntax.
		* Application of XML - XHTML, JSP, SVG, Atom, SOAP, etc.
		
	+ `XHTML`
		* XHTML is an application of XML.
		
	+ `HTML` 
		* HTML is designed to be an application of SGML.
		* HTML markup language has many legacy and exception handling features that differ from SGML's requirements.
		
	+ `HTML5`
		* A new standard for HTML
		* It is a cooperation output between World Wide Web and WHATWG.
		* HTML5 abandons any attempt to define HTML as an SGML application, explicitly defining its own parsing rules.


## II. HTML5 Elements
- [HTML Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [HTML5 Element Reference](https://www.w3schools.com/tags/default.asp)
- [HTML5 New Elements](https://www.w3schools.com/html/html5_new_elements.asp)

### 1. HTML5 New Elements

#### 1.1 Sectioning 

##### &lt;article&gt;
- Define an article in a document.
- It can be used in 
	+ Forum post
	+ Blog post
	+ Newspaper article

```HTML
<article>
	<h1>What Does WWF Do?</h1>
	<p>WWF's mission is to stop the degradation of our planet's natural environment.</p>
</article>
```

##### &lt;hgroup&gt;
- Represent a multi-level heading for a section of a document. 
- It groups a set of `<h1>` to `<h6>` elements.

```HTML
<hgroup id="document-title">
  <h1>HTML</h1>
  <h2>Living Standard — Last Updated 12 August 2016</h2>
</hgroup>
```

##### &lt;header&gt;
- Represent a container for introductory content or a set of navigational links.
- A `<header>` element typically contains
	+ one or more heading elements (`<h1>` - `<h6>`)
	+ logo or icon
	+ authorship information
- It cannot be placed within a `<footer>`, `<address>` or another `<header>` element.

##### &lt;nav&gt;
- Defines a set of navigation links.

```HTML
<nav class="menu">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

##### &lt;aside&gt;
- Represents a section of a document with content connected tangentially to the main content of the document (often presented as a sidebar).

##### &lt;section&gt;
- Represents a standalone section of functionality contained within an HTML document

##### &lt;footer&gt;
- Represents a footer for its nearest sectioning content or sectioning root element. 
- Typically contains information about the author of the section, copyright data or links to related documents.

#### 1.2 Text Content

##### &lt;figure&gt;
- It specifies self-contained content, like images, illustrations, diagrams, code snippets, etc.
- The `<figcaption>` element is used to add a caption for the `<figure>` element.
- While the content of the `<figure>` element is related to the main flow, its position is independent of the main flow, and if removed it should not affect the flow of the document.

##### &lt;figcaption&gt;
- Defines a caption for a `<figure>` element.
- It can be placed as the first or last child of the `<figure>` element.

```HTML
<!-- Figure with figcaption -->
<figure>
  <img
  src="https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png"
  alt="An awesome picture">	
  <figcaption>MDN Logo</figcaption>
</figure>
```
```HTML
<!-- use figure to markup a poem -->
<figure>
 <p>
  Depression is running through my head,<br>
  These thoughts make me think of death,<br>
  A darkness which blanks my mind,<br>
  A walk through the graveyard, what can I find?....
 </p>
 <figcaption><cite>Depression</cite>.
  By: Darren Harris</figcaption>
</figure>
```

#### 1.3 Inline Text Semantics 

##### &lt;ruby&gt;
- Represents a `ruby annotation`.
- Ruby annotations are for showing `pronunciation` of East `Asian character`.

##### &lt;rt&gt;
- Embraces pronunciation of characters presented in a ruby annotations, which are used to describe the pronunciation of East Asian characters. 
- This element is always used inside a <ruby> element.

##### &lt;rp&gt;
- Provide fall-back parentheses for browsers that do not support display of ruby annotations using the `<ruby>`element. 
- `<rp>` must be positioned immediately before or after an `<rt>` element.

```HTML
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp>
  字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

##### &lt;mark&gt;
- Represent highlighted text.

##### &lt;time&gt;
- Represents either a time on a 24-hour clock or a precise date in the Gregorian calendar.

#### 1.4 Image and Multimedia 
- [Media formats for HTML audio and video](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats)
- [Using audio and video in Firefox](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)

##### &lt;audio&gt;
- Embed sound content in documents.
- It may contain one or more audio sources, represented using the `src` attribute or `<source>` element.
- Attributes
	- `autoplay` : if specified, the audio will automatically begin playback as soon as it can do so
	- `controls` : if this attribute is present, the browser will offer controls to allow the user to control audio playback including volume, seeking and pause/resume playback.
	- `src` 
		- The URL of the audio embed.
		- This is subject to HTTP access controls. 
		- You may instead use the `<source>` element within the audio block to specify the audio to embed.

```HTML
<!-- Simple audio playback -->
<audio
  src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg"
  autoplay>
  Your browser does not support the <code>audio</code> element.
</audio>
```
```HTML
<!-- audio element with source element -->
<audio controls="controls">
  Your browser does not support the <code>audio</code> element.
  <source src="foo.wav" type="audio/wav">
</audio>
```

##### &lt;video&gt;
- Embed video content in documents.
- It contains one or more video sources. To specify a video source, use either the `src` attribute or the `<source>` element; the browser will choose the most suitable one. 

```HTML
<video width="480" controls
  poster="https://archive.org/download/WebmVp8Vorbis/webmvp8.gif" >
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8.webm"
    type="video/webm">
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4"
    type="video/mp4">
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8.ogv"
    type="video/ogg">
  Your browser doesn't support HTML5 video tag.
</video>
```

#### 1.5 Embedded content

##### &lt;source&gt;
- Specifies multiple media resources for either the `<picture>`, `<audio>` or `<video>` element.
- It is an empty element and is commonly used to serve the same media content in multiple formats supported by different browsers.
- Attributes : `sizes`, `src`, `srcset`, `type`, `media`
	
##### &lt;embed&gt;
- Represent an integration point for an `external application` or interactive content (plug-in).
- Attributes : `height`, `src`, `type`, `width`

```HTML
<embed type="video/quicktime" src="movie.mov" width="640" height="480">
```

#### 1.6 Scripting
##### &lt;canvas&gt;
- Canvas Scripting API

#### 1.7 Form 
##### &lt;datalist&gt;
- Contains a set of `<option>` elements that represent the values available for other controls.
- It is used to provide an auto-complete feature on <input> elements.
- User will see a drop-down list of pre-defined options as they input data.

```HTML
<label>Choose a browser from this list:
<input list="browsers" name="myBrowser" /></label>
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Internet Explorer">
  <option value="Opera">
  <option value="Safari">
  <option value="Microsoft Edge">
</datalist>
```

##### &lt;meter&gt;
- Represents either a scalar value within a known range or a fractional value.
- Attributes 
	+ `min` : the lower numeric bound of the measured range (if unspecified, it is 0)
	+ `max` : the upper numeric bound of the measured range (if unspecified, it is 1)
	+ `value` : the current numeric value (must be between min and max)
	+ `low` : the upper numeric bound of the low end of the measured range
	+ `high` : the lower numeric bound of the high end of the measured range
	+ `optimum` : this attribute indicates the optimal numeric value
	+ `form` : this attribute associates the element with a form element that has ownership of the meter element

```HTML
<p>Heat the oven to <meter min="200" max="500" value="350">350 degrees</meter>.</p>
```

##### &lt;progress&gt;
- Represents the completion progress of a task, typically displayed as a progress bar.
- Attributes  
	+ `value` : specifies how much of the task that has been completed, must be a valid floating point number between 0 and max or between 0 and 1 if max is omitted. 
	+ `max` : describes how much work the task indicated by the progress element requires. Default value is 1.

```HTML
<progress value="70" max="100">70 %</progress>
```
##### &lt;output&gt;
- Represents the result of a calculation or user action.
- Attributes
	+ `for` : a list of IDs of other elements which contributed input values to the calculation.
	+ `form` 
		* the form element that this element is associated with (its form-owner)
		* the value of this attribute must be an ID of a form element in the same document
	+ `name` : the name of the element

```HTML
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
    <input type="range" name="b" value="50" /> +
    <input type="number" name="a" value="10" /> =
    <output name="result">60</output>
</form>
```

#### 1.8 Interactive Elements
##### &lt;details&gt;
- It is used as a disclosure widget from which the user can retrieve additional information.
- Attribute : open 
	+ This Boolean attribute indicates whether the details will be shown to the user on page load. 
	+ Default is false and so details will be hidden.

##### &lt;summary&gt;
- Used as a summary, caption or legend for the content of a `<details>` element.
- It defines a visible heading for the `<details>` element. The heading can be clicked to view/hide the details.

```HTML
<details>
  <summary>Some details</summary>
  <p>More info about the details.</p>
</details>

<details open>
  <summary>Even more details</summary>
  <p>Here are even more details about the details.</p>
</details>
```
##### [&lt;dialog&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- Defines a dialog box or window.
- It makes it easy to create pop-up dialogs and models on a web page.
- Attribute : `open`
	+ Indicates that the dialog is active and available for interaction.
	+ When the open attribute is not set, it shouldn't be shown to the user.

```HTML5
<dialog open>
  <p>Greetings, one and all!</p>
</dialog>
```
##### &lt;menu&gt;
- Represents a group of `commands` that a user can perform or active.
- This includes both list menus and context menus.
- Menu buttons haven't been implemented in any known browsers yet.

##### &lt;menuitem&gt;
- Represents a command that a user is able to invoke through a popup menu.

### 2. Redefined Elements

#### 2.1 Text content
##### &lt;hr&gt;
-  Represents a thematic break between paragraph-level elements 
-  In previous versions of HTML, it represented a horizontal rule. 
-  It may still be displayed as a horizontal rule in visual browsers, but is now defined in semantic terms, rather than presentational terms.

```HTML
<p>
  This is the first paragraph of text.
  This is the first paragraph of text.
</p>

<hr>

<p>
  This is the second paragraph of text.
  This is the second paragraph of text.
</p>
```

##### &lt;dd&gt;
- Indicates the description of a term in a description list `<dl>`.
 
##### &lt;dt&gt;
- Identifies a term in a description list.
- It can occur only as a child element of a `<dl>`.
- It is usually followed by a `<dd>` element or several `<dt>` elements followed by an immediate next `<dd>` element.

```HTML
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform,
    graphical web browser developed by the
    Mozilla Corporation and hundreds of
    volunteers.
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

#### 2.2 Inline Text Semantics

##### &lt;small&gt;
- In HTML5, this element is re-purposed to represent `side-comments` and `small print`, including copyright and legal text, independent of its styled presentation.

##### &lt;b&gt;
- Represents a span of text stylistically different from normal text, `without` conveying any special importance ir relevance and that is typically rendered in `boldface`.
	- Use `<b>` tag for cases like keywords in a summary, product names in a review or other spans of text whose typical representation would be `boldfaced`.
	- It is a good practice to use class attribute on `<b>` in order to convey additional semantic information.
	- If there is no semantic purpose on using the `<b>` element, using CSS property `font-weight` with bold value would be a better choice for making text bold.

##### &lt;i&gt;
- Represents a range of text that is set off from the normal text for some reason, like technical terms, foreign language phrases or fictional character thoughts. It is typically displayed in `italic` type.
- The redefinition of `<i>` 
	+ In earlier versions of HTML specification, `<i>` was merely a presentational element used to display text in italics. 
	+ Now `<i>` tag should represent a range of text with a different semantic meaning whose typical typographic representation is italicized. 
	+ This means a browser will typically still display its contents in italic type, but is, by definition, no longer required to.

##### &lt;strong&gt;
- In HTML5, it is described as representing "strong importance for its contents".
- Compared to bold, strong is a logical state, and bold is a physical state.
- Logical states separate presentation from the content - perhaps instead of rendering some text as bold you want to render it red, or a different size, or underlined, or whatever.

| Elements            |                             Description                             |
|:-------------------:|:-------------------------------------------------------------------:|
| &lt;b&gt;           |represent text whose typical typographic representation is bold      |
| &lt;i&gt;           |represent text whose typical typographic representation is italicized|
| &lt;em&gt;          |indicate emphasis or stress                                          |
| &lt;strong&gt;      |indicate importance                                                  |
| &lt;mark&gt;        |indicate relevance                                                   |
| &lt;cite&gt;        |mark the name of a work, such as a book, play, or song               |
| &lt;dfn&gt;         |mark the defining instance of a term                                 |

### 3. Deleted Elements

## III. HTML5 Attributes

## IV. HTML5 Website Layout