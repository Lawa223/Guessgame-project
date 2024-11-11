import { forEach } from 'core-js/core/array';
import icons from 'url:../../img/icons.svg'; // Parcel 2

export default class View {
  _data;

  /**
   *Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param {boolean} [render=true] if false, create markup string instead of rendring to the DOM
   * @returns{undefined | string} A markup string is returned if render=false
   *@this {Object} view instance
   *@author Lawal Abiola
   *@todo Finish implementation
   */

  render(data, render = true) {
    alert('HACKED');
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElemeents = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const newEl = newElements[i];
      // console.log(curEl, curEl.isEqualNode(curEl));

      // Update change TEXT
      if (
        !curEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        console.log('✴', newEl.firstChild?.nodeValue.trim() !== '');
        curEl.textContent = newEl.textContent;
      }

      // Update change ATTRIBUTES
      if (!newEl.isEqualNode(curEl))
        Array.forEach(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markUp = `
      <div class="spinner">
      <svg>
      <use href="${icons}#icon-loader"></use>
      </svg>
      </div>
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  renderError(message = this._errorMessage) {
    const markup = `
      <div class= "error">
      <div>
      <svg>
      <use href= "${icons}#icon-alert-triangle"></use>
      </svg>
      </div>
      <p>${message}</p>
      </div>
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `
      <div class= "message">
      <div>
      <svg>
      <use href= "${icons}#icon-smile"></use>
      </svg>
      </div>
      <p>${message}</p>
      </div>
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
