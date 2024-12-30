package main

import (
    "context"
    "github.com/heroiclabs/nakama-common/runtime"
)

func InitModule(ctx context.Context, logger runtime.Logger, nk runtime.NakamaModule, initializer runtime.Initializer) error {
    if err := initializer.RegisterRpc("start_match", StartMatch); err != nil {
        return err
    }
    return nil
}

func StartMatch(ctx context.Context, logger runtime.Logger, nk runtime.NakamaModule, payload string) (string, error) {
    return "Match started!", nil
}
