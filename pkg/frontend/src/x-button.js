import { LitElement, html, css } from "lit";

/**
 * Implements an HTML Custom Element for a button.
 */
export class XButton extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .button {
      background-color: hsl(266, 85%, 58%);
      border-radius: 8px;
      color: hsl(220, 23%, 95%);
      cursor: pointer;
      display: grid;
      font-family: sans-serif;
      padding: 8px;
      place-items: center;
      text-align: center;
      transition: background-color linear 100ms;
      user-select: none;
      text-decoration: none;
    }

    .button:hover {
      background-color: hsl(266, 85%, 50%);
    }

    .button:active {
      background-color: hsl(266, 85%, 42%);
    }
  `;

  static properties = {
    href: {},
  };

  constructor() {
    super();

    this.href = "";
  }

  /**
   * @returns {unknown} HTML for a button.
   */
  render() {
    if (this.href === "") {
      return html` <slot class="button"></slot> `;
    }

    return html`
      <a class="button" href=${this.href}>
        <slot></slot>
      </a>
    `;
  }
}

customElements.define("x-button", XButton);
