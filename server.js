const WebSocket = require('ws'); 

const wss = new WebSocket.Server({ port: 8080 }); 

let clientId = 1;

wss.on('connection', ws => {
    const currentClientId = clientId++;

    ws.on('message', message => { 
        console.log(`Client ${currentClientId} - Received: ${message}`); 
     
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) { 
                client.send(`Client ${currentClientId} - ${message}`);
            }
        });
    });

    ws.send(`Hello! I am a WebSocket server. You are Client ${currentClientId}`);

    console.log(`Client ${currentClientId} connected`);
});

wss.on('listening', () => {
  console.log('WebSocket server is running on port 8081');
});
