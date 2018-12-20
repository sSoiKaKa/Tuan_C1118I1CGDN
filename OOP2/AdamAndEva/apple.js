function Apple(weight) {
    this.weight = weight;
    weight = 10;
    this.isEmpty = function () {
        if (this.weight > 0) {
            return true;
        } else {
            return false;
        }
    }
    this.getWeight = function (){
        return this.weight;
    }
}