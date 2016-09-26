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
var core_1 = require('@angular/core');
var course_service_1 = require('./course.service');
var router_1 = require('@angular/router');
var CoursesComponent = (function () {
    // dependency injection    
    function CoursesComponent(courseService, router) {
        this.courseService = courseService;
        this.router = router;
    }
    // lifecycle
    CoursesComponent.prototype.ngOnInit = function () {
        //var couserService = new CourseService();
        //this.courses = this.courseService.getCourses(); // sync call
        this.getCourses();
    };
    CoursesComponent.prototype.getCourses = function () {
        var _this = this;
        this.courseService.getCourses().then(function (courses) { return _this.courses = courses; });
    };
    CoursesComponent.prototype.onSelect = function (course) {
        this.selectedCourse = course;
    };
    CoursesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedCourse.id]);
    };
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'my-courses',
            providers: [course_service_1.CourseService],
            template: "\n        \n                 <ul class=\"courses\">\n                    <li *ngFor=\"let course of courses\" \n                         (click)=\"onSelect(course)\" \n                         [class.selected]=\"selectedCourse===course\">\n                        <span class=\"badge\">{{course.id}}</span>{{course.name}}\n                    </li>\n                 </ul>   \n\n                 <my-course-detail [course]=\"selectedCourse\"></my-course-detail>\n\n                 ",
            styles: ["\n                .selected {\n                background-color: #CFD8DC !important;\n                color: white;\n                }\n                .courses {\n                margin: 0 0 2em 0;\n                list-style-type: none;\n                padding: 0;\n                width: 15em;\n                }\n                .courses li {\n                cursor: pointer;\n                position: relative;\n                left: 0;\n                background-color: #EEE;\n                margin: .5em;\n                padding: .3em 0;\n                height: 1.6em;\n                border-radius: 4px;\n                }\n                .courses li.selected:hover {\n                background-color: #BBD8DC !important;\n                color: white;\n                }\n                .courses li:hover {\n                color: #607D8B;\n                background-color: #DDD;\n                left: .1em;\n                }\n                .courses .text {\n                position: relative;\n                top: -3px;\n                }\n                .courses .badge {\n                display: inline-block;\n                font-size: small;\n                color: white;\n                padding: 0.8em 0.7em 0 0.7em;\n                background-color: #607D8B;\n                line-height: 1em;\n                position: relative;\n                left: -1px;\n                top: -4px;\n                height: 1.8em;\n                margin-right: .8em;\n                border-radius: 4px 0 0 4px;\n                }"]
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService, router_1.Router])
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map