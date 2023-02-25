
async function getByType(excuseType) {
    let url = 'https://excuser-three.vercel.app/v1/excuse/' + excuseType;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function main(excuseType) {
    let data = await getByType(excuseType);
    return (data[0].excuse);
}


async function generate() {

    // const arr = ['sick', 'ill', 'dead', 'dogshit'];
    
    // var randomNumber = Math.floor(Math.random()*arr.length);

    //var mylist = arr[randomNumber];

    var selection = document.getElementById("mylist").value;
    let value = await main(selection);
    //console.log(value);
    document.getElementById("halum").innerHTML = await value;
    
}