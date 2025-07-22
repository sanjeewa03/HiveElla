import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("hotel-footer")
export class HotelFooter extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: #333;
      color: white;
      margin-top: auto;
    }

    .footer {
      max-width: 1200px;
      margin: 0 auto;
      padding: 3rem 2rem 1rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-section h3 {
      font-family: "Playfair Display", serif;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #8b7355;
    }

    .footer-section p,
    .footer-section li {
      line-height: 1.8;
      color: #ccc;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
    }

    .footer-section a,
    .footer-section .footer-link {
      color: #ccc;
      text-decoration: none;
      transition: color 0.3s ease;
      background: none;
      border: none;
      cursor: pointer;
      font-size: inherit;
      font-family: inherit;
      text-align: left;
      padding: 0;
    }

    .footer-section a:hover,
    .footer-section .footer-link:hover {
      color: #8b7355;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    .social-link {
      display: inline-block;
      width: 40px;
      height: 40px;
      background: #555;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.3s ease;
    }

    .social-link:hover {
      background: #8b7355;
    }

    .newsletter {
      margin-top: 1rem;
    }

    .newsletter-form {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }

    .newsletter-input {
      flex: 1;
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      background: #555;
      color: white;
    }

    .newsletter-input::placeholder {
      color: #ccc;
    }

    .newsletter-btn {
      background: #8b7355;
      color: white;
      border: none;
      padding: 0.75rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .newsletter-btn:hover {
      background: #6b5d4f;
    }

    .footer-bottom {
      border-top: 1px solid #555;
      padding-top: 1rem;
      text-align: center;
      color: #999;
    }

    .footer-bottom a {
      color: #8b7355;
      text-decoration: none;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .newsletter-form {
        flex-direction: column;
      }
    }
  `;

  private _handleNewsletterSubmit(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get("email");
    console.log("Newsletter subscription:", email);
    alert("Thank you for subscribing to our newsletter!");
    form.reset();
  }

  private _navigateToSection(section: string) {
    // Use the same navigation event system
    const navigationEvent = new CustomEvent("navigate-to-section", {
      detail: { section },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(navigationEvent);
  }

  render() {
    return html`
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-section">
            <h3>HiveElla</h3>
            <p>
              Experience the perfect blend of luxury and nature at HiveElla. Our
              boutique hotel offers an unforgettable escape in the heart of Sri
              Lanka's hill country.
            </p>
            <div class="social-links">
              <a href="#" class="social-link">📘</a>
              <a href="#" class="social-link">📷</a>
              <a href="#" class="social-link">🐦</a>
              <a href="#" class="social-link">📌</a>
            </div>
          </div>

          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <button
                  class="footer-link"
                  @click=${() => this._navigateToSection("home")}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  class="footer-link"
                  @click=${() => this._navigateToSection("rooms")}
                >
                  Rooms
                </button>
              </li>
              <li>
                <button
                  class="footer-link"
                  @click=${() => this._navigateToSection("amenities")}
                >
                  Amenities
                </button>
              </li>
              <li>
                <button
                  class="footer-link"
                  @click=${() => this._navigateToSection("contact")}
                >
                  Contact
                </button>
              </li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Special Offers</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Room Service</a></li>
              <li><a href="#">Spa & Wellness</a></li>
              <li><a href="#">Restaurant</a></li>
              <li><a href="#">Conference Facilities</a></li>
              <li><a href="#">Airport Transfer</a></li>
              <li><a href="#">Tour Packages</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Contact Info</h3>
            <p>📍 123 Mountain View Road<br />Ella, Sri Lanka 90090</p>
            <p>📞 +94 (0) 57 222 8888</p>
            <p>✉️ info@hiveella.com</p>

            <div class="newsletter">
              <h4>Newsletter</h4>
              <p>Subscribe for special offers and updates</p>
              <form
                class="newsletter-form"
                @submit=${this._handleNewsletterSubmit}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  class="newsletter-input"
                  required
                />
                <button type="submit" class="newsletter-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>
            &copy; 2025 HiveElla Hotel. All rights reserved. |
            <a href="#">Privacy Policy</a> |
            <a href="#">Terms of Service</a>
          </p>
        </div>
      </footer>
    `;
  }
}
