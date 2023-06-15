const MAX_DISPLAY = 5;

export default function Selected({ $target, initialState }) {
  this.$element = document.createElement('div');
  this.$element.className = 'SelectedLanguage';
  this.state = initialState;

  $target.appendChild(this.$element);

  this.setState = newState => {
    this.state = { ...this.state, ...newState };

    if (this.state.items.length >= MAX_DISPLAY) {
      const startPosition = this.state.items.length - MAX_DISPLAY;

      this.state.items = this.state.items.slice(startPosition, MAX_DISPLAY + startPosition);
    }

    this.render();
  };

  this.render = () => {
    if (!this.state.items) return;
    // prettier-ignore
    this.$element.innerHTML = `
      <ul>
        ${this.state.items.map(item => `
          <li>${item}</li>
        `).join('')}
      </ul>
    `
  };

  this.render();
}
