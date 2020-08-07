interface Student{
    name:String;
    roll:number;
}

let adv = {name:"Advitya",roll:12}

const assign = (student:Student) =>{
    console.log(student.name);
}

assign(adv);