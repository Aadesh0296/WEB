var data = [];


function doSubmit() {

    var name = document.getElementById('inputName').value;
    var a = document.getElementById('inputAge').value;
    var course = document.getElementById('inputCourse').value;
    // console.log(name);
    // console.log(a);
    // console.log(course);
     if (name == "" || a == "" || course == "")
    {
        alert("Please enter all the inputs properly");
    }
    else {
        // var record={
        //     name1:name,
        //     age:a,
        //     cours:course
        // }
        
        console.log(obj);

        var obj={name1:name,age:a,cours:course};
        console.log(obj)

        data[data.length] = obj

        console.log(data);

        document.getElementById('inputName').value = "";
        document.getElementById('inputAge').value = "";
        document.getElementById('inputCourse').value = "";
        


    }


}

function getDetail() {
    console.log(data);
    x = "";

    for (val of data) {
        x = x + `
                    <tr>
                        <th>${val.name1}</th>
                        <th>${val.age}</th>
                        <th>${val.cours}</th>
                    </tr>
            `
    }
    console.log(x);
    document.getElementById("result").innerHTML = x;
}

