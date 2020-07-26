# Megaman2

[Check it out](https://bugtamer.github.io/megaman2/)

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

### E-tank codification

| E-tanks | Coordinate |
|:-------:|:----------:|
|    0    |     A1     |
|    1    |     A2     |
|    2    |     A3     |
|    3    |     A4     |
|    4    |     A5     |

### Boss codification when E-tanks are zero

| Boss name | Item                        | Undefeated | Defeated |
| --------- | --------------------------- |:----------:|:--------:|
| Airman    | Item-2: jet sled            |     E3     |    D2    |
| Bubbleman |                             |     D1     |    C3    |
| Crashman  |                             |     C5     |    E2    |
| Flashman  | Item-3: crawling platform   |     C1     |    E4    |
| Heatman   | Item-1: levitating platform |     B2     |    D5    |
| Metalman  |                             |     E5     |    E1    |
| Quickman  |                             |     B4     |    C4    |
| Woodman   |                             |     D3     |    B5    |

#### Boss transitions when E-tanks change

Crashman example:

| E-tanks | Undefeated | Defeated |
|:-------:|:----------:| -------- |
|    0    |     C5     |    E2    |
|    1    |     D1     |    E3    |
|    2    |     D2     |    E4    |
|    3    |     D3     |    E5    |
|    4    |     D4     |    B1    |

##### All legal coordinate transitions

```
A1 <--> A2 <--> A3 <--> A4 <--> A5 <--> A1
B1 <--> B2 <--> B3 <--> B4 <--> B5 <--> C1
C1 <--> C2 <--> C3 <--> C4 <--> C5 <--> D1
D1 <--> D2 <--> D3 <--> D4 <--> D5 <--> E1
E1 <--> E2 <--> E3 <--> E4 <--> E5 <--> B1
E5 <--> B1
```

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