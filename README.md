Url Parameter Tool
================

A simple js plugin that lets you pull url parameter content into your script.

This script is super easy to setup and use. 

First, add the script to your document like this:
  
`<script src="urlparameter.js"></script>`

Next, you simply use the `GetURLParameter()` passing in the parameter name as a string.

For example, if you are passing in an id via the URL your code might look like this:

`var id = GetURLParameter('id');`

The url link would look like this:

http://www.example.com?id=5 which would set var id = 5.

This plugin accepts multiple parameters using the & as a divider. 

i.e. http://www.example.com?id=5&name=Max 

`var id = GetURLParameter('id');`
`var name = GetURLParameter('name');`

would also work.


