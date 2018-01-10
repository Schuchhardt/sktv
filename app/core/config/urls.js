angular.module('orange.config', [])
  .constant("CONFIG", {
    apiURL: (window.location.hostname == "localhost" && window.location.port == "8100") ? 'http://localhost:8100/api' : "http://admin.orangetuescuela.com/api",
    notificationIcon: 'img/favicons/apple-icon.png',
    oneSignalAppId: "c5467176-9f0d-4b28-b1d2-2f27b0441442",
    GCMprojectId: "651062383126"
  });
