const admin = require("firebase-admin");
const serviceAccount = require("../firebase-service-account.json"); // Rename your downloaded Firebase admin key to this

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
