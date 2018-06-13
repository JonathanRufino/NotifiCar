const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.sendNotification = 
    functions.database.ref('/occurrences/{pushId}/{year}/{month}/{day}')
    .onWrite((change) => {
        const occurrence = change.after.val();
        const vehicle = occurrence.vehicle;

        const payload = {
            notification: {
                title: `Veículo: ${vehicle}`,
                body: `Situação: ${occurrence.occurrence_type}`
            }
        };

        return admin.database().ref(`/vehicles/${vehicle}`).once('value').then(snap => {
            const usersVehicle = snap.val();
            if(usersVehicle !== null){
                const users = Object.keys(usersVehicle);
            
                return sendDeviceNotification(users, 0, payload);
            } else {
                return admin.database().ref(`/vehiclesWithoutUserRegistred/`)
                    .push()
                    .set({
                        vehicle, 
                        occurrence_type: occurrence.occurrence_type, 
                        userID: occurrence.userID, 
                        time: occurrence.time
                    })
            }
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

exports.countOccurrenceChange = functions.database.ref('/occurrence_types/{occurrenceTypeId}/occurrences/{occurrenceId}').onWrite(
    (change) => {
      const collectionRef = change.after.ref.parent;
      const countRef = collectionRef.parent.child('occurrences_count');

      let increment;
      if (change.after.exists() && !change.before.exists()) {
        increment = 1;
      } else if (!change.after.exists() && change.before.exists()) {
        increment = -1;
      } else {
        return null;
      }

      return countRef.transaction((current) => {
        return (current || 0) + increment;
      }).then(() => {
        return console.log('Counter updated.');
      });
    });

// If the number of occurrences gets deleted, recount the number of occurrences
exports.recountOccurrences = functions.database.ref('/occurrence_types/{occurrenceTypeId}/occurrences_count').onDelete((snap) => {
  const counterRef = snap.ref;
  const collectionRef = counterRef.parent.child('occurrences');

  return collectionRef.once('value')
      .then((messagesData) => counterRef.set(messagesData.numChildren()));
});

exports.countVehiclesWithoutUser = functions.database.ref('/vehiclesWithoutUserRegistred/{vehiclesWithoutUserRegistredId}').onWrite(
    (change) => {
      const collectionRef = change.after.ref.parent;
      const countRef = collectionRef.child('vehicles_without_user_count');

      let increment;
      if (change.after.exists() && !change.before.exists()) {
        increment = 1;
      } else if (!change.after.exists() && change.before.exists()) {
        increment = -1;
      } else {
        return null;
      }

      return countRef.transaction((current) => {
        return (current || 0) + increment;
      }).then(() => {
        return console.log('Counter updated.');
      });
    });

// If the number of vehicles Without User Registred gets deleted, recount the number of occurrences
exports.recountVehiclesWithoutUser = functions.database.ref('/vehiclesWithoutUserRegistred/vehicles_without_user_count').onDelete((snap) => {
  const counterRef = snap.ref;
  const collectionRef = counterRef.child('vehiclesWithoutUserRegistred');

  return collectionRef.once('value')
      .then((messagesData) => counterRef.set(messagesData.numChildren()));
});
