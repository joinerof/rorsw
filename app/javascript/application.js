// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

window.addEventListener("load", ()=>{
    const swUrl = "/service-worker.js";
    navigator.serviceWorker.register(swUrl);
});
