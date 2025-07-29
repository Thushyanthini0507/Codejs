function displayData(event) {
    event.preventDefault();
    // alert();

    let fname = document.getElementById("fname").value;
    console.log(fname);

    let age = document.getElementById("age").value;
    console.log(age);

    let e_mail = document.getElementById("e-mail").value;
    console.log(e_mail);




    //disply value

    document.getElementById(`output`).innerHTML =
    `
    <h3>Student List</h3>
    <p>
    Name: <b>${fname}</b>
    </p>
    <p>
    Age: <b>${age}</b>
    </p>
    <p>
    Email: <b>${e_mail}</b>
    </p>

    `;
}

















// function displayData() {

// }


// function clearfile() {
//     document.getElementById("male").value = " ";
//     document.getElementById("female").value = " ";
//     document.getElementById("maths").value = " ";
//     document.getElementById("fname").value = " ";
//     document.getElementById("age").value = " ";
//     document.getElementById("email").value = " ";
//     document.getElementById("science").value = " ";
//     document.getElementById("english").value = " ";
// }