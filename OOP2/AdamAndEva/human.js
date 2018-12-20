function human(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.say = function () {
        console.log("Hello I'm " + name + ", I'm a " + gender);
    }
    this.isMale = function () {
        if (this.gender == 'male') {
            return true;
        } else {
            return false;
        }
    }
    this.eat = function (Apple) {
        while (Apple.isEmpty()) {
            
        }
    }
    this.getName = function () {
        return this.name;
    }
    this.getWeight = function () {
        return this.weight;
    }
    this.setName = function (name) {
        this.name = name;
    }
    this.setWeight = function (weight) {
        this.weight = weight;
    }
    this.checkApple = function (Apple) {
        
    }
}