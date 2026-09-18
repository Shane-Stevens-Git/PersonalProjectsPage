# Personal Projects Page

My personal projects page: a short description of each project I've built, with pictures and links.
It's a plain static site (HTML, CSS, and a little JavaScript), with no build step and nothing to install.

## View it locally

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

then visit http://localhost:8000.

## Add a project

1. In `index.html`, copy one `<section class="project ...">` block and paste it before the "Closing note" section.
2. Change its number, title, text, images, and links, and add a link for it to the `<nav>` at the top.
3. Put new pictures in `images/` (WebP keeps them small).

## Layout

- `index.html`: the page
- `css/style.css`: styles (light and dark themes follow the visitor's system setting)
- `js/main.js`: scroll fade-ins and click-to-enlarge images
- `images/`: project pictures

## Projects on the page

- [Flowing Curve Generator](https://github.com/Shane-Stevens-Git/Curvy_Line)
- [Lightbox Studio](https://github.com/Shane-Stevens-Git/LightboxStudio)
