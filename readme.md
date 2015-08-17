# Intro #

In Valve a part of what we do is single page apps. We also fiddle with APIs and our primary Javascript framework is AngularJS. This set of assignments requires you to have familiarity with with AngularJS, SCSS, Grunt, REST APIs and basic software architecture. 
The assignments consist of a number of small tasks. It's recommended to read through the entire set of the assignments before proceeding to do them.

## How to submit your work ##

__NOTE! PLEASE DO NOT FORK THIS PROJECT__ for obvious reasons. Checkout, complete the assignments and then __pack the project into a single zip file, node_modules and temporary/cache folders excluded__.  
Send the zip along with your application to _simo.pulkkinen@valve.fi_.

## The application / project ##

This is a simple one page Angular application that lists a set of events happening in Helsinki. It consists of two views: the intro view and the events view. The project uses Grunt for automation and Bower for dependencies with Angular used as the base JS framework and SCSS is used for styling. The setup is simple, just run:

	npm install
	bower install

And to get the grunt task running, 

	grunt

This will start an active watch task and the application will be built into the __build/__ folder.  
Naturally Node.js needs to be installed for any of this to work. __Note: You'll be accessing a public API from the app so you'll need to run it under localhost or some other server.__
Inside the project directory you'll see the configuration files in the root, app sources inside __src/__ and the grunt output is placed in the __build/__ directory.

## API ##
The application will be based on the open Helsinki Linked Events API. The API specification can be found here: [http://api.hel.fi/linkedevents/v0.1/](http://api.hel.fi/linkedevents/v0.1/)

## Source directory contents: ##
+ src/	
	+ assets/ - all assets, such as images, videos etc.
	+ js/ - all javascripts except vendor scripts
	+ scss/ - SCSS files
	+ templates/ - Angular HTML templates
	+ vendor/ - vendor scripts from Bower
	
	+ index.html - the main application page

Some tasks require may you to install additional packages. Install whatever you feel you require.


## Coding standards ##

Study the project contents first and its organization. Note the guidelines used in the application and follow them.  
In short: The CSS follows the BEM idiom. Javascript uses camelCase. Javascript documentation should be in jsDoc format.  

  
  
# The assignments #

## Story 1: Service for the events API ##

The application is based on the open Helsinki Linked Events API. The API specification can be found here: [http://api.hel.fi/linkedevents/v0.1/](http://api.hel.fi/linkedevents/v0.1/)

### As a developer ###

I should be able to get a list of events for a given time span whenever requested.  
The API returns results as paged so also getting the next page should be supported.  
I'm interested in the start/end dates, event name, event description, event info url, location name, location address (city, street).  
The following pieces of information must be included in the data obtained from the API:  

+ start/end date
+ event name
+ event description
+ event info URL
+ location name
+ location street address
+ event image

### Acceptance criteria ###

+ The system should at absolute minimum fetch the first page of results
+ Additional points for result pagination

You should reserve about 1-2 hours for this assignment.


## Story 2: The events page ##

A very basic layout template of the events page has already been provided for faster testing.

### As a user ###

I should be able to browse events that occur during the next 30 days.
I'm interested in:

+ start/end date
+ event name
+ event description
+ event information
+ location name
+ location street address
+ event image

I should be able to click an event's info URL if it has one to get more information in a new tab.  
When the events are still loading I'd like to know it.

### As a developer ###

I should style the event list to look good.

+ I should make a proper layout
+ If there's an image available, I should display it.
+ If there's no image available, I should reserve all space for the textual content.  

I should provide all localized textual content primarily in English. If English text is not available then Finnish should be shown.  
If an event doesn't have an info URL I should instead open Google search in a new tab with the event name as search term.  
I should also provide a loading spinner to let the user know what's going on.  

### Acceptance criteria ###

+ The page displays the list of events that is gathered from the API
+ The page is properly styled with SCSS
+ Additional points for pagination support

You should reserve about 1-2 hours for this assignment.


## Story 3: Responsiveness ##

### As a user ###

I should be able to browse both the intro page and the events page with my iPad and my phone with good user experience.


### Acceptance criteria ###

+ Breakpoints for different screen sizes
+ The pages must be usable, clear and readable with a tablet and a mobile phone sized display

You should reserve about 30 minutes for this assignment.


## Story 4: More bling! ##

### As a developer ###

I should add a nice sliding animation to the transition from a view to another (intro <-> events).

### Acceptance criteria ###

+ The app has a sliding animation when moving between views

You should reserve about 15 minutes for this assignment.


## Story 5: Release build task ##

### As a developer ###

I should improve my toolset (Grunt) to be able to deploy a finalized app into another build directory.  
I should add a new release build task for this purpose.  

### Acceptance criteria ###

+ The app minifies your Javascripts and generates a source map
+ The app only copies Javascripts from vendor directories instead of everything
+ The app still works after the release optimizations :)

You should reserve about 30-60 minutes for this assignment.


## Story 6: Design an architecture for a part of an application ##

### As a developer ###

I need to design and describe an architecture that enables me to embed these events and event lists anywhere on my site.  
I need to:

+ currently list events on the events page 
+ will need to list all today's events on one page 
+ will need to list an arbitrary number of events using the search API on another page
+ may need to show an individual event information or a list of events, determined by some search criteria on any other page later on

### Acceptance criteria ###

+ A textual/visual description of the software component architecture that accommodates the given requirements
+ Explanation why the presented solution is a good one


# Questionnaire #

Please write your answers to "answers.md" in the root directory of this project.
 
1. Approximately how long did each task take to complete?
2. Did you have previous experience with Angular, SCSS and Grunt?
3. Would you rate this test as easy, medium or hard for your skill set?
4. Your feedback on this test, what do you think we could we improve in it?
