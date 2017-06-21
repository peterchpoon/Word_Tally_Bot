import * as Worker from "../workers/worker";

//Count bot factory: by default, every five minutes this bot should message
//report to a chat room with a list of the top 10 words seen during that time,
//as well as their approximate counts.

export default () => {
  const msInMin = 60000;
  let reportIntervalInMs = 5 * msInMin;
  let runner;

  const countbot = {
    //setter for reporting time interval in mintues.
    //param: number
    setReportIntervalInMinute: (mintues) => {
      reportIntervalInMs = typeof minutes === 'number' && minutes > 0 ? minutes * msInMin : msInMin;
    },

    //Start time spaced top string report of 10 word seen and their counts.
    //param: callback of Chat client API for top word string report.
    runCountbot: (sendMessage) => {
      //clear existing reporter
      countbot.clearCountbotRun();

      //call chat client api repeated with given time interval
      runner = setInterval((() => {
        //call chat client API for top word string report
        sendMessage(Worker.getSortedTopWords().map((e) => Object.keys(e)[0] +":"+ Object.values(e)[0]).toString());
      }), reportIntervalInMs);
    },

    //clear existing reporter
    clearCountbotRun: () => {
      clearInterval(runner);
    }
  }
  return countbot;
}
