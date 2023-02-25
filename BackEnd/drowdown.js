const arr = ['sick', 'ill', 'dead', 'dogshit'];
    function newFunction() {
        var randomNumber = Math.floor(Math.random()*arr.length);

        var mylist = arr[randomNumber];
        document.getElementById("halum").innerHTML = mylist;
    }