# Technical Assessment - 'Fetch Gallery'

Generating a horizontally scrollable gallery of images from 'jsonplaceholder' data.

## Platform:

-  Web, ReactJS

## Task Breakdown

1. Upon the initial load, this app fetches /photos JSON data from the http://jsonplaceholder.typicode.com resource.

2. Create a horizontally scrollable gallery using the data. Each image should feature:

   -  The "title" text from the data, superimposed diagonally across the image.
   -  The images should have rounded edges and a distinct border.
   -  A subtle drop shadow to add depth to the images.
   -  Smooth scrolling functionality for an optimal user experience.

3. Optimize to cache downloaded images. Should the browser or tab be closed, reloading the page will not necessitate the re-download of previously loaded images.

4. Include a button that initiates a completely random reshuffling of the images in the gallery. This random reordering should be achieved through a recursive function.
