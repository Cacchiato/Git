# Week 1

## Features

- [Quick Start](#quick-start)
	- [Built With](#built-with)
	- [Tools](#tools)
- [Demo of Running](#demo-of-running)
	- [1. Set up the Development Environment](#1-set-up-the-development-environment)
	- [2. Create a new project](#2-create-a-new-project)
	- [3. Install Bootstrap and jquery](#3-install-bootstrap-and-jquery)
	- [4. Serve the application](#4-serve-the-application)
- [Project Structure](#project-structure)
	- [1. Components](#1-components)
		- [1.1 home-page](#11-home-page)
		- [1.2 navbar](#12-navbar)
		- [1.3 problem-list](#13-problem-list)
		- [1.4 problem-list-by-difficulty](#14-problem-list-by-difficulty)
		- [1.5 problem-detail](#15-problem-detail)
		- [1.6 problem-list-by-name](#16-problem-list-by-name)
		- [1.7 new-problem](#17-new-problem)
	- [2. Data Service](#2-data-service)
	- [3. Router](#3-router)
	
## Quick Start

### Built With

- [Angular](https://angular.io/) 
- [Node.js](https://nodejs.org/en/)
- [Bootstrap](https://getbootstrap.com/)
- [jQuery](https://jquery.com/)

### Tools
- Linux OS (VirtualBox)
- Visual Studio Code (IDE)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Angular CLI](https://cli.angular.io/)

## Demo of Running

### 1. Set up the Development Environment
>1) install [nvm](https://github.com/creationix/nvm)

```shell
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
## restart the terminal to use nvm
```
>2) install node.js 

```shell
$ nvm install 8.10.0
```
>3) install nodemon

```shell
$ npm install -g nodemon
```
>4) install angular-cli

```shell
$ npm install -g @angular/cli@latest
```
### 2. Create a new project 
- `ng new` command

```shell
$ cd Week1
$ ng new oj-client
```
### 3. Install Bootstrap and jquery
>1) Install `Bootstrap`, `jquery` and `Font-Awesome Icons`

```shell
$ cd oj-client
$ npm i bootstrap
$ npm i jquery
$ npm i font-awesome
```
>2) Import `bootstrap`, `jquery` and `font-awesome` in `.angular-cli.json`.
>- Every time you change the `.angular-cli.json`, the application should be restarted.

```json
"apps": [
  {
	"styles": [
	  "style.css",
	  "../node_modules/bootstrap/dist/css/bootstrap.min.css",
	  "../node_modules/font-awesome/css/font-awesome.css",
	],
	"scripts": [
	  "../node_modules/jquery/dist/jquery.js",
	  "../node_modules/bootstrap/dist/js/bootstrap.js"
	]
  }
]
```

### 4. Serve the application
- Go to the project directory and launch the server
	- `ng serve` launches the server, watches your files and rebuilds the app as changes are made.
	- `ng serve --open` or `ng serve -o` automatically open the browser at http://localhost:4200/.

```shell
$ cd oj-client
$ ng serve
```

## Project Structure

```
oj-client
└── Components
    ├── home-page
    ├── navbar
    ├── problem-detail
    ├── problem-list
    ├── problem-list-by-difficulty
    ├── problem-list-by-name
    └── new-problem

└── Data Model
    ├── problem.model 
    └── mock-problems

└── Data Services
    ├── getProblems()
    ├── getProblem(id)
    ├── getProblemsByDiff(difficulty)
    ├── getProblemsByName(name)
    └── addProblem(problem)

└── Routes
    ├── path: ''
    ├── path: 'home'
    ├── path: 'problems'
    ├── path: 'problems/:id'
    ├── path: 'problems/diff/:difficulty'
    ├── path: 'problem-search/:name'
    ├── path: 'new-problem'
    └── path: '**'   
```

### 1. Components

#### 1.1 home-page
>- The `home-page` component displays the home page where the application can navigate to.

![image](https://github.com/zhewangjoe/BitTiger-CS503-1802/blob/CrazyDonut/Week1/img/1.gif)

#### 1.2 navbar
>- The `navbar` component includes a fixed `navbar`(header) and a fixed `footer`.

![image](https://github.com/zhewangjoe/BitTiger-CS503-1802/blob/CrazyDonut/Week1/img/2.png)

#### 1.3 problem-list
>- The `problem-list` component can be used to fetch all problems.
>- Click `Problems` on the `navbar`, then choose `All Problems`.

![image](https://github.com/zhewangjoe/BitTiger-CS503-1802/blob/CrazyDonut/Week1/img/3.gif)

#### 1.4 problem-list-by-difficulty
>- The `problem-list-by-difficulty` component can fetch a group of problems which have the same `difficulty`.
>- Click `Problems` on the `navbar`, then choose a specific `difficulty`.

![image](https://github.com/zhewangjoe/BitTiger-CS503-1802/blob/CrazyDonut/Week1/img/4.gif)

#### 1.5 problem-detail
>- This component provides the feature of displaying `detail` information of a problem.
>- Two `injections` are used in this component: injected data service and injected router service.

![image](https://github.com/zhewangjoe/BitTiger-CS503-1802/blob/CrazyDonut/Week1/img/5.gif)

#### 1.6 problem-list-by-name
>- This component supports the feature of `search` a problem.
>- Type the `problem name` in the search area on the `navbar`, then the specific problem will be displayed.

![image](https://github.com/zhewangjoe/BitTiger-CS503-1802/blob/CrazyDonut/Week1/img/6.gif)

#### 1.7 new-problem
>- This component provides the feature of adding a new problem.
>- Click `Add Problem` on the `navbar`, then adding the details of a new problem.

![image](https://github.com/zhewangjoe/BitTiger-CS503-1802/blob/CrazyDonut/Week1/img/7.gif)

### 2. Data Service 
- Components should not fetch data directly so we use service to access data. 

>1) Define the problem model
- a `Problem` class includes four fields: `id`, `name`, `description` and `difficulty`

```javascript
export class Problem {
	id: number:
	name: string;
	desc: string;
	difficulty: string;
}
```

>2) Define a `Problem` array in `mock-problems.ts`

```javascript
import { Problem } from './models/problem.model';
export const PROBLEMS: Problem[] = [ 
  //a list of Problem objects 
];
```

>3) Create a new data service `data`

- Functions realized in this service
	- Fetch `all` problems
 	- Fetch a problem by `id`
 	- Fetch a group of problems by `difficulty`
 	- Fetch a problem by `name`
 	- Add new problem

>4) Provide the `DataService`
- Import the `DataService` in `app.module.ts`

### 3. Router

>1) Router imports
- Import Angular Router with `@angular/router`.

>2) Router Configuration
>- Step 1 - create an instance of the Router service
>- Step 2 - add `routing` to `app.module.ts`

```javascript
 //import list

 const routes : Routes = [
   //paths - the router map
 ];

 exports const routing = RouterModule.forRoot(routes);
```

>3) Router Outlets
- Change the host view's HTML in `app.component.html`

```html
<router-outlet></router-outlet>
```

