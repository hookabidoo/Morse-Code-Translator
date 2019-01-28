const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);



let start,end,length;
let long = 0;
let short = 0;

exports.motion_length = functions.database.ref('/message').onWrite(event => {
  const snapshot = event.data;
  const val = snapshot.val();
  if (snapshot.changed("Timestamp")){
    start = snapshot.val()['start'];
    end = snapshot.val()['end'];
    length = end - start;
    if (length > 5000) {
      long ++;
      console.log("a long motion")
    }
    else {
        short ++;
        console.log("a short motion")
    };
  };
};
    

    

 