// if (window.Worker) {
//   const myWorker = new Worker('worker.js');

//   // 傳送資料給worker
//   myWorker.postMessage('Hello Worker');

//   // 接收來自worker的資料
//   myWorker.onmessage = function (e) {
//     console.log('Message received from worker: ' + e.data);
//   };
// }

document.getElementById('encrypt').addEventListener('click', () => {
  const inputData = document.getElementById('inputData');
  const resultDisplay = document.getElementById('result');
  const data = inputData.value;

  if (!data) {
    resultDisplay.textContent = '請輸入要加密的資料';
    return;
  }

  const worker = new Worker('worker.js');
  worker.postMessage(data);

  worker.onmessage = (e) => {
    resultDisplay.textContent = e.data;
    worker.terminate();
  };

  worker.onerror = (e) => {
    console.error('Worker 錯誤: ', e);
    resultDisplay.textContent = '加密過程中發生錯誤';
  };
});
