webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-problem-list></app-problem-list> -->\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var forms_2 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var problem_list_component_1 = __webpack_require__("./src/app/components/problem-list/problem-list.component.ts");
var problem_detail_component_1 = __webpack_require__("./src/app/components/problem-detail/problem-detail.component.ts");
var problem_list_by_difficulty_component_1 = __webpack_require__("./src/app/components/problem-list-by-difficulty/problem-list-by-difficulty.component.ts");
var new_problem_component_1 = __webpack_require__("./src/app/components/new-problem/new-problem.component.ts");
var home_page_component_1 = __webpack_require__("./src/app/components/home-page/home-page.component.ts");
var navbar_component_1 = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
var editor_component_1 = __webpack_require__("./src/app/components/editor/editor.component.ts");
var app_routes_1 = __webpack_require__("./src/app/app.routes.ts");
var data_service_1 = __webpack_require__("./src/app/services/data.service.ts");
var collaboration_service_1 = __webpack_require__("./src/app/services/collaboration.service.ts");
var input_service_1 = __webpack_require__("./src/app/services/input.service.ts");
var search_pipe_1 = __webpack_require__("./src/app/pipes/search.pipe.ts");
var session_component_1 = __webpack_require__("./src/app/components/session/session.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                problem_list_component_1.ProblemListComponent,
                problem_detail_component_1.ProblemDetailComponent,
                new_problem_component_1.NewProblemComponent,
                editor_component_1.EditorComponent,
                navbar_component_1.NavbarComponent,
                problem_list_by_difficulty_component_1.ProblemListByDifficultyComponent,
                home_page_component_1.HomePageComponent,
                search_pipe_1.SearchPipe,
                session_component_1.SessionComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.routing,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                http_1.HttpClientModule
            ],
            providers: [
                data_service_1.DataService,
                input_service_1.InputService,
                collaboration_service_1.CollaborationService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var problem_list_component_1 = __webpack_require__("./src/app/components/problem-list/problem-list.component.ts");
var problem_detail_component_1 = __webpack_require__("./src/app/components/problem-detail/problem-detail.component.ts");
var problem_list_by_difficulty_component_1 = __webpack_require__("./src/app/components/problem-list-by-difficulty/problem-list-by-difficulty.component.ts");
var new_problem_component_1 = __webpack_require__("./src/app/components/new-problem/new-problem.component.ts");
var home_page_component_1 = __webpack_require__("./src/app/components/home-page/home-page.component.ts");
var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_page_component_1.HomePageComponent
        //component: NavbarComponent   //localhost:4200/home
    },
    {
        path: 'problems',
        component: problem_list_component_1.ProblemListComponent //localhost:4200/problems
        //pathMatch default is 'full'
    },
    {
        path: 'problems/:id',
        component: problem_detail_component_1.ProblemDetailComponent //localhost:4200/problems/1
        //pathMatch default is 'full'
    },
    {
        path: 'problems/diff/:difficulty',
        component: problem_list_by_difficulty_component_1.ProblemListByDifficultyComponent //localhost:4200/problems/easy
    },
    {
        path: 'new-problem',
        component: new_problem_component_1.NewProblemComponent //localhost:4200/new-problem
    },
    {
        path: '**',
        redirectTo: 'problems'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);


/***/ }),

/***/ "./src/app/components/editor/editor.component.css":
/***/ (function(module, exports) {

module.exports = "@media screen {\n    .container {\n        margin-top: 70px;\n        /* margin-left: 50px; */\n        float: both;\n        border-right: 1px black solid;\n    }\n\n    #editor {\n        height: 570px;\n        width: 600px;\n    }\n\n    .lang-select {\n        width: 100px;\n        margin-left: 15px; \n    }\n\n    header .btn {\n        margin: 0 50px;\n    }\n\n    footer .btn {\n        margin: 0 15px;\n    }\n\n     .editor-footer, .editor-header {\n        margin: 5px 0;\n    }\n\n    .editor-header {\n        margin: 5px 0;\n    }\n\n    .cursor {\n        background: rgba(0, 250, 0, 0.5);\n        z-index: 40;\n        width: 2px!important;\n    }\n}"

/***/ }),

/***/ "./src/app/components/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <header class=\"editor-header\">\n        <div class=\"row\">\n            <!-- language selection list -->\n            <select class=\"form-control pull-left lang-select\" name=\"language\" [(ngModel)]=\"language\" (change)=\"setLanguage(language)\">\n                <option *ngFor=\"let language of languages\" [value]=\"language\">{{language}}</option>\n            </select>\n            \n            <!-- Rest Button -->\n            <!-- The button will trigger a modal to popup -->\n            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">Reset</button>\n\n            <!-- Modal -->\n            <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                <div class=\"modal-dialog\" role=\"document\">\n                    <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Are you sure</h5>\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n\n                        <div class=\"modal-body\">You will lose current code in the editor, are you sure?</div>\n                        \n                        <div class=\"modal-footer\">\n                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n                            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"\n                            (click)=\"resetEditor()\">Reset</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </header>\n\n    <div id=\"editor\"></div>\n\n    <footer class=\"editor-footer\">\n        <button type=\"button\" class=\"btn btn-success pull-right\" (click)=\"submit()\">Sumbit Solution</button>\n    </footer>\n</section>"

/***/ }),

/***/ "./src/app/components/editor/editor.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var collaboration_service_1 = __webpack_require__("./src/app/services/collaboration.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var EditorComponent = /** @class */ (function () {
    function EditorComponent(collaboration, route) {
        this.collaboration = collaboration;
        this.route = route;
        this.languages = ['Java', 'Python'];
        this.language = 'Java'; //default language
        this.defaultContent = {
            'Java': "public class Example {\n      public static void main(String[] args) {\n        //Type your Java Code here.\n      }\n    }",
            'Python': "class Solution:\n    def example():\n      # Type your Python code here."
        };
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.sessionId = params['id'];
            _this.initEditor();
        });
    };
    EditorComponent.prototype.initEditor = function () {
        var _this = this;
        this.editor = ace.edit("editor");
        this.editor.setTheme("ace/theme/eclipse");
        this.resetEditor();
        this.collaboration.init(this.sessionId);
        this.collaboration.receiveChange(this.editor);
        //this.collaboration.helloConnection();
        //this.collaboration.loseConnection();
        this.editor.lastAppliedChange = null;
        this.editor.on("change", function (e) {
            console.log('editor changes: ' + JSON.stringify(e));
            if (_this.editor.lastAppliedChange != e) {
                _this.collaboration.change(JSON.stringify(e));
            }
        });
    };
    EditorComponent.prototype.resetEditor = function () {
        this.editor.setValue(this.defaultContent[this.language]);
        this.editor.getSession().setMode("ace/mode/" + this.language.toLocaleLowerCase());
    };
    EditorComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.resetEditor();
    };
    EditorComponent.prototype.submit = function () {
        var userCode = this.editor.getValue();
        console.log(userCode); //for debugging
    };
    EditorComponent = __decorate([
        core_1.Component({
            selector: 'app-editor',
            template: __webpack_require__("./src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__("./src/app/components/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [collaboration_service_1.CollaborationService, router_1.ActivatedRoute])
    ], EditorComponent);
    return EditorComponent;
}());
exports.EditorComponent = EditorComponent;


/***/ }),

/***/ "./src/app/components/home-page/home-page.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n    text-align: center;\n    color: #222;\n}\n\n.title {\n    font-size: 2em;\n    text-align: center;\n    margin: 250px auto;\n    padding: 20px 0;\n}"

/***/ }),

/***/ "./src/app/components/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container fixed-center\">\n  <div class=\"title\"> \n    <p>Welcome to OJ-Client!</p>\n    <p class=\"quote\"><i>\"ALgorithms + Data Structure = Programs        -- by Niklaus Wirth\"</i></p>\n  </div>\n  <div id=\"time-box\">\n    <p id=\"current-date\"></p>\n    <div id=\"current-time\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home-page/home-page.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        core_1.Component({
            selector: 'app-home-page',
            template: __webpack_require__("./src/app/components/home-page/home-page.component.html"),
            styles: [__webpack_require__("./src/app/components/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-inverse {\n    background-color: #F8F8F8;\n    border-color: #E7E7E7;\n}\n\n.navbar-toggler .icon-bar {\n    background-color: #000;\n    margin-top: 4px;\n    display: block;\n    width: 22px;\n    height: 2px;\n    border-radius: 1px;\n}\n\nfooter {\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 0.8em;\n    height: 80px;\n}\n\nfooter ul {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; \n    padding: 10px, 20px, 10px, 20px;\n}\n\nfooter ul li {\n    margin: 30px 200px;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n\nfooter ul li .info {\n    margin-left: 20px;\n    font-size: 1.4em;\n}\n\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"top-header\">\n  <nav class=\"navbar navbar-expand-lg navbar-inverse bg-faced fixed-top\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggler pull-left open\" data-toggle=\"collapse\" data-target=\"#navbarList\">\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"/\">OJ-Client</a>\n      </div>\n\n      <!-- navbar list -->\n      <div class=\"collapse navbar-collapse\" id=\"navbarList\">\n          <ul class=\"navbar-nav mr-auto\">\n              <li class=\"nav-item active\">\n                  <a class=\"nav-link\" [routerLink]=\"['/']\">Home<span class=\"sr-only\">(current)</span></a>\n              </li>\n              \n              <li class=\"nav-item dropdown\">\n                  <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Problems</a>\n                  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                      <a class=\"dropdown-item\" [routerLink]=\"['/problems/diff', 'easy']\">Easy</a>\n                      <a class=\"dropdown-item\" [routerLink]=\"['/problems/diff', 'medium']\">Medium</a>\n                      <a class=\"dropdown-item\" [routerLink]=\"['/problems/diff', 'hard']\">Hard</a>\n                      <a class=\"dropdown-item\" [routerLink]=\"['/problems/diff', 'super']\">Super</a>\n                      <div class=\"dropdown-divider\"></div>\n                      <a class=\"dropdown-item\" [routerLink]=\"['/problems']\">All Problems</a>\n                  </div>\n              </li>\n\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" [routerLink]=\"['/new-problem']\">Add Problem</a>\n              </li>\n          </ul>\n          <form class=\"form-inline my-2 my-lg-0\">\n              <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" [formControl]=\"searchBox\">\n              <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n          </form>\n      </div> \n  </nav>\n</header>\n\n<footer class=\"bg-dark text-white fixed-bottom\">\n  <ul>\n    <li>\n        <p><i class=\"fa fa-group fa-2x\"></i><span class=\"info\">About Us</span></p>\n    </li>\n\n    <li>\n      <p><i class=\"fa fa-envelope-o fa-2x\"></i><span class=\"info\">Help</span></p>\n    </li>\n\n    <li>\n      <p><i class=\"fa fa-phone fa-2x\"></i><span class=\"info\">Contact Us</span></p>\n    </li>\n  </ul>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
var input_service_1 = __webpack_require__("./src/app/services/input.service.ts");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(input, router) {
        this.input = input;
        this.router = router;
        this.searchBox = new forms_1.FormControl();
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.searchBox
            .valueChanges
            .debounceTime(200) //wait for 200ms
            .subscribe(function (term) {
            _this.input.changeInput(term);
        });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NavbarComponent.prototype.searchProblem = function () {
        this.router.navigate(['/problems']);
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [input_service_1.InputService, router_1.Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top: 100px;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.form-container {\n    padding-top: 15px;\n}\n\n.form-group {\n    padding-top: 10px;\n}\n\n.row {\n    padding-top:20px;\n}"

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h4>Add a New Problem</h4>\n  \n  <form #formRef = \"ngForm\">\n    <!-- problem name -->\n    <div class=\"form-group\">\n      <label for=\"problemName\">Problem name</label>\n      <input name=\"problemName\" id=\"problemName\" class=\"form-control\" \n      type=\"text\" required placeholder=\"Please enter problem name\" [(ngModel)] = \"newProblem.name\">\n    </div>\n    <!-- problem description -->\n    <div class=\"form-group\">\n      <label for=\"problemDesc\">Problem description</label>\n      <textarea name=\"problemDesc\" id=\"problemDesc\" class=\"form-control\" \n      placeholder=\"Please enter problem description\" [(ngModel)] = \"newProblem.desc\" rows=\"3\"></textarea>\n    </div>\n    <!-- problem difficulty -->\n    <div class=\"form-group\">\n      <label for=\"problemDifficulty\">Difficulty</label>\n      <select name=\"difficulty\" id=\"difficulty\" class=\"form-control\" [(ngModel)] = \"newProblem.difficulty\">\n        <option *ngFor = \"let difficulty of difficulties\" [value]=\"difficulty\">{{difficulty}}</option>\n      </select>\n    </div>\n    <!-- submit button-->\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"addProblem()\">Add Problem</button>\n      </div>\n    </div>\n  </form>\n</div>\n<br/>\n<br/>"

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var data_service_1 = __webpack_require__("./src/app/services/data.service.ts");
var DEFAULT_PROBLEM = Object.freeze({
    id: 0,
    name: '',
    desc: '',
    difficulty: 'easy'
});
var NewProblemComponent = /** @class */ (function () {
    function NewProblemComponent(dataService) {
        this.dataService = dataService;
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
        this.difficulties = ['easy', 'medium', 'hard', 'super'];
    }
    NewProblemComponent.prototype.ngOnInit = function () {
    };
    NewProblemComponent.prototype.addProblem = function () {
        this.dataService.addProblem(this.newProblem);
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    };
    NewProblemComponent = __decorate([
        core_1.Component({
            selector: 'app-new-problem',
            template: __webpack_require__("./src/app/components/new-problem/new-problem.component.html"),
            styles: [__webpack_require__("./src/app/components/new-problem/new-problem.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], NewProblemComponent);
    return NewProblemComponent;
}());
exports.NewProblemComponent = NewProblemComponent;


/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.css":
/***/ (function(module, exports) {

module.exports = ".detail-container {\n    margin-top: 100px;\n    float: both;\n}\n\n.problem-title {\n    font-size: 1.4em;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex; \n    -webkit-box-align: center; \n        -ms-flex-align: center; \n            align-items: center;  \n}\n\n.difficulty {\n    min-width: 65px;\n    margin-right: 20px;\n}\n\n.badge.difficulty {\n    margin-left: 20px;\n    padding: 0.5em;\n    color: #fbfdfa;\n    font-size: 14px;\n}\n\n.diff-easy {\n    background-color: #42ebf4;\n}\n\n.diff-medium {\n    background-color: #92cf5c;\n}\n\n.diff-hard {\n    background-color: #dd0d1e;\n}\n\n.diff-super {\n    background-color: #8d16e2;\n}\n\n.description {\n    margin-top: 10px;\n    padding: 10px;\n    \n    border-radius: 0.5em;\n    font-size: 1.2em;\n    background-color: #F5FFFA;\n}"

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"problem\">\n  <div class=\"row\">\n    <div class=\"detail-container col-sm-12 col-md-4\">\n      <div>\n        <strong class=\"problem-title\">{{problem.id}}.{{problem.name}} \n          <span class=\"{{'badge difficulty diff-' + problem.difficulty.toLocaleLowerCase()}}\">{{problem.difficulty}}</span>\n        </strong> \n        <p class=\"description\">{{problem.desc}}</p>\n      </div>\n    </div>\n\n    <div class=\"hidden-xs col-sm-12 col-md-8\">\n      <app-editor></app-editor>\n    </div>  \n\n    <div class=\"hidden-xs col-sm-12 col-md-4\">\n      <app-session></app-session>\n    </div>\n  </div>      \n</div>\n"

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var data_service_1 = __webpack_require__("./src/app/services/data.service.ts");
var ProblemDetailComponent = /** @class */ (function () {
    //two injections
    function ProblemDetailComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            //this.problem = this.dataService.getProblem(+params['id']);
            _this.dataService.getProblem(+params['id'])
                .then(function (problem) { return _this.problem = problem; }); //resolve the problem - asynchronize
        });
    };
    ProblemDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-problem-detail',
            template: __webpack_require__("./src/app/components/problem-detail/problem-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/problem-detail/problem-detail.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.ActivatedRoute])
    ], ProblemDetailComponent);
    return ProblemDetailComponent;
}());
exports.ProblemDetailComponent = ProblemDetailComponent;


/***/ }),

/***/ "./src/app/components/problem-list-by-difficulty/problem-list-by-difficulty.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n    float: both;\n    margin-top: 100px;\n}\n\n.difficulty {\n    min-width: 65px;\n    margin-right: 10px;\n}\n\n.badge.difficulty {\n    padding-top: 0.6em;\n    color: #fbfdfa;\n    font-size: 12px;\n}\n\n.title{\n    font-size: 1.2em;\n}\n\n.diff-easy {\n    background-color: #42ebf4;\n}\n\n.diff-medium {\n    background-color: #92cf5c;\n}\n\n.diff-hard {\n    background-color: #dd0d1e;\n}\n\n.diff-super {\n    background-color: #8d16e2;\n}"

/***/ }),

/***/ "./src/app/components/problem-list-by-difficulty/problem-list-by-difficulty.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"problem-container\">\n    <div class=\"list-group\">\n      <a class=\"list-group-item\" *ngFor=\"let problem of problems\" [routerLink]=\"['/problems', problem.id]\">\n        <span class=\"{{'pull-left badge difficulty diff-' + problem.difficulty.toLocaleLowerCase()}}\">\n          {{problem.difficulty}}\n        </span>\n        <strong class=\"title\">{{problem.id}}. {{problem.name}}</strong>\n      </a>\n    </div>\n  </div>  \n</div>\n"

/***/ }),

/***/ "./src/app/components/problem-list-by-difficulty/problem-list-by-difficulty.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var data_service_1 = __webpack_require__("./src/app/services/data.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
var ProblemListByDifficultyComponent = /** @class */ (function () {
    //two injections
    function ProblemListByDifficultyComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    ProblemListByDifficultyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.dataService.getProblemsByDiff(params['difficulty'])
                .then(function (problems) { return _this.problems = problems; }); //resolve the problem - asynchronize
        });
    };
    ProblemListByDifficultyComponent = __decorate([
        core_1.Component({
            selector: 'app-problem-list-by-difficulty',
            template: __webpack_require__("./src/app/components/problem-list-by-difficulty/problem-list-by-difficulty.component.html"),
            styles: [__webpack_require__("./src/app/components/problem-list-by-difficulty/problem-list-by-difficulty.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.ActivatedRoute])
    ], ProblemListByDifficultyComponent);
    return ProblemListByDifficultyComponent;
}());
exports.ProblemListByDifficultyComponent = ProblemListByDifficultyComponent;


/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n    float: both;\n    margin-top: 100px;\n}\n\n.difficulty {\n    min-width: 65px;\n    margin-right: 10px;\n}\n\n.badge.difficulty {\n    padding-top: 0.6em;\n    color: #fbfdfa;\n    font-size: 12px;\n}\n\n.title{\n    font-size: 1.2em;\n}\n\n.diff-easy {\n    background-color: #42ebf4;\n}\n\n.diff-medium {\n    background-color: #92cf5c;\n}\n\n.diff-hard {\n    background-color: #dd0d1e;\n}\n\n.diff-super {\n    background-color: #8d16e2;\n}"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"problem-container\">\n    <div class=\"list-group\">\n        <a class=\"list-group-item\" *ngFor=\"let problem of (problems | search : searchTerm)\" [routerLink]=\"['/problems', problem.id]\">\n          <span class=\"{{'pull-left badge difficulty diff-' + problem.difficulty.toLocaleLowerCase()}}\">\n            {{problem.difficulty}}\n          </span>\n          <strong class=\"title\">{{problem.id}}. {{problem.name}}</strong>\n        </a>\n      </div>\n  </div>  \n</div>\n"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var data_service_1 = __webpack_require__("./src/app/services/data.service.ts");
var input_service_1 = __webpack_require__("./src/app/services/input.service.ts");
//@Component is a decorator function that specifies the Angular metadata for the component.
//The CLI generates three metadata properties: selector, templateUrl, styleUrls
var ProblemListComponent = /** @class */ (function () {
    function ProblemListComponent(dataService, inputService) {
        this.dataService = dataService;
        this.inputService = inputService;
        //3) Subscribe to the search term from InputService
        this.searchTerm = '';
    }
    //6) call the getProblem() and getSearchTerm() method inside ngOnInit()
    ProblemListComponent.prototype.ngOnInit = function () {
        this.getProblems();
        this.getSearchTerm();
    };
    //7) Unsubscription to avoid memory leak
    ProblemListComponent.prototype.ngOnDestroy = function () {
        this.subscriptionProblems.unsubscribe();
    };
    //4) create a method to fetch problems
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        //this.problems = this.dataService.getProblems();
        this.subscriptionProblems = this.dataService.getProblems()
            .subscribe(function (problems) { return _this.problems = problems; });
    };
    //5) create a method to fetch search term
    ProblemListComponent.prototype.getSearchTerm = function () {
        var _this = this;
        this.subscriptionInput = this.inputService.getInput()
            .subscribe(function (inputTerm) { return _this.searchTerm = inputTerm; });
    };
    ProblemListComponent = __decorate([
        core_1.Component({
            selector: 'app-problem-list',
            template: __webpack_require__("./src/app/components/problem-list/problem-list.component.html"),
            styles: [__webpack_require__("./src/app/components/problem-list/problem-list.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, input_service_1.InputService])
    ], ProblemListComponent);
    return ProblemListComponent;
}());
exports.ProblemListComponent = ProblemListComponent;


/***/ }),

/***/ "./src/app/components/session/session.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top: 100px;\n    margin-left: 20px;\n    font-size: 0.8em;\n}"

/***/ }),

/***/ "./src/app/components/session/session.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <p>This is the participants list</p>\n    <div class=\"participants-container\">\n        <div class=\"list-group\">\n            <a class=\"list-group-item\" *ngFor=\"let participant of participants\">\n            <span class=\"participant\">{{participant}}</span>\n            </a>\n        </div>\n    </div>  \n</div>\n"

/***/ }),

/***/ "./src/app/components/session/session.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var collaboration_service_1 = __webpack_require__("./src/app/services/collaboration.service.ts");
var SessionComponent = /** @class */ (function () {
    function SessionComponent(collaboration, route) {
        this.collaboration = collaboration;
        this.route = route;
    }
    SessionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.sessionId = params['id'];
            _this.collaboration.helloConnection();
            _this.collaboration.loseConnection();
            _this.particiants = _this.collaboration.showParticipants();
        });
    };
    SessionComponent = __decorate([
        core_1.Component({
            selector: 'app-session',
            template: __webpack_require__("./src/app/components/session/session.component.html"),
            styles: [__webpack_require__("./src/app/components/session/session.component.css")]
        }),
        __metadata("design:paramtypes", [collaboration_service_1.CollaborationService, router_1.ActivatedRoute])
    ], SessionComponent);
    return SessionComponent;
}());
exports.SessionComponent = SessionComponent;


/***/ }),

/***/ "./src/app/pipes/search.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (problems, term) {
        console.log(problems);
        console.log(term);
        term = term.toLocaleLowerCase();
        return problems.filter(function (problem) {
            if (problem.difficulty.toLocaleLowerCase().includes(term)) {
                return true;
            }
            else if (problem.name.toLocaleLowerCase().includes(term)) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    SearchPipe = __decorate([
        core_1.Pipe({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());
exports.SearchPipe = SearchPipe;


/***/ }),

/***/ "./src/app/services/collaboration.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CollaborationService = /** @class */ (function () {
    function CollaborationService() {
    }
    CollaborationService.prototype.init = function (sessionId) {
        this.collaborationSocket = io(window.location.origin, { query: 'sessionId=' + sessionId });
        //this.receiveChange(editor);
    };
    //receive change
    CollaborationService.prototype.receiveChange = function (editor) {
        this.collaborationSocket.on("change", function (delta) {
            console.log('collaboration editor changes: ' + delta);
            delta = JSON.parse(delta);
            editor.lastAppliedChange = delta;
            editor.getSession().getDocument().applyDeltas([delta]);
        });
    };
    //send change
    CollaborationService.prototype.change = function (delta) {
        this.collaborationSocket.emit("change", delta);
    };
    //connection service
    CollaborationService.prototype.helloConnection = function () {
        this.collaborationSocket.on("hello-connection", function (message) {
            console.log("connection message received! + " + message);
        });
    };
    //disconnection service
    CollaborationService.prototype.loseConnection = function () {
        this.collaborationSocket.on("disconnect", function (message) {
            console.log("disconnection message received! + " + message);
        });
    };
    CollaborationService.prototype.showParticipants = function () {
        var feedback;
        this.collaborationSocket.on("all-participants", function (message) {
            console.log("Participants are " + message);
            feedback = message;
        });
        return feedback;
    };
    CollaborationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CollaborationService);
    return CollaborationService;
}());
exports.CollaborationService = CollaborationService;


/***/ }),

/***/ "./src/app/services/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
//import { PROBLEMS } from "../mock-problems";
//Week2 - fetch data from backend server
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
//week2
var DataService = /** @class */ (function () {
    //inject HTTP Client
    function DataService(httpClient) {
        this.httpClient = httpClient;
        //use problemSource to represent a list of problems
        this._problemSource = new BehaviorSubject_1.BehaviorSubject([]);
    }
    DataService.prototype.getProblems = function () {
        var _this = this;
        this.httpClient.get('api/v1/problems') //call backend api through httpClient to get response
            .toPromise() //the response is a Observable type ==> convert it to Promise type
            .then(function (res) {
            _this._problemSource.next(res);
        })
            .catch(this.handleError); //if the promise failed to resolve, handleError is the callback
        return this._problemSource.asObservable();
    };
    DataService.prototype.getProblem = function (id) {
        return this.httpClient.get("api/v1/problems/" + id)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    DataService.prototype.addProblem = function (problem) {
        var _this = this;
        var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.httpClient.post('api/v1/problems', problem, options)
            .toPromise()
            .then(function (res) {
            _this.getProblems(); //fetch the new problem-list after adding a new problem successdully
            return res;
        })
            .catch(this.handleError);
    };
    //fetch problems by difficulty
    DataService.prototype.getProblemsByDiff = function (difficulty) {
        //let result = this.problems.filter((problem) => problem.difficulty === difficulty);
        //return result;
        return this.httpClient.get("api/v1/problems/diff/" + difficulty)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        return Promise.reject(error.body || error);
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
/* week1
@Injectable()
export class DataService {
  //list of problems
  problems: Problem[] = PROBLEMS;

  constructor() { }

  //fetch all problems
   getProblems() : Problem[] {
    return this.problems;
  }


  //fetch a problem by id
  getProblem(id: number) : Problem {
    return this.problems.find((problem) => problem.id === id); //javascript-array-find-function
  }

  //add new problem
  addProblem(problem: Problem) {
    problem.id = this.problems.length + 1;
    this.problems.push(problem);
  }
}
*/ 


/***/ }),

/***/ "./src/app/services/input.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var InputService = /** @class */ (function () {
    function InputService() {
        this.inputSubject$ = new BehaviorSubject_1.BehaviorSubject('');
    }
    InputService.prototype.changeInput = function (term) {
        this.inputSubject$.next(term);
    };
    InputService.prototype.getInput = function () {
        return this.inputSubject$.asObservable();
    };
    InputService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], InputService);
    return InputService;
}());
exports.InputService = InputService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map