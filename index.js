

// eslint-disable-next-line no-unused-vars
function Student(firstName, secondName, bdYear) {
    const arrHeтgth = 30;//размер массива
    this.firstName = firstName; //имя
    this.secondName = secondName; //фамилия
    this.bdYear = bdYear; //год рождения
    this.presentAbsent = new Array(arrHeтgth); //массив посещения 30 символов
    this.rating = new Array(arrHeтgth); //массив с оценками 30 символов
    this.age = () => new Date().getFullYear() - bdYear; //метод возраст
    this.present = function() {
        for (let i = 0; i < this.presentAbsent.length; i++) {
            if (typeof this.presentAbsent[i] === 'undefined') {
                this.presentAbsent[i] = true;
                break;
            }
        }
    }; //метод посещения
    this.absent = function() {
        for (let i = 0; i < this.presentAbsent.length; i++) {
            if (typeof this.presentAbsent[i] === 'undefined') {
                this.presentAbsent[i] = false;
                break;
            }
        }
    }; //метод отсутствия
    this.mark = function(sum) {
        for (let i = 0; i < this.rating.length; i++) {
            if (typeof this.rating[i] === 'undefined') {
                if (sum <= '10' && sum > '0') {
                    this.rating[i] = sum;
                }
                break;
            }
        }
    }; //метод ввод оценок

    this.summaryRating = function() {
        let sum = 0;
        let sumVol = 0;
        for (let i = 0; i < this.rating.length; i++) {
            if (isNaN(this.rating[i])) {
                sum++;

            } else {
                sumVol += this.rating[i];
            }
        }
        return sumVol / (this.rating.length - sum);
    }; //метод подсчета средней оценки

    this.summaryPresent = function() {
        let sum = 0;
        let sumVol = 0;
        for (let i = 0; i < this.presentAbsent.length; i++) {
            if (isNaN(this.presentAbsent[i])) {
                sum++;
            } else {
                sumVol += this.presentAbsent[i];
            }
        }
        return sumVol / (this.presentAbsent.length - sum);
    }; //подсчет среднего посещение

    this.summary = function() {
        const present = 0.9;
        const rating = 9;
        if (this.summaryPresent() >= present && this.summaryRating() >= rating) {
            return 'Ути какой молодец';
        } else if (
            (this.summaryPresent() < present && this.summaryRating() >= rating) ||
      (this.summaryPresent() >= present && this.summaryRating() < rating)
        ) {
            return 'Норм, но можно лучше';
        } else {
            return 'Редиска';
        }
    };
} //метод проверка средней оценки и среднего посещения



