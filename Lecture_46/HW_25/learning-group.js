;
var LearningGroup = /** @class */ (function () {
    function LearningGroup(courseName, teacherName, amountOfStudents) {
        this.courseName = courseName;
        this.teacherName = teacherName;
        this.amountOfStudents = amountOfStudents;
        this.passedLessons = [];
    }
    LearningGroup.prototype.doneLesson = function (title, topics) {
        if (this.passedLessons.some(function (lesson) { return lesson.title === title; })) {
            return "Lesson with title ".concat(title, " already exist.");
        }
        // @ts-ignore
        this.passedLessons.push(new Lesson(title, topics));
    };
    return LearningGroup;
}());
