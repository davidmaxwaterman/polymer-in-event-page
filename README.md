polymer-in-event-page
=====================

test app using polymer element in a background page

I get these errors in the console for the background.html page :

```
Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self' chrome-extension-resource:".

polymer.js:13 Uncaught ReferenceError: Polymer is not defined
core-xhr.html:27 Refused to execute inline script because it violates the following Content Security Policy directive: "script-src 'self' chrome-extension-resource:". Either the 'unsafe-inline' keyword, a hash ('sha256-...'), or a nonce ('nonce-...') is required to enable inline execution.

core-ajax.html:36 Refused to execute inline script because it violates the following Content Security Policy directive: "script-src 'self' chrome-extension-resource:". Either the 'unsafe-inline' keyword, a hash ('sha256-...'), or a nonce ('nonce-...') is required to enable inline execution.

my-element.js:1 Uncaught ReferenceError: Polymer is not defined
```
