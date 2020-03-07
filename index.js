
const sleep = async (timer) => {
    return new Promise((resolve, reject) => {
        timer = isNaN(timer) ? 1 : timer
        setTimeout(() => {
            resolve();
        }, timer * 1000);
    })
}
module.exports = sleep;