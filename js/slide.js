{/* <script> */ }
let currentSlide = 0;
const track = document.getElementById('track');
const slides = document.querySelectorAll('.slide');

function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;

    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    resetAllCounters();
    animateCountersInSlide(currentSlide);
}

function resetAllCounters() {
    const allCounters = document.querySelectorAll('.counter');
    allCounters.forEach(counter => {
        counter.textContent = '0';
    });
}

function animateCountersInSlide(index) {
    const counters = slides[index].querySelectorAll('.counter');

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        counter.textContent = '0';
        const duration = 1000;
        const increment = target / (duration / 16);

        let current = 0;

        const update = () => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
            } else {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(update);
            }
        };

        requestAnimationFrame(update);
    });
}

// Inicializa a primeira vez
animateCountersInSlide(currentSlide);
{/* </script> */ }

{/* <script> */ }
const typewriterElement = document.getElementById('typewriter-slide');

const htmlToType = `
    <h4>I'm 2 a freelancer</h4>
    <h3>Some interesting <span class="green">facts</span> about me</h3>
    <p>We started as a small, subdue, called hath gve fourth. Them one over saying.</p>
    <h2>Numbers</h2>`;

function typeHtml(element, html, speed) {
    let i = 0;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const nodes = Array.from(tempDiv.childNodes);

    function typeNode(nodeIndex = 0) {
        if (nodeIndex >= nodes.length) {
            element.classList.add('done'); // ✅ PARA O CURSOR
            return;
        }

        

        const node = nodes[nodeIndex];

        if (node.nodeType === Node.ELEMENT_NODE) {
            const clone = node.cloneNode(false);
            element.appendChild(clone);
            typeHtml(clone, node.innerHTML, speed);
            setTimeout(() => typeNode(nodeIndex + 1), node.textContent.length * speed);
        } else if (node.nodeType === Node.TEXT_NODE) {
            let text = '';
            let charIndex = 0;

            function typeChar() {
                if (charIndex < node.textContent.length) {
                    text += node.textContent[charIndex];
                    element.lastChild.textContent = text;
                    charIndex++;
                    setTimeout(typeChar, speed);
                } else {
                    typeNode(nodeIndex + 1);
                }
            }

            const textNode = document.createTextNode('');
            element.appendChild(textNode);
            typeChar();
        }
   
    }
    
    typeNode();
}


document.addEventListener('DOMContentLoaded', () => {
    typeHtml(typewriterElement, htmlToType, 25);
});

{/* </script> */ }

