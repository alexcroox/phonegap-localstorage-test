var app = {
    // Wait for the device to be ready
    init: function() {
        document.addEventListener("deviceready", this.onDeviceReady, true);
    },
    // Device is ready, lets setup localstorage
    onDeviceReady: function() {

        LocalStorageStore.setup(function(success) {

            if(success) {

                console.log('callback success');
            }
        });
    },
    // Show popup using native notification or standard alert
    showAlert: function (message, title) {

        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },
    // Debug to DOM and console log
    debug: function(message, data) {

        if(data === undefined)
            data = '';
        else
            data = ': ' + data;

        $('#debug').prepend(message + data);
    }
};
app.init();