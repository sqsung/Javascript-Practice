let secondsSinceCall = 0;

const countingSeconds = setInterval(() => {
    console.log(++secondsSinceCall);
    if (secondsSinceCall === 5) clearInterval(countingSeconds);
}, 1000);
