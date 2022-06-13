// Example 1

let ex1Fetch = () => {
    return fetch("http://swapi.dev/api/people/1/", { method: "GET" }).then((response) => {
        return response.json();
    }
    );
};

let ex1Async = async () => {
    let response = await fetch("http://swapi.dev/api/people/1/", {
        method: "GET",
    });
    let data = await response.json();
    console.log(data.name + "from asyncAwait");
};

ex1Fetch().then((data) => console.log(data.name + "from Fetch"));
ex1Async();

// Example 2

const promise = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("done"), time);
    });
};

const example2 = async () => {
    const start = new Date().getTime();

    const a = await promise(4000);
    console.log(a + "from AsyncAwait");

    promise(3000).then((response) => {
        console.log(response + "from Then");
        console.log("Duration: " + (new Date().getTime() - start) / 2000);
    });
};

example2();

// Example 3

const example3 = async () => {
    const start = new Date().getTime();

    promise(3000).then((response) => {
        console.log(response + "from Then");
    });

    const a = await promise(3000);
    console.log(a + "from AsyncAwait");

    console.log("Duration: " + (new Date().getTime() - start) / 1000);
};

example3();