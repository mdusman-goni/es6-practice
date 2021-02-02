class parent {
    constructor() {
        this.fatherName = "Schwerznegger"
    }
}

class child extends parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + " " + this.fatherName;
    }

}
const babe = new child("Usman");
const babe2 = new child("Goni");
console.log(babe.getFullName());
console.log(babe2);