const io = require('socket.io-client')
let Event = require('./database/models/Event')

const socket = io.connect('*/ip do servidor/*', { reconnect: true })

function saveNewEvent(eventType, data) {
    let newEvent = Event.build({
        content: data,
        type: eventType
    })
    console.log(newEvent.get({plain: true}));
    delete newEvent.id;
    newEvent.save();
}

socket.on('connect', function (data) {
    console.log("Connected with socket itc")
});

socket.on('queueevent', function (data) {
    console.log('Resultado do evento queueevent: ', data)
    saveNewEvent('queueevent', data)
});

socket.on('queuestatus', function (data) {
    console.log('Resultado do evento queuestatus: ', data)
    saveNewEvent('queuestatus', data)
});

socket.on('agentpause', function (data) {
    console.log('Pausa: ' ,data)
    saveNewEvent('agentpause', data)
});

socket.on('agentunpause', function (data) {
    console.log('Unpause: ' ,data)
    saveNewEvent('agentunpause', data)
});

socket.on('agentlogoff', function (data) {
    console.log('Logoff: ' , data);
    saveNewEvent('agentlogoff', data)
});

socket.on('agentlogin', function (data) {
    console.log('agentlogin: ' ,data)
    saveNewEvent('agentlogin', data)
});

socket.on('agentlogoffqueue', function (data) {
    console.log('agentlogoffqueue: ', data)
    saveNewEvent('agentlogoffqueue', data)
});

socket.on('state-hangup', function (data) {
    console.log('state-hangup: ', data);
    saveNewEvent('state-hangup', data)
});

socket.on('state-answer', function (data) {
    console.log('state-answer: ' , data)
    saveNewEvent('state-hangup', data)
});

socket.on('state-ringing', function (data) {
    console.log('state-ringing: ', data)
    saveNewEvent('state-ringing', data)
});

socket.on('peerstatus', function (data) {  
    console.log('peerstatus: ', data)
    saveNewEvent('peerstatus', data)
});

module.exports = socket
