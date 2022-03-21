hello:
	time go run main.go Hello && time node result/Hello.b.js

run:
	time go run main.go $(file) && time node result/${file}.b.js


