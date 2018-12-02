# Use Sublime Text to edit Markdown File

## Catalog
- [Install *Package Control*](#install-package-control)
- [Install Markdown Extended \(Support Highlight\)](#install-markdown-extended-support-highlight)
- [Install Markdown Editing \(Auto-Complete\)](#install-markdown-editing-auto-complete)
- [Install Markdown TOC \(Build Catalog\)](#install-markdown-toc-build-catalog)
- [Install Markdown Preview](#install-markdown-preview)
- [Install a new theme for Sublime Text](#install-a-new-theme-for-sublime-text)
- [References](#references)

## Install *Package Control* 
>1) Copy code from https://packagecontrol.io/installation
>2) In Sublime Text, click on "View" --> "Show Console" or (Ctrl + `)
>3) Paste the code and run it

## Install Markdown Extended (Support Highlight)
>1) Shift + Command + p (or "Tools" --> "Command Palette")
>2) Find `Package Control: Install Package`
>3) Input "Markdown Extended" and press "Enter", wait for installing

To make `Markdown Extended`the `default` highlighting for the current extension:
- Open a file with the extension you want to set a default for (i.e. .md)
- Navigate through the following menus in Sublime Text: `View` -> `Syntax` -> `Open all with current extension as...` -> `Markdown Extended`

## Install Monokai Extended
[sublime-monokai-extended](https://github.com/jonschlinkert/sublime-monokai-extended)
>1) Shift + Command + p (or "Tools" --> "Command Palette")
>2) Find `Package Control: Install Package`
>3) Input "Monokai Extended" and press "Enter", wait for installing
>4) Switch Themes - `Preferences` --> `Color Scheme` --> `Monokai Extended` and pick a theme

## Install Markdown Editing (Auto-Complete)
>1) Shift + Command + p (or "Tools" --> "Command Palette")
>2) Find `Package Control: Install Package`
>3) Input "Markdown Editing" and press "Enter", wait for installing

## Install [Markdown TOC](https://packagecontrol.io/packages/MarkdownTOC) (Build Catalog)
>1) Shift + Command + p (or "Tools" --> "Command Palette")
>2) Find `Package Control: Install Package`
>3) Input "Markdown TOC" and press "Enter", wait for installing
>4) Configuration: "Preferences" --> "Package Setting" --> "Markdown TOC" --> "Setting-User"

```javascript
{
  	"default_autolink": true,
  	"default_bracket": "round",
  	"default_depth": 0
}
```
>5) How to use: "Tools" --> "Markdown TOC" --> "Insert TOC"

## Install Markdown Preview
>1) Shift + Command + p (or "Tools" --> "Command Palette")
>2) Find `Package Control: Install Package`
>3) Input "Markdown Preview" and press "Enter", wait for installing
>4) Configuration: "Preferences" --> "Package Setting" --> "Markdown Preview" --> "Setting-User"

```javascript
{
    "parser": "github",
    "build_action": "browser",
    "enable_mathjax": true,
    "enable_uml": true,
    "enable_highlight": true,
    "enable_pygments": true,
    "enabled_extensions": "github",
    "enabled_parsers": ["github"],
    "github_mode": "markdown",
    "github_inject_header_ids": true,
    "enable_autoreload": false
}
```
>5) How to use: Ctrl + Shift + p --> "mdp"

## Install a new theme for Sublime Text
- [Theme - Alpenglow](https://packagecontrol.io/packages/Theme%20-%20Alpenglow)

## References
>1) [Use Sublime Text to write Markdown](http://blog.csdn.net/qazxswed807/article/details/51235792)
>2) [Configure Markdown Environment in Sublime Text](http://frank19900731.github.io/blog/2015/04/13/zai-sublime-zhong-pei-zhi-markdown-huan-jing/)

