class Dimension{

   private name:String;
   private salary:number;

    constructor(){
        this.salary = 0;
        this.name="";
    }
    show(salary:number,name:String){

        this.salary = salary;
        this.name = name;
        console.log(this.salary);
        console.log(this.name);
    }
}

const Adv = new Dimension();
Adv.show(999999999,"Advitya");
