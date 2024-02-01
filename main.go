package main

import (
	"log/slog"
	"os"
)

// main Entrance
func main() {
	log := slog.New(slog.NewJSONHandler(os.Stdout, nil))
	log.Info("log test", "user", 1)
}
