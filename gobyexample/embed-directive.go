package main

import (
	"embed"
)

//go:embed folder/single_file.txt
var fileString string

//go:embed folder/single_file.txt
var fileByte []byte

//go:embed folder/single_file.txt
//go:embed folder/*.hash
var folder embed.FS

func main() {
	print(fileString)
	print(string(fileByte))

	content1, _ := folder.ReadFile("folder/file1.hash")
	print(string(content1))
}
