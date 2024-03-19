document.addEventListener('DOMContentLoaded', function() {
    var ws = new WebSocket('ws://localhost:8080');

    var messages = document.getElementById('chat-messages');
    var input = document.getElementById('message-input');
    var button = document.getElementById('send-button');

    button.addEventListener('click', function() {
        var message = input.value;
        ws.send(message);
        input.value = '';
    });

    ws.onmessage = function(event) {
        var message = event.data;
        messages.innerHTML += '<div>' + message + '</div>';
    };
});