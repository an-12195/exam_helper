const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Path to your secret file
const serviceAccountPath = '/etc/secrets/firebaseServiceAccount.json';

// Read and parse the service account JSON
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
