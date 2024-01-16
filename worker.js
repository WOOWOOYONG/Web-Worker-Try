// onmessage = (e) => {
//   console.log('Message received from main script');
//   const workerResult = `Result: ${e.data}`;
//   console.log('Posting message back to main script');
//   postMessage(workerResult);
// };

onmessage = function (e) {
  postMessage(encryptData(e.data));
};

function encryptData(data) {
  return btoa(data);
}
