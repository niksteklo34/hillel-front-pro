interface ICourse {
  name: string;
  totalLessons: number;
  availableTeachersAmount: number;
};

interface IGroup {
  courseName: string;
  teacherName: string;
  amountOfStudents: number;
};

class ITSchool {
  availableCourses: ICourse[] = [];
  startedLearningGroups: IGroup[] = [];

  constructor(
    public name: string,
    public description: string,
    public maxGroupsCount: number,
    public maxStudentsCountPerGroup: number,
  ) {};

  registerCourse(courseName: string, totalLessons: number, availableTeachersAmount: number): string | void {
    if (this.availableCourses.some((course) => course.name === courseName)){
      return `Course ${courseName} already exists.`;
    }
    // @ts-ignore
    this.availableCourses.push(new Course(courseName, totalLessons, availableTeachersAmount));
  }

  startLearningGroup(courseName: string, teacherName: string, amountOfStudents: number): void {
    // @ts-ignore
    const courseForNewLearningGroup = this.availableCourses.find((course) => (course.name === courseName) && (course.availableTeachersAmount));
    if (courseForNewLearningGroup){
      // @ts-ignore
      this.startedLearningGroups.push(new LearningGroup(courseName, teacherName, amountOfStudents));
      courseForNewLearningGroup.availableTeachersAmount -= 1;
    }
  }

  endLearningGroup(courseName: string, teacherName: string): void {
    this.startedLearningGroups = this.startedLearningGroups
      .filter((group) => (group.courseName !== courseName) && (group.teacherName !== teacherName)); 
  };

  getLearningGroups(courseName: string): undefined | IGroup[] {
    return this.startedLearningGroups.filter((group) => group.courseName === courseName);
  };
}
