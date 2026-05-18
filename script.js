document.addEventListener("DOMContentLoaded", function () {
  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=alphabs240@gmail.com";

  const links = ["support-link", "contact-link"];

  links.forEach((id) => {
    const link = document.getElementById(id);

    if (!link) return;

    if (/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
      link.href = "mailto:alphabs240@gmail.com";
    } else {
      link.href = gmailLink;
      link.target = "_blank";
    }
  });
});