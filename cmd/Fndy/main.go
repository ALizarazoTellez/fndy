package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "This is the Fndy webapp!")
	})

	mux.HandleFunc("PUT /x/upload", func(w http.ResponseWriter, r *http.Request) {
		data, err := io.ReadAll(r.Body)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			fmt.Fprintln(w, "Unexpected error:", err)
			return
		}

		fmt.Printf("Text received: %q\n", data)
	})

	mux.HandleFunc("DELETE /x/delete/{id}", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "You are deleted %q\n", r.PathValue("id"))
	})

	mux.HandleFunc("/{id}", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "You are requested %q\n", r.PathValue("id"))
	})

	fmt.Printf("Executing web server at port: %s\n", os.Getenv("PORT"))

	if err := http.ListenAndServe(":"+os.Getenv("PORT"), mux); err != nil {
		fmt.Printf("Unexpected error: %s\n", err)
	}
}
