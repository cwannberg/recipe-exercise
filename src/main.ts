import { correctHTML } from './correct';
import { wrongHTML } from './wrong';

addStylesheet('./src/correct.css', 'correct');

const app = document.querySelector<HTMLDivElement>('#app')!;
app.insertAdjacentHTML(
  'afterbegin',
  `<header>
    <p class="logo-text">Niklas smaskisrecept</p>
    <nav>
      <a href="#" class="correct-link">Correct Version</a>
      <a href="#" class="wrong-link">
        Wrong Version
      </a>
    </nav>
  </header>`
);
app.append(correctHTML);

const correctLink = document.querySelector<HTMLSpanElement>('.correct-link')!;
const wrongLink = document.querySelector<HTMLSpanElement>('.wrong-link')!;

correctLink.addEventListener('click', () => {
  removeStylesheet('wrong');
  addStylesheet('./src/correct.css', 'correct');
  app.replaceChild(correctHTML, wrongHTML);

  // Uncomment this function invocation below
  // part1();
});

wrongLink.addEventListener('click', () => {
  removeStylesheet('correct');
  addStylesheet('./src/wrong.css', 'wrong');
  app.replaceChild(wrongHTML, correctHTML);

  // Uncomment this function invocation below
  // part2();
});

// ######### Hoisted functions below ##########

function addStylesheet(href: string, id: string) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  if (id) link.id = id;
  document.head.appendChild(link);
}

function removeStylesheet(id: string) {
  const existing = document.getElementById(id);
  if (existing && existing.tagName === 'LINK') {
    document.head.removeChild(existing);
  }
}
