import { Queue } from 'bullmq';

const notificationQueue = new Queue('email-queue');

async function init() {
    const res= await notificationQueue.add('myJobName', {
        email: "piyushgarg.dev",
        subject: "Welcome Mess",
        body: "Hey Piyush, Welcome"
    });
    console.log("Job added to queue",res.id);
    // await notificationQueue.add('myJobName', { email: "piyushgarg.dev",
    // subject: "Welcome Mess", 
    // body: "Hey Piyush, Welcome" });
}

await init();