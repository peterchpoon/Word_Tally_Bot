import * as Worker from "../workers/worker";

export default () => {
  const msInMin = 1000;
  let reportIntervalInMs = 5 * msInMin;
  let runner;

  const countbot = {
    setReportIntervalInMinute: (mintues) => {
      reportIntervalInMs = typeof minutes === 'number' && minutes > 0 ? minutes * msInMin : msInMin;
    },

    runCountbot: (sendMessage) => {
      countbot.clearCountbotRun();

      runner = setInterval((() => {
        sendMessage(Worker.getSortedTopWords().map((e) => Object.keys(e)[0] +":"+ Object.values(e)[0]).toString());
      }), reportIntervalInMs);
    },

    clearCountbotRun: () => {
      clearInterval(runner);
    }
  }
  return countbot;
}
