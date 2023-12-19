var emailInput = document.getElementById("tsNewsLetterInput");
if (window.innerWidth < 991) {
  emailInput.setAttribute("placeholder", "Email new posts (no spam)");
} else {
  emailInput.setAttribute(
    "placeholder",
    "Email address to be notified when there's a new post (no spam, promise)"
  );
}
