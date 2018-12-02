# CSS Study

## Catalog
- [Anatomy of CSS](#anatomy-of-css)
	- [1. CSS Selectors](#1-css-selectors)
		- [1.1 Basic Selectors](#11-basic-selectors)
		- [1.2 Combinators](#12-combinators)
		- [1.3 Pseudo-elements](#13-pseudo-elements)
		- [1.4 Pseudo-classes](#14-pseudo-classes)
	- [2. Styling Text](#2-styling-text)
		- [2.1 Font](#21-font)
			- [2.1.1 font-family](#211-font-family)
			- [2.1.2 font-size](#212-font-size)
			- [2.1.3 font-weight](#213-font-weight)
			- [2.1.4 Font-style](#214-font-style)
			- [2.1.5 line-height](#215-line-height)
			- [2.1.6 letter-spacing](#216-letter-spacing)
			- [2.1.7 word-spacing](#217-word-spacing)
			- [2.1.8 text-align](#218-text-align)
			- [2.1.9 text-decoration](#219-text-decoration)
		- [2.2 Styling List](#22-styling-list)
		- [2.3 Styling Link](#23-styling-link)
	- [3. CSS Cascading and Inheritance](#3-css-cascading-and-inheritance)
		- [3.1 Inheritance](#31-inheritance)
		- [3.2 Cascading](#32-cascading)
			- [3.2.1 Importance](#321-importance)
			- [3.2.2 Specificity](#322-specificity)
			- [3.2.3 Source Order](#323-source-order)
		- [3.3 Useful Links](#33-useful-links)
	- [4. Box Model](#4-box-model)
		- [4.1 Content](#41-content)
		- [4.2 Padding](#42-padding)
		- [4.3 Border](#43-border)
		- [4.4 Margin](#44-margin)
	- [5. Positioning](#5-positioning)
	- [6. Flex Box](#6-flex-box)

## Anatomy of CSS

```CSS
selector {
	property: value;
}
```
### 1. CSS Selectors

#### 1.1 Basic Selectors
>1) `Element` Selector

```CSS
element {
	/* The CSS type selector matches elements by node name. */
}
```

>2) `Class` Selector

```CSS
.class_name {
	/* The CSS class selector matches elements based on the contents of their class attribute. */
}
```
>3) `ID` Selector

```CSS
#id-name { 
	/* in one HTML file, id selector with the same name can be used only once */
}
```
>4) `Universal` Selector

```CSS
* {
	/* operate on every single element in the same page */
}
```
>5) [Attribute Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

```CSS
/* <a> elements with a title attribute */
a[title] {
  color: purple;
}

/* <a> elements with an href matching "https://example.org" */
a[href="https://example.org"] {
  color: green;
}

/* <a> elements with an href containing "example" */
a[href*="example"] {
  font-size: 2em;
}

/* <a> elements with an href ending ".org" */
a[href$=".org"] {
  font-style: italic;
}
```

#### 1.2 Combinators
>1) `Child` Selector

```CSS
ele1 > ele2 {
	/* Select all ele2 elements where the parent is ele1 element */
}
```
>2) `Descendant` Selector

```CSS
ele1 ele2 {
	/* Select all ele2 elements inside ele1 element */
}
```
>3) `Adjacent Sibling` Selector

```CSS
ele1 + ele2 {
	/* Select all ele2 elements that are placed immediately after ele1 element */
}
```
>4) `General Sibling` Selector

```CSS
ele1 ~ ele2 {
	/* Match ele2 only if it follows ele1 (though not necessarily immediately) */
	/* And both ele1 and ele2 are children of the same parent element */
}
```

```HTML
HTML Code
<span>This is not red.</span>
<p>Here is a paragraph.</p>
<code>Here is some code.</code>
<span>And here is a red span!</span>
<code>More code...</code>
<span>And this is a red span!</span>
```
```CSS
CSS Code
p ~ span {
  color: red;
}
```
>5) 分组选择符

```CSS
ele1 , ele2 {
	/* 为html中多个标签元素设置同一个样式 */
	/* Selects all ele1 elements and all ele2 elements */
}
```

#### 1.3 Pseudo-elements
>- Pseudo-elements are abstractions of the tree representing entities beyond what HTML does.

```CSS
selector::pseudo-element {
	property: value;
}

Index of pseudo-elements:
1) ::after
2) ::before
3) ::cue
4) ::first-letter
5) ::first-line
6) ::selection
7) ::backdrop 	
8) ::placeholder 
9) ::marker 
10)::spelling-error 
11)::grammar-error
```
#### 1.4 Pseudo-classes
>- A CSS [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) is a keyword added to a selector that specifies a special state of the selected element(s). 

```CSS
selector:pseudo-class {
  property: value;
}

Index of pseudo-classes:
1) :active
2) :checked
3) :dir()
4) :disabled
5) :empty
6) :enabled
7) :fullscreen
8) :focus
9) :hover
10):lang()
11):link
12):last-child
13):last-of-type
14):nth-child
15):nth-last-child
16):nth-last-of-type
17):nth-of-type
18):required
19):valid
20):visited	
```
### 2. Styling Text 

#### 2.1 Font

##### 2.1.1 font-family

>- How to use Google Fonts

```
1) Go to https://fonts.google.com
2) Use the filters on the left hand side to display the kinds of fonts you want to choose, and choose a couple of fonts you like.
3) To select a font family, press the ⊕ button alongside it.
4) When you've chosen the font families, press the [Number] Families Selected bar at the bottom of the page.
5) In the resulting screen, you first need to copy the line of HTML code shown, and paste it into the head of your HTML file. Put it above the existing <link> element, so that the font is imported before you try to use it in your CSS.
6) You then need to copy the CSS declarations listed into your CSS as appropriate, to apply the custom fonts to your HTML.
```
```html
<link href="https://fonts.googleapis.com/css?family=Asap:400,500" rel="stylesheet">
```
```CSS
p {
	font-family: 'Asap', sans-serif;
}
```

##### 2.1.2 font-size

>1) Keywords
>- **absolute-size** : xx-small, x-small, `small`, medium, large, x-large, xx-large
>- **relative-size**: smaller, larger (than the parent element’s font size)
>- Note:
It is best to use values that are relative to the user's default font size, and avoid absolute values such as lengths with units **other than** `em` or `px`. However, if such absolute values must be used, `px` are preferred over other units because their meaning does not vary depending on what the operating system thinks (generally incorrectly) the resolution of the monitor is.

>2) **pixels**
>- A `px` value is static.
>- It is OS-dependent and vary slightly across browsers.

>3) **em**
>- The size of `em` is dynamic.
>- Related to the size of the `parent element`. 

```
1) If the font-size hasn't been set anywhere on the page
browser_default_font_size = 16px;
1em = 16px;
2em = 32px;

2) If a font-size of an element was set to 20px
1em = 20px
2em = 40px
```
>4) rem 
>- The size of `rem` is dynamic.
>- Related to the size of the root element of the document (i.e. `html`).  
>- Not supported in IE8 and below.

##### 2.1.3 font-weight
>1) **Keywords**
>- absolute-weight: `normal`(400), `bold`(700)
>- relative-weight: lighter, bolder (than the parent element)

>2) **Numeric**
>- `100`, `200`, `300`, `400`, `500`, `600`, `700`

##### 2.1.4 Font-style
>- `normal`, `italic`, `oblique`

##### 2.1.5 line-height
>1) normal

```CSS
line-height: normal;
```
>2) number
>- This is the **preferred** way to set line-height and avoid unexpected results due to inheritance.

```CSS
line-height: 3.5; /* Line-height = <number> * element_font_size */
```
>3) length
>- `em` values may have `unexpected`results 

```CSS
line-height: 3em;
```
>4) percentage
>- `percentage` values may have `unexpected`results 

```CSS
line-height: 34%; /* percentage is relative to the font size of the element itself */
```
##### 2.1.6 letter-spacing
>- specifies the spacing behavior between text characters.

```CSS
1) <length>
letter-spacing: -0.05em;  
letter-spacing: 6px; 

2) <keyword>
letter-spacing: normal;
```
##### 2.1.7 word-spacing
>- specifies the spacing behavior between tags and words.

```CSS
1) <keyword>
word-spacing: normal;  

2) <length>
word-spacing:0.3em; 
word-spacing-3px; 

3) <percentage>
word-spacing: 50%
```
##### 2.1.8 text-align
>- value - `start`, `end`, `left`, `right`, `center`, `justify`, `justify-all`, `match-parent`

##### 2.1.9 text-decoration
>- This property is used to draw a line under, over, or through some text.

```CSS
Syntax
<text-decoration-line> || <text-decoration-style> || <text-decoration-color>
```
>1) **text-decoration-line**: `none`, `underline`, `overline`, `line-through`, `blink`, `underline overline`, `overline underline line-through`;
>2) **text-decoration-style**: `solid`, `double`, `dotted`, `dashed`, `wavy`, `-moz-none` (Do not draw a line);
>3) **text-decoration-color**: currentColor, red, rgba(255, 128, 128, 0.5), transparent, #00FF00

#### 2.2 [Styling List](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_lists)

#### 2.3 [Styling Link](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links)

### 3. CSS Cascading and Inheritance

#### 3.1 Inheritance
>1) **What is inheritance in CSS?**
>- It is the `mechanism` through which certain `properties` are `passed` on from a `parent` element down to its `children`.
>- Not all CSS properties are inherited, because it doesn't make sense for some of the to be.
>- [Full Property Table](https://www.w3.org/TR/CSS21/propidx.html)

>2) **Why inheritance is useful?**
>- If CSS doesn't use inheritance, you would have to specify things like font family, font size and text color individually - for every single type.

>3) **How inheritance works?**
>- Every element in an HTML file will inherit all inheritable properties from its parent except the root element (html).
>- Inherited properties in CSS can be `overridden` so the inherited properties may have no effects (blue-eyed mother can have a brown-eyed child if the father has brown eyes)

>4) **Force inheritance**

#### 3.2 Cascading
>- There are three main concepts control the order in which CSS declarations are applied
>1) **Importance**
>2) **Specificity**
>3) **Source order**

##### 3.2.1 Importance
>- The `importance` of a CSS declaration depends on where it is specified.
>- Declarations will be applied in the following order and later ones override earlier ones:
>1) User Agent Style Sheets

```
User Agent Style Sheet
- It is the built-in style sheet of the browser
- Every browser has its default rules for how to display various HTML elements if no style is specified by the user or designer of the page.
```
>2) Normal Declarations in User Style Sheets

```
User Style Sheet
- It is a style sheet that the user has specified
- Not all browsers support user style sheets
- But they can be very useful, especially for users with certain types of disabilities.
```
>3) Normal Declarations in Author Style Sheets

```
Author Style Sheet
- It is normally refer to when we say style sheet
- It is the style sheet that the author of the document (site’s designer) has written and linked to (or included).
```
>4) Important Declarations in Author Style Sheets 

```CSS
p {
	color: red!important;
}
```
>5) Important Declarations in User Style Sheets

##### 3.2.2 Specificity
>- Specificity is something every CSS author needs to understand and think about.
>- Specificity has four components 
>1) a : 1 for a declaration in a style attribute, otherwise it's 0
>2) b : number of `id selectors` in the selector (those that begin with a `#`)
>3) c : number of `attribute selectors` - including `class selectors` and `pseudo-classes`
>4) d : number of `element types` and `pseudo-elements` in the selector.
>- Example

|                 Selector              |  a  |  b  |  c  |  d  |       Specificity      |
|:-------------------------------------:|:---:|:---:|:---:|:---:|:----------------------:|
|                    h1                 |  0  |  0  |  0  |  1  |       0, 0, 0, 1       |
|                   .foo                |  0  |  0  |  1  |  0  |       0, 0, 1, 0       |
|                   #bar                |  0  |  1  |  0  |  0  |       0, 1, 0, 0       |
|html>head+body ul`#nav` *`.home` a:link|  0  |  1  |  2  |  5  |       0, 1, 2, 5       |

```
Analyze
1) combinators (>, + and white space) do not affect a selector's specificity    
2) universal selector (*) has no input on specificity
3) difference in specificity between an id selector and an attribute selector
	#nav - specificity is 0, 1, 0, 0 as an id selector
	[id="nav"] - specificity is 0, 0, 1, 0 as an attribute selector 
4) a = 0; 
   b = 0; //#nav(id selector)
   c = 2; //.home(class selector), :link(pseudo-class)
   d = 5; //html, head, body, ul, a(element types)
```
  
##### 3.2.3 Source Order
>- When importance and specificity are in same condition, we should consider about source order
>- Declaration that appears `later` in style sheet will `win over` those that come `before` it.
>1) for a same element in a document, the final distinguishing mark is the source order

>2) in a single, external style sheet, the declaration at the end will override those that occur earlier

>3) linked different style sheets in one document head, the style sheet linked to last will override the one linked to first

>4) style sheet placed in different places - 内联式 > 嵌入式 > 外部式 (前提：style tag is after link tag)

```html
(1) 内联式 - write CSS code in the <html> tag
<body>
	<p>Today I'm <span style="color:blue"> really </span>happy</p>
</body>

(2)嵌入式 - write CSS code between <style type="text/css"></style>
<title>html document</title>
<style type="text/css">
	span{
   		color:red;
	}
</style>

(3)外部式 - write CSS code in an outside file
use <link> tag to link the CSS file in <head> like:
<link href="base.css" rel="stylesheet" type="text/css" />
```

#### 3.3 Useful Links
>1) [Inheritance, Cascading, and Specificity in CSS Explained](http://altitudelabs.com/blog/quick-guide-to-understanding-css/)
>2) [Inheritance and Cascading](https://www.w3.org/wiki/Inheritance_and_cascade)

### 4. Box Model

#### 4.1 Content

#### 4.2 Padding

#### 4.3 Border

#### 4.4 Margin

### 5. Positioning

### 6. Flex Box
