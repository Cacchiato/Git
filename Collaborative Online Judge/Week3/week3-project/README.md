# Week3

- [Quick Start](#quick-start)
	- [Built With](#built-with)
	- [Tools](#tools)
- [Demo of Running](#demo-of-running)
	- [Run with command lines in Terminal](#run-with-command-lines-in-terminal)
	- [Run with Shell Script](#run-with-shell-script)
- [New Features](#new-features)
	- [1. Cache with Redis](#1-cache-with-redis)
		- [Install Redis Server](#install-redis-server)
		- [Install Redis Client](#install-redis-client)
		- [Cache with Redis and restoreBuffer](#cache-with-redis-and-restorebuffer)
	- [2. Code Executor](#2-code-executor)
		- [Flask](#flask)
		- [Docker](#docker)
		- [node-rest-client](#node-rest-client)
	- [3. Load-balancing with Nginx](#3-load-balancing-with-nginx)
		- [Install Nginx](#install-nginx)
		- [Nginx Configuration](#nginx-configuration)
		- [Demo of using Nginx](#demo-of-using-nginx)
		- [Load Balancer for executors](#load-balancer-for-executors)

## Quick Start

### Built With

- [Angular](https://angular.io/) 
- [Express](https://expressjs.com/)
- [Bootstrap](https://getbootstrap.com/)
- [jQuery](https://jquery.com/)
- [MongoDB](https://www.mongodb.com/)
- [WebSocket](https://en.wikipedia.org/wiki/WebSocket)
- [Redis](https://redis.io/)
- [Flask](http://flask.pocoo.org/)
- [Nginx](https://www.nginx.com/)
- [Docker](https://www.docker.com/)

### Tools
- Linux OS (VirtualBox)
- Visual Studio Code (IDE)
- [Angular CLI](https://cli.angular.io/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [mLab](https://mlab.com/)
- [mongoose](http://mongoosejs.com/)
- [socket.io](https://socket.io/)
- [Ace Editor](https://ace.c9.io/)
- [Postman](https://www.getpostman.com/)


## Demo of Running

### Run with command lines in Terminal

```shell
#1. Start Docker 
$ sudo service docker start

#2. Start Nginx
$ sudo service docker nginx

#3. Start Redis
$ sudo redis-server /etc/redis/****.conf

#4. Run oj-client
$ ng build --watch

#5. Run oj-server
$ npm start

#6. Run executor
$ python executor_server.py
```
### Run with Shell Script
- [command.sh](https://github.com/zhewangjoe/BitTiger-CS503-1802/blob/CrazyDonut/Week3/week3-project/command.sh)

```shell
./command.sh
```

## New Features 

### 1. Cache with Redis

#### Install Redis Server

```shell
# 1) Download Redis
$ wget http://download.redis.io/releases/redis-3.2.6.tar.gz

# 2) Move the file into the `Downloads/Redis` folder and Unzip the `tar` file
$ cd Downloads/Redis
$ tar xzf redis-3.2.6.tar.gz

# 3) Compile the source code 
$ cd redis-stable
$ make

# 4) Install tcl8.5
$ sudo apt-get install -y tcl

# 5) Copy redis-server and redis-cli interface in proper places
$ cd redis-stable/src
$ sudo make install

# 6) Install Redis
$ cd redis-stable/utils
$ sudo ./install_server.sh

# 7) Start Redis
$ sudo redis-server /etc/redis/6379.conf
```

#### Install Redis Client

```shell
$ cd oj-server
$ npm i redis
```

#### Cache with Redis and restoreBuffer

1. We use `Redis` to realize the following scenario:

- Several users were editing a same problem and then they all left this problem. 
- A new user opens this problem some time later within one hour 
- The new user can see all instructions the old users have edited in the editor.

```
a. When connection event happens
    If the sessionId is not in memory, we should check whether it is in Redis 
     1)	If the sessionId is in Redis, which means all participants have left this problem within one hour
	  we can get stored information from Redis
	  key = sessionId, value stores cached instructions
     2)	If the sessionId is not in Redis, which means the problem has never been edited or the time exceeds one hour
	  We should create new session and store the new session in memory
b. When disconnection event happens
     1)	When a participant left a session, remove the participant from participant list
     2)	If the participant is the last one in the session, we should store the session in Redis 
        (key = sessionId, value = cachedInstructions)
```

2. Use `restoreBuffer` to cache code in memory

- Several users are solving a same problem
- One of them refreshes the page and a new use enters into this problem
- Both of them should see the instructions that other users have edited in the editor.
- use a `cachedInstruction` filed to store instructions in `editorSocketService` in `oj-server`

### 2. Code Executor
- Code Executor for compiling and running code in Java, Python and C++

<img src="https://github.com/Cacchiato/Notes/blob/master/Collaborative%20Online%20Judge/Week3/week3-project/img/1.png" width="622" height="350" />

#### Flask

1. Install pip and Flask

```shell
$ sudo apt-get update
$ sudo apt-get -y install  python3-pip
$ sudo pip3 install Flask
```
2. Install dependencies in Flask

>1) create `requirements.txt`

```
Flask
Docker
```
>2) install dependencies

```shell
$ sudo pip3 install -r requirements.txt
```

#### Docker

1. Install Docker Server

```shell
$ curl -fsSL https://get.docker.com/ | sh
$ sudo usermod -aG docker vagrant
```

2. Create `Dockerfile` in `executor`

```docker
FROM ubuntu 16.04
MAINTAINER User

RUN apt-get update
RUN apt-get -y openjdk-8-jdk
RUN apt-get install -y python3
RUN apt-get install -y g++
```

3. Build Docker Image

```shell
$ cd executor
$ docker build -t image_name .

#Check Docker Images
$ docker images

#Delete a Docker Image
$ docker rmi -f IMAGE_ID
```

4. Add Docker image_name to `executor_utils.py`

```python
CURRENT_DIR = os.path.dirname(os.path.relpath(__file__))
IMAGE_NAME = 'image_name'
```

5. Install Docker client in `executor`

```shell
$ cd executor
$ sudo pip install docker
```

#### node-rest-client

Install `node-rest-client` in `oj-server`

```shell
$ npm i node-rest-client
```

### 3. Load-balancing with Nginx

#### Install Nginx

1. Add two command lines in `/etc/apt/source.list`

```shell
$ sudo vi /etc/apt/source.list

deb http://nginx.org/packages/ubuntu/ xenial nginx
deb-src http://nginx.org/packages/ubuntu/ xenial nginx
```

2. Install Nginx

```shell
$ sudo apt-get update
$ sudo apt-get install nginx

# check Nginx version
$ nginx -v
# test Nginx
$ nginx -t
```

3. Run Nginx

```shell
$ sudo service nginx start
$ sudo service nginx stop
$ sudo service nginx restart
```

#### Nginx Configuration

1. Introduction to files in `/etc/nginx`

- /etc/nginx/`nginx.conf` - is the entry point of nginx configuration
- /etc/nginx/`sites-available` - store the created and default virtual host configurations
- /etc/nginx/`sites-enabled` - contains `symlinks` to files in the `sites-available` folder
- /etc/nginx/`conf.d` - use `conf.d` for things like module loading, log files and other staff that are not specific to a single virtual host

2. Amend `nginx.conf`

- use `sites-enabled` as the entry-point instead of `conf.d`

```
#include /etc/nginx/conf.d/*.conf;
include /etc/nginx/sites-enabled/*;
```

#### Demo of using Nginx

1. Create a host `example` in folder `sites-available`

```shell
$ cd sites-available
$ sudo subl example 
```

2. Configure the server
```
server {
  listen 90; 
  server_name example.com;
  root /var/www/example;

  location / {
	try_files $uri $uri/ /index.html;
  }
}
```

3. Make a new folder `example` in `/var/www`

```shell
$ cd var/www
$ sudo mkdir example
```

4. Create an `index.html` file in `example` folder

```shell
$ cd var/www/example
$ sudo subl index.html
```

```html
<html>
  <body>
  	<h1>Hello Nginx!</h1>
  </body>
</html>
```

5. Map `localhost` to a new name in `etc/hosts`

```shell
$ cd etc
$ sudo subl hosts
```

```
127.0.0.1 www.example.com
```

6. Create symbolic link from `sites-available` to `sites-enabled`

```shell
$ cd etc/nginx/sites-enabled
$ sudo ln -s etc/nginx/sites-available/example etc/nginx/sites-enabled/example
```
7. Start Nginx and check `www.example.com` in browser

#### Load Balancer for executors

<img src="https://github.com/Cacchiato/Notes/blob/master/Collaborative%20Online%20Judge/Week3/week3-project/img/2.png" width="900" />

1. Create a host `executor` in `sites-available`

- the server in the host listen to `90`

```
upstream executor {
  server 127.0.0.1:5000;
  server 127.0.0.1:5001;
  server 127.0.0.1:5002;	
}

server {
  listen 90; 

  server_name executor;
  
  location / {	
	proxy_pass http://executor;
  }
}
```
2. Map `localhost` to a new name in `etc/hosts`

```
127.0.0.1 executor
```

3. Change the `EXECUTOR_SERVER_URL` in 	`oj-server/routes/rest.js`

```javascript
EXECUTOR_SERVER_URL = 'http://executor:90/build_and_run';
```

4. Create symbolic link from `sites-available` to `sites-enabled`

5. Run three instances of executors at the same time with port `5000`, `5001` and `5002`

```python
# executor/executor_server.py
if __name__ == '__main__':
    #take the port number as an system input from terminal
    import sys
    port = int(sys.argv[1]) 
    eu.load_image()  
    app.run(port=port)     
```

```shell
$ python executor_server.py 5000
$ python executor_server.py 5001
$ python executor_server.py 5002
```

![image](https://github.com/Cacchiato/Notes/blob/master/Collaborative%20Online%20Judge/Week3/week3-project/img/3.gif)
