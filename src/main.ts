// Import all components
import "./components/hotel-app";
import "./components/navigation-header";
import "./components/hero-section";
import "./components/rooms-section";
import "./components/amenities-section";
import "./components/contact-section";
import "./components/hotel-footer";

// Remove loading indicator once components are loaded
document.addEventListener("DOMContentLoaded", () => {
  const loading = document.querySelector(".loading") as HTMLElement;
  if (loading) {
    loading.style.display = "none";
  }
});
