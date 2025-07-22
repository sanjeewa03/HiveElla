import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";

// Define Leaflet types for TypeScript
declare global {
  interface Window {
    L: any;
  }
}

@customElement("contact-section")
export class ContactSection extends LitElement {
  @state()
  private _formData = {
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "2",
    message: "",
  };

  private _map: any = null;
  private _mapContainer: HTMLElement | null = null;

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

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }

    .contact-info h3 {
      font-family: "Playfair Display", serif;
      font-size: 1.8rem;
      color: #333;
      margin-bottom: 1.5rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .contact-icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      color: #8b7355;
      width: 30px;
    }

    .contact-form {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #333;
      font-weight: 500;
    }

    input,
    select,
    textarea {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid #e5e5e5;
      border-radius: 4px;
      font-family: inherit;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }

    input:focus,
    select:focus,
    textarea:focus {
      outline: none;
      border-color: #8b7355;
    }

    textarea {
      resize: vertical;
      min-height: 100px;
    }

    .submit-btn {
      background: #8b7355;
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s ease;
      width: 100%;
    }

    .submit-btn:hover {
      background: #6b5d4f;
    }

    .map-container {
      margin-top: 2rem;
      height: 300px;
      background: #e5e5e5;
      border-radius: 8px;
      overflow: hidden;
      position: relative;
    }

    .map-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #666;
      height: 100%;
    }

    .leaflet-container {
      height: 100%;
      width: 100%;
      border-radius: 8px;
    }

    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .form-row {
        grid-template-columns: 1fr;
      }

      .section-header h2 {
        font-size: 2rem;
      }
    }
  `;

  private _handleInputChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this._formData = {
      ...this._formData,
      [target.name]: target.value,
    };
  }

  private _handleSubmit(e: Event) {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Booking request:", this._formData);
    alert("Thank you for your booking request! We will contact you soon.");
  }

  private _handleMapClick() {
    console.log("Map clicked, attempting to initialize...");

    // If map already exists, just hide placeholder
    if (this._map) {
      const placeholder = this.shadowRoot?.querySelector(
        ".map-placeholder"
      ) as HTMLElement;
      if (placeholder) {
        placeholder.style.display = "none";
      }
      return;
    }

    // Force reload of the map
    this._map = null;
    this._loadLeaflet();

    // Update placeholder text
    const placeholder = this.shadowRoot?.querySelector(
      ".map-placeholder"
    ) as HTMLElement;
    if (placeholder) {
      placeholder.innerHTML = "📍 Loading Map...";
    }
  }

  private _loadLeaflet() {
    // Load Leaflet CSS
    if (!document.querySelector('link[href*="leaflet"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
      link.crossOrigin = "";
      document.head.appendChild(link);
    }

    // Load Leaflet JS
    if (!window.L) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
      script.crossOrigin = "";
      script.onload = () => {
        // Add a small delay to ensure DOM is ready
        setTimeout(() => this._initializeMap(), 100);
      };
      document.head.appendChild(script);
    } else {
      // Add a small delay to ensure DOM is ready
      setTimeout(() => this._initializeMap(), 100);
    }
  }

  private _initializeMap() {
    if (this._map) {
      console.log("Map already exists");
      return;
    }

    this._mapContainer = this.shadowRoot?.querySelector(
      "#hotel-map"
    ) as HTMLElement;

    if (!this._mapContainer) {
      console.log("Map container not found, retrying...");
      setTimeout(() => this._initializeMap(), 500);
      return;
    }

    if (!window.L) {
      console.log("Leaflet not loaded, retrying...");
      setTimeout(() => this._initializeMap(), 500);
      return;
    }

    console.log("Initializing map...", this._mapContainer);

    try {
      // Hide the loading placeholder
      const placeholder = this.shadowRoot?.querySelector(
        ".map-placeholder"
      ) as HTMLElement;
      if (placeholder) {
        placeholder.style.display = "none";
      }

      // Ella, Sri Lanka coordinates (more accurate)
      // Ella Rock and Nine Arch Bridge area
      const ellaCoordinates: [number, number] = [6.8687, 81.0462];

      this._map = window.L.map(this._mapContainer, {
        center: ellaCoordinates,
        zoom: 13,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      // Add OpenStreetMap tiles
      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(this._map);

      // Add hotel marker
      const hotelIcon = window.L.divIcon({
        html: '<div style="background: #8B7355; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-size: 16px; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">🏨</div>',
        className: "custom-hotel-marker",
        iconSize: [30, 30],
        iconAnchor: [15, 15],
      });

      window.L.marker(ellaCoordinates, { icon: hotelIcon }).addTo(this._map)
        .bindPopup(`
          <div style="text-align: center; font-family: 'Playfair Display', serif;">
            <strong style="color: #8B7355; font-size: 16px;">Hive Ella Hotel</strong><br>
            <span style="color: #666; font-size: 14px;">123 Mountain View Road<br>Ella, Sri Lanka</span>
          </div>
        `);

      // Add nearby landmarks for context
      const nineArchBridge: [number, number] = [6.8732, 81.0548];
      const ellaRock: [number, number] = [6.865, 81.04];

      // Nine Arch Bridge marker
      const bridgeIcon = window.L.divIcon({
        html: '<div style="background: #4CAF50; color: white; border-radius: 50%; width: 25px; height: 25px; display: flex; align-items: center; justify-content: center; font-size: 12px; border: 2px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.2);">🌉</div>',
        className: "landmark-marker",
        iconSize: [25, 25],
        iconAnchor: [12, 12],
      });

      window.L.marker(nineArchBridge, { icon: bridgeIcon }).addTo(this._map)
        .bindPopup(`
          <div style="text-align: center; font-family: 'Inter', sans-serif; font-size: 13px;">
            <strong style="color: #4CAF50;">Nine Arch Bridge</strong><br>
            <span style="color: #666;">Famous landmark</span>
          </div>
        `);

      // Ella Rock marker
      const rockIcon = window.L.divIcon({
        html: '<div style="background: #FF9800; color: white; border-radius: 50%; width: 25px; height: 25px; display: flex; align-items: center; justify-content: center; font-size: 12px; border: 2px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.2);">⛰️</div>',
        className: "landmark-marker",
        iconSize: [25, 25],
        iconAnchor: [12, 12],
      });

      window.L.marker(ellaRock, { icon: rockIcon }).addTo(this._map).bindPopup(`
          <div style="text-align: center; font-family: 'Inter', sans-serif; font-size: 13px;">
            <strong style="color: #FF9800;">Ella Rock</strong><br>
            <span style="color: #666;">Hiking destination</span>
          </div>
        `);

      // Fit the map bounds to show all markers with some padding
      const group = window.L.featureGroup([
        window.L.marker(ellaCoordinates),
        window.L.marker(nineArchBridge),
        window.L.marker(ellaRock),
      ]);
      this._map.fitBounds(group.getBounds().pad(0.1));

      console.log("Map initialized successfully");
    } catch (error) {
      console.error("Error initializing map:", error);

      // Show error in placeholder
      const placeholder = this.shadowRoot?.querySelector(
        ".map-placeholder"
      ) as HTMLElement;
      if (placeholder) {
        placeholder.style.display = "flex";
        placeholder.innerHTML = "📍 Map failed to load. Click to retry.";
      }
    }
  }

  firstUpdated() {
    this._loadLeaflet();
    this._setupIntersectionObserver();
  }

  private _setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this._map) {
            console.log("Contact section is visible, loading map...");
            setTimeout(() => this._loadLeaflet(), 100);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    observer.observe(this);
  }

  updated() {
    // Try to initialize map after each update if not already done
    if (!this._map) {
      this._loadLeaflet();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._map) {
      this._map.remove();
      this._map = null;
    }
  }

  render() {
    return html`
      <section class="container" id="contact">
        <div class="section-header">
          <h2>Contact & Booking</h2>
        </div>

        <div class="contact-content">
          <div class="contact-info">
            <h3>Get in Touch</h3>

            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <div>
                <strong>Address</strong><br />
                123 Mountain View Road<br />
                Ella, Sri Lanka 90090
              </div>
            </div>

            <div class="contact-item">
              <span class="contact-icon">📞</span>
              <div>
                <strong>Phone</strong><br />
                +94 (0) 57 222 8888
              </div>
            </div>

            <div class="contact-item">
              <span class="contact-icon">✉️</span>
              <div>
                <strong>Email</strong><br />
                reservations@hiveella.com
              </div>
            </div>

            <div class="contact-item">
              <span class="contact-icon">🕒</span>
              <div>
                <strong>Reception Hours</strong><br />
                24/7 Available
              </div>
            </div>

            <div class="map-container">
              <div id="hotel-map" style="height: 100%; width: 100%;"></div>
              <div
                class="map-placeholder"
                style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; color: #666; background: rgba(229, 229, 229, 0.9); cursor: pointer;"
                @click=${this._handleMapClick}
              >
                📍 Click to Load Map...
              </div>
            </div>
          </div>

          <div class="contact-form">
            <h3
              style="margin-bottom: 1.5rem; font-family: 'Playfair Display', serif;"
            >
              Book Your Stay
            </h3>

            <form @submit=${this._handleSubmit}>
              <div class="form-group">
                <label for="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  .value=${this._formData.name}
                  @input=${this._handleInputChange}
                />
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    .value=${this._formData.email}
                    @input=${this._handleInputChange}
                  />
                </div>

                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    .value=${this._formData.phone}
                    @input=${this._handleInputChange}
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="checkin">Check-in Date *</label>
                  <input
                    type="date"
                    id="checkin"
                    name="checkin"
                    required
                    .value=${this._formData.checkin}
                    @input=${this._handleInputChange}
                  />
                </div>

                <div class="form-group">
                  <label for="checkout">Check-out Date *</label>
                  <input
                    type="date"
                    id="checkout"
                    name="checkout"
                    required
                    .value=${this._formData.checkout}
                    @input=${this._handleInputChange}
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="guests">Number of Guests</label>
                <select
                  id="guests"
                  name="guests"
                  .value=${this._formData.guests}
                  @change=${this._handleInputChange}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Special Requests</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Any special requests or requirements..."
                  .value=${this._formData.message}
                  @input=${this._handleInputChange}
                ></textarea>
              </div>

              <button type="submit" class="submit-btn">
                Send Booking Request
              </button>
            </form>
          </div>
        </div>
      </section>
    `;
  }
}
