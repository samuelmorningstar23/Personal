import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { env } from '$env/dynamic/private';
import pkg from 'firebase-admin';

// firebase-admin picks up the emulators from process.env, which Vite does not
// fill from .env files, so copy the hosts across when they are set there.
for (const key of ['FIRESTORE_EMULATOR_HOST', 'FIREBASE_AUTH_EMULATOR_HOST']) {
    if (env[key] && !process.env[key]) process.env[key] = env[key];
}
const useEmulators = Boolean(process.env.FIRESTORE_EMULATOR_HOST || process.env.FIREBASE_AUTH_EMULATOR_HOST);

try {
    pkg.initializeApp(useEmulators
        // the emulators need no credentials, only a project id
        ? { projectId: env.FB_PROJECT_ID || 'demo-encryptid' }
        : {
            credential: pkg.credential.cert({
                projectId: env.FB_PROJECT_ID,
                clientEmail: env.FB_CLIENT_EMAIL,
                privateKey: env.FB_PRIVATE_KEY,
            }),
        });
} catch (err) {
    if (!/already exists/u.test(err.message)) {
        console.error('Firebase Admin Error: ', err.stack)
    }
}


export const adminDB = getFirestore();
export const adminAuth = getAuth();
