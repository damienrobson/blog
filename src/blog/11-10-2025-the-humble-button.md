---
title: The humble button (and how to make an accessible one)
details: 11th October 2025
date: 2025-10-11
summary: Because why make something so simple so complex?
---

Ah, the humble button. Probably the most common element found out in the wilds
of the web today (if not the most common, then at least a close second to
something link an anchor element, but I digress...). Here's one:

<button>I'm a button</button>

What's not to love? Go ahead, give it a click. It won't do anything (that, and
I know you're probably fighting the urge to to see if it does in fact do
something now that I've said not to).

Buttons are a part of the backbone of accessible websites. They let users
interact with things in various ways. They stand out, and most people likely
don't need to be told what they are or what they're for. I'm generalising,
of course, but given the above, why would we need a button to look or behave
in a different manner?

The short answer is, "we don't". Semantic HTML usage is already clear and
prescriptive enough that I don't need to add extra mark-up to a `button` for
users of assistive technologies to know it's a button. But sometimes, you
need to make a button look a little... different. Maybe it needs to fit in
with a particular theme or brand. Maybe you don't like grey, or rounded
corners. Whatever the case may be, if you don't like it, change it. Just please
do so in a way that benefits everyone. And with that, let's take a closer look
at how you might go about building one in React.

## Core concepts

### Colours

First off, let's just take the button above and give it a lick of paint to
make it stand out.

<style>
    .button-demo-1 {
        background-color: blue;
    }

    .button-demo-2 {
        background-color: blue;
        color: white;
    }

    .button-demo-3 {
        height: 24px;
    }

    .button-demo-4 {
        background-color: blue;
        color: white;
        height: 24px;
        font-size: 16px;
    }

    .button-demo-5 {
        background-color: blue;
        color: white;
        height: 24px;
        font-size: 16px;
        font-weight: 500;
    }


    .button-demo-6 {
        background-color: blue;
        color: white;
        height: 24px;
        font-size: 16px;
        font-weight: 500;
        padding: 8px 24px;
    }

    .button-demo-7 {
        background-color: blue;
        color: white;
        min-height: 24px;
        font-size: 16px;
        font-weight: 500;
        padding: 8px 24px;
    }

    .button-demo-8 {
        background-color: blue;
        color: white;
        min-height: 24px;
        font-size: 16px;
        font-weight: 500;
        padding: 8px 24px;
        margin: 8px 16px;
    }


    .button-demo-9 {
        background-color: blue;
        color: white;
        min-height: 24px;
        font-size: 16px;
        font-weight: 500;
        padding: 8px 24px;
        margin: 8px 16px;
    }

    .button-demo-9:focus-visible {
    outline: 9px double black;
    box-shadow: 0 0 0 6px white;
    }

    .button-demo-10 {
        background-color: blue;
        color: white;
        min-height: 24px;
        font-size: 16px;
        font-weight: 500;
        padding: 8px 24px;
        margin: 8px 16px;
    }

    .button-demo-10:focus-visible {
    outline: 9px double black;
    box-shadow: 0 0 0 6px white;
    }
</style>

<button class="button-demo-1">I'm a button</button>

Isn't that painful? Even with the best eyesight in the world, you're likely
going to struggle with that text, especially if it stays that colour. So, let's
swap that out, too:

<button class="button-demo-2">I'm a button</button>

Better? Probably. This is because white-on-blue has a great color contrast
ratio; that is, the ratio at which one colour stands out against another. WCAG
success criteria required a colour contrast ratio of 4.5:1 for normal text
(or 3:1 if using a larger font size). There are a million and one tools out
there that can check this for you (you don't need to calculate this yourself,
don't worry). My personal favourite is <a href="https://colourcontrast.cc/" target="_blank" rel="noreferrer">ColourContrast.cc  (opens in a new window)</a>, mainly because it's simple and effective, but also because I'm
British and they've used the correct spelling of "colour"...

Our black-on-blue button comes in at a ratio of 1.85:1. Barely discernible.
Our white-on-blue button, however, has a ratio of 8.59:1. So much better.
One simple tweak and we've quadrupled the ratio (and thus, potentially
quadrupled the number of people who can successfully see it).

This still pales in comparison to the default button colours of black-on-grey,
which comes in at a massive 18.43:1 ratio.

### Sizing

Size matters. Don't let anyone tell you otherwise. Depending on your setup,
you might have noticed that the above buttons are all a little on the small
side. Default buttons in my browser appear at 21px in height (width is
obviously dependent on content). In order for it to meet WCAG criteria,
we're going to have to inflate it a little. Consider these two default
buttons:

<button >I'm a button</button>
<button class="button-demo-3">I'm a button</button>

I've shown two side-by side for a reason. The size difference is tiny, but
it is there; the second is 24 pixels in height. If you're lucky enough, as I
am, to not have any motor impairments, then the 3 pixels in difference
probably doesn't matter. Where it does matter is when you introduce a
degenerative disease into the mix, such as Parkinsons Disease. The extra 3
pixels worth of spacing could be the difference between a successful click
and not if a user suffers from conditions such as hand tremors, or relies
on a device such as a mouthstick to interact.

24 pixels is now considered big enough to meet the WCAG success criterion,
but there's also one more thing we can adjust to improve the situation
even further. Let's make the font size bigger.

In my browser, buttons default to a font size of around 13 pixels; this
may change depending on your browser. Whilst this is a perfectly
acceptable font size, users with low vision may struggle to distinguish
between the individual letters. A good ballpark figure is 14 pixels, but
even then I find that that doesn't offer enough of a difference to be
worthwhile, so I tend to lean a bit further into it and aim for 16 pixels
minimum. Stick to what works for your look and feel, but remember:
consistency is key. Don't wildly swing between font sizes to make sure
that every component can be used equally.

Given the above, let's apply the new font size:

<button class="button-demo-4">I'm a button</button>

Better, but now we have a new issue; font weight (or, in layman's terms,
how thick or thin the font is). If you've never set up a font weight,
chances are you're using the `normal` setting. Numerically, this can
also be represented as `400` weight. Different font weights will work
better for certain colour combinations, and in our white-on-blue
scenario, `400` doesn't quite cut the mustard. Let's bump it up a
smidge and see what results we get:

<button class="button-demo-5">I'm a button</button>

See the difference? Now the white text stands out better against the
blue backdrop. Again, you'll probably need to fiddle around with the
values to find something that works for you. No matter the values
you end up with, though, you may find yourself feeling that your text
looks a little... stuck. It doesn't look particularly comfortable.
So let's give it a bit more room.

For this, we can turn to those CSS staples: `margin` and `padding`.
In case you aren't aware, `margin` controls external spacing (the gap
surrounding the element), and `padding` controls internal spacing (the
gap between the element's "border" and any child elements that it
has). Seeing as we only have a single button at the moment, let's
start with `padding` first.

You can set `padding` either in one property, or across multiple
ones. I won't go into it here - it's a subject in itself and one
that has been written about a great many times. If you need a
quick primer, be sure to checkout the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding" target="_blank" rel="noreferrer">MDN docs (opens in a new window)</a> on the subject.

For our button, I'll going to use values of 8 pixels for vertical
spacing and 24 pixels for horizontal spacing:

<button class="button-demo-6">I'm a button</button>

Ok, that's not meant to happen... The cause of the above is
due to something we did earlier: our `height` property is now restricting
the height of the button, regardless of the padding we're setting.
We can rectify this by changing our `height` property to `max-height`:

<button class="button-demo-7">I'm a button</button>

Much better. This is a key lesson in writing CSS: sometimes, CSS properties
can interfere with one another and the solution is not always solved by
adding more CSS. In this instance, we were adding 16px worth of padding around
16px worth of font size. 32px (16 + 16) is greater than 24px (our `height`),
and thus you start seeing oddities like the above. Note that, it's
not actually THAT simple under the hood, but it's a way I like to think
about it because I can understand that way more.

Now, let's see what happens when we put two of those buttons side-by-side:

<button class="button-demo-7">I'm a button</button>
<button class="button-demo-7">I'm a button</button>

Not too bad, but there may be times when the buttons are touching which,
similar to the earlier touch target point, can make it difficult for
some users to interact with the correct elements. Let's space the buttons
out a bit (note: there are other ways to do this such as using <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noreferrer">Flexbox (opens in a new window)</a> which I won't cover here, just
know you have other options which are likely to suit your situation more).
Here's the button with a margin applied:

<button class="button-demo-8">I'm a button</button>
<button class="button-demo-8">I'm a button</button>

Look at all that space! You'd be hard-pressed (pun intended) to click on the
wrong button now!

## Focus and keyboard interaction

So now we've got a functioning button that builds on the core element whilst
keeping itself accessible and usable. One thing you might have noticed if you've
used a keyboard to navigate this site is that the focus border being applied to
the button is different from the default. Most browsers use a single solid blue
line around the outer-most element of whatever has focus. My blog has a different
focus outline because I wanted a more obvious focus indicator. If you haven't
already, press `Tab` a couple of times and watch what happens as the various
links and buttons gain focus.

Achieving something like this is quite straightforward, and we don't need to rely
on anything beyond CSS and pseudo-classes. Nice! By using `:focus-visible`, we can
adjust the focus indicator so that it's more obvious than what you get out of the box.

<button class="button-demo-9">I'm a button</button>

Now, users who rely on keyboard navigation or suffer from poor eyesight have a much
better indication of what content currently has focus.

## A word on ARIA

I want to get something out of the way early on this: 

> "no aria is better than bad aria"

ARIA (_Accessible Rich Internet Applications_) is designed to fill the gaps in
scenarios whereby you can't make native HTML elements fully accessible. Does 
this mean that we can use it to make perfect, accessible buttons that anyone 
can use? Well... no, not really.

The `button` element in and of itself is highly semantic; that is, the vast
majority of users who encounter a button, through any medium, will know that
they're interacting with one. You therefore don't need to add e.g. 
`role="button"` to a button because it already does that out of the box. You 
can apply this rule quite generally by simply asking yourself, "do I need
to add this?".

A great example of where the line should be drawn is `aria-label`. Under
normal circumstances, buttons have no need of it; they have text to convey
purpose:

<button>Next page</button>

You don't need anything extra adding to that button for it to tell you or
your users what it's purpose is. It will take you to the next page. But what
you can across this instead?

<button>&#8592;</button>

You might have higher technical literacy and be able to hazard an educated 
guess as to what that button does. It probably goes backwards. But what if
you didn't have that knowledge? Similarly, what if you can't see the button's
content in the first place?

Assistive technologies vary in how they announce elements, but you can be
certain that no screen reader will ever reach that button and announce it
as a "Go back" button. Most likely, and if you're lucky, it will be announced
as "button, left arrow". But that means nothing to anyone. So what can we do?

Well, that's where `aria-label` comes to the fore. Normally, you wouldn't need
it, but in this instance, you need to add some additional meaning to the button
so that every user has the same experience when using it:

<button aria-label="Go back to the previous page">&#8592;</button>

Nothing's changed? Visually, no, it hasn't, but try turning on one of your 
machine's assistive technologies and applying focus to it...

Neat, right? Your button looks the same as it did, but now everyone can use
it. This is a great example of use of ARIA; only applying when it needs to
be applied, and doing so in a way that enhances (not replaces) the semantics
that are already in place.

## Putting it all together

By now you should be fully prepared to write your own custom buttons. We've
gone from this (perfectly fine but might not fit your aesthetics):

<button>Previous Page</button>

to this:

<button class="button-demo-10" aria-label="Go to the previous page">&#8592;</button>

Both buttons are still just that: buttons. All we've done is build around the base
element whilst allowing it to remain as simple and low-level as possible. If
we've found a gap, we've plugged it, but never in a way that's detrimental to the
user. Moreso, we're still using `button`. We're not doing something crazy like
adding a click handler to a `span` element with `role="button"` and giving it
custom pointers via CSS. We're letting the HTML do 98% of the work for us out
of the box. And at the end of the day, that's less work to get it up and running,
and less work to maintain it.

And at the end of the day, surely that's all we can ask for as developers, right?

If you'd like to learn more about ARIA, I recommend you check out the official 
documentation over at the <a href="https://www.w3.org/WAI/standards-guidelines/aria/" target="_blank" rel="noreferrer">WAI-ARIA standards page (opens in a new window)</a>

Until next time.