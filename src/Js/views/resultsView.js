import icons from 'url../../img/icons.svg';
import previewView from './previewViewy.js';
import View from './view';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipe found for your query! please try again ;)';
  _message = '';

  __generateMarkup() {
    // console.log(this.data);
    return this.data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
