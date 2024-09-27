const tags = [
    { tag: 'div', type: 'block' },
    { tag: 'span', type: 'inline' },
    { tag: 'p', type: 'block' },
    { tag: 'a', type: 'inline' },
    { tag: 'section', type: 'block' },
    { tag: 'b', type: 'inline' },
    { tag: 'h1', type: 'block' },
    { tag: 'em', type: 'inline' },
    // Add more tags as needed
];

let currentTag = {};

function getRandomTag() {
    const randomIndex = Math.floor(Math.random() * tags.length);
    return tags[randomIndex];
}

function displayTag() {
    currentTag = getRandomTag();
    const tagDisplay = document.getElementById('tag-display');
    tagDisplay.textContent = `<${currentTag.tag}>`;
}

function checkAnswer(type) {
    const body = document.body;
    if (type === currentTag.type) {
        body.classList.add('correct');
    } else {
        body.classList.add('wrong');
    }

    setTimeout(() => {
        body.classList.remove('correct', 'wrong');
        displayTag();
    }, 3000);
}

document.getElementById('inline-btn').addEventListener('click', () => checkAnswer('inline'));
document.getElementById('block-btn').addEventListener('click', () => checkAnswer('block'));

// Initialize the first tag display
displayTag();
