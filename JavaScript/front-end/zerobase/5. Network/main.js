
fetch("/js-front end/5. Network/sample.json")
.then(async (result) => {
    console.log('result', result);
    if(result.ok) {
        const data = await result.json();
        console.log(data);
    }
})

// ※ blocked CORS 
fetch('https://ohou.se')
.then((res) => {
    console.log('success', res);
})
.catch((err) => {
    console.log('error', err);
})

