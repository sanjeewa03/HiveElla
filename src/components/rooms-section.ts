import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("rooms-section")
export class RoomsSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 4rem 2rem;
      background: #f8f8f8;
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

    .rooms-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 3rem;
      max-width: 900px;
      margin: 0 auto;
    }

    .room-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .room-card:hover {
      transform: translateY(-5px);
    }

    .room-image {
      width: 100%;
      height: 250px;
      background-size: cover;
      background-position: center;
    }

    .deluxe-room {
      background-image: url("/images/rooms/domeRoom.webp");
    }

    .double-room {
      background-image: url("/images/rooms/doubleRoom.webp");
    }

    .room-content {
      padding: 1.5rem;
    }

    .room-title {
      font-family: "Playfair Display", serif;
      font-size: 1.5rem;
      color: #333;
      margin-bottom: 0.5rem;
    }

    .room-price {
      color: #8b7355;
      font-weight: 600;
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }

    .room-description {
      color: #666;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .room-features {
      list-style: none;
      padding: 0;
      margin-bottom: 1.5rem;
    }

    .room-features li {
      padding: 0.25rem 0;
      color: #555;
      font-size: 0.9rem;
    }

    .room-features li:before {
      content: "✓";
      color: #8b7355;
      font-weight: bold;
      margin-right: 0.5rem;
    }

    .book-room-btn {
      background: #8b7355;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s ease;
      width: 100%;
    }

    .book-room-btn:hover {
      background: #6b5d4f;
    }

    @media (max-width: 768px) {
      .rooms-grid {
        grid-template-columns: 1fr;
        max-width: 100%;
        gap: 2rem;
      }

      .section-header h2 {
        font-size: 2rem;
      }
    }
  `;

  render() {
    return html`
      <section class="container" id="rooms">
        <div class="section-header">
          <h2>Our Rooms</h2>
          <p>
            Choose from our carefully designed accommodations, each offering
            unique comfort and stunning views
          </p>
        </div>

        <div class="rooms-grid">
          <div class="room-card">
            <div class="room-image deluxe-room"></div>
            <div class="room-content">
              <h3 class="room-title">Dome Room</h3>
              <div class="room-price">$180 / night</div>
              <p class="room-description">
                Unique dome-shaped accommodation offering a one-of-a-kind
                experience with panoramic views and eco-friendly design.
              </p>
              <ul class="room-features">
                <li>360-degree views</li>
                <li>Eco-friendly design</li>
                <li>Air conditioning</li>
                <li>Private bathroom</li>
                <li>Free Wi-Fi</li>
              </ul>
            </div>
          </div>

          <div class="room-card">
            <div class="room-image double-room"></div>
            <div class="room-content">
              <h3 class="room-title">Double Room</h3>
              <div class="room-price">$120 / night</div>
              <p class="room-description">
                Comfortable traditional accommodation with modern amenities,
                perfect for couples or solo travelers seeking comfort and value.
              </p>
              <ul class="room-features">
                <li>Double bed</li>
                <li>Garden view</li>
                <li>Air conditioning</li>
                <li>Private balcony</li>
                <li>Mini fridge</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
