fetch("Asset.json")
.then(function(resp) {
    return resp.json();
})
.then(function(data) {
    console.log(data);
    // let task_title= document.getElementById("container-title").innerHTML; 
    // task_title = data.tasks[0].task_title;

    // let task_1_content = document.getElementById("task-1-content").innerHTML;
    // task_1_content = "hellobfn"
});

