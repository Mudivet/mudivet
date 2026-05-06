const menuButton = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector(".site-nav");

if (menuButton && siteMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = siteMenu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  siteMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteMenu.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

const bookingForm = document.querySelector("#booking-form");
const formStatus = document.querySelector("#form-status");

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(bookingForm);
    const fields = Object.fromEntries(formData.entries());
    const subject = `Mudi Vet booking request - ${fields.name || "New client"}`;
    const body = [
      "Hello Mudi Veterinary Clinic,",
      "",
      "I would like to request a booking with the following details:",
      "",
      `Full name: ${fields.name || ""}`,
      `Phone number: ${fields.phone || ""}`,
      `Email address: ${fields.email || ""}`,
      `Preferred date: ${fields.date || ""}`,
      `Preferred time: ${fields.time || ""}`,
      `Appointment type: ${fields.visitType || ""}`,
      `Service needed: ${fields.service || ""}`,
      `Location/address: ${fields.location || ""}`,
      "",
      "Message:",
      fields.message || "",
      "",
      "Thank you."
    ].join("\n");

    const mailtoUrl = `mailto:mudivet@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    if (formStatus) {
      formStatus.textContent = "Opening your email app with the booking request addressed to mudivet@outlook.com.";
    }
  });
}
