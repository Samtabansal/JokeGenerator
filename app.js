document.getElementById('btn').addEventListener('click', display);

function display(){

    const num = document.getElementById('text-input').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${num}`, true);
    xhr.onload = function(){
        if(this.status == 200)
        {
            const res = JSON.parse(this.responseText);

            let jokes='';

            if(res.type === "success"){
                res.value.forEach(function(j,index){
                    jokes += `<ul><li>${index+1} : ${j.joke}</li></ul>`;
                });
                document.getElementById('output').innerHTML = jokes;
            }
        }
    }
    xhr.send();
}