// import express from 'express';
// import axios from 'axios';
// import bodyParser from 'body-parser';

// const app = express();
// app.use(bodyParser.json());

// const ONESIGNAL_APP_ID = 'fac450ef-3b57-4b31-9ca0-13ebb27b5415';
// const REST_API_KEY =
//   'os_v2_app_7lcfb3z3k5ftdhfacpv3e62ucvlhwjxk3ccet7uq525teddvfocg3pgj7gzgrml3nc3mkzikz4ucfzuzxpwsf77pcdidsnm3iwuqijq'; // from OneSignal dashboard

// // Example IoT POST endpoint: device sends battery % here
// app.post('/iot-data', async (req, res) => {
//   const { deviceId, battery } = req.body;

//   if (battery < 20) {
//     // Send push notification
//     await axios.post(
//       'https://api.onesignal.com/notifications',
//       {
//         app_id: ONESIGNAL_APP_ID,
//         included_segments: ['Subscribed Users'],
//         headings: { en: '⚠️ Low Battery Alert' },
//         contents: { en: `Device ${deviceId} battery is at ${battery}%` },
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json; charset=utf-8',
//           Authorization: `Basic ${REST_API_KEY}`,
//         },
//       }
//     );
//     console.log('⚠️ Notification sent for low battery');
//   }

//   res.json({ success: true });
// });

// app.listen(4000, () => console.log('Server running on port 4000'));
