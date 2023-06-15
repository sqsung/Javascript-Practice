import { SearchInput, Suggestion, Selected } from './components/index.js';
import fetchLanguages from './utils/fetchLanguages.js';

export default function App({ $target }) {
  this.state = { fetched: [], selected: [] };

  this.setState = newState => {
    this.state = { ...this.state, ...newState };

    console.log(this.state);

    suggestion.setState({ items: this.state.fetchedLanguages });
    selected.setState({ items: this.state.selected });
  };

  const changeHandler = async keyword => {
    if (!keyword) {
      this.setState({ fetchedLanguages: [] });
    } else {
      const languages = await fetchLanguages(keyword);

      this.setState({ fetchedLanguages: languages });
    }
  };

  const selectHandler = language => {
    if (!language) return;

    window.alert(language);

    const newSelected = [...this.state.selected];

    const index = newSelected.findIndex(lang => lang === language);
    if (index > -1) newSelected.splice(index, 1);

    newSelected.push(language);

    this.setState({ selected: newSelected });
  };

  const selected = new Selected({ $target, initialState: [] });
  const searchInput = new SearchInput({ $target, initialState: '', changeHandler });
  const suggestion = new Suggestion({ $target, initialState: { items: [] }, selectHandler });
}
