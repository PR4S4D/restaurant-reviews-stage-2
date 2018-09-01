if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("js/service-worker/sw.js")
      .then(console.log("Service worker Registered!"))
      .catch(err => console.log("Error while registering SW", err));
  });
}
