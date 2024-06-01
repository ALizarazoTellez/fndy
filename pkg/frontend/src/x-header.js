import { LitElement, html, css } from "lit";

export class XHeader extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-flow: column nowrap;
      font-family: sans-serif;
      gap: 16px;
      justify-content: center;
      padding: 16px;
      text-align: center;
    }

    h1,
    p {
      margin: 0;
    }

    h1 {
      font-size: 1.5rem;
    }
  `;

  render() {
    return html`
      <h1>Fndy</h1>
      <p>An application for copying text snippets!</p>
    `;
  }
}

customElements.define("x-header", XHeader);
