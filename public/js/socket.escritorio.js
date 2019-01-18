
// comando para establecer conexion
var socket = io();

var searchParams = new URLSearchParams(window.location.search)

if(!searchParams.has('escritorio')){
    window.location = 'index.html';
    throw new Error('El escritorio es necesario')
}

var escritorio = searchParams.get('escritorio');
console.log(escritorio)
$('h1').text('Escritorio ' + escritorio)

$('button').on('click', () => {
    socket.emit('atenderTicket', { escritorio }, (data)=>{
        if(data.ok){
            console.log('ticket');
            $('small').text(data.ticket);
        }else{
            console.log(data.err)
        }
    });
})

/*
socket.on('connect', () => {
    console.log('Conectado!!')
})

socket.on('disconnect', () => {
    console.log('Desconectado!!')
})

socket.on('estadoActual', (data) => {
    $('#lblNuevoTicket').html(data.actual);
})


*/