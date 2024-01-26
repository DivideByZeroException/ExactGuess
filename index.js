


// import axios from 'axios';
// import express from "express"
// import dotenv from 'dotenv';
// import { Client, GatewayIntentBits } from 'discord.js';
// import { EmbedBuilder } from 'discord.js';
// import https from "https";
// import { setInterval } from 'timers';

  

// function myFunction() {
//   console.log('Функция была вызвана!');
    
//     const handler = async (event, context) => {
//     const url = 'https://exactguess.onrender.com';
  
//     return new Promise((resolve, reject) => {
//       const req = https.get(url, (res) => {
//         if (res.statusCode === 200) {
//           resolve({
//             statusCode: 200,
//             body: 'Server pinged successfully',
//           });
//           console.log("PING!");
//         } else {
//           reject(
//             new Error(`Server ping failed with status code: ${res.statusCode}`)
//           );
//         }
//       });
  
//       req.on('error', (error) => {
//         reject(error);
//       });
  
//       req.end();
//     });
//   };
// }


// const interval = 5 * 60 * 1000;

// setInterval(myFunction, interval);


// dotenv.config();
// const app = express();
// app.use(express.json());

// app.get('/', (req, res) => {
//     console.log('Привет, это работающий сервер!');
//   });

// const port = 8080;
// app.listen(port, () => console.log(`Listening to port ${port}`));


  
// let iso = "";

// const apiKey = process.env.API_KEY_MAPILLARY;

// var imgURL = "";

// const channelId = '1198273314712473620';

// const secret_channel_id = '1198277832133070931';





// const client = new Client({
//   intents: Object.keys(GatewayIntentBits).map((a) => GatewayIntentBits[a]),
// });
// client.on('ready', () => {
//     console.log(`Бот запущен как ${client.user.tag}`);
//     setImg();
// });


// client.on('messageCreate', (message) => {

//     if (message.channelId != channelId) {} else {
//         if (message.content.toLowerCase() == "/hint") {
//             if(iso!="" && iso!=null){
//                 let flagEmoji = String.fromCodePoint(...iso.split('').map(c => c.charCodeAt(0) + 127397));
//                 message.react(flagEmoji);
//             }
//         }
//         if (message.content.toLowerCase() == "/alive") {
//             const channel = client.channels.cache.get(channelId);
//             if (channel ) {

//                 channel.send("Alive")
                

//             }
//         }
//         if (message.content.toLowerCase() == "/image" || message.content.toLowerCase() == "/img") {
//             const channel = client.channels.cache.get(channelId);
//             if (channel && imgURL!="") {

             
//                     let exampleEmbed = new EmbedBuilder()
//                         .setColor(generateRandomHexColor())
//                         .setTitle("Картинка")
//                         .setImage(imgURL)
//                     channel.send({
//                         embeds: [exampleEmbed]
//                     });
        
                
//             }
//         }
//         if (message.content.toLowerCase() == "/skip") {
//             const channel = client.channels.cache.get(channelId);
//             if (channel && iso!="" && iso!=null) {

//                 channel.send("Это было " + iso + " " + String.fromCodePoint(...iso.split('').map(c => c.charCodeAt(0) + 127397)))
//                 iso = null;
//                 setImg();
//             }
//         }

//         if (message.content.toUpperCase() == iso) {
//             message.react('✅');

//             const channel = client.channels.cache.get(channelId);

//             if (channel) {
//                 channel.send("<@"+message.author.id+"> Правильно угадал. Страна была "+iso + " " + String.fromCodePoint(...iso.split('').map(c => c.charCodeAt(0) + 127397))+ '. Следующая картинка на подходе!');
//             }
//             iso = null;
//             setImg();
//         } else if (message.content.length == 2) {
//             message.react('❌');
//         }

//     }
// });















// function sendImage() {
//     const channel = client.channels.cache.get(channelId);
//     const channel_secret = client.channels.cache.get(secret_channel_id);
//     if (channel && channel_secret) {
//         let exampleEmbed = new EmbedBuilder()
//             .setColor(generateRandomHexColor())
//             .setTitle("Угадай страну")
//             .setImage(imgURL)
//         channel.send({
//             embeds: [exampleEmbed]
//         });
//         channel_secret.send(iso);
//     } else {
//         console.error(`Канал с ID ${channelId} не найден.`);
//     }

// }

// function setImg() {
//     var randomCoordinates = generateRandomCoordinates();
//     var url = `https://graph.mapillary.com/images?access_token=${apiKey}&fields=id,computed_geometry,thumb_1024_url&bbox=` + randomCoordinates.minLongitude + "," + randomCoordinates.minLatitude + "," + randomCoordinates.maxLongitude + "," + randomCoordinates.maxLatitude + "," + "&limit=1";
//     console.log(url);
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             if(data.data[0].thumb_1024_url!=undefined&data.data[0].thumb_1024_url!=null && data.data[0].thumb_1024_url!=""){
//             imgURL = data.data[0].thumb_1024_url;
//             var coords = data.data[0].computed_geometry.coordinates;
//             var x = coords[0];
//             var y = coords[1];
//             console.log(imgURL);
//             getCountryCodeByCoordinates(y, x, process.env.GEO_NAME)
//                 .then((countryCode) => {
//                     console.log(countryCode);
//                     if (countryCode == undefined) {
//                         setImg();
//                     } 
//                     else {
//                         iso = countryCode;
//                         console.log(iso);
//                         sendImage();
//                     }
//                 });
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             setImg();
//         });

// };




// function getRandomCoordinate(min, max) {
//     return Math.random() * (max - min) + min;
// }
// function generateRandomCoordinates() {
//     const centerLatitude = getRandomCoordinate(-90, 90);
//     const centerLongitude = getRandomCoordinate(-180, 180);
//     const latitudeRange = 0.25;
//     const minLatitude = Math.max(centerLatitude - latitudeRange / 2, -90);
//     const maxLatitude = Math.min(centerLatitude + latitudeRange / 2, 90);
//     const longitudeRange = 0.25;
//     const minLongitude = (centerLongitude - longitudeRange / 2 + 180) % 360 - 180;
//     const maxLongitude = (centerLongitude + longitudeRange / 2 + 180) % 360 - 180;


//     return {
//         centerLatitude,
//         centerLongitude,
//         minLatitude,
//         maxLatitude,
//         minLongitude,
//         maxLongitude,
//     };
// }



// async function getCountryCodeByCoordinates(lat, lng, username) {
//     const apiUrl = `http://api.geonames.org/countryCodeJSON?lat=${lat}&lng=${lng}&username=${username}`;

//     try {
//         const response = await axios.get(apiUrl);

//         if (response.data.countryCode) {
//             const countryCode = response.data.countryCode.toUpperCase();
//             return countryCode;
//         } else {
//             throw new Error('Unable to retrieve country code.');
//         }
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// }

// function generateRandomHexColor() {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     const hexColor = "#" + "0".repeat(6 - randomColor.length) + randomColor;
//     return hexColor;
// }

// client.login(process.env.DISCORD_TOKEN);

const http = require("http");
 
const server =  http.createServer(function(request, response){
    response.end("Hello METANIT.COM!");
});
server.listen(3000);