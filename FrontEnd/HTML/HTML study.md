# HTML Study

## Catalog
- [HTML Definition](#html-definition)
- [Anatomy of an HTML element](#anatomy-of-an-html-element)
- [Anatomy of an HTML Document](#anatomy-of-an-html-document)
- [Common Tags](#common-tags)
	- [I. Marking up text](#i-marking-up-text)
		- [1.1 Headings](#11-headings)
		- [1.2 Containers](#12-containers)
		- [1.3 Lists](#13-lists)
			- [1.3.1 Ordered List - **ol**](#131-ordered-list---ol)
			- [1.3.2 Unordered List - **ul**](#132-unordered-list---ul)
			- [1.3.3 Description List - **dl**](#133-description-list---dl)
		- [1.4 Links](#14-links)
	- [II. Images](#ii-images)
	- [III. Tables](#iii-tables)
	- [IV. Forms](#iv-forms)
		- [4.1 form tag](#41-form-tag)
		- [4.2 label tag](#42-label-tag)
		- [4.3 input tag](#43-input-tag)
			- [4.3.1 type attribute](#431-type-attribute)
			- [4.3.2 name attribute](#432-name-attribute)
			- [4.3.3 value attribute](#433-value-attribute)
			- [4.3.4 placeholder attribute](#434-placeholder-attribute)
			- [4.3.5 required attribute](#435-required-attribute)
			- [4.3.6 pattern attribute](#436-pattern-attribute)
			- [4.3.7 id attribute](#437-id-attribute)
		- [4.4 select tag](#44-select-tag)
		- [4.5 option tag](#45-option-tag)
		- [4.6 textarea tag](#46-textarea-tag)
		- [4.7 button tag](#47-button-tag)
		- [4.8 Form Example](#48-form-example)

## HTML Definition
> Hypertext Markup Language is used to structure and display a web page and its content.
HTML is not a programming language; it is a `markup language` and is used to tell the browser how to display the web pages you visit.

## Anatomy of an HTML element
>1) **HTML element**

```
HTML element = opening tag + content + closing tag
```

>2) **Elements with attributes**

```html
<p class="editor-note"> My Cat is very grumy</p>

<!-- 
An attribute should always have
	a. A space between it and the element name(or previous attribute)
	b. The attribute name, followed by an equals sign
	c. Opening and closing quote marks wrapped around the attribute value.
-->
```

>3) **Nesting Elements**

```html
<!-- put elements inside other elements is called nesting -->
<p>My Cat is <strong>very</strong> grumy</p>  
```

>4) **Empty Elements**

```html
<!-- Some elements have no content, and are called empty elements. -->
<img src="images/firefox-icon.png" alt="My test image">
```
## Anatomy of an HTML Document
```html
<!DOCTYPE html>       <!-- the doctype which is full of history -->

<html lang="en">      <!-- root element -->

<!-- head is a container of stuff which are not showing to page viewers -->
<!-- it includes keywords, page description, CSS, character set declarations, etc. -->
<head>                
	<!-- sets the character set your document should use to UTF-8 --> 
	<meta charset="UTF-8">  

	<!-- sets the title of your page, which is the title that appears in the browser tab / bookmarks -->
	<title>Document</title>
</head>

<body>
	<!-- contains all the content that you want to show to web users when they visit your page -->
</body>

</html>
```

## Common Tags

### I. Marking up text

#### 1.1 Headings
```html
<!-- HTML contains six heading levels and level 3 and level 4 are commonly used. -->
<h1></h1>
<h2></h2>
<h3></h3> 
<h4></h4>
<h5></h5>
<h6></h6>
```
#### 1.2 Containers
```html
<p>paragraph</p>
<div>division</div>
<span>inline container for phrasing content</span>
```
#### 1.3 Lists

##### 1.3.1 Ordered List - **ol**
>1) `start` attribute - start value of an ordered list

```html
<ol start="3">
	<li>Hadoop</li>
	<li>Spark</li>
	<li>Kafka</li>
</ol>
```
>2) `reversed` attribute - list order should be descending

```html
<ol reversed start="10">
	<li>Spring Boot</li>
	<li>Spring</li>
	<li>Java EE</li>
</ol>
```
>3) `type` attribute -  indicates the numbering type

>- ‘a’ - indicates lowercase letters
>- ‘A’ - indicates uppercase letters
>- ‘i’ - indicates lowercase Roman numerals;
>- ‘I’ - indicates uppercase Roman numerals;
>- ‘1’ - indicates numerals (default);

```html
<ol type="i">
	<li type="5">History</li>
	<li>Geography</li>
</ol>

<ol type="I" start="4">
	<li>Music</li>
	<li>Arts</li>
	<li>Film</li>
</ol>
```
##### 1.3.2 Unordered List - **ul**
>- `type` attribute - circle, disc, square

```html
<ul type="disc">
	<li>Clean clothes</li>
	<li>Go to grocery store</li>
	<li>Pick up mimi</li>
</ul>
```

##### 1.3.3 Description List - **dl**
>1) This element encloses a list of groups(`dl`) of terms(`dt`) and descriptions(`dd`)
>2) Common uses - implement a glossary or to display meta-data (a list of key-value pairs)

```html
<dl>
  <dt>Firefox</dt>
  <dt>Mozilla Firefox</dt>
  <dt>Fx</dt>
  <dd>
    A free, open source, cross-platform,
    graphical web browser developed by the
    Mozilla Corporation and hundreds of
    volunteers.
  </dd>
  <!-- Other terms and descriptions -->
</dl>
```

#### 1.4 Links
>1) `href` attribute

```html
<a href=”link_url”>Happy Watermelon</a>
<a href=”link_url”><img src=”image_path” alt=”description”></a>
```
>2) `target` attribute

```html
<a href=”link_url” target=”_self”>Happy Watermelon</a>  <!-- self - default -->
<a href=”link_url” target=”_blank”>Happy Watermelon</a> <!-- blank - open a new window -->
```
>3) `title` attribute

```html
<!-- when cursor stays on the link, title will appear and describe what the link is about -->
<a href=”link” title=”happy lemon web address”>Happy Lemon</a>
```
>4) bookmarks function

```html
<a href=”#C1”>Happy Lemon</a>
<h1><a name=”C1”></a>Chapter 1 : Happy Lemon</h1>
```

### II. Images
>1) `src` attribute - contains the path of the image file
>2) `alt` attribute - specify descriptive text for users who cannot see the image
>- reason 1 : users may be visually impaired and screen readers can read out the alt text to them.
>- reason 2 : something has gone wrong causing the image to not display.

```html
<img src=”path_of_the_image” alt=”descriptive_text_for_the_image”>
```

### III. Tables

>1) `table` tag

>2) `caption ` tag - defines a table caption

>3) `tr` tag - defines a `row` in a table

>4) `th` tag - table header
>- `headers` - ids of `th`
>- `scope` - defines the cells that the header element relates to
>- `colsapn` - the number of `columns` the header should span
>- `rowsapn` - the number of `rows` the header should span

>5) `td` tag - a cell in a table
>- `colspan` - the number of `columns` a cell should span
>- `rowspan` - the number of `rows` a cell should span

>6) `colgroup` tag - s group of columns for formatting
>- must be a child of `table` tag, after `caption` and before `thead`, `tbody`, `tfoot`, `tr`
>- use `col` with `colgroup` to define different properties to a column

>7) `col` tag - specifies column properties for each column within a `colgroup`

>8) `thead` tag

>9) `tbody` tag

>10) `tfoot` tag

```html
<!-- Example 1 -->
<table align="left" border="2">
	<caption>Row Info</caption>
	<tr>
		<td>1st row, 1st column</td>
		<td>1st row, 2nd column</td>
		<td>1st row, 3rd column</td>
	</tr>
	<tr>
		<td>2nd row, 1st column</td>
		<td>2nd row, 2nd column</td>
		<td>2nd row, 3rd column</td>
	</tr>	
	<tr>
		<td colspan="2">3rd row, 1st column</td>
		<td>3rd row, 2nd column</td>	
	</tr>
	<tr>
		<td rowspan="2">4th row, 1st column</td>
		<td>4th row, 2nd column</td>
		<td>4th row, 3rd column</td>
	</tr>
	<tr>
		<td colspan="2">5th row, 1st column</td>
	</tr>
</table>
```

```html
<!-- Example 2 - Simple table with header -->
<table align="center" border="2">
	<caption>Table 1</caption>
	<tr>
		<th>First Name</th>
		<th>Last Name</th>
	</tr>
	<tr>
		<td>John</td>
		<td>Doe</td>
	</tr>
	<tr>
		<td>Tom</td>
		<td>Brown</td>
	</tr>
</table>
```

```html
<!-- Example 3 - Table with thead, tfoot, tbody-->
<table align="center" border="2">
	<caption>Table 2</caption>
	<thead>
		<tr>
			<th>Header 1</th>
			<th>Header 2</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Body 1</td>
			<td>Body 2</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td>Footer 1</td>
			<td>Footer 2</td>
		</tr>
	</tfoot>
</table>
```

```html
<!-- Example 4 - Table with colgroup and col -->
<table align="center" border="2">
	<caption>Table 3</caption>
	<colgroup>
		<col style="background-color: blue">
		<col style="background-color: yellow">
	</colgroup>
	<tr>
		<th>Countries</th>
		<th>Capitals</th>
		<th>Population</th>
		<th>Language</th>
	</tr>
	<tr>
		<td>USA</td>
		<td>Washington D.C.</td>
		<td>309 million</td>
		<td>English</td>
	</tr>
	<tr>
		<td>Sweden</td>
		<td>Stockholm</td>
		<td>9 million</td>
		<td>Swedish</td>
	</tr>
</table>
```
### IV. Forms

#### 4.1 form tag
```html
<form action=”/my-form-submitting-page” method=”post”> </form>
```
>- `action` - the URL to send form data to
>- `method` - the type of `HTTP` request

#### 4.2 label tag
>- `label` element represents a `caption`for an item in a user interface.
>- `label` can be associated with a control either by 
>1) placing the control element inside the label element 
>2) or using `for` attribute (usually works with `id` attribute of `input` element)
>- one input can be associated with multiple labels

```html
1) place control element inside <label>
<label>Click me <input type="text"></label>

2) use the "for" attribute
<label for="username">Click me</label>
<input type="text" id="username">
```
#### 4.3 input tag
>- Creates interactive controls for web-based forms in order to accept data from user

##### 4.3.1 type attribute
>- defines the way the `input` element behaves.

```html
<input type=”text”>
<input type=”email”>   
<input type=”password”>
<input type=”radio”>   
<input type=”checkbox”>
<input type=”button”>
<input type=”submit”>
```
##### 4.3.2 name attribute
>- used by the **server** to identify the fields in form submits

##### 4.3.3 value attribute
>1) defines a default value which will be displayed in the element on page load
>- a. `button`, `reset`, `submit` - defines the text on the **button**
>- b. `text`, `password`, `hidden` - defines the initial (default) value of the **input field**
>- c. `checkbox`, `radio`, `image` - defines the **value** associated with the input (the value that is sent on submit)
>- d. cannot be used with `file`
>2) usually used with `name` attribute

```html
<label for="dogs">Dogs</label>
<input id=”dogs” type="radio" value="DOGS" name="petChoice">
<label for="cats">Cats</label>
<input id=”cats” type="radio" value="CATS" name="petChoice">
```

##### 4.3.4 placeholder attribute
>- provides a **hint** to the user of what can be entered in the field

##### 4.3.5 required attribute
>- indicates whether the element is required to fill out or not (**Email**, **Password**, **Textarea**)

##### 4.3.6 pattern attribute
>1) Defines a `regular expression` which the element's value will be `validated` against. 
>2) [Form-validation](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation)

```html
<!-- -->
<input type="password" pattern=".{5,10}" title="5 to 10 characters" required>
```

##### 4.3.7 id attribute
>- it should be the same with the `for` attribute in `label` element.

#### 4.4 select tag
>- represents a control that provides a **menu** of options

#### 4.5 option tag
>- used to define an item contained in a `select` element. 
>- it can represent menu items in pop-ups and other lists of items in an HTML document

```html
<!-- menu - select and option -->
<p>What is your current mood?</p>
<select name="mood">
	<option value="happy">:)</option>
	<option value="neutral">:|</option>
	<option value="sad">:(</option>
</select>
```
#### 4.6 textarea tag
>1) represents a multi-line plain-text editing control.
>2) Attributes
>- a. `rows` - Defines the number of rows in a text area.
>- b. `cols` - Defines the number of columns in a textarea.

```html
<!-- textarea -->
<p>Fill in a little paragraph</p>
<textarea name="paragraph" rows="20" cols="40">Fill in Area</textarea>
```

#### 4.7 button tag
>- represents a clickable button

#### 4.8 Form Example
```html
<!-- action - where the form send data to -->
<!-- method - what HTTP method (get/post) -->
<form action="http://wikipedia.org" method="GET">
	<!-- text and password -->
	<label for="username">Username:</label>
	<input id=”username” type="text" placeholder="username" name="username">
	<label for="password">Password:</label>
	<input id=”password” type="password" pattern=".{5,10}" title="5 to 10 characters" placeholder="password" name="password" required>

	<!-- one choice - radio -->
	<!-- multiple choices - checkbox -->
	<p>Do you prefer cats or dogs?</p>
	<label for="dogs">Dogs</label>
	<input id=”dogs” type="radio" value="DOGS" name="petChoice">
	<label for="cats">Cats</label>
	<input id=”cats” type="radio" value="CATS" name="petChoice">

	<!-- menu - select and option -->
	<p>What is your current mood?</p>
	<select name="mood">
		<option value="happy">:)</option>
		<option value="neutral">:|</option>
		<option value="sad">:(</option>
	</select>

	<!-- textarea -->
	<p>Fill in a little paragraph</p>
	<textarea name="paragraph" rows="20" cols="40">Fill in Area</textarea>

	<input type="submit" value="Login">
</form>
```
>1) When click on **Login** the web-browser will navigate to "http://wikipedia.org"
>2) The web-browser will **get user information** according to `name` attributes
>- https://www.wikipedia.org/?username=abc&password=12345&petChoice=CATS&mood=happy&paragraph=Hello