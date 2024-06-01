import { LitElement, html, css } from "lit";

/**
 * Implements an HTML Custom Element for a button.
 */
export class XButton extends LitElement {
  static styles = css`
    :host {
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
    }

    :host(:hover) {
      background-color: hsl(266, 85%, 50%);
    }

    :host(:active) {
      background-color: hsl(266, 85%, 42%);
    }
  `;

  /**
   * @returns {unknown} HTML for a button.
   */
  render() {
    return html` <slot></slot> `;
  }
}

customElements.define("x-button", XButton);
