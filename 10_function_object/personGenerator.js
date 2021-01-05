const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Елена",
            "id_3": "Анастасия",
            "id_4": "Юлия",
            "id_5": "Ирина",
            "id_6": "Ольга",
            "id_7": "Анна",
            "id_8": "Ксения",
            "id_9": "Екатерина",
            "id_10": "Татьяна"
        }
    }`,

    patronymicMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Владимирович",
            "id_7": "Михайлович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,

    patronymicFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Дмитриевна",
            "id_6": "Владимировна",
            "id_7": "Михайловна",
            "id_8": "Данииловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "охранник",
            "id_2": "шахтер",
            "id_3": "сантехник",
            "id_4": "лесоруб",
            "id_5": "солдат",
            "id_6": "слесарь",
            "id_7": "дальнобойщик",
            "id_8": "строитель",
            "id_9": "пожарный",
            "id_10": "моряк"
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "учительница",
            "id_2": "косметолог",
            "id_3": "стюардесса",
            "id_4": "бухгалтер",
            "id_5": "журналистка",
            "id_6": "психолог",
            "id_7": "няня",
            "id_8": "секретарь",
            "id_9": "парикмахер",
            "id_10": "официантка"
        }
    }`,

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function(json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(a) {
        if (a == 1)
            return this.randomValue(this.firstNameMaleJson);
        else
            return this.randomValue(this.firstNameFemaleJson);
    },


    randomSurname: function() {

        return this.randomValue(this.surnameJson);

    },

    randomPatronymicFemale: function() {
        return this.randomValue(this.patronymicFemaleJson);
    },

    randomPatronymicMale: function() {
        return this.randomValue(this.patronymicMaleJson);
    },

    randomProfessionFemale: function() {
        return this.randomValue(this.professionFemaleJson);
    },

    randomProfessionMale: function() {
        return this.randomValue(this.professionMaleJson);
    },
    randomGender: function() {
        //   let ran = (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min);
        if (this.randomIntNumber() == 1)
            return personGenerator.GENDER_MALE;
        else
            return personGenerator.GENDER_FEMALE;

    },

    randomYear: (max = 2010, min = 1950) => Math.floor(Math.random() * (max - min + 1) + min),




    getPerson: function() {
        this.person = {};
        this.person.gender = this.randomGender();

        if (this.person.gender == 'Мужчина') {
            this.person.firstName = this.randomFirstName(1);
            this.person.surname = this.randomSurname();
            this.person.patronymic = this.randomPatronymicMale();
            this.person.profession = this.randomProfessionMale();
        } else {
            this.person.firstName = this.randomFirstName(2);
            this.person.surname = this.randomSurname() + 'а';
            this.person.patronymic = this.randomPatronymicFemale();
            this.person.profession = this.randomProfessionFemale();
        }

        this.person.birthYear = this.randomYear();
        return this.person;
    }
};