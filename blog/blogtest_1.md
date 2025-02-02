Some good examples of tradeoffs as I work on this little project.

I decided I wanted to start with 'vanilla' (but modern!) javascript, css, and html. Although there are many interesting front-end frameworks I've yet to try ([Svelte](https://svelte.dev/) and [HTMX](https://htmx.org/) being top of the list), there's been a ton of change in browser-native functionality to try to keep up on. Additionally, writing browser-native means no build step, which is one less layer of interpretation to deal with - great for rapid iteration without any of the usual fussing with bundler tooling.

It's great how much you can do RE: modularity now without a bundler. Native Javascript modules, CSS imports, and HTML templates each enable a workflow that previously wasn't available without some kind of bundling. 

On the other hand, there's still plenty of hacky hijinks that I wouldn't be engaging with if I was doing SSR or using a build step.

For starters, reusable HTML components (e.g. a site navigation bar) still appears to be a no-go without resorting to DOM manipulation via javascript (if you don't counting using frames - and I don't).

I absolutely will resort to DOM manipulation in this scenario - but that does carry it's own set of trade offs. I've gotten as far as generating blog posts from markdown files, which is super convenient - but I did realize after doing so that since it was dynamic content, I couldn't reliably make use of native jump links (anchors) - I had to add a javascript hack to check if a jump was requested, wait for for the element ID to exist in the page (which is the part that really hurts), and then manually trigger the scroll. Not the end of the world, but also not an issue with pre-baked HTML.
