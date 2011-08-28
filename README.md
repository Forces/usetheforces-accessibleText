# Get the text within an element—including alt text—using jQuery

When working on the butterfly lightbox I needed a way to grab the text with a link including the alt text from any images within.

I couldn’t find any existing approaches, so I put together this small plugin to do the job. I thought I should post it here before I forget, or in case anyone else might find it useful too.

## Example

If you had the following html:

    <a id="smiley" href="">The symbol for happiness is <img src="smiley.png" alt="a smiley face" /></a>

You could grab the accessible text using the jQuery plugin like this:

    $('#smiley').accessibleText();

Which would return the text `The symbol for happiness is a smiley face`.

Let me know if you found this useful, or if you know of a better solution!
