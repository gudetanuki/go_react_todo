package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("hello")
		res, err := json.Marshal(sample{"hello"})
		if err != nil {
			return
		}
		w.Header().Set("Content-type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Write(res)
	})
	http.ListenAndServe(":8080", nil)
}

type sample struct {
	Test string `json:"test"`
}
