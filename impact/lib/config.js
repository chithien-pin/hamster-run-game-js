const _STRINGS = {
    Loading: {
        Loading: "LOADING"
    },
    Tutorial: [
        ["Hi! My name is Tiny.",            "Welcome to Giant Hamster Run!"],
        ["Collect cookies to turn into",    "an invincible ball!"],
        ["Flick upwards to jump",           "over the obstacle."],
        ["Press the UP ARROW to",           "jump over the obstacle."],
        ["Tap or Flick to the right",       "to pick up those coins!"],
        ["Press the RIGHT ARROW",           "to pick up those coins!"],
        ["We need to go to the left now.",  "Tap or Flick to the left."],
        ["We need to go to the left now.",  "Press the LEFT ARROW."],
        ["Almost there! Tap or Flick",      "to the left again."],
        ["Almost there! Press the",         "LEFT ARROW again."],
        ["Flick downwards to slide",        "and grab that cookie!"],
        ["Press the DOWN ARROW to slide",   "and grab that cookie!"],
        ["It's all up to you now.",         "Good luck and have fun!"]
    ],
    UI: {
        enter:            "enter",
        "continue":       "continue",
        owned:            "owned",
        using:            "using",
        skateboard:       "skateboard",
        "roller‑skates":  "roller‑skates",
        rocket:           "rocket",
        "flying carpet":  "flying carpet",
        hoverboard:       "hoverboard"
    }
};

const _SETTINGS = {
    API: {
        Enabled:   true,
        Log: {
            Events: {
                InitializeGame: true,
                EndGame:        true,
                Level: {
                    Begin: true,
                    End:   true,
                    Win:   true,
                    Lose:  true,
                    Draw:  true
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
            Enabled:    true,
            Link:       "http://marketjs.com",
            LinkEnabled: false,
            NewWindow:  true,
            Width:      166,
            Height:     61
        }
    },
    Branding: {
        Splash: {
            Enabled: false
        },
        Logo: {
            Enabled:     false,
            Link:        "http://google.com",
            LinkEnabled: true,
            NewWindow:   true,
            Width:       280,
            Height:      34
        }
    },
    MoreGames: {
        Enabled:    true,
        Link:       "http://www.marketjs.com/game/links/mobile",
        NewWindow:  true
    },
    Gamecenter: {
        Enabled: true
    }
};

const portraitMode = true;

const mobilePortraitWidth = 480;
const mobilePortraitHeight = 640;
const mobileLandscapeWidth = 640;
const mobileLandscapeHeight = 480;

const mobileWidth  = portraitMode ? mobilePortraitWidth  : mobileLandscapeWidth;
const mobileHeight = portraitMode ? mobilePortraitHeight : mobileLandscapeHeight;

const desktopWidth = 640;
const desktopHeight = 640;

const dynamicClickableEntityDivs = {};
const coreDivsToResize = ["game", "play", "orientate"];