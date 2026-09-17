let div = document.querySelector('div');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');

div.addEventListener('click', function() {
    console.log('DIV was clicked');
});

ul.addEventListener('click', function() {
    console.log('UL was clicked');
});

for (li of lis) {
    li.addEventListener('click', function() {
        console.log('LI was clicked');
    
    })
}