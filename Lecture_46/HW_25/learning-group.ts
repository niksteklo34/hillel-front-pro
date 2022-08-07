interface ILesson {
  title: string;
  topics: Array<string>;
};

class LearningGroup {
  passedLessons: ILesson[] = [];

  constructor(
    public courseName: string,
    public teacherName: string,
    public amountOfStudents: number,
  ) {}

  doneLesson(title: string, topics: Array<string>): string | void {
    if(this.passedLessons.some((lesson) => lesson.title === title)){
      return `Lesson with title ${title} already exist.`;
    }
    
    // @ts-ignore
    this.passedLessons.push(new Lesson(title, topics));
  }
}
