# Bottle

**Write something you'd never say out loud, and set it adrift.** Bottle is an anonymous message-in-a-bottle app: throw a confession out to sea, draw a stranger's, and leave a mark on it.

## Features

- **Throw a bottle**: post an anonymous message, up to 3 a day.
- **Draw a bottle**: pull a random stranger's message. You never get your own bottle or one you've already drawn.
- **Leave a mark**: reply once to any bottle you draw, so marks pile up as it drifts between people.
- **Your bottles**: a dashboard of your messages, how many times each was drawn, and every mark left on it.
- **Community moderation**: any bottle reported by 3 different users is pulled from the sea automatically.
- **Zero-signup identity**: a secure random token in a cookie gives each visitor a persistent anonymous name like `SaltyHarbor42`.

## Tech

**PHP · MySQL · JavaScript · HTML/CSS · Axios**

Built without frameworks · prepared statements throughout · daily limits enforced on the server · uniqueness enforced by the database · seeders and factories for demo data

## Project structure

```
bottle/
├── bottle-client/     # frontend
│   ├── pages/         # game and dashboard
│   ├── scripts/       # page logic, API calls
│   └── styles/        # stylesheet
└── bottle-server/     # JSON endpoints
    └── database/      # connection, auth, seed data
```
