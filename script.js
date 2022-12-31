let v1 ='xxx';
let message = `yyy ${v1}`

// showMessage("hhhh");
// const tab = [0,1,2,3,4];
// const tab1 = tab;
//
// console.log(tab.splice(1,2,"a","b"))
// console.log(tab)
// console.log(tab1)

let car = {id:5000, style:'hujowy'};
let style,id;

({style, id} = car);

let app = (function(){
    let carId = 123;
    let getId = function(){
        return carId;
    };
    let setId = function (id){
        carId = id;
    };
    return {getId : getId,
    setId : setId};

})();

console.log(app,app.getId())
app.setId(69);
console.log(app,app.getId())

function fa(){
    console.log(arguments)
}

function showMessage(msg) {
    document.getElementById("messageElement").textContent = msg;
}