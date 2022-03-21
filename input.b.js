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
        while (count) {
            memory[pointer] = prompt("Enter a byte value").charCodeAt(0);
            count -= 1;
        }
    }

	
	plus(10);

	while(memory[pointer]) {
		forward(1);
		plus(10);
		backward(1);
		minus(1);
	}

	forward(1);

	while(memory[pointer]) {
		backward(1);
		plus(1);
		forward(1);
		minus(1);
	}

	backward(1);

	while(memory[pointer]) {

		while(memory[pointer]) {
			forward(1);
			plus(1);
			forward(1);
			plus(1);
			backward(2);
			minus(1);
		}

		forward(2);

		while(memory[pointer]) {
			backward(2);
			plus(1);
			forward(2);
			minus(1);
		}

		backward(1);

		while(memory[pointer]) {
			forward(2);
			plus(1);
			backward(2);
			minus(1);
		}

		backward(1);
		minus(1);
	}

	forward(3);

	while(memory[pointer]) {
		backward(1);
		plus(1);
		forward(1);
		minus(1);
	}

	backward(1);

	while(memory[pointer]) {
		forward(1);
		plus(1);
		forward(1);
		plus(1);
		backward(2);
		minus(1);
	}

	forward(2);

	while(memory[pointer]) {
		backward(2);
		plus(1);
		forward(2);
		minus(1);
	}

	backward(1);

	while(memory[pointer]) {
		backward(1);

		while(memory[pointer]) {
			backward(1);
			plus(1);
			backward(1);
			plus(1);
			forward(2);
			minus(1);
		}

		backward(1);

		while(memory[pointer]) {
			forward(1);
			plus(1);
			backward(1);
			minus(1);
		}

		forward(2);
		minus(1);
	}

	backward(1);

	while(memory[pointer]) {
		minus(1);
	}

	plus(10);

	while(memory[pointer]) {
		forward(1);
		plus(10);
		backward(1);
		minus(1);
	}

	forward(1);

	while(memory[pointer]) {
		backward(1);
		plus(1);
		forward(1);
		minus(1);
	}

	backward(1);

	while(memory[pointer]) {

		while(memory[pointer]) {
			forward(1);
			plus(1);
			forward(1);
			plus(1);
			forward(1);
			plus(1);
			backward(3);
			minus(1);
		}

		forward(3);

		while(memory[pointer]) {
			backward(3);
			plus(1);
			forward(3);
			minus(1);
		}

		backward(2);

		while(memory[pointer]) {
			forward(1);

			while(memory[pointer]) {
				forward(1);
				plus(1);
				backward(4);
				plus(1);
				forward(3);
				minus(1);
			}

			forward(1);

			while(memory[pointer]) {
				backward(1);
				plus(1);
				forward(1);
				minus(1);
			}

			backward(2);
			minus(1);
		}

		forward(1);

		while(memory[pointer]) {
			minus(1);
		}

		backward(2);
		minus(1);
	}

	backward(1);

	while(memory[pointer]) {
		backward(1);
		minus(1);
		forward(1);
		minus(1);
	}

	backward(1);

	while(memory[pointer]) {
		forward(2);
		plus(1);
		forward(1);
		plus(1);
		backward(3);
		minus(1);
	}

	forward(3);

	while(memory[pointer]) {
		backward(3);
		plus(1);
		forward(3);
		minus(1);
	}

	backward(2);
	plus(1);
	forward(1);

	while(memory[pointer]) {
		backward(1);
		minus(1);
		forward(1);

		while(memory[pointer]) {
			forward(1);
			plus(10);
			backward(1);

			while(memory[pointer]) {
				minus(1);
				forward(1);
				minus(1);

				while(memory[pointer]) {
					forward(1);
					plus(1);
					forward(2);
				}

				forward(1);

				while(memory[pointer]) {
					plus(1);

					while(memory[pointer]) {
						minus(1);
						backward(1);
						plus(1);
						forward(1);
					}

					forward(1);
					plus(1);
					forward(2);
				}

				backward(5);
			}

			forward(1);

			while(memory[pointer]) {
				minus(1);
			}

			plus(8);

			while(memory[pointer]) {
				backward(1);
				plus(6);
				forward(1);
				minus(1);
			}

			forward(1);

			while(memory[pointer]) {
				backward(2);
				plus(1);
				forward(2);
				minus(1);
			}

			forward(1);

			while(memory[pointer]) {
				backward(2);
				plus(1);
				forward(2);
				minus(1);
			}

			backward(2);
		}

		forward(1);
	}

	backward(1);

	while(memory[pointer]) {
		minus(1);
		forward(2);
		plus(8);

		while(memory[pointer]) {
			backward(1);
			plus(6);
			forward(1);
			minus(1);
		}

	}

	backward(1);

	while(memory[pointer]) {
		write();

		while(memory[pointer]) {
			minus(1);
		}

		backward(1);
	}

	plus(10);
	write();

	while(memory[pointer]) {
		minus(1);
	}

	backward(1);


    console.log(stdout);
})();
