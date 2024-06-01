package main

import (
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/ALizarazoTellez/fndy/pkg/frontend"
)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "This is the Fndy webapp!")
	})

	mux.HandleFunc("/x/assets/components.js", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Add("Content-Type", "application/javascript")
		if _, err := w.Write(frontend.AssetComponents); err != nil {
			fmt.Println("Unexpected error:", err)
		}
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
