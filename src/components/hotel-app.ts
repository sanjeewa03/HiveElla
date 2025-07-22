import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("hotel-app")
export class HotelApp extends LitElement {
  private _boundHandleNavigation = this._handleNavigation.bind(this);

  static styles = css`
    :host {
      display: block;
      font-family: "Inter", sans-serif;
    }

    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener(
      "navigate-to-section",
      this._boundHandleNavigation as EventListener
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener(
      "navigate-to-section",
      this._boundHandleNavigation as EventListener
    );
  }

  private _handleNavigation(event: Event) {
    const { section } = (event as CustomEvent).detail;
    this.navigateToSection(section);
  }

  public navigateToSection(section: string) {
    // Map section names to component selectors
    const sectionMap: { [key: string]: string } = {
      home: "hero-section",
      rooms: "rooms-section",
      amenities: "amenities-section",
      contact: "contact-section",
    };

    const targetSelector = sectionMap[section];

    if (targetSelector && this.shadowRoot) {
      const targetElement = this.shadowRoot.querySelector(targetSelector);

      if (targetElement) {
        // Calculate position and scroll smoothly
        const rect = targetElement.getBoundingClientRect();
        const scrollTop = window.pageYOffset + rect.top - 80;

        window.scrollTo({
          top: scrollTop,
          behavior: "smooth",
        });
      }
    }
  }

  render() {
    return html`
      <div class="app-container">
        <navigation-header></navigation-header>
        <main>
          <hero-section></hero-section>
          <rooms-section></rooms-section>
          <amenities-section></amenities-section>
          <contact-section></contact-section>
        </main>
        <hotel-footer></hotel-footer>
      </div>
    `;
  }
}
