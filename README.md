# Alchemy Bootstrap Template

## Making a plan

(bolded steps are mandatory, unbolded are for more advanced projects)

1) **Make a drawing of your app. Simple "wireframes"**
2) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
3) **For each HTML element ask: Why do I need this?**
4) Ask which of out HTML elements are hard coded, and which are dynamically generated?
5) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
6) Is there some state we need to initialize?
7) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
8) **Think about how to validate each of your steps**
9) Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
10) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
11) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**


## To Run Cypress Tests
* `npm install`
* `npm test`
* Cypress will open -- you should then click "run <#> integration spec(s)"
    ![](cypress.png)
* Make sure all tests pass


### PLAN

## html elements
create 3 radio buttons with images
event listener on button

## state
totalplays
what's been picked
what's been shown

## user events
page load
-genereate 2 random pokemon
-update shown
-render pokemon on the page

## button click
update picked
totalplays

## data
total plays #
results array
pokemon array

## functions
findById
getResults
-get data from local storage
showPokemon(id)
increments shown
pickPokemon(id)
increments picked

encounter pokemon and capture



sooo
make a homepage with three images as radio buttons
button with an id of select pokemon

make an empty results page

local storage functions

app.js logic
make a functoin called generatePokemon()
generate 3 random pokemon and call showPokemon for each 
make sure none are the same
render pokemon on page

## on page load
call generatePokemon
set totalPlays to 0

## on button click
increment totalplays
call pickpokemon with chosen pokemon
if total plays >= 10 redirect to results page, else call generate pokemon
