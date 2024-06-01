package templates

import (
	"embed"
	"html/template"
)

//go:embed templates/*
var templates embed.FS

var Index *template.Template

func init() {
	var err error

	Index, err = template.ParseFS(templates, "templates/index.html")
	if err != nil {
		panic(err)
	}
}
