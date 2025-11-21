package main

import "fmt"

type Rect struct {
	width, height int
}

func (r *Rect) area() int {
	return r.width * r.height
}

func (r Rect) perimeter() int {
	return 2*r.width + 2*r.height
}

func main() {
	r := Rect{width: 10, height: 5}
	fmt.Println("area: ", r.area())
	fmt.Println("perim: ", r.perimeter())

	rp := &r
	fmt.Println("area: ", rp.area())
	fmt.Println("perim: ", rp.perimeter())
}