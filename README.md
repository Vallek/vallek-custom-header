# vallek-custom-header

Содержимое
1. [ru readme](#ru-readme)
2. [en readme](#en-readme)

## ru readme

Адаптивная и доступная фиксированная шапка с анимацией и выпадающим меню, которую я использую на своих проектах.

Реализация на нативных веб компонентах в виде custom element. Весь код разделен по отдельным файлам для удобства. 

### Как пользоваться и как работает веб компонент
Все файлы веб компонента находятся внутри папки **web-component**.

Файл **index.html** - это страница для примера.

Чтобы использовать шапку на вашей странице вам нужно подключить **index.js** как модуль. Вот так:
```
<script type="module" src="index.js"></script>
```
Не забудьте указать верные относительные пути, если у вас другая структура.

**index.js** в свою очередь подключает js-код компонента из **header.js**. А также создает сам custom element с shadow dom разметкой из **header.html**. Вы можете поменять название 'vallek-header' в последней строчке **index.js**.

Код из **header.j**s выполняется только после того, как кастомный элемент создан с помощью .whenDefined().

В **header.html** файле помимо разметки подключаются стили из **header.css**. Классы именованы по [БЭМу](https://ru.bem.info/methodology/quick-start/). Для чистоты можете вынести внешнюю "геометрию" блока (отступы) в микс типа .page__header.

Осталось просто вставить элемент `<vallek-header></vallek-header>` на вашу страницу и все!

### Версия в одном файле

Если хотите можно сделать в один файл по [шаблону](https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/) + JS компонента в script теге. 

```
let template = document.createElement("template");
template.innerHTML = ` CSS in <style> tag & HTML in <html> tag `;

class vallekHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    let script = document.createElement('script');
    script.textContent = ` JS without <script> tag `;
    this.shadowRoot.appendChild(script);
  }
}

customElements.define('vallek-header', vallekHeader);
```
Вы найдете готовый вариант в файле **one-file-header.js**.

### Ванильная версия
В корне репозитория версия шапки на чистых html, css, js для демо и если захотите использовать код без веб компонентов.

### Советы
Не забудьте добавить:
1. scroll-margin-top для заголовков c якорными ссылками на вашем сайте такой же или больше высоты, как фикс. шапка.
2. Описания в атрибуты alt и aria-label для доступности

### Использованы
Выпадающее меню сделано по методу из [этой статьи](https://www.pausly.app/blog/accessible-hamburger-buttons-without-javascript).

### Известные проблемы
В кастомном элементе для функции задана небольшая задержка (50ms) через setTimeout. Без нее получаемая высота шапки может быть неверной при быстром скролле или первой загрузке/без кэша. При более низких значениях проблема оставалась (пробовал 15ms). В ванильном коде эта проблема отсутствует, а потому нет и таймера.

### Условия использования
Пожалуйста используйте с указанием авторства (ссылка на этот репозиторий или мой профиль).

Если что-то не работает, пожалуйста, создайте issue. Вопросы и предложения можно задать в дискуссиях. Спасибо!

 vallek-custom-header

## en readme

Responsive and accessible fixed header with animation and drop-down menu, which I use on my projects.

Implementation on native web components as a custom element. All code is divided into separate files for convenience.

### How it works and how to use
All web component's files are inside **web-component** folder.

File **index.html** is an example page.

To use the header on your page, you need to connect **index.js** as a module. Like this:
```
<script type="module" src="index.js"></script>
```
Don't forget to specify the correct relative paths if you have a different structure.

**index.js** connects the component's js code from **header.js**. It also creates a custom element itself with shadow dom markup from **header.html**. You can change the name of 'vallek-header' in the last line **index.js**.

The code from **header.js** is executed only after the custom element is created using .whenDefined().

Inside **header.html** styles from **header.css** are also connected via `<link>` element. Classes are named in [BEM](https://en.bem.info/methodology/quick-start/). For more pure BEM, you can take out the external styles of the block (margins) into a mix like .page__header.

All that remains is just to insert the element `<vallek-header></vallek-header>` to your page and that's it!

### One file version

If you want, you can use one file version according to [template] (https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component /) + JS of the component in the script tag.

```
let template = document.createElement("template");
template.innerHTML = ` CSS in <style> tag & HTML in <html> tag `;

class vallekHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    let script = document.createElement('script');
    script.textContent = ` JS without <script> tag `;
    this.shadowRoot.appendChild(script);
  }
}

customElements.define('vallek-header', vallekHeader);
```
You will find the one file version in the **one-file-header.js **.

### Vanilla version
At the root of the repository is a version of the header in pure html, css, js for demo and if you want to use code without web components.

### Tips
Don't forget to add:
1. scroll-margin-top to headings with anchor links on your page with height same of bigger then fixed header.
2. Descriptions for alts and aria-label attributes for accessibility.

### Used
The drop-down menu based on approach from [this article](https://www.pausly.app/blog/accessible-hamburger-buttons-without-javascript ).

### Known issues
In the custom element, a small delay (50ms) is set for the function via setTimeout. Without it, the computed header height may be incorrect during fast scrolling or first loading/no cache. At lower values, the problem remained (I tried 15ms). There is no such problem in the vanilla code, and therefore there is no timer.

### Terms of Use
Please use with attribution (link to this repository or my profile).

If something doesn't work, please create an issue. Questions and suggestions can be asked in discussions. Thanks!
