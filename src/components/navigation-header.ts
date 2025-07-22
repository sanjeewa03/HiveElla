import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("navigation-header")
export class NavigationHeader extends LitElement {
  @state()
  private _mobileMenuOpen = false;

  static styles = css`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid #e5e5e5;
    }

    .header {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-family: "Playfair Display", serif;
      font-size: 2rem;
      font-weight: 700;
      color: #8b7355;
      background: none;
      border: none;
      cursor: pointer;
    }

    .nav {
      display: flex;
      gap: 2rem;
      list-style: none;
    }

    .nav-btn {
      background: none;
      border: none;
      color: #333;
      font-weight: 500;
      font-size: 1rem;
      font-family: inherit;
      cursor: pointer;
      transition: color 0.3s;
      padding: 0.5rem 0;
    }

    .nav-btn:hover {
      color: #8b7355;
    }

    .book-btn {
      background: #8b7355;
      color: white;
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s;
    }

    .book-btn:hover {
      background: #6b5d4f;
    }

    .mobile-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #333;
    }

    @media (max-width: 768px) {
      .nav {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        padding: 1rem 2rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }

      .nav.open {
        display: flex;
      }

      .mobile-toggle {
        display: block;
      }

      .book-btn {
        margin-top: 1rem;
      }
    }
  `;

  private _toggleMobileMenu() {
    this._mobileMenuOpen = !this._mobileMenuOpen;
  }

  private _navigateTo(targetSection: string) {
    // Dispatch a custom event that the hotel-app can listen to
    const navigationEvent = new CustomEvent("navigate-to-section", {
      detail: { section: targetSection },
      bubbles: true,
      composed: true, // This allows the event to cross Shadow DOM boundaries
    });

    this.dispatchEvent(navigationEvent);

    // Close mobile menu
    this._mobileMenuOpen = false;
  }

  private _openBookingLink() {
    // Open Hostelworld booking page in new tab
    window.open(
      "https://www.hostelworld.com/hostels/p/323948/hive-ella-hostel/",
      "_blank"
    );

    // Close mobile menu
    this._mobileMenuOpen = false;
  }

  render() {
    return html`
      <header class="header">
        <button class="logo" @click=${() => this._navigateTo("home")}>
          HiveElla
        </button>

        <nav class="nav ${this._mobileMenuOpen ? "open" : ""}">
          <button class="nav-btn" @click=${() => this._navigateTo("home")}>
            Home
          </button>
          <button class="nav-btn" @click=${() => this._navigateTo("rooms")}>
            Rooms
          </button>
          <button class="nav-btn" @click=${() => this._navigateTo("amenities")}>
            Amenities
          </button>
          <button class="nav-btn" @click=${() => this._navigateTo("contact")}>
            Contact
          </button>
          <button class="book-btn" @click=${this._openBookingLink}>
            Book Now
          </button>
        </nav>

        <button class="mobile-toggle" @click=${this._toggleMobileMenu}>
          ☰
        </button>
      </header>
    `;
  }
}
