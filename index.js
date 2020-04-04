// eslint-disable-next-line no-unused-vars
function Student(firstName, secondName, bdYear) {
  const arrLength = 30; //размер массива
  this.firstName = firstName; //имя
  this.secondName = secondName; //фамилия
  this.bdYear = bdYear; //год рождения
  this.presentAbsent = new Array(arrLength); //массив посещения 30 символов
  this.rating = new Array(arrLength); //массив с оценками 30 символов
  this.age = () => new Date().getFullYear() - bdYear; //метод возраст

  const isPresent = element => typeof element === "undefined";

  this.present = function() {
    let elemIndex = this.presentAbsent.findIndex(isPresent);
    this.presentAbsent[elemIndex] = true;
  }; //метод посещения

  const isAbsent = element => typeof element === "undefined";

  this.absent = function() {
    let elemIndex = this.presentAbsent.findIndex(isAbsent);
    this.presentAbsent[elemIndex] = false;
  }; //метод отсутствия

  const isMark = element => typeof element === "undefined";

  this.mark = function(sum) {
    let elemIndex = this.rating.findIndex(isMark);
    this.rating[elemIndex] = sum;
  }; //метод ввод оценок

  this.summaryRating = function() {
    let sumVol = 0;
    let sumRuns = 0;
    this.rating.forEach(function(element) {
      sumVol += element;
      sumRuns++;
    });
    return sumVol / sumRuns;
  }; //метод подсчета средней оценки

  this.summaryPresent = function() {
    let sumVol = 0;
    let sumRuns = 0;
    this.presentAbsent.forEach(function(element) {
      sumVol += element;
      sumRuns++;
    });
    return sumVol / sumRuns;
  }; //подсчет среднего посещение

  this.summary = function() {
    const present = 0.9;
    const rating = 9;
    if (this.summaryPresent() >= present && this.summaryRating() >= rating) {
      return "Ути какой молодец";
    } else if (
      (this.summaryPresent() < present && this.summaryRating() >= rating) ||
      (this.summaryPresent() >= present && this.summaryRating() < rating)
    ) {
      return "Норм, но можно лучше";
    } else {
      return "Редиска";
    }
  };
} //метод проверка средней оценки и среднего посещения
