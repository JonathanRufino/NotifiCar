const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.sendNotification = 
    functions.database.ref('/occurrences/{pushId}/{year}/{month}/{day}')
    .onWrite(event => {
        const occurrence = event.data.val();
        const vehicle = occurrence.vehicle;

        const payload = {
            notification: {
                title: `Veículo: ${vehicle}`,
                body: `Se encontra com: ${occurrence.occurrence_type}`
            }
        };

        return admin.database().ref(`/vehicles/${vehicle}`).once('value').then(snap => {
            const usersVehicle = snap.val();
            const users = Object.keys(usersVehicle);
            
            return sendDeviceNotification(users, 0, payload);
        });
    });

function sendDeviceNotification(users, count, payload) {
    if(count < users.length){
        return admin.database().ref(`/users/${users[count]}`).once('value').then(snap => {
            const token = snap.child("token").val();
            return admin.messaging().sendToDevice(token, payload).then(() => {
                return sendDeviceNotification(users, count = count + 1, payload)
            });
        });
    } else {
        return true;
    }
}

