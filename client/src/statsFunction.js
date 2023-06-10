export function formatData (tasks, users) {
  const taskCount = countTasks(tasks);
  const hourCount = countHours(tasks);
  const tasksArr = [];
  const hoursArr = [];

  for(const user of users) {
    if(!taskCount[user.id]) {
      tasksArr.push(0);
      hoursArr.push(0);
    } else {
      tasksArr.push(taskCount[user.id]);
      hoursArr.push(hourCount[user.id])
    }
  }
  return [tasksArr, hoursArr];
}

const countTasks = (tasks) => {
  const result = {};
  for(const task of tasks) {
    if(result.hasOwnProperty(task.userId)) {
      result[task.userId] += 1;
    } else {
      result[task.userId] =1;
    }
  }
  return result;
}

const countHours = (tasks) => {
  const result = {};
  for(const task of tasks) {
    if(result.hasOwnProperty(task.userId)) {
      result[task.userId] += task.timespan;
    } else {
      result[task.userId] =task.timespan;
    }
  }
  return result;
}

export function filterByDates (arr, time) {
  const result = [];
  for(const obj of arr) {
    if(dateChecker(obj.timestamp, time)) {
      result.push(obj);
    }
  }
  return result;
}

const dateChecker = (date, numDays) => {
  const dateMili = new Date(date).getTime();
  const currentDate = new Date();
  const daysAgo = new Date().setDate(currentDate.getDate() - numDays);

  return dateMili >= daysAgo;
}