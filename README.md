# JS-Sleep
Sleep Timer! To hold the execution of the next function after sleep mode.

# How to use?
Ex.

``` 
import sleep from 'js-sleep-timer';
(async() => {
    console.log("Will wait for 2 second", new Date());
    await sleep(2); // timer in second
    console.log("After wait", new Date());
})();

```

Thanks
