
const sleep = async (timer:number = 1) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, timer * 1000);
    })
}
export default sleep;