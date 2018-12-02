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
- [Project](#project)
	- [1. Data Service](#1-data-service)
	- [2. Router](#2-router)
	- [3. Components](#3-components)
		- [3.1 problem-list](#31-problem-list)
		- [3.2 problem-detail](#32-problem-detail)
		- [3.3 new-problem](#33-new-problem)
	- [Root Files](#root-files)
		- [`app/app.module.ts`](#appappmodulets)
		- [`app/app.component.html`](#appappcomponenthtml)

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
>1) Install `Bootstrap`, `jquery` and `Font-Awesome` Icons

```shell
$ cd oj-client
$ npm i bootstrap
$ npm i jquery
$ npm i font-awesome
```
>2) Import bootstrap and jquery in `.angular-cli.json`
Every time you change the `.angular-cli.json`, the application should be restarted.

```json
"apps": [
  {
	"styles": [
	  "style.css",
	  "../node_modules/bootstrap/dist/css/bootstrap.min.css"
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

## Project

### 1. Data Service 
- Components should not fetch data directly so we use service to access data. 

>1) Define the problem model
- a `Problem` object includes `id`, `name`, `description` and `difficulty`

```shell
$ cd src/app
$ mkdir models
$ cd models
$ mkdir problem.model.ts
```
```javascript
export class Problem {
	id: number:
	name: string;
	desc: string;
	difficulty: string;
}
```

>2) Define a `Problem` array which contains several `Problem` objects

```shell
$ cd src/app
$ mkdir mock-problems.ts
```
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
 	- Add new problem

```shell
$ cd oj-client/src/app
$ mkdir services
$ cd services
$ ng g s data
```

```javascript
import { Problem } from '../models/problem.model';
import { PROBLEMS } from '../mock-problems';

//@Injectable() tells Angular that this service might itself have injected dependencies. 
@Injectable() 
export class DataService {
	//fetch all problems
	getProblems(): Problem[] { }

	//fetch a problem by id
	getProblem(id: number) : Problem { }

	//add new problem
	addProblem(problem: Problem) { }
}
```

>4) Provide the `DataService`
- Open the `AppModule` class and import the `DataService` in the `@NgModule.providers` array in [`app.module.ts`](#appappmodulets)
- The `providers` array tells Angular to create a single, shared instance of `DataService` and inject into any class that asks for it.

```javascript
//app.module.ts
import { DataService } from './services/data.service';

@NgModule(
  providers: [
  	DataService
  ]
)
```

### 2. Router
```shell
$ cd src/app
$ mkdir app.routes.ts
```
>1) Router imports
- Angular Router is not part of the Angular core. It is in is own library package, `@angular/router`.

```javascript
import { Routes, RouterModule } from '@angular/router';
```

>2) Router Configuration

- Step 1 - create the instance of the Router service
	- When  `URL` changes, the router looks for a corresponding `Route` from which it can determine the `component` to display.
	- The router uses a `first-match` wins strategy when matching routes, so more specific routes should be placed above less specific routes.
	- Use the `RouterModule.forRoot()` method to configure the router.

```javascript
/** app.routes.ts
 ** There is no leading slashes in the path.
 ** The :id is a token for a route parameter.
 ** Empty path represents the default path for the application, the place to go when the path is empty.
 ** The ** path is a wildcard. The router will select this path if the URL doesn't match any paths.
 ** Matching Strategy: 'prefix' (default) and 'full'
 **/
 import { Routes, RouterModule } from '@angular/router';
 import { ProblemListComponent } from './path_of_ProblemListComponent';
 import { ProblemDetailComponent } from './path_of_ProblemDetailComponent';

 const routes : Routes = [
   {
   	  path: ''，
   	  redirectTo: 'problems',
   	  pathMatch: 'full'
   },

   {
   	  path: 'problems'，
   	  component: ProblemListComponent,
   },

   {
   	  path: 'problems/:id'，
   	  component: ProblemDetailComponent,
   },

   {
   	  path: '**'，
   	  redirectTo: 'problems',
   }
 ];

 exports const routing = RouterModule.forRoot(routes);
```
- Step 2 - add the result of the `RouterModule.forRoot()` method to the `imports` array of `AppModule` class in[ `app.module.ts`](#appappmodulets).

```javascript
//app.module.ts
import { routing } from './app.routes';

@NgModule(
  imports: [
  	routing
  ]
)
```

>3) Router Outlets
- change the host view's HTML [`app.component.html`](#appappcomponenthtml)

```html
<router-outlet></router-outlet>
```

### 3. Components

#### 3.1 problem-list

>1) Create a new component `problem-list` 

```shell
$ cd oj-client/src/app
$ mkdir components
$ cd components
$ ng g c problem-list
```
>2) Call `data` service in `problem-list` component

```javascript
//problem-list.component.ts
import { Component, OnInit } form '@angular/core';
import { Problem } from '../models/problem.model';
import { DataService } from '../../services/data.service';

@Component({
  //three metadata properties: selector, templateUrl, styleUrls
})
export class ProblemListComponent implements OnInit {
	problems: Problem[];

	//One injection - injection of DataService
	constructor(private dataService: DataService) { }

	ngOnInit() { 
	  this.getProblems();
	}
    
    //create a method to fetch problems from data service
	getProblems() {
	  this.problems = this.dataService.getProblems();
	}
}
```
>3) problem-list.component.html
>- [Difference between `[routerlink]` and `routerLink`](https://stackoverflow.com/questions/41370760/difference-between-routerlink-and-routerlink)


#### 3.2 problem-detail
>- This component provides the feature of displaying detail information of a problem.
>- Two injections are used in this component: injected data service and injected router service. 

>1) Create a new component `problem-detail`

```shell
$ cd oj-client/src/app/components
$ ng g c problem-detail
```
>2) Call data service and router service

```javascript
import { Problem } from '../models/problem.model';
import { ActivatedRoute, Params} from '@angular/router'
import { DataService } from '../../services/data.service';

@Component({
  //three metadata properties: selector, templateUrl, styleUrls
})
export class ProblemDetailComponent implements OnInit {
	problems: Problem[];

	//Two injections 
	constructor(private dataService: DataService, private route: ActivatedRoute) { }

	ngOnInit() { 
	  this.route.params.subscribe(params => {
	  	this.problem = this.dataService.getProblems(+params['id']);
	  });
	}
}
```

#### 3.3 new-problem
>- This component provides the feature of adding new problem.
>- Import `FormsModule` in [`app.module.ts`](#appappmodulets) and add `FormsModule` in the `imports` array of `AppModule` class.
>- Used HTML form and `ngForm` in `new-problem.component.html`

### Root Files

#### `app/app.module.ts`

>1) `app.module.ts`defines `AppModule`, the `root` module that tells Angular how to assemble the application.
>2) The assemble information is called `metadata`.
  >- Some of the `metadata` is in the `@Component` decorator in the component class.
  >- Other critical `metadata` is in `@NgModule` decorator.

```javascript
//problem-list.component.ts
import { Component, OnInit } form '@angular/core';

//@Component is a decorator function that specifies the Angular metadata for the component.
//The CLI generates three metadata properties: selector, templateUrl, styleUrls
@Component({
  selector: 'app-problem-list',  //app.component.html
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
	constructor() { }

	ngOnInit() { }
}
```
>3) Angular CLI generated an `AppModule` class in `app/app.module.ts` when it created the project.
   >- `@NgModule` decorator is used to `annotate` the top-level `AppModule` class

```javascript
//app.module.ts
import { AppComponent } from './app.component';
@NgModule({
	declarations: [
	  AppComponent,
	],
	imports: [  
	  
	],
	services: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
```

>4) Every component must be declared in exactly one `NgModule`
   >- Angular CLI helps to import and declare our own components in `app.module.ts`;
   >- We still need to import and declare other `modules`, `services`, `files` we used in our application.

```javascript
//Example
import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
	  AppComponent,
	  ProblemListComponent
	],
	//@NgModule metadata's imports array which contains a list of external modules that the app needs
	imports: [  
	  FormsModule
	],
	services: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
```

#### `app/app.component.html`

>1) `app/app.component{html,css, spec.ts, ts}` file defines the AppComponent along with an HTML template, CSS stylesheet and a unit test. 
>2) It is the root component of what will become a tree of nested components as the application evolves.

```html
<!-- <app-problem-list></app-problem-list> -->
<router-outlet></router-outlet>
```