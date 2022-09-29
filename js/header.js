let btnmenu = document.getElementById('menu');
let slider = document.getElementById('slider');


btnmenu.onclick = function(){

    if(slider.style.display == 'none'){
        slider.style.display = 'block';
    }else if(slider.style.display == 'block'){
        slider.style.display = 'none';
    }
}