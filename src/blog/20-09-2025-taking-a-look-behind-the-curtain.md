---
title: Taking a look behind the curtain
details: 15th September 2025
summary: Because what happens backstage is just as important
---

I've added support for users who prefer dark mode this morning. I've also
been fiddling around with keyboard focus indicators, as shown in the
following screenshots:

<div class="inline-image-wrapper">
    <img src="/images/20-09-205-light-with-focus.png" alt="My blog in light
    mode. The new focus indicator is visible around one of the article links.
    In light mode, it appears as a 3 solid stacked lines of black, white and 
    black colour, 3 pixels thick.">
    <img src="/images/20-09-205-dark-with-focus.png" alt="My blog in dark
    mode. The new focus indicator is visible around one of the article links.
    In dark mode, it appears as a solid white line, 3 pixels thick.">
</div>

It's probably a good time to talk about what's going on behind-the-scenes. When
I first started fleshing out the framework for this blog, I was put off by a
lot of the impending nuances that I would have to accommodate for; not everyone
uses the web in the same way. However, on reflection, what I have is actually
quite compact and lightweight.

There's actually very little to the site. A few years ago, I picked up a side
project at work with Martin, who introduced me to
<a href="https://www.11ty.dev/" target="_blank">Eleventy</a>. As a React
developer, Eleventy (11ty) feels... weird. It's a static site generator
(and a bloody good one at that) with very little in terms of bells and whistles,
and you're very much given a blank canvas when you first start out with it.
Fast-forward to today, however, and the value in that is clear; I've been able
to get this blog up and running, and out of the door, in a matter of hours
(days if you then look at the tweaks and things I've done to it). Take a look
at my <a href="https://github.com/damienrobson/blog" target="_blank">GitHub
repo</a>; you'll see that there's more files for optimising security, SEO,
etc. than there is actual 11ty overhead.

11ty happens to also be the only dependency I have/want/need. Everything else
is handled in pure HTML, CSS and JavaScript. At the time of writing, the entire
site builds from scratch in 0.21 seconds. That's insane. I'm used to builds
taking upwards of 10-15 seconds at the best of times. To have a whole site built
in such a short space of time is nothing short of incredible.

And that's it, really. Being so lightweight, there's actually not a lot more I can
talk about without drilling into the very specific details of how pages are built,
etc. If there's demand for it, maybe one day I will. But that's not one for today.

One final note: I use <a href="https://www.netlify.com/" target="_blank">Netlify</a>
for building, deploying and hosting. Similar to 11ty, I've found it to be
quite simple and easy-to-use. I'm using their Free Plan at the moment, and I'm
hammering my monthly credits, but once things stabilise I'm sure that that will
take care of itself. Heck, I might even go so far as to upgrade to their
Personal plan at some point, but let's see where things go.

Auf Wiedersehen!
