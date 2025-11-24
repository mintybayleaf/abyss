package main

import (
	"fmt"
	"sync"
)

type Container struct {
	mu sync.Mutex
	counters map[string]int
}

func (c *Container) inc(name string) {
	c.mu.Lock()
	defer c.mu.Unlock()
	c.counters[name]++
}

func main() {
	c := Container{
		counters: map[string]int{"a": 0, "b": 0},
	}

	var wg sync.WaitGroup

	doIncrement := func(name string, n int) {
		defer wg.Done()
		for range n {
			c.inc(name)
		}
	}

	wg.Add(1)
	go doIncrement("a", 10000)

	wg.Add(1)
	go doIncrement("a", 10000)

	wg.Add(1)
	go doIncrement("a", 10000)

	wg.Wait()
	fmt.Println(c.counters)
}