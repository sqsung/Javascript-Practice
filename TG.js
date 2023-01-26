const examplePromise = new Promise((resolve) => resolve("fulfiled"))
    .then((firstLineResult) => console.log(firstLineResult))
    .catch((error) => console.log(error))
    .finally(() => console.log("Bye!"));
