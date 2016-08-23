# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## Tests that need to pass for application to work properly

1. In the first suite of tests we, need to loop through the `allFeeds` to make sure key-value pairs are present and values are not empty. In addition to making sure the `url` value was not empty, I also use a regular expression to ensure the url is in the right format.
2. In `"The menu"` suite of tests we need to check that the original state of the menu element is hidden by default.
3. We then need to make sure the menu element toggles visibility state when clicked.
4. In the `"Initial Entries"` test suite we need to make sure when the `loadFeed` function (which loads asynchronously) is called and completes its work, there is at least a single feed element within the `.feed` container.
5. And lastly, in the `"New Feed Selection"` test suite we need to write a test that ensures when a new feed is loaded by the `loadFeed` function that the content changes.


## To run the application

Download this repository. Open the index.html file in your browser. When the page loads, scroll to the bottom of page to see all Jasmine test suite specs.