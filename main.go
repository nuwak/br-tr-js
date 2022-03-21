package main

import (
	"io/ioutil"
	"log"
	"os"
	"path/filepath"
	"strconv"
	"strings"
)

type function struct {
	name      string
	code      string
	countable bool
}

var tokens = map[string]function{
	">": {"forward", "forward(1);", true},
	"<": {"backward", "backward(1);", true},
	"+": {"plus", "plus(1);", true},
	"-": {"minus", "minus(1);", true},
	".": {"write", "write();", false},
	",": {"read", "read();", false},
	"[": {"loop_start", "while(memory[pointer]) {", false},
	"]": {"loop_end", "}\n", false},
}

func getResult(indent *int, fun *function, counter *int) string {
	return strings.Repeat("\t", *indent) + strings.Replace(fun.code+"\n", "1", strconv.Itoa(*counter), 1)
}

func translate(source *string) {
	const placeholder = "//{program}"
	const testingDir = "testing/"
	const resultDir = "result/"

	result := ""
	repeatCounter := 1
	prevToken := ""
	indent := 1
	var prevFunction function

	template, err := ioutil.ReadFile("template.js")
	if err != nil {
		log.Fatal(err)
	}

	input, err := ioutil.ReadFile(filepath.Join(testingDir, *source))
	if err != nil {
		log.Fatal(err)
	}

	for _, char := range input {
		charToken := string(char)

		if fun, err := tokens[charToken]; err {
			if prevToken == charToken && fun.countable {
				repeatCounter++
			} else {
				if prevFunction.name == "loop_end" {
					indent--
				} else if prevFunction.name == "loop_start" {
					result += "\n"
				}

				result += getResult(&indent, &prevFunction, &repeatCounter)

				if prevFunction.name == "loop_start" {
					indent++
				}

				repeatCounter = 1
			}

			if charToken != "" {
				prevFunction = tokens[charToken]
			}

			prevToken = charToken
		}
	}

	if prevFunction.name == "loop_end" {
		indent--
	}

	result += getResult(&indent, &prevFunction, &repeatCounter)

	program := strings.Replace(string(template), placeholder, result, 1)

	err = ioutil.WriteFile(filepath.Join(resultDir, *source+".js"), []byte(program), 0644)
	if err != nil {
		log.Fatal(err)
	}
}

func main() {
	args := os.Args[1]
	file := args + ".b"
	translate(&file)
}
