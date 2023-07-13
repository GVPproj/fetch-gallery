## Work Journal: Fetch Gallery

### Setup

1. Started on the right foot with my npm unable to install any packages. After using **nvm** to switch node back to the LTS version with no effect, in the end a clean install and cache clean did the trick. `sudo npm install npm -g` `npm cache clean --force`

2. Now I can create a react app with Vite. I haven't deployed to github pages in a while and getting Vite building properly wasn't instantaneous. The simplest Vite React deployment guide for gh-pages I settled on uses a **github action**: https://github.com/ErickKS/vite-deploy. The action is in a .github folder in the repo.

3. Next up I scaffolded the app, installing Tailwind for speediest CSS generation and creating header and gallery components to render in the app view. I use Tailwind here because for quick projects I can iterate with speed and it all scopes and just adds regular CSS at build time.

### Fetch

4. At this point I fetched the data. The smallest set of photos I found at the api was 50, and without any kind of 'limit' url param available (that I could find). I chose to Array.slice() the response down to 8 objects in my `fetchData()` function:

```jsx
useEffect(() => {
      const fetchData = async (url: string) => {
         let response = await fetch(url)
         let data = await response.json()
         let trimmedData = await data.slice(0, numberOfImages // hard-coded to 8 at top of component)
         setImagesData(trimmedData)
      }

      fetchData(url).catch(console.error)
   }, [])
```

5. Now I pass my data as a prop to my Gallery function component, and set it inside a div with some width and height CSS properties. The ImageGallery will conditionally render with a truthy `imagesData` value.

### Render

6. Now it wass time to dig into the ImageGallery component. I chose to handle some of the styling features first, using Tailwind classes to:

-  round the border`rounded-lg border-4`
-  set its colour`border-neutral-100`
-  add a coloured drop shadow`shadow-md shadow-neutral-300`
-  position the eventual background image `bg-cover bg-center`

7. At this point I was hoping to pass the backgroundImage URL right into Tailwind, but found it a bit finicky and didn't find a simple solution online. Therefore I used a JSX style attribute instead: ``style={{ backgroundImage: `url(${imagesData[1].url})` }}``.

8. Next I added the title in a rotated div. I ended up adding custom rotation values to the Tailwind `Rotate` class in tailind.config.js:

```js
theme: {
    extend: {
      rotate: {
        '28': '28deg',
        '30': '30deg'
      }
    }
  },
```

which generates this CSS class:

```CSS
.rotate-28 {
    --tw-rotate: 28deg;
    transform: translate(var(--tw-translate-x),
      var(--tw-translate-y)) rotate(var(--tw-rotate))
      skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
```

We can see in Tailwind that it creates a css variable with our value and applies it in numerous ways inside the CSS `transform` property to create the rotation.

9. This title text needed some styling to increase legibility, so I render it in bold on a semi-tranparent pill shape with a max width using the **ch** CSS property.

### Refactor, Style and Animation

10. Relealized I can use an albumId query param to get down to 50 on the initial fetch :). I still feel that there is something I'm missing about paring down this fetch call, ie. I'm still getting 42 JS objects I don't need in the build.

11. At this point I spent quite a long time refactoring and puzzling out the logic to get divs next to each other animating with react state. A framer motion course I've been taking had a bit about laying images out in a very wide flexbox and using `overflow: hidden` to hide all but the desired visible area (taken up bu one image in this case). Then we can set the x-position at our useState index as a mutiple of the index by 100% of the width. Getting all the flexboxes, relative and absolute positionings and nesting working took a while! In the end I am rendering proper **img** elements instead of fussing with div backgroundImage attributes which feels cleaner.

12. Adding the shadow required creating some space, and at this time I was happy with the animation and didn't want to mess witht the simple math involved. I ended up squeezing the image in a bit with width and height at 83% of the parent (animated) div. This number coming from tailwinds w- and h-5/6 class. I also adjusted the rotation and width on the title text here to play nice on top of the smaller image div.

### Recursive Shuffle Function

13. Recursion in programming is a fascinating subject that I have never used in a project before. For a recursive shuffle button, I first consumed a few articles and videos on the concept of a recursive JS function. Essentially, a function calls itself somewhere within its code, and there is a base outcome that stops the function from looping forever. In this instance I needed to pull the imagesData prop into state within the gallery, so I could shuffle it into a new array and then set that as state when the user clicks "Shuffle". The most useful guide I found quickly was a medium poset: https://medium.com/@codyfizbuzz/the-recursive-clean-shuffle-e9afc88a8a90. I haven't used recursion before but can see its value here. I commented this heavily for future reference / usage...

```js
// a 'clean shuffle' that uses recursion and doesn't mutate the input

export default function recursiveShuffle(arr) {
   let shuffled = []
   // array to return each time
   if (!arr.length) {
      return shuffled
      // BASE CASE: break out of recursion if source array has no elements
   }
   let i = Math.floor(Math.random() * arr.length)
   // a random index from within array length
   shuffled.push(arr[i])
   // push randomly indexed element from old array into new array
   let slicedArray = arr.slice(0, i).concat(arr.slice(i + 1))
   // a new array w/o pushed element
   return shuffled.concat(recursiveShuffle(slicedArray))
   // RECURSIVE CASE: return shuffled array merged w/ self-call(on sliced array)
}
```

Once this was working the UI experience felt a bit lacking (the shuffle was instant and it wasn't always clear anything had happened). I added some pending UI on the shuffle button and rendered a list of the image indexed to clarify that Shuffle had worked for the user.

### Caching and Submission

14. On to the caching situation. Checking the network tab, I see that `Cache-Control: public, max-age=31557600` is coming from the server in my Response Headers on my images and that the browser is caching these images in event of closing the browser. This is the preferred browser behaviour but I am researching other caching optimizations. Further, my fetch call appears to be caching in the network tab as well. I looked at memoization with **memo** as well as **useMemo** in react but didn't get the sense that these tools fit the use case enough to dedicate time to implementing them. Would love to learn more about this! I am not sure I met the requirement here. I considered passing the fetched data into localStorage and then conditionally re-fetching if localStorage was missing my data key. I would love to discuss this more. I am not sure whether using Vite or GH pages is resulting in the caching policy.

15. From here I did some refactoring and styling cleanup. There is always lots more to do and try with styling and I need to avoid over-tinkering here. I'm hoping that journaling the process like this will help if I need to come back to this or re-use certain elements in future.
