const { io } = require('../server');
const { TicketControl } = require('../clases/ticket-control');

const ticketControl = new TicketControl();

io.on('connection', (client) => {
    //
    client.on('siguienteTicket', (data, callback) => {
        let siguiente = ticketControl.siguiente()
        console.log(siguiente)
        callback(siguiente)
    });
    //
    client.emit('estadoActual',{ actual: ticketControl.getUltimoTicket(), ultimos: ticketControl.getUltimos4()})
    //
    client.on('atenderTicket', (data, callback) => {
        //
        if( !data.escritorio ){
            return callback({
                ok: false,
                err: 'El escritorio es necesario'
            })
        }
        //
        let atenderTicket = ticketControl.atenderTicket(data.escritorio)
        //
        client.broadcast.emit('ultimos4', { ultimos: ticketControl.getUltimos4()})
        //
        callback({
            ok: true,
            ticket: atenderTicket
        })
    })
});