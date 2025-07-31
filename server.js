import cron from 'node-cron'

function abc (){
    console.log('hiii')
}

cron.schedule('*/5 * * * * *', abc)

// cron.schedule('* * * * *', () => {
//   console.log('Runs every minute');
// });

// /*
// cron.schedule('*/5 * * * * *', () => {
//   console.log('Runs every 5 seconds');
// });
// */

const task = cron.schedule('0 9 * * *', () => {
  console.log('Run at 9 AM every day');
});

task.start();

// cron.schedule('0 0 * * 0', () => {
//   console.log('Runs every Sunday at midnight');
// });

// let counter = 0;
// cron.schedule('*/2 * * * * *', () => {
//   counter++;
//   console.log(`Counter: ${counter}`);
// });

// const dynamicTask = cron.schedule('*/10 * * * * *', () => {
//   console.log('Dynamic run');
// });
// setTimeout(() => {
//   dynamicTask.stop();
// }, 30000);
