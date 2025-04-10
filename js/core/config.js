export const _STRINGS = {
    Ad: {
        Mobile: {
            Preroll: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            Header: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            End: {
                ReadyIn: "Advertisement ends in ",
                Loading: "Please wait ...",
                Close: "Close"
            }
        }
    },
    Loading: {
        Loading: "LOADING"
    },
    Tutorial: [
        ["Hi! My name is Tiny.", "Welcome to Giant Hamster Run!"],
        ["Collect cookies to turn into", "an invincible ball!"],
        ["Flick upwards to jump", "over the obstacle."],
        ["Press the UP ARROW to", "jump over the obstacle."],
        ["Tap or Flick to the right", "to pick up those coins!"],
        ["Press the RIGHT ARROW", "to pick up those coins!"],
        ["We need to go to the left now.", "Tap or Flick to the left."],
        ["We need to go to the left now.", "Press the LEFT ARROW."],
        ["Almost there! Tap or Flick", "to the left again."],
        ["Almost there! Press the", "LEFT ARROW again."],
        ["Flick downwards to slide", "and grab that cookie!"],
        ["Press the DOWN ARROW to slide", "and grab that cookie!"],
        ["It's all up to you now.", "Good luck and have fun!"]
    ],
    UI: {
        enter: "enter",
        "continue": "continue",
        owned: "owned",
        using: "using",
        skateboard: "skateboard",
        "roller-skates": "roller-skates",
        rocket: "rocket",
        "flying carpet": "flying carpet",
        hoverboard: "hoverboard"
    }
};

export const _SETTINGS = {
    API: {
        Enabled: true,
        Log: {
            Events: {
                InitializeGame: true,
                EndGame: true,
                Level: {
                    Begin: true,
                    End: true,
                    Win: true,
                    Lose: true,
                    Draw: true
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: true
        },
        Logo: {
            Enabled: true,
            Link: "http://marketjs.com",
            LinkEnabled: false,
            NewWindow: true,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: false
        },
        Logo: {
            Enabled: false,
            Link: "http://google.com",
            LinkEnabled: true,
            NewWindow: true,
            Width: 280,
            Height: 34
        }
    },
    MoreGames: {
        Enabled: true,
        Link: "http://www.marketjs.com/game/links/mobile",
        NewWindow: true
    },
    Gamecenter: {
        Enabled: true
    }
};
