console.log("Request data");


// callbacks
// emulating server
// setTimeout(() => {
//   console.log("Server prepare data");

//   const backendData = {
//     server: "aws",
//     port: 2000,
//     status: "online",
//   }


//   setTimeout(() => {
//     backendData.modified = true;
//     console.log("Data received", backendData);
//   }, 2000)
// }, 2000)

// promises
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Server prepare data");
//     const backendData = {
//       server: "aws",
//       port: 2000,
//       status: "online",
//     }
//     resolve(backendData)
//   }, 2000);
// });

// promise.then((data) => { // its backedData
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true;
//       resolve(data);
//       // reject(data);
//     }, 2000);
//   });

// }).then((clientData) => {
//   console.log("Data received", clientData);
//   clientData.fromPromise = true;
//   return clientData;

// }).then((fromPromiseData) => {
//   console.log(fromPromiseData);

// }).catch(error => {
//   console.error("Error: ", error);

// }).finally(() => { // does not depend on errors
//   console.log("Finally")
// })

const sleep = (ms) => new Promise(resolve => setTimeout(() => resolve(), ms));
const sleep2 = (ms) => new Promise((resolve, reject) => setTimeout(() => reject("KEKEKE"), ms));

// sleep(2000).then(() => console.log("2 sec"));
// sleep(4000).then(() => console.log("4 sec"));

Promise.all([sleep(2000), sleep2(4000)]).then((data) => {
  console.log("All promises is done", data)
});

Promise.race([sleep(2000), sleep(4000)]).then((data) => {
  console.log("Race promises", data)
});