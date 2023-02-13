/* Setup code. You can ignore this and just read the problem statement below, but feel free to check it out too. */

const SUCCESS_PERCENTAGE = 0.5;

// creates a task, which is a function that returns a promise
function createTask(name) {
  return function () {
    return new Promise((resolve, reject) => {
      console.log(`task ${name} started`);
      setTimeout(() => {
        if (Math.random() < SUCCESS_PERCENTAGE) {
          resolve();
          console.log(`task ${name} completed`);
        } else {
          reject();
          console.log(`task ${name} failed`);
        }
      }, Math.random() * 200);
    });
  };
}

// returns an array of functions which return Promises
function tasks(numTasks) {
  const output = [];

  for (let i = 0; i < numTasks; i++) {
    output.push(createTask(i));
  }
  // array of functions
  return output;
}

// PROBLEM STATEMENT

// 1. Create a class that allows us to execute a number of tasks concurrently. When one task completes, another should begin to run, so that the number of tasks running always equals the number passed to the class constructor. Keep doing this until the task queue is empty. The class should have at least two methods, one called add which allows us to add tasks to the queue, and one called start, which starts the process of running tasks.

// 2. Now imagine each task has a 50% chance of passing/failing. Support a second parameter called retryCount that allows us to retry a failed task up to retryCount times before silently giving up.

// TYPE CODE HERE
// write a Queue class that has the following API
class Queue {
  constructor({ concurrency, retryCount }) {
    this.concurrency = concurrency;
    this.tasks = [];
    this.retryCount = retryCount;
  }
  // add method
  add(...tasks) {
    this.tasks.push(...tasks);
    console.log('add method invoked!');
  }
  // start method
  start() {
    // invoke each task in order concurrently
    // as soon as tasks finish, they will be added from the rest of the tasks
    // need a way to remove tasks from the top of tasks

    // remove the first 10 tasks and run them
    const firstN = this.tasks.splice(0, this.concurrency);
    firstN.forEach((func) => {
      this.runTask(func);
    });
    console.log('start method invoked!');
    console.log(`${this.concurrency}`);
  }
  runTask(func, currCount = this.retryCount) {
    // recursively run promise until tasks array is empty
    if (func === undefined) return;
    func()
      .then(() => {
        this.runTask(this.tasks.shift());
      })
      .catch((err) => {
        if (currCount > 0) {
          console.log('retry', currCount);
          this.runTask(func, --currCount);
        }
      });
  }
}

const queue = new Queue({ concurrency: 10, retryCount: 3 });
// add tasks to queue
queue.add(...tasks(20));
// start processing the tasks until all tasks are complete
queue.start();
