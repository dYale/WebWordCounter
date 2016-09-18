####Hello World Coding Challenge - Word Counter

###Purpose
Ever get to a web page and find yourself seeing the same words over and over again. Now we have an app that takes a URL and counts every word and character on the webpage!

1. Create and app that takes a requested webpage via some sort of Input on the browser. The browser should then render all the words on that webpage ordered first by numbers of occurrences and then alphabetical.
 For Example:
 	1.  Dog : 7 
 	2.  Cat: 5
 	3.  Dolphin: 5
 	4.  Zebra: 5
 	5.  Alligator: 2

2. Our app should also have parameters that allow for more specific requests. 
    1. We should be able to request a count of only the words that begin with certain letters. 
    2. We should be able to request a count of all the letters, not the words.
    3. We should be able to request a count of all the numbers on the page.
    4. We should be able to request a count of all the **first** letters of the words on the page.
    
###How should you go about this?

Well we can't give too much away! It is a challenge after all.

We have provided you with all the packages necessary to accomplish this task as well as a basic folder structure for you to use. You will find jQuery on the front-end with node/Express, Cheerio, and request on the backend. All complex logic should be done on the backend. You should use jQuery to show the results utilizing Ajax calls. We have provided one as example. However, if you are more comfortable in a front-end framework (Angular, React, Backbone, Ember, etc) then **please** use that instead.

The actual style of the interface is 100% up to you, get creative and make it look good! 

Note: We have set up the repo with ES5 syntax. If you are comfortable or would like a challenge, please refactor using ES6 standards.

## Getting Started

```
$ git clone https://github.com/HelloWorldStudio/WordCounter
$ cd WordCounterJs
$ npm install
$ bower install
$ npm start
```

Now visit [localhost:4000](http://localhost:4000/)

##Helpful Resources
    
[Cheerio](https://github.com/cheeriojs/cheerio)

[Request Library] (https://github.com/request/request-promise)

[Routing W/ Express](https://expressjs.com/en/guide/routing.htm)

[Good jQuery Documentation] (http://jqapi.com/) 

[ES6 Reference] (http://es6-features.org/)


If you have any questions, please don't hesitate to reach out. 

**Hello World Studio**