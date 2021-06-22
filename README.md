# Crypto API Demo - https://crypto-rho.vercel.app

## Tech Stack

- nextjs
- apollo-client
- tailwind css
- websockets
- tradingview

Simple demo showcasing use of graphql API for fetching, pagination, filtering and sorting of Crypto Exchanges and Market data, use of REST API for fetching OHLC data of trading pairs and websockets (apollo-client subscriptions) for displaying real-time rate changes during a trade.

## Known Issues

- Fetched OHLC data is not cached, a self-implementation of caching or use of library like react-query can assist solving it
- Due to the limitation of graphql API, pagination fetches previous data too
- Components reuse is minimum, will be nice to have an abstraction of Table component
- At the moment, no error handling has been implemented
- Known issue with apollo-client's fetchMore, due to which infinite scroll cannot show proper loading indicator

## TODO

- Unit, integration and E2E tests
- Error boundaries and error handling
