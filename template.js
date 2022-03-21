fs = require('fs');
path = require('path');


(function () {
    let memory = [0];
    let pointer = 0;
    let stdout = "";

    const forward = (count) => {
        pointer += count;
        if (!memory[pointer]) memory[pointer] = 0;
    }

    const backward = (count) => {
        pointer -= count;
        if (!memory[pointer]) memory[pointer] = 0;
    }

    const plus = (count) => {
        memory[pointer] += count;
    }

    const minus = (count) => {
        memory[pointer] -= count;
    }

    const write = () => {
        stdout += String.fromCharCode(memory[pointer]);
    }

    function read(count) {
        console.log("read")
    }

//{program}

    console.log(stdout);

    fs.writeFile('result/' + path.basename(__filename) + '.out', stdout, err => {
        if (err) console.error(err)
    })
})();
