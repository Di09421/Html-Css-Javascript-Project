const js_cource={
    cource_name:"javascript in hindi",
    cource_price:499,
    cource_duration:"90 days",
    instructor:"anuj sir",
};
console.log(js_cource.cource_name);
console.log(js_cource["cource_price"])


var student ={
    Enroll_num:"12345667889567",
    Father_name:"Madhup Dwivedi",
    Sem:"5th",
    Branch:{
        CS:355,
        IT:356,
        ELX:330,
    }
};

console.log(student.Branch.ELX);
console.log(student.Enroll_num);

console.log(student["Enroll_num"]);
  
Object.freeze(student);

student.Sem="6th sem";

console.log(student);

var lecturer ={
    Enroll_num:"12345667889567",
    Father_name:"Madhup Dwivedi",
    subject:"IMT",
    salary:"110k",
};

var mix=Object.assign({},student,lecturer);
console.log(mix);

var mix={...student.lecture}


const js_student={
    student_name:"shubhi katiyar",
    student_age:21,
    student_education:"b.tech",
};
console.log(js_student);


let obj ={
    Name:"Ram",
    Age:20,
    Email:"ravi@email.com"
};
console.log(obj);
console.log(obj.Name);
console.log(obj.Age);
console.log(obj.Email);
console.log(obj["Name"]);


let user={
    name:"Ravi",
    email:"ravi@wmail.com",
    password:"ravi@1234"

}
Object.freeze(user)
console.log(user.email);
console.log(user["name"]);

user.password="diksha@1234"
console.log(user);


let new_object={
    id:1,
    category:{
        game:"candy crush",
        sport:"kabbaddi",
        food_cort:"chappan bhog",
        shopping:"dress"
    }
}
console.log(new_object.category.shopping);

let employee={
    name:"rohan",
    age:20,
    email:"rohan@email.com",
}
console.log(Object.assign({},user,employee));
console.log(employee);

console.log({...user,...employee});









































































































