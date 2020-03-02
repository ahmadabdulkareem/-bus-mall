


var imgsNamesArr = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

var left = document.querySelector('#left');
var centre = document.querySelector('#centre');
var right = document.querySelector('#right');
var section = document.querySelector('#section');

// left.src = `imgs/${imgsNamesArr[0]}`;
// left.alt = imgsNamesArr[0];
// left.title = imgsNamesArr[0];
// centre.src = `imgs/${imgsNamesArr[1]}`;
// centre.alt = imgsNamesArr[1];
// left.title = imgsNamesArr[1];

// right.src = `imgs/${imgsNamesArr[2]}`;
// right.alt = imgsNamesArr[2];
// left.title = imgsNamesArr[2];


console.log(imgsNamesArr);



function product(name) {
    this.name = name;
    //problem was here (((FOCUS YA .)))
    this.filePath = `imgs/${this.name}`;
    this.clicks = 0;
    this.votes = 0;
    this.seen = 0;
    product.all.push(this);
}
product.all = [];


for (var i = 0; i < imgsNamesArr.length; i++) {
    new product(imgsNamesArr[i]);
    // this.filePath;
}


var leftProduct, centreProduct, rightProduct;
function render() {
    leftProduct = product.all[randomNum(0, product.all.length - 1)];
    // console.log(leftProduct);

    centreProduct = product.all[randomNum(0, product.all.length - 1)];
    rightProduct = product.all[randomNum(0, product.all.length - 1)];

    left.setAttribute('src', leftProduct.filePath);
    left.setAttribute('alt', leftProduct.name);
    left.setAttribute('title', leftProduct.name);

    centre.setAttribute('src', centreProduct.filePath);
    centre.setAttribute('alt', centreProduct.name);
    centre.setAttribute('title', centreProduct.name);

    right.setAttribute('src', rightProduct.filePath);
    right.setAttribute('alt', rightProduct.name);
    right.setAttribute('title', rightProduct.name);


}
render();


function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}
function result() {
    var resultUl = document.getElementById('results');
    for (var i = 0; i < product.all.length; i++) {
        var nameOfImg = product.all[i].name;
        var liE1 = document.createElement('li');
        resultUl.appendChild(liE1);
        liE1.textContent = `For ${nameOfImg}: Views-${this.seen}, Votes-${this.votes}`
    }
}
result();

section.addEventListener('click', personalise);
var totalClicks = 0;
function personalise(event) {
    if (totalClicks < 25) {
        if (event.target.id !== 'section') {
            if (event.target.id === left) {
                leftProduct.clicks++;
                leftProduct.votes++;
            }
            else if (event.target.id === centre) {
                centreProduct.clicks++;
                centreProduct.votes++;
            }
            else if (event.target.id === right) {
                rightProduct.clicks++;
                rightProduct.votes++;
            }

            totalClicks++;
            leftProduct.seen++;
            centreProduct.seen++;
            rightProduct.seen++;
            render();

        }
        while(left){
            personalise(event):
        }

    }
    else{section.removeEventListener('click',personalise)}
}

