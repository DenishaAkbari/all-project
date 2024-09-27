let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let email = document.getElementById('email')
let age = document.getElementById('age')
let course = document.getElementById('course')
let viewdata = document.getElementById('viewdata')
let isedit = false;
let isindex;

const getdata = () => {

    let object = JSON.parse(localStorage.getItem("student"));
    if(object){
        return object;
    }
    else{
        return[];
    }
}
let container = getdata();


const creatdata = () => {

    event.preventDefault();   
    let obj = {
        id: isindex ? isindex : Math.floor(Math.random() * 10000),
        fname : fname.value,
        lname : lname.value,
        email : email.value,
        age : age.value,
        course : course.value
    }

    if(isedit){
        console.log("edit",obj);

        let data = [...container];
         
        let updateData = data.map((rec) => {
            if(rec.id == isindex){
                return obj;
            }else{
                return rec;
            }   
        }) 
        console.log("update",updateData);

        container = updateData;

        isedit = false;
        isindex = undefined;
        // console.log("container",container);
    }else{
        container = [...container,obj];
        // container.push(obj);
        console.log(obj);
        console.log(container);
        
    }

    localStorage.setItem("student",JSON.stringify(container));

    fname.value = "";
    lname.value = "";
    email.value = "";
    age.value = "";
    course.value = "";
    displayData();
}

let singledata = (id) => {
    // console.log(id);

    let data = [...container]; 

    let editData = container.filter((d) => {
        return d.id === id;
    })
    isedit = true;
    isindex = id;

    console.log("data",data);
    console.log(editData[0]);

    fname.value = editData[0].fname;
    lname.value = editData[0].lname;
    email.value = editData[0].email;
    age.value = editData[0].age;
    course.value = editData[0].course;
}


const deleteData = (id) => {

    
    let data = [...container];

    let deleteData = data.filter((delet) => {
        return delet.id != id;
    })
    container = deleteData;

    localStorage.setItem("student",JSON.stringify(container));

    displayData();

}

const displayData = () => {
    viewdata.innerHTML = "";

    container.forEach((ele) => {
        viewdata.innerHTML += `<tr>
        <td>${ele.id}</td>
        <td>${ele.fname}</td>
        <td>${ele.lname}</td>
        <td>${ele.email}</td>
        <td>${ele.age}</td>
        <td>${ele.course}</td>
        <td><button class="btn btn-danger" onclick="return singledata(${ele.id})">Edit</button>  
          <button class="btn btn-warning" onclick="return deleteData(${ele.id})">Delete</button></td></tr>`
    });
}
displayData();