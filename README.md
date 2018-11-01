# DomoPi-WebUI

DomoPi-WebUI is a web application (webserver) built with **NodeJs** that exposes a UI (administration dashboard based
on **CoreUI**) which lets the user manage home devices controlled with **DomoPI**

### Stack
- **NodeJs** for backend javascript
- **ExpressJs** web framework
- **MongoDB** for *user authentication* and *devices storage*
- **TCP Socket** for real-time connection to [DomoPi-CoreServer](https://github.com/PandoraSystem/DomoPi-CoreServer)

## Instructions
In order for DomoPI-WebUI to work you have to match these 2 prerequisites:
- Have a running instance of MongoDB
- Have a running instance of [DomoPi-CoreServer](https://github.com/PandoraSystem/DomoPi-CoreServer)

#### Prerequisites

**MongoDB**

MongoBD is now required for authentication, you have to install it prior to start the application.
Database installation istructions can be found [here](https://www.mongodb.com/download-center).
Once installed in your system you have to start MongoDB (more info [here](https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/)). 
We are currently hardcoding db connection, so mongo should run with its default parameters: running at `localhost`
on port `27017`. Config file to make these dinamic will come soon.

**TCP Socket**

TCP Socket is used for real-time communication with [DomoPi-CoreServer](https://github.com/PandoraSystem/DomoPi-CoreServer)
for devices commands and status data transfer. As for MongoDB, socket connection parameters are hardcoded for now, 
DomoPi-CoreServer should run at `localhost` on port `9000`.


## Installation
1. **Clone** the repo: `git clone https://github.com/PandoraSystem/DomoPi-WebUI.git`
2. cd into project directory: `cd DomoPi-WebUI`
3. **Install** project **dependencies** `npm install`
4. **Start** the webapp:
  * Produtcion: `npm run build` for css compilation and `npm start`
  * Development: `npm run dev` (file watching and live reload with **Nodemon**, **sass** file watching with **Gulp**,
   **BrowserSync**)


---

### DomoPi
Awesome Domotic system with RaspberryPi.

This is an Italian Project, created by Marco N. and Denni B.
The project goal is to create a Domotic System with a simple RaspberryPi using:
- a **Web Interface** (Fully responsive, Multi-user, Accessible from any device and virtually Everywhere),
- a **TCP Socket** to communicate in real-time with project core ([found here](https://github.com/PandoraSystem/DomoPi-CoreServer))
- the **Project Core** built with java to control RaspberryPi GPIO pins connected to any kind of hardware such as
lights, coffee machine, telephones and what not...


Currently testing on RaspberryPi Zero (Pi 0 W).
