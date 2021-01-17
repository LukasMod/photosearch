* Title: PhotoSearch
* Description:  PhotoSearch with Unsplash API. 
* Author: Lukasz Modzelewski 
* React (router, context, ref, hooks), HTML, CSS (SCSS, BEM), RWD
* DEMO: https://lm-photosearch.herokuapp.com/
---

### How to run (dev mode)

In the project directory, you can run:

    yarn start

Runs the app in the development mode.

---

Features added:
* home page with input component
* results page with input component in header and lists of results
* footer with social links
* page not found component
* input with autocomplete (words from commonWords.json)
* autocomplete works after typed min 3 letters, if less - there is warning in placeholder and red border
* show info if there is no results from autocomplete
* navigation through autocomplete list with arrow UP, DOWN, ESC and albo with mouse
* fetching from Unsplash API (50 requests / hour allowed)
* show error if fetch failed
* context for global data
* click on image, result with new modal window (to close it, use button or click outside)
* responsive web design - good looking on phones and desktops, extra search button on phones and tablets

---

Possible future improvements:
* grid instead of flexbox for search results
* random photo on home page
* bigger database for autocomplete or even some API
* upgrade autocomplete feature, to suggest new word after each typed
* skeleton components while loading


