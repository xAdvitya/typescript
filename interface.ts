interface Student{
    name:String;
    roll:number;
}

const assign = (student:Student) =>{
    console.log(student.name);
}

let adv = { name: "Advitya", roll: 12 }

assign(adv);