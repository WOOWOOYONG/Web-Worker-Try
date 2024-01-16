// if (window.Worker) {
//   const myWorker = new Worker('worker.js');

//   // 傳送資料給worker
//   myWorker.postMessage('Hello Worker');

//   // 接收來自worker的資料
//   myWorker.onmessage = function (e) {
//     console.log('Message received from worker: ' + e.data);
//   };
// }

document.getElementById('encrypt').addEventListener('click', function () {
  const data = document.getElementById('inputData').value;
  if (data) {
    const worker = new Worker('worker.js');
    worker.postMessage(data);

    worker.onmessage = function (e) {
      document.getElementById('result').textContent = e.data;
      worker.terminate();
    };

    worker.onerror = function (e) {
      console.error('Worker 錯誤: ', e);
    };
  }
});
