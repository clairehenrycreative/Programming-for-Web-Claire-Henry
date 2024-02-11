const myEmptyDiv = document.querySelector('#myEmptyDiv')
;
const heading = document.createElement('h1');
heading.innerHTML = 'Hello class! It is a snowy day!';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick () {
    document.body.style.backgroundColor = 'magenta';
}