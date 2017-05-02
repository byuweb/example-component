BYU Demo Component
==================

Quickstart
----------

If you just want to get started with the component, you can clone this github repository and install the necessary packages using npm or yarn, then run the gulp command to open the demo page (docs/index.html). To add this component to a page you can either add it to the CDN (see below) or just copy the files byu-demo-component.min.s and byu-demo-component.css from the dist folder. 

The rest of this document gives an overview of the recommended structure and best practices for developing BYU web components.

Project Structure
-----------------

This project is intended both as a demo of some of the basic features of web components as well as being a starting point for you to use when building your own modules. You are welcome to modify the code as needed, but we recommend the following project structure:


* component-folder
    * script.js
    * style.scss
    * template.html
* css
* dist
* docs



The Component Folder
--------------------

The component folder should be given the same name as your component, and your component should be prefixed with 'byu-'. If you are creating a repository with multiple related components then you would group them into a components folder with separate subfolders for each component, as follows:

* components
    * byu-component-1
        * script.js
        * style.scss
        * template.html
    * byu-component-2
        * script.js
        * style.scss
        * template.html
    * byu-component-3
        * script.js
        * style.scss
        * template.html
    * etc.

A component folder should contain three files: script.js, style.scss, and template.html, as well as any images. The build process will combine these files into a single, minified javascript file named my-component-name.js. 

As you might guess, template.html is where you will define the shadow dom template for your component. Style.scss will contain css classes to be applied to your component. Note that these styles will only have scope within your component and will not affect page elements outside your component. Script.js is where you will define any observed attributes, event handlers, and other behavior for your element.

The Docs Folder
---------------

We strongly recommend creating a docs folder for your component with at least one page per component. In this example we're using the Iron Demo Helper library to display example code snippets along with their behavior. You are welcome to use a different documentation style, but we request that your documentation page contain code snippets as well as their rendered behavior, with easily readable explanatory text where needed.

The CSS Folder
--------------

Because some browsers may experience a short delay in rendering components we ask that you provide a css file that provides default styles for the component before it getst rendered. We refer to this as the "flash of unstyled content". For more examples, we recommend looking at the [byu theme components](https://github.com/byuweb/byu-theme-components).

gulpfile.js
-----------

As of this writing we recommend using gulp to run the build process. The provided gulpfile is set up so you just need to run the "gulp" command to combine and minify the needed files

Adding to the BYU CDN
---------------------

To add a component to the BYU CDN you need to create a file in your project root called .cdn-config.yml. This file will specify the files from the dist folder that you want hosted on the CDN, as well as other metadata such as the URL where you plan to host the docs. You will then need to update file 'main-config-yml' in the [BYU CDN github repository](https://github.com/byuweb/web-cdn) via a pull request.




