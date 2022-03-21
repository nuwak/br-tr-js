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
	result := strings.Repeat("\t", *indent)

	if fun.countable {
		result += strings.Replace(fun.code, "1", strconv.Itoa(*counter), 1)
	} else {
		result += fun.code
	}

	return result + "\n"
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
		currentToken := string(char)

		if fun, err := tokens[currentToken]; err {
			if prevToken == currentToken && fun.countable {
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

			if currentToken != "" {
				prevFunction = tokens[currentToken]
			}

			prevToken = currentToken
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
	file := os.Args[1] + ".b"
	translate(&file)
}
