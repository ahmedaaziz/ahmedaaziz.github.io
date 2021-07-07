window.onload = function () { 
    

    // Filteration recent works
    var allBtn = document.querySelector("a[title=all]");
    var ngBtn = document.querySelector("a[title=angular]");
    var hBtn = document.querySelector("a[title=html]");
    var localzBtn = document.querySelector("a[title=localization]");
    


    ngBtn.addEventListener('click',function(){
        console.log('ng');
        var allCards = document.querySelectorAll('.col-md-4');
    
        for(var i = 0 ; i < allCards.length; i++){

            var filter = allCards[i].getAttribute('data-filter');

            if(filter == 'angular') {
                if(allCards[i].classList.contains('d-none')){
                    allCards[i].classList.remove('d-none')
                  }
                } else {
                allCards[i].classList.add('d-none');
                // console.log('not yet');
            }
    
        }
    
    })
    hBtn.addEventListener('click',function(){
        var allCards = document.querySelectorAll('.col-md-4');
    
        for(var i = 0 ; i < allCards.length; i++){

            var filter = allCards[i].getAttribute('data-filter');

            if(filter == 'html') {
              if(allCards[i].classList.contains('d-none')){
                allCards[i].classList.remove('d-none')
              }
                // console.log('Gotcha');
            } else {
                allCards[i].classList.add('d-none');
                // console.log('not yet');
            }
    
        }
    
    })
    localzBtn.addEventListener('click',function(){
        var allCards = document.querySelectorAll('.col-md-4');
    
        for(var i = 0 ; i < allCards.length; i++){

            var filter = allCards[i].getAttribute('data-filter');

            if(filter == 'localization') {
                // if filter equals localization, remove d-none
              if(allCards[i].classList.contains('d-none')){
                allCards[i].classList.remove('d-none')
              }
                // console.log('Gotcha');
            } else {
                allCards[i].classList.add('d-none');
                // console.log('not yet');
            }
    
        }
    
    })

    allBtn.addEventListener('click',function(){
        // console.log('all');
        var allCards = document.querySelectorAll('.col-md-4');
        
        for(var i = 0 ; i < allCards.length; i++){
              if(allCards[i].classList.contains('d-none')){
                 allCards[i].classList.remove('d-none');

              }
    
        }
    
    })



    // Hide Active filteration button and add active to another clicked 
    // let links = document.querySelectorAll('.recent-work_filteration__buttons a');
        
    // for(let i = 0; links.length > i ; i++) {
    //     links[i].addEventListener('click',function(){
    //         [].forEach.call(links, function(el){
    //             el.classList.remove('active')
    //         })

    //         if(links[i].classList.contains('active')){
    //             return false;
    //         } else {
    //             links[i].classList.add('active')
    //         }
    //     });
    // }

};
    
    

