# Button Component

We should use the semantic tags in HTML for the "SEO" perspective and "accessibility"
so <a/> tag is used for the navigation
<button/> tag is used for the action perform

it is a bad practice to navigate to different page using the onClick bcoz google crawler cant read that it is a link

so the solution is polymorphic component

you have to create a button component
-> which will handle the action perform using the onCLick <button/>
-> which will handle the outside links <a/>
-> which will handle the internal links <Link/> tag so that it does not reload the page again
