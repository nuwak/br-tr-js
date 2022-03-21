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

	
	forward(1);
	plus(8);

	while(memory[pointer]) {
		minus(1);
		backward(1);
		plus(9);
		forward(1);
	}

	backward(1);
	write();
	forward(2);
	plus(1);
	forward(1);
	minus(1);

	while(memory[pointer]) {
		plus(1);
	}

	plus(2);
	forward(1);
	plus(2);
	forward(1);
	plus(3);

	while(memory[pointer]) {
		forward(1);

		while(memory[pointer]) {
			minus(1);
			forward(1);
			plus(3);
			backward(2);
			plus(3);
			forward(1);
		}

		backward(2);
	}

	forward(1);
	minus(5);
	write();
	forward(1);
	minus(1);
	forward(1);
	plus(3);
	write();
	write();
	plus(3);
	write();
	forward(1);
	minus(1);
	write();
	backward(2);
	plus(1);

	while(memory[pointer]) {
		forward(1);

		while(memory[pointer]) {
			plus(1);
			forward(1);
			plus(1);
		}

		forward(2);
	}

	backward(1);
	minus(14);
	write();
	forward(2);
	write();
	plus(3);
	write();
	minus(6);
	write();
	minus(8);
	write();
	forward(1);
	plus(1);
	write();
	forward(1);
	plus(1);
	write();


    console.log(stdout);

    fs.writeFile('result/' + path.basename(__filename) + '.out', stdout, err => {
        if (err) console.error(err)
    })
})();
