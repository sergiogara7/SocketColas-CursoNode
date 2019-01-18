
// comando para establecer conexion
var socket = io();

//
var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');

var lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
var lblEscritorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4];

function actualizarHtml(ultimos4){
    for (let i = 0; i <= (ultimos4.length - 1); i++) {
        lblTickets[i].text('Ticket ' + ultimos4[i].numero)
        lblEscritorios[i].text('Escritorio ' + ultimos4[i].escritorio)
    }
}

socket.on('connect', () => {
    console.log('Conectado!!')
})

socket.on('disconnect', () => {
    console.log('Desconectado!!')
})

socket.on('estadoActual', (data) => {
    actualizarHtml(data.ultimos);
})
socket.on('ultimos4', (data) => {
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizarHtml(data.ultimos);
})