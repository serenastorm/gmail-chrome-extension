// Saves options to chrome.storage
function save_options() {
  var hideHangouts = document.getElementById("hideHangouts").checked;
  var hideMeet = document.getElementById("hideMeet").checked;
  chrome.storage.sync.set(
    {
      hideHangouts: hideHangouts,
      hideMeet: hideMeet,
    },
    function () {
      // Update status to let user know options were saved.
      var status = document.getElementById("status");
      status.textContent = "Options saved.";
      setTimeout(function () {
        status.textContent = "";
      }, 750);
    }
  );
}

// Restores form values using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get(
    {
      // Set default values
      hideHangouts: false,
      hideMeet: false,
    },
    function (items) {
      document.getElementById("hideHangouts").checked = items.hideHangouts;
      document.getElementById("hideMeet").checked = items.hideMeet;
    }
  );
}
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save_options);
