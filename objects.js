let table = {
    color: "white",
    height: {
        units: "cm",
        value: 100
    }
};

let nestedObj = {
    true : "abc"
};

let wrapperObj = {
    nested: nestedObj
};

console.log(wrapperObj);