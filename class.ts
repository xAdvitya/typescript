export class Dimension{

   private name:String;
   private salary:number;
   private age:number;

    constructor(salary: number, name:string ,age?:number){
        this.salary = salary;
        this.name= name;
        this.age = age;
    }
    show(){
        console.log(this.salary);
        console.log(this.name);
        if(this.age > 0){
            console.log(this.age);
        }
    }
}
