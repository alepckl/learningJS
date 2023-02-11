let URL_BASE = "";
let evtSource;

evtSource = new EventSource(`${URL_BASE}`);
evtSource.onmessage(function (message) {
    console.log(JSON.parse(message.data));
});

evtSource.addEventListener("evtName", function (event) {
    console.log(JSON.parse(event.data));
}, false);




