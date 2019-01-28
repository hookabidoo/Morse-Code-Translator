var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://assignment-5-14bb1.firebaseio.com"
});

var db = admin.database();
var refmessage = db.ref("/message")


var five = require("johnny-five");

var board = new five.Board();
var start, end;


board.on("ready", function() {

    var motion = new five.Motion(3);
   
    motion.on("calibrated", function() {
        console.log("calibrated");

    });

    motion.on("motionstart", function() {
        start = Date.now();
        console.log("motion start");

    });

    motion.on("motionend", function() {
        end = Date.now()
        refmessage.push({
            start: start,
            end: end
        });
        console.log("motion end");

    });
});



