;
;
var ITSchool = /** @class */ (function () {
    function ITSchool(name, description, maxGroupsCount, maxStudentsCountPerGroup) {
        this.name = name;
        this.description = description;
        this.maxGroupsCount = maxGroupsCount;
        this.maxStudentsCountPerGroup = maxStudentsCountPerGroup;
        this.availableCourses = [];
        this.startedLearningGroups = [];
    }
    ;
    ITSchool.prototype.registerCourse = function (courseName, totalLessons, availableTeachersAmount) {
        if (this.availableCourses.some(function (course) { return course.name === courseName; })) {
            return "Course ".concat(courseName, " already exists.");
        }
        // @ts-ignore
        this.availableCourses.push(new Course(courseName, totalLessons, availableTeachersAmount));
    };
    ITSchool.prototype.startLearningGroup = function (courseName, teacherName, amountOfStudents) {
        // @ts-ignore
        var courseForNewLearningGroup = this.availableCourses.find(function (course) { return (course.name === courseName) && (course.availableTeachersAmount); });
        if (courseForNewLearningGroup) {
            // @ts-ignore
            this.startedLearningGroups.push(new LearningGroup(courseName, teacherName, amountOfStudents));
            courseForNewLearningGroup.availableTeachersAmount -= 1;
        }
    };
    ITSchool.prototype.endLearningGroup = function (courseName, teacherName) {
        this.startedLearningGroups = this.startedLearningGroups
            .filter(function (group) { return (group.courseName !== courseName) && (group.teacherName !== teacherName); });
    };
    ;
    ITSchool.prototype.getLearningGroups = function (courseName) {
        return this.startedLearningGroups.filter(function (group) { return group.courseName === courseName; });
    };
    ;
    return ITSchool;
}());
