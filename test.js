
const sleep  = require('./index');
(async() => {
    console.log("Will wait for 2 second", new Date());
    await sleep(2);
    console.log("After wait", new Date());
})();