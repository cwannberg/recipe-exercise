import cheesecake from './assets/frozen-cheesecake-slice.jpg';

export const correctHTML = document.createElement('main');

correctHTML.id = 'correct-page';

correctHTML.innerHTML = /*html*/ `
  <section class="introduction">
    <article class="description-container">
      <h1 id="recipe-name">Frozen Cheescake</h1>
      <div class="time-container">
        <span class="material-symbols-outlined"> av_timer </span><span class="time">60+ min</span>
      </div>
      <p class="description">
        Fryst cheesecake är en perfekt dessert för stora kalas eller middagar eftersom du kan
        göra den i förväg och frysa in. Ta fram cheesecaken en stund innan servering och garnera
        med dina favoritfrukter och bär.
      </p>
    </article>
    <article class="image-container">
      <img src="${cheesecake}" alt="Slice of Frozen Cheescake" />
    </article>
  </section>
  <section class="how-to-do">
    <article class="ingredients-container">
      <h3 class="ingredients">Ingridienser</h3>
      <h4 class="to-bottom">Till botten</h4>
      <ul class="ingredients-list-bottom">
        <li>15st digistivetex</li>
        <li>Lite smör</li>
      </ul>
      <h4 class="to-paste">Till smeten</h4>
      <ul class="ingredients-list-paste">
        <li>3st ägg</li>
        <li>1,5dl strösocker</li>
        <li>3tsk vaniljsocker</li>
        <li>3dl vispgrädde</li>
        <li>400g naturell philadelphiaost</li>
      </ul>
    </article>
    <article class="instructions-container">
      <h3 class="instructions">Instruktioner</h3>
      <ol class="instructions-list">
        <li>
          Smula sönder 10 stycken digistivetex och blanda sen med smöret. Bred ut det i botten
          av en en rund form med lösbara kanter. Det ska bli som en tjockt täcke på botten av
          formen.
        </li>
        <li>
          Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en
          liten bunke.
        </li>
        <li>
          Vispa äggvitorna hårt med en elvisp. De är tillräckligt vispade när du kan vända
          uppochner på bunken utan att det rör sig.
        </li>
        <li>
          Häll upp grädden i en mellanstor bunke. Vispa de relativ hårt. En aning hårdare en
          vanligt.
        </li>
        <li>Blanda i philadelphiaosten och vaniljsockret med äggulorna och vispa ihop.</li>
        <li>
          Häll nu över innehållet i bunken med äggulor över grädden. Vispa ihop på lägsta
          hastigheten.
        </li>
        <li>
          Häll sedan över det innehållet till bunken med äggvitorna. Blande ihop med en gaffel
          tills det blir en slät fluffig smet.
        </li>
        <li>Häll smeten i formen, smula över de resterande digistivetexen om du vill.</li>
        <li>Ställ in i frysen över natten.</li>
        <li>Servera och toppa med det du känner för.</li>
      </ol>
    </article>
  </section>
`;
