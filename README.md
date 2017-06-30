# Word Counter

**Purpose**

Ever land on a web page and find yourself seeing the same words over and over again. Now we have an app that takes a URL and counts every word and character on that page!

Create and app that takes a requested URL via some sort of input on the browser. The browser should then render all the words on that webpage ordered first by numbers of occurrences and then alphabetical. 

For Example:

- Dog : 7
- Cat: 5
- Dolphin: 5
- Zebra: 5
- Alligator: 2

Our app should also have parameters that allow for more specific requests:
1. We should be able to request a count of only the words that begin with certain letters.
1. We should be able to request a count of all the letters, not the words.
1. We should be able to request a count of all the numbers on the page(not contained within words).
1. We should be able to request a count of all the first letters of the words on the page.

**How should you go about this?**

Well we can't give too much away! It is a challenge after all.

We have provided you with all the packages necessary to accomplish this task as well as a basic folder structure for you to use. You will find [jQuery] (http://jqapi.com/) on the front-end with Node/Express, Cheerio, and [request] (https://github.com/request/request-promise) on the backend. All complex logic should be done on the backend. You may use jQuery to show the results utilizing Ajax calls. We have provided one as example. However, if you are more comfortable in a front-end framework (React, Vue, Angular, Backbone, Ember, etc) then please use that instead. Also, if you prefer a different server side solution (Python, Ruby, Go, Scala, Elixir, etc) feel free to use that instead.

The actual style of the interface is 100% up to you, get creative and make it look good!

Don't forget to comment your code.

**Note:** We have set up the repo with ES5 syntax. If you know ES6/ES7 and prefer it, please refactor using those standards. We definitely prefer it! Also, Huge bonus points for dockerization and deployment!

**Getting Started**

Fork the repo to your own GitHub account. If you do not have a GitHub account, then this is a great time to make one!

$ git clone https://github.com/{your github handle}/WebWordCounter
$ cd WebWordCounter
$ npm install
$ bower install
$ npm start
Now visit localhost:4000

**Submission**

When you are done with the challenge please make a pull request from your GitHub repo to this GitHub repo. Please include YOUR NAME in the pull request.

**Helpful Resources**

Cheerio

[Request Library] (https://github.com/request/request-promise)

Routing W/ Express

[Good jQuery Documentation] (http://jqapi.com/)

[ES6 Reference] (http://es6-features.org/)

If you have any questions, please don't hesitate to reach out.

Dan Corman
