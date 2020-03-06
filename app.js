

// array cntain imgs names
var imgsNamesArr = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

var left = document.querySelector('#left');
var centre = document.querySelector('#centre');
var right = document.querySelector('#right');
var section = document.querySelector('#section');


// sorces of images 

left.src = `imgs/${imgsNamesArr[0]}`;
left.alt = imgsNamesArr[0];
left.title = imgsNamesArr[0];

centre.src = `imgs/${imgsNamesArr[1]}`;
centre.alt = imgsNamesArr[1];
left.title = imgsNamesArr[1];

right.src = `imgs/${imgsNamesArr[2]}`;
right.alt = imgsNamesArr[2];
left.title = imgsNamesArr[2];






//                                   constructor.....

function product(name) {
    this.name = name;
    //problem was in path (FOCUS on simples)
    this.filePath = `imgs/${this.name}`;
    this.clicks = 0;
    this.views = 0;
    product.all.push(this);   
}
product.all = [];

// to store imgs to constructor array
for (var i = 0; i < imgsNamesArr.length; i++) {
    new product(imgsNamesArr[i]);

}


var leftProduct, centreProduct, rightProduct;


var viewedImgs = [];  //    created arr that should contain imgs had been displayed before and remove them from the arr after they arr more then 3 imgs.

//    or maybe we can give other different variabls for the same id's and use conditions for unique imgs show.

//                                      .......render.....

function render() {


    leftProduct = product.all[randomNum(0, product.all.length - 1)];
    centreProduct = product.all[randomNum(0, product.all.length - 1)];
    rightProduct = product.all[randomNum(0, product.all.length - 1)];

    while(viewedImgs.includes(leftProduct.name) || viewedImgs.includes(centreProduct.name)|| viewedImgs.includes(rightProduct.name)|| leftProduct.name=== centreProduct.name|| centreProduct.name=== rightProduct.name|| rightProduct.name=== leftProduct.name ){
        
        leftProduct = product.all[randomNum(0, product.all.length - 1)];
        rightProduct = product.all[randomNum(0, product.all.length - 1)];
        centreProduct = product.all[randomNum(0, product.all.length - 1)];

    }

    viewedImgs=[];      // instead of shift

    viewedImgs.push(leftProduct.name);
    viewedImgs.push(centreProduct.name);
    viewedImgs.push(rightProduct.name);
    
    
    left.setAttribute('src', leftProduct.filePath);
    left.setAttribute('alt', leftProduct.name);
    left.setAttribute('title', leftProduct.name.split('.', 1));

    centre.setAttribute('src', centreProduct.filePath);
    centre.setAttribute('alt', centreProduct.name);
    centre.setAttribute('title', centreProduct.name.split('.', 1));

    right.setAttribute('src', rightProduct.filePath);
    right.setAttribute('alt', rightProduct.name);
    right.setAttribute('title', rightProduct.name.split('.', 1));
    
}
render();


        

    
 // to store data to server

    function storeDataUp(){
        // have to be stringifyed
        var data= JSON.stringify(product.all);
        localStorage.setItem('products',data);
    }

    


// picking random imgs from imgsNamesArr

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}


// List of results
function result() {
    var resultUl = document.getElementById('results');
    for (var i = 0; i < product.all.length; i++) {
        var liE1 = document.createElement('li');
        product.all[i].name = (product.all[i].name).split('.')[0];
        liE1.textContent = `${product.all[i].name} has: votes-${product.all[i].clicks},Views-${product.all[i].views}`;
        resultUl.appendChild(liE1);
    }

}



//                                      event

var totalClicks = 0;
section.addEventListener('click', personalise);  // when click the event played
function personalise(event) {
    if (totalClicks < 25) {
        if (event.target.id !== 'section') {
            if (event.target.id === 'left') {
                leftProduct.clicks++;
            }
            else if (event.target.id === 'centre') {
                centreProduct.clicks++;
            }
            else if (event.target.id === 'right') {
                rightProduct.clicks++;
            }

            totalClicks++;
            leftProduct.views++;
            centreProduct.views++;
            rightProduct.views++;
            render();
            
        }

    }
    else {
        section.removeEventListener('click', personalise);
        result();
        chartFunc();
    }

}




//                                 created chartt function.....

function chartFunc() {
    //                       new Arr......products/clicks/views.......
    var productsChart = [];
    var clicksChart = [];
    var viewsChart = [];
    for (var i = 0; i < product.all.length; i++) {
        // mistake  imgsnamesarr
        productsChart.push(product.all[i].name);
        clicksChart.push(product.all[i].clicks);
        viewsChart.push(product.all[i].views)
    }


          // this is chart 
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: productsChart,             // product
            datasets: [{
                label: '# of Votes',
                data: clicksChart,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)'

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            },
            {
                label: '# of Views',
                data: viewsChart,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    return myChart;
}


// this func for get the data from server 
function storeDataGet(){
    var data= localStorage.getItem('products');
    if(data){
        // better to be prased
      product.JSON.prase(data);
      result();
      chartFunc();
      
    }
}
storeDataGet();




