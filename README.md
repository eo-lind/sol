
# SOL (Satellite of Love)

## About

SOL is a social web app that allows users to connect with friends and schedule virtual movie watch parties. Users can also post movie reviews.

After spending a significant amount of time away from friends and family during the initial stages of the COVID-19 pandemic, I was always looking for new ways to stay connected to people, and an application like this is one way to fill that need.

This instance of the app was built with inspiration from Mystery Science Theater 3000, so the dummy movie data is actually MST3K episodes, though a real-world version of the app could be built with an IMDB-type API.



![App Screenshot](/public/images/SOL-screenshot.png "SOL in action")

## Installation & Deployment Instructions
Install JSON Server 

```bash
npm install -g json-server
```

Clone the project

```bash
  git clone https://github.com/eo-lind/sol.git
```

Go to the project directory

```bash
  cd sol
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Start JSON Server

```bash
json-server -p 8088 -w database.json
```

## ERD

![ERD Screenshot](/public/images/SOL-ERD-screenshot.png "SOL ERD")

## Wireframe

![Wireframe Screenshot](/public/images/SOL-wireframe-screenshot.png "SOL wireframe")

## Tech Stack

**Client:** React/JS, HTML5, CSS

**Server:** JSON Server


## Author

[Olivia Lind](https://github.com/eo-lind)


## Acknowledgements

| Images                                                                                                                      	|   	| Info Used in Dummy Movie and User Data                                                	|
|-----------------------------------------------------------------------------------------------------------------------------	|---	|---------------------------------------------------------------------------------------	|
| [SOL background](https://www.deviantart.com/mikecarter2018/art/MST3K-The-Return-Satellite-of-Love-Set-718519386)            	|   	| [MST3K](https://mst3k.fandom.com/wiki)                                                	|
| [GPC](https://mst3k.fandom.com/wiki/Gypsy?file=Gypsy_season_11.png)                                                         	|   	| [Cybermen (Doctor Who)](https://thedoctorwhosite.co.uk/cybermen)                      	|
| [Crow T. Robot](https://mst3k.fandom.com/wiki/Crow_T._Robot)                                                                	|   	| [Bender (Futurama)](https://futurama.fandom.com/wiki/Bender_Bending_Rodr%C3%ADguez)   	|
| [Tom Servo](https://mst3k.fandom.com/wiki/Tom_Servo)                                                                        	|   	| [Maria (Metropolis)](https://en.wikipedia.org/wiki/Metropolis_(1927_film))            	|
| [Cambot](https://mst3k.fandom.com/wiki/Cambot)                                                                              	|   	| [T-800 (The Terminator)](https://terminator.fandom.com/wiki/Terminator_Wiki)          	|
| [Maria](http://hugoclub.blogspot.com/2017/07/who-owns-robot.html)                                                           	|   	| [Rachael Tyrell & Pris (Blade Runner)](https://bladerunner.fandom.com/wiki/Main_Page) 	|
| [Pris](https://www.filmaffinity.com/ie/filmimages.php?movie_id=358476)                                                      	|   	| [Lance Bishop (Aliens)](https://avp.fandom.com/wiki/Lance_Bishop)                     	|
| [Rachael Tyrell](https://www.bustle.com/p/who-was-rachael-the-blade-runner-character-is-central-to-2049-2776691)            	|   	| [Data (Star Trek)](https://memory-alpha.fandom.com/wiki)                              	|
| [Bender](https://www.polygon.com/22937256/new-futurama-john-dimaggio-hulu-bender)                                           	|   	| [Episode/Movie Data](https://imdb-api.com/)            	|   	|
| [T-800](https://bleedingcool.com/movies/terminator-genesis-looking-to-cast-detectives-young-version-of-jk-simmons-and-more) 	|   	|                                                                                       	|
| [The Robot](https://www.denofgeek.com/movies/lost-in-space-tracking-the-robot-s-evolution)                                  	|   	|                                                                                       	|
| [R2-D2](https://www.digitalspy.com/movies/a37256570/star-wars-theory-r2-d2-obi-wan-death)                                   	|   	|                                                                                       	|
| [C-3PO](https://www.starwars.com/news/6-of-c-3pos-best-insults)                                                             	|   	|                                                                                       	|
| [Cyberman](https://www.radiotimes.com/tv/sci-fi/cybermen-doctor-who-history-background)                                     	|   	|                                                                                       	|
| [Lt. Commander Data](https://www.startrek.com/database_article/data)                                                        	|   	|                                                                                       	|
| [Lance Bishop](https://alienanthology.fandom.com/wiki/Bishop)                                                               	|   	|                                                                                       	|
| [Dalek](https://shop.eaglemoss.com/hero-collector/doctor-who/the-mega-bronze-dalek-statue)                                  	|   	|                                                                                       	|

## License

[MIT](https://choosealicense.com/licenses/mit/)

