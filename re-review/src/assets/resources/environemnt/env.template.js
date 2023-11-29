(function(window) {
  window.env = window.env || {};

  // Environment variables
  window["env"]["remoteServiceBaseUrl"] = "${API_GATEWAY_URL}";
  window["env"]["notificationRemoteServiceBaseUrl"] = "${API_NOTIFICATION_URL}";
})(this);
