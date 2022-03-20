function ipLookUp() {
    $.ajax('http://ipinfo.io/json').then(
        function success(response) {
            console.log('User\'s Location Data is ', response);
            console.log('User\'s Country', response.country);
        },

        function fail(data, status) {
            console.log('Request failed.  Returned status of', status);
        }
    );
}
ipLookUp();
 