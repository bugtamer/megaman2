# Megaman2

[Check it out](https://bugtamer.github.io/megaman2/)

## Table Of Content

- [Password generator](#password-generator)
  - [Default password](#default-password)
  - [Boss codification based on the number of E-tanks](#boss-codification-based-on-the-number-of-e-tanks)
- [Requirements](#requirements)
- [Install and run](#install-and-run)
- [Docker](#docker)
  - [Build](#build)
  - [Run](#run)
- [Github page deployment](#github-page-deployment)
  - [Add dependency](#add-dependency)
  - [Deploy](#deploy)
- [Info](#info)

## Password generator

- Each password has 9 coordinates.
- It stores the number of E-tanks available and whether each of the 8 bosses was defeated or not.

### Default password

`['A1', 'B2', 'B4', 'C1', 'C5', 'D1', 'D3', 'E3', 'E5']`

- 0 E-Tanks
- 0 Defeated bosses

|   | 1 | 2 | 3 | 4 | 5 |
| - | - | - | - | - | - |
| A | * |   |   |   |   |
| B |   | * |   | * |   |
| C | * |   |   |   | * |
| D | * |   | * |   |   |
| E |   |   | * |   | * |

### Boss codification based on the number of E-tanks

| Boss name | Item   | Alive | Alive | Alive | Alive | Alive | Dead | Dead | Dead | Dead | Dead |
| --------- | ------ |:-----:|:-----:|:-----:|:-----:|:-----:|:----:|:----:|:----:|:----:|:----:|
| # E-Tanks |        |   0   |   1   |   2   |   3   |   4   |   0  |   1  |   2  |   3  |   4  |
| E-Tank    |        |  A1   |  A2   |  A3   |  A4   |  A5   |  A1  |  A2  |  A3  |  A4  |  A5  |
| Bubbleman |        |  D1   |  D2   |  D3   |  D4   |  D5   |  C3  |  C4  |  C5  |  D1  |  D2  |
| Heatman   | Item-1 |  B2   |  B3   |  B4   |  B5   |  C1   |  D5  |  E1  |  E2  |  E3  |  E4  |
| Airman    | Item-2 |  E3   |  E4   |  E5   |  B1   |  B2   |  D2  |  D3  |  D4  |  D5  |  E1  |
| Woodman   |        |  D3   |  D4   |  D5   |  E1   |  E2   |  B5  |  C1  |  C2  |  C3  |  C4  |
| Quickman  |        |  B4   |  B5   |  C1   |  C2   |  C3   |  C4  |  C5  |  D1  |  D2  |  D3  |
| Flashman  | Item-3 |  C1   |  C2   |  C3   |  C4   |  C5   |  E4  |  E5  |  B1  |  B2  |  B3  |
| Crashman  |        |  C5   |  D1   |  D2   |  D3   |  D4   |  E2  |  E3  |  E4  |  E5  |  B1  |
| Metalman  |        |  E5   |  B1   |  B2   |  B3   |  B4   |  E1  |  E2  |  E3  |  E4  |  E5  |

- Item-1: levitating platform
- Item-2: jet sled
- Item-3: crawling platform

## Requirements

- Node.js 14.4.0
- Angular 9
- Angular CLI 9.1.12

## Install and run

- Within the project folder:
- `npm i`
- `ng serve -o`

## Docker

### Build

`docker build -t bugtamer/megaman2 .`

### Run

- `docker run -d -it -p 80:80/tcp --name megaman2 bugtamer/megaman2:latest`
- http://localhost

## Github page deployment

### Add dependency

`ng add angular-cli-ghpages`

### Deploy

`ng deploy --base-href=/megaman2/`

## Info

- Bisqwit. [Mega Man 2 ※ Cracking Videogame Passwords S1e1](https://www.youtube.com/watch?v=0eQyYrSQPew). (2020-07-19)
- Scykoh. [Mega Man 2 - Glitchfest](https://www.youtube.com/watch?v=koTEUbNwv9w). (2020-07-19)
- [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages)
- [Angular README.md](./angular.md)