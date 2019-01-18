
// comando para establecer conexion
var socket = io();

socket.on('connect', () => {
    console.log('Conectado!!')
})

socket.on('disconnect', () => {
    console.log('Desconectado!!')
})

socket.on('estadoActual', (data) => {
    $('#lblNuevoTicket').html(data.actual);
})

$('button').on('click', () => {
    socket.emit('siguienteTicket', null, (siguienteTicket)=>{
        $('#lblNuevoTicket').html(siguienteTicket);
    });
})