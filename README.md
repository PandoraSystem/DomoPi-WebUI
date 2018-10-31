# DomoPi
Domotic system with rasp

This is an Italian Project, created by Marco N. and Denni B.
This project porpose are to connect 3 element, an web interface, tcpServer, Raspberry Pi with Gpio to controll all type of hardware.
For exemple the lights, an coffè machine, telephone...


Interface UI written with node.js.

TcpServer written with Java.

Hardware comunication with Java (Pi4J library).

Raspberry is "pi 0 W".


## Web Server Instructions (NodeJs)
The web application exposes a UI (admin dashboard based on **CoreUI**) using **NodeJs** and **Express Framework**

#### Prerequisites
**MongoDB** is now required for authentication, you have to install it prior to start the application.
Database installation istructions can be found [here](https://www.mongodb.com/download-center).
Once installed in your system you have to start MongoDB (more info [here](https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/)). 
We are currently hardcoding db connection, so mongo should run with its default parameters: running at `localhost` on port `27017`. 
Config file to make these dinamic will come soon.

### Installation
1. **Clone** the repo: `git clone https://github.com/marcoredtech/DomoPi.git`
2. cd into project directory: `cd DomoPi`
3. **Install** project **dependencies** `npm install`
4. **Start** the webapp: `npm start` (production) or `npm run dev` for development (file watching and live reload with **Nodemon**, **sass** file watching with **Gulp**, **Browser Sync** )
