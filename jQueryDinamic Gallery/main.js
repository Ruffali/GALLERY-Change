$(document).ready(function(){
    $('.all').click(function(){
        var allDivs = $('.mainDivs');
        allDivs.each(function(){
            if($(this).attr('data-isoTop').indexOf(1) != -1){
                $(this).show()
            }else if(($(this).attr('data-isoTop').indexOf(1) == -1)){
                $(this).hide()
            }   
        })
    })
    $('.cities').click(function(){
        var allDivs = $('.mainDivs');
        allDivs.each(function(){
            if($(this).attr('data-isoTop').indexOf(2) != -1){
                $(this).show()
            }else if(($(this).attr('data-isoTop').indexOf(2) == -1)){
                $(this).hide()
            }   
        })
    })
    $('.nature').click(function(){
        var allDivs = $('.mainDivs');
        allDivs.each(function(){
            if($(this).attr('data-isoTop').indexOf(3) != -1){
                $(this).show()
            }else if(($(this).attr('data-isoTop').indexOf(3) == -1)){
                $(this).hide()
            }   
        })
    })
    $('.industrial').click(function(){
        var allDivs = $('.mainDivs');
        allDivs.each(function(){
            if($(this).attr('data-isoTop').indexOf(4) != -1){
                $(this).show()
            }else if(($(this).attr('data-isoTop').indexOf(4) == -1)){
                $(this).hide()
            }   
        })
    })
    $('.daylight').click(function(){
        var allDivs = $('.mainDivs');
        allDivs.each(function(){
            if($(this).attr('data-isoTop').indexOf(5) != -1){
                $(this).show()
            }else if(($(this).attr('data-isoTop').indexOf(5) == -1)){
                $(this).hide()
            }   
        })
    })
    $('.nightspace').click(function(){
        var allDivs = $('.mainDivs');
        allDivs.each(function(){
            if($(this).attr('data-isoTop').indexOf(6) != -1){
                $(this).show()
            }else if(($(this).attr('data-isoTop').indexOf(6) == -1)){
                $(this).hide()
            }   
        })
    })
})

