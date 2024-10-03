export class Person {

    private age: number = 0;
    static readonly AGE_FOR_DRIVE = 18;

    getAge() {
        return this.age;
    }

    setAge(age: number) {
        this.age = age;
    }

    canDrive() {
        return this.getAge() >= Person.AGE_FOR_DRIVE;
    }

}
