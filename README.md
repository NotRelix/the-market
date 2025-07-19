# The Market

A modern online shop that has all your needs.

## Features
- Add to cart
- Purchase products (not really)
- Vitest - for testing purposes
- PropTypes - type safety

## Built with
[![My Skills](https://skillicons.dev/icons?i=vite,react,js,html,css)](https://skillicons.dev)

## Tools used
[![My Skills](https://skillicons.dev/icons?i=cloudflare,vitest,npm,git)](https://skillicons.dev)

## Installation
```bash
git clone git@github.com:NotRelix/the-market.git
cd the-market
npm install
npm run dev
```
## Run Tests
```bash
npm run test
```

## Structure
```
📦 the-market
├─ src
│  ├─ component                // all components used
│  └─ routes                   // routes using react-router-dom
│     ├─ CheckoutPage
│     ├─ ErrorPage
│     ├─ HomePage
│     ├─ ProductPage
│     ├─ Root
│     ├─ ShopPage
│     └─ routes.jsx            // routes stored here
├─ tests                       // tests using Vitest
│  ├─ CartCardSlider.test.jsx
│  ├─ ProductPage.test.jsx
│  ├─ api.test.js
│  └─ setup.js
└─ vite.config.js
```
