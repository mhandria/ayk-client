# AYK
ayk is a discovery application for japanese media (anime/manga).  
The data is driven from an api called Jikan, which gets data from another more known discovery site [MAL](https://myanimelist.net/)

### Develop
AYK uses node.js and react so the first thing to do is to make sure that you have node v11, or higher, installed.

#### Steps Before You Code Away
1. make sure you are in the project directory 
2. ```npm i```
3. ```npm start``` 
4. code away the features you're implementing

### Deployment 
AYK is built through the ```npm run build``` command, which will then generate minified files that can be served through ```server.js```.  


### Docker Support
**Alternatively**, AYK can be built as a docker image through the ```docker build -t img-name .``` command.  
The image exposes port `8080` so when running the container ensure that the `-p` flag is binded to `port:8080`.