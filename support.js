document.addEventListener("DOMContentLoaded", function () {
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

  const supportLinks = document.querySelectorAll(".support-link");
  const contactLink = document.getElementById("contact-link");

  function openMail(e) {
    e.preventDefault();

    if (isMobile) {
      window.location.href = "mailto:alphabs240@gmail.com";
    } else {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=alphabs240@gmail.com",
        "_blank",
      );
    }
  }

  supportLinks.forEach((link) => {
    link.addEventListener("click", openMail);
  });

  if (contactLink) {
    contactLink.addEventListener("click", openMail);
  }

  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("close-btn");
  const overlay = document.getElementById("overlay");

  menuToggle.addEventListener("click", function () {
    sidebar.classList.add("active");
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", function () {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  const aboutLinks = document.querySelectorAll(".about");
  const aboutModal = document.getElementById("about-modal");
  const aboutClose = document.getElementById("about-close");

  aboutLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      aboutModal.classList.add("active");
      document.body.classList.add("modal-open");
      document.body.style.overflow = "hidden";
    });
  });

  aboutClose.addEventListener("click", function () {
    aboutModal.classList.remove("active");

    document.body.style.overflow = "auto";
  });

  aboutModal.addEventListener("click", function (e) {
    if (e.target === aboutModal) {
      aboutModal.classList.remove("active");

      document.body.style.overflow = "auto";
    }
  });
});

const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const aboutThemeToggle = document.getElementById("about-theme-toggle");

aboutThemeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

emailjs.init("YOUR_PUBLIC_KEY");

const form = document.getElementById("supportForm");
const status = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const sendBtn = form.querySelector(".send-btn");

  sendBtn.disabled = true;
  sendBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

  const params = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    subject: document.getElementById("subject").value.trim(),
    message: document.getElementById("message").value.trim(),
  };

  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
    .then(() => {
      status.style.color = "#0a8f3d";
      status.innerHTML =
        '<i class="fa-solid fa-circle-check"></i> Message sent successfully!';

      form.reset();
    })
    .catch((error) => {
      console.error(error);

      status.style.color = "#dc2626";
      status.innerHTML =
        '<i class="fa-solid fa-circle-xmark"></i> Failed to send message.';
    })
    .finally(() => {
      sendBtn.disabled = false;
      sendBtn.innerHTML =
        '<i class="fa-solid fa-paper-plane"></i> Send Message';
    });
});

emailjs.init("YOUR_PUBLIC_KEY");

emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params);

const message = document.getElementById("message");
const count = document.getElementById("count");

message.addEventListener("input", () => {
  count.textContent = message.value.length;
});

// Açılanda
aboutModal.classList.add("active");
document.body.classList.add("modal-open");
document.documentElement.classList.add("modal-open");

// Bağlananda
aboutModal.classList.remove("active");
document.body.classList.remove("modal-open");
document.documentElement.classList.remove("modal-open");
