import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("hero-section")
export class HeroSection extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .hero {
      height: 100vh;
      background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        url("/images/nineArch.jpeg");
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
    }

    .hero-content {
      max-width: 800px;
      padding: 2rem;
    }

    .hero h1 {
      font-family: "Playfair Display", serif;
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .hero p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      padding: 1rem 2rem;
      border: none;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-block;
    }

    .btn-primary {
      background: #8b7355;
      color: white;
    }

    .btn-primary:hover {
      background: #6b5d4f;
      transform: translateY(-2px);
    }

    .btn-secondary {
      background: transparent;
      color: white;
      border: 2px solid white;
    }

    .btn-secondary:hover {
      background: white;
      color: #333;
    }

    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2.5rem;
      }

      .hero p {
        font-size: 1.1rem;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }

      .btn {
        width: 200px;
      }
    }
  `;

  private _handleButtonClick(section: string) {
    // Dispatch navigation event (same system as header navigation)
    const navigationEvent = new CustomEvent("navigate-to-section", {
      detail: { section },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(navigationEvent);
  }

  render() {
    return html`
      <section class="hero" id="home">
        <div class="hero-content">
          <h1>Welcome to HiveElla</h1>
          <p>
            Experience luxury and tranquility in our boutique hotel nestled in
            the heart of natural beauty. Every moment here is crafted to create
            unforgettable memories.
          </p>
          <div class="cta-buttons">
            <button
              class="btn btn-primary"
              @click=${() => this._handleButtonClick("contact")}
            >
              Book Your Stay
            </button>
            <button
              class="btn btn-secondary"
              @click=${() => this._handleButtonClick("rooms")}
            >
              Explore Rooms
            </button>
          </div>
        </div>
      </section>
    `;
  }
}
