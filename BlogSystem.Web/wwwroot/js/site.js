"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/notifications").build();

connection.on("ReceiveNotification", function (message) {
    alert(message);
});

connection.start().catch(function (err) {
    return console.error(err.toString());
});