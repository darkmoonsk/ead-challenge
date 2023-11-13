import Chapter from "./Chapter";

export default class CourseStatistics {
  constructor(private chapters: Chapter[]) {}

  numberOfLessons() {
    return this.chapters.reduce((acc, chapter) => acc + chapter.lessons.length, 0);
  }

  lessonsConcluded() {
    return this.chapters.reduce((acc, chapter) => acc + chapter.lessons
    .filter(lesson => lesson.conclusion).length, 0);
  }

  totalDurationInSeconds() {
    return this.chapters.reduce((duration, chapter) => {
      return duration + chapter.lessons.reduce((duration, lesson) => duration + lesson.duration, 0)
    }, 0);
  }

  totalDurationConcludedInSeconds() {
    const duration = this.chapters.reduce((duration, chapter) => {
      return duration + chapter.lessons.filter(lesson => lesson.conclusion === true)
        .reduce((duration, lesson) => duration + lesson.duration, 0)
      }, 0);

      return duration;
  }

  totalDuration() {
    const oneHour = 60 * 60;
    const duration = this.totalDurationInSeconds();
    const hours = Math.floor(duration / oneHour);
    const minutes = Math.floor((duration % oneHour) / 60);

    return `${hours}h ${minutes}m`
  }

  totalDurationConcluded() {
    const oneHour = 60 * 60;
    const duration = this.totalDurationConcludedInSeconds();
    const hours = Math.floor(duration / oneHour);
    const minutes = Math.floor((duration % oneHour) / 60);

    return `${hours}h ${minutes}m`
  }

  percentageConcluded() {
    const percentage = (this.totalDurationConcludedInSeconds() / this.totalDurationInSeconds()) * 100;
    return `${percentage.toFixed(0)}%`;
  }
 
}