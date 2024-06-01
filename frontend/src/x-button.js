import { LitElement, html, css } from "lit";

/**
 * Implements an HTML Custom Element for a button.
 */
export class XButton extends LitElement {
  static styles = css`
    :host {
      display: block;
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
