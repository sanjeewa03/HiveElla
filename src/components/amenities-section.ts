import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("amenities-section")
export class AmenitiesSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 4rem 2rem;
      background: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .section-header h2 {
      font-family: "Playfair Display", serif;
      font-size: 2.5rem;
      color: #333;
      margin-bottom: 1rem;
    }

    .section-header p {
      font-size: 1.1rem;
      color: #666;
      max-width: 600px;
      margin: 0 auto;
    }

    .amenities-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .amenity-card {
      text-align: center;
      padding: 2rem;
      border-radius: 8px;
      transition: transform 0.3s ease;
    }

    .amenity-card:hover {
      transform: translateY(-5px);
    }

    .amenity-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: #8b7355;
    }

    .amenity-title {
      font-family: "Playfair Display", serif;
      font-size: 1.5rem;
      color: #333;
      margin-bottom: 1rem;
    }

    .amenity-description {
      color: #666;
      line-height: 1.6;
    }

    .featured-amenity {
      grid-column: 1 / -1;
      background: #f8f8f8;
      border-radius: 12px;
      padding: 3rem;
      margin: 2rem 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
    }

    .featured-content h3 {
      font-family: "Playfair Display", serif;
      font-size: 2rem;
      color: #333;
      margin-bottom: 1rem;
    }

    .featured-content p {
      color: #666;
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }

    .featured-image {
      width: 100%;
      height: 300px;
      background: url("/images/amenities/resturant.webp");
      background-size: cover;
      background-position: center;
      border-radius: 8px;
    }

    .learn-more-btn {
      background: #8b7355;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .learn-more-btn:hover {
      background: #6b5d4f;
    }

    @media (max-width: 768px) {
      .amenities-grid {
        grid-template-columns: 1fr;
      }

      .featured-amenity {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .section-header h2 {
        font-size: 2rem;
      }
    }
  `;

  render() {
    return html`
      <section class="container" id="amenities">
        <div class="section-header">
          <h2>Amenities & Services</h2>
          <p>
            Discover our world-class facilities designed to make your stay
            exceptional
          </p>
        </div>

        <div class="amenities-grid">
          <div class="amenity-card">
            <div class="amenity-icon">🏊‍♀️</div>
            <h3 class="amenity-title">Swimming Pool</h3>
            <p class="amenity-description">
              Relax by our infinity pool with stunning mountain views. Open 24/7
              for your convenience.
            </p>
          </div>

          <div class="amenity-card">
            <div class="amenity-icon">🧘‍♀️</div>
            <h3 class="amenity-title">Spa & Wellness</h3>
            <p class="amenity-description">
              Rejuvenate your mind and body with our full-service spa offering
              traditional and modern treatments.
            </p>
          </div>

          <div class="amenity-card">
            <div class="amenity-icon">🍽️</div>
            <h3 class="amenity-title">Fine Dining</h3>
            <p class="amenity-description">
              Experience culinary excellence at our restaurant featuring local
              cuisine and international favorites.
            </p>
          </div>

          <div class="amenity-card">
            <div class="amenity-icon">💪</div>
            <h3 class="amenity-title">Fitness Center</h3>
            <p class="amenity-description">
              Stay active with our state-of-the-art fitness center equipped with
              modern exercise equipment.
            </p>
          </div>

          <div class="featured-amenity">
            <div class="featured-content">
              <h3>Signature Restaurant</h3>
              <p>
                Our award-winning restaurant offers an unforgettable dining
                experience with a menu crafted by our renowned chef. Using only
                the finest local ingredients, we create dishes that celebrate
                the rich flavors of the region while incorporating modern
                culinary techniques.
              </p>
              <p>
                Enjoy breakfast, lunch, and dinner in our elegant dining room or
                on the terrace with panoramic views. Our sommelier has carefully
                curated a wine list featuring exceptional local and
                international selections.
              </p>
              <button class="learn-more-btn">View Menu</button>
            </div>
            <div class="featured-image"></div>
          </div>

          <div class="amenity-card">
            <div class="amenity-icon">🚗</div>
            <h3 class="amenity-title">Concierge</h3>
            <p class="amenity-description">
              Our dedicated concierge team is here to help you plan activities
              and make your stay memorable.
            </p>
          </div>

          <div class="amenity-card">
            <div class="amenity-icon">📶</div>
            <h3 class="amenity-title">Free Wi-Fi</h3>
            <p class="amenity-description">
              Stay connected with complimentary high-speed internet throughout
              the property.
            </p>
          </div>
        </div>
      </section>
    `;
  }
}
