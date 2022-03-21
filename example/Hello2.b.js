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

	
	plus(1);

	while(memory[pointer]) {
		forward(1);

		while(memory[pointer]) {
			backward(1);
			minus(1);
			forward(1);
			plus(1);

			while(memory[pointer]) {
				forward(1);
				plus(3);
				forward(1);

				while(memory[pointer]) {
					plus(11);
					forward(1);
				}


				while(memory[pointer]) {
				}

				minus(1);

				while(memory[pointer]) {
					backward(1);
				}

				forward(1);
				minus(1);
			}

		}

		plus(10);
		backward(1);
	}

	forward(6);
	minus(4);
	write();
	backward(2);
	plus(3);
	write();
	backward(1);
	minus(1);
	write();
	write();
	plus(3);
	write();
	backward(1);
	minus(1);
	write();
	forward(3);
	write();
	backward(2);
	write();
	plus(3);
	write();
	minus(6);
	write();
	forward(1);
	minus(1);
	write();
	backward(2);
	plus(1);
	write();
	backward(1);
	write();


    console.log(stdout);

    fs.writeFile('result/' + path.basename(__filename) + '.out', stdout, err => {
        if (err) console.error(err)
    })
})();
