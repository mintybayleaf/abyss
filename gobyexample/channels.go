package main

import "fmt"

func main() {
	messages := make(chan string)
	go func() { messages <- "ping" }()
	// sends and recieves on the channel will block by default until both are ready
	msg := <-messages
	fmt.Println(msg)
}