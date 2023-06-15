export default function Suggestion({ $target, initialState, selectHandler }) {
  this.$element = document.createElement('div');
  this.$element.className = 'Suggestion';
  $target.appendChild(this.$element);

  this.state = { items: initialState, selectedIndex: 0 };

  this.setState = newState => {
    this.state = { ...this.state, ...newState };

    this.render();
  };

  this.render = () => {
    const { items = [], selectedIndex } = this.state;

    if (items.length) {
      this.$element.style.display = 'block';
      // prettier-ignore
      this.$element.innerHTML = `
        <ul>
          ${items.map((item, idx) => `
            <li data-index="${idx}" class="${selectedIndex === idx ? 'Suggestion__item--selected' : ''}">${item}</li>
          `).join('')}
        </ul>
      `
    } else {
      this.$element.style.display = 'none';
      this.$element.innerHTML = '';
    }
  };

  this.render();

  window.addEventListener('keyup', e => {
    if (this.state.items) {
      const { selectedIndex } = this.state;
      const lastIndex = this.state.items.length - 1;
      const keys = ['ArrowUp', 'ArrowDown'];

      let nextIndex = selectedIndex;

      if (keys.includes(e.key)) {
        if (e.key === 'ArrowUp') nextIndex = selectedIndex === 0 ? lastIndex : nextIndex - 1;
        else if (e.key === 'ArrowDown') nextIndex = selectedIndex === lastIndex ? 0 : nextIndex + 1;
      } else if (e.key === 'Enter') {
        selectHandler(this.state.items[this.state.selectedIndex]);
      }

      this.setState({ ...this.state, selectedIndex: nextIndex });
    }
  });

  this.$element.addEventListener('click', e => {
    const $li = e.target.closest('li');

    if ($li) {
      const { index } = $li.dataset;

      try {
        selectHandler(this.state.items[+index]);
      } catch (e) {
        alert('무언가 잘못 되었습니🥲');
      }
    }
  });
}
