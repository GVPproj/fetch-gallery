# Technical Assessment - 'Fetch Gallery'

Generating a horizontally scrollable gallery of images from 'jsonplaceholder' data.

## Platform:

- Web, ReactJS

## Task Breakdown

1. Upon the initial load, your web application should fetch /photos JSON data from the http://jsonplaceholder.typicode.com resource.

2. Utilizing the data obtained, generate a horizontally scrollable gallery of images. Each image in the display should feature:

   - The "title" text from the data, superimposed diagonally across the image.
   - The images should have rounded edges and a distinct border.
   - A subtle drop shadow to add depth to the images.
   - Smooth scrolling functionality for an optimal user experience.

3. Your application should be optimized to cache downloaded images. This is to ensure that, should the browser or tab be closed, reloading the page will not necessitate the re-download of previously loaded images.

4. Include a button below the scrollable image gallery on the web page. When clicked, this button should initiate a completely random reshuffling of the images in the gallery. This random reordering should be achieved through a recursive function.

## Additional Instructions

We will test your application using various web browsers. Please specify if you have a preferred browser for optimal performance. If possible, we recommend using GitHub for version control and as a hosting platform for your project, sharing the public repository URL with us (our preferred method). There is no requirement for you to send us any package or binary files.
