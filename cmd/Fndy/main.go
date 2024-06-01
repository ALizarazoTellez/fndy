package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "This is the Fndy webapp!")
	})

	fmt.Printf("Executing web server at port: %s\n", os.Getenv("PORT"))

	if err := http.ListenAndServe(":"+os.Getenv("PORT"), mux); err != nil {
		fmt.Printf("Unexpected error: %s\n", err)
	}
}
