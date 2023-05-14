# vallek-custom-header

## ru readme

Адаптивная и доступная фиксированная шапка с анимацией и выпадающим меню, которую я использую на своих проектах.

Реализация на нативных веб компонентах в виде custom element. Весь код разделен по отдельным файлам для удобства. 

### Как пользоваться и как работает веб компонент
Файл **index.html** - это страница для примера.

Чтобы использовать шапку на вашей странице вам нужно подключить **index.js** как модуль. Вот так:
```
<script type="module" src="index.js"></script>
```
Не забудьте указать верные относительные пути, если у вас другая структура.

**index.js** в свою очередь подключает js-код компонента из **header.js**. А также создает сам custom element с shadow dom разметкой из **header.html**. Вы можете поменять название 'vallek-header' в последней строчке **index.js**.

Код из **header.j**s выполняется только после того, как кастомный элемент создан с помощью .whenDefined() и .then().

В **header.html** файле помимо разметки подключаются стили из **header.css**. Классы именованы по БЭМу. Для чистоты можете вынести внешнюю "геометрию" блока (отступы) в микс типа .page__header.

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
В кастомном элементе для функции задана небольшая задержка через setTimeout. Без нее получаемая высота шапки может быть неверной при быстром скролле или первой загрузки/без кэша. В ванильном коде эта проблема отсутствует, а потому нет и таймера.

### Условия использования
Пожалуйста используйте с указанием авторства (ссылка на этот репозиторий или мой профиль).

Если что-то не работает, пожалуйста, создайте issue. Вопросы и предложения можно задать в дискуссиях. Спасибо!

## en readme

This is a fixed header component with animation and drop-down menu I use in several projects. 

It built with vanilla html, css and js so you can put it in any framework/bundler or just use it as it is. 

Don't forget to add:
1. scroll-margin-top to headings with anchor links on your page with height same of bigger then fixed header.
2. Descriptions for alts and aria-label attributes for accessibility.

Based on approach from [this article](https://www.pausly.app/blog/accessible-hamburger-buttons-without-javascript). Accessible and responsive.

Please use with attribution (link to this repo or my profile).
