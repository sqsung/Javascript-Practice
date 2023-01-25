const timered = () => {
    console.log("Timered Function!");
    return;
};

const nonTimered = () => {
    console.log("Non-Timered Function!");
    return;
};

setTimeout(timered, 3000);
nonTimered();

// Non-Timered Function!
// --- 3초 대기 ---
// Timered Function!
