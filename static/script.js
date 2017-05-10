document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('content').innerHTML =
    '<h1>Yes,</h1>' +
    '<h2>' +
      'Google executes JavaScript, even if the script is fetched from ' +
      'the network. However, Google does not make HTTP requests with the fetch API.' +
    '</h2>';

    fetch('/fetch', {
      method: 'get'
    }).then(function (response) {
      return response.json();
    }).then(function (responseString) {
      document.getElementById('content').innerHTML = responseString.message;
    });
}, false);
