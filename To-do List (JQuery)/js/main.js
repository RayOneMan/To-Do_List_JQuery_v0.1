$(document).ready(function(){
    let tasks= []
    //Add task
    $('#input').change(function(){ 
        let input = $(this).val();
        tasks.push(input);
        $('ul').append('<li class="task">' + input + '<i class="TDcheck"></i> <i class="TDtrash"> </li>')
            if (tasks.length !== 0) {$(".empty").hide(500);
            $(".notEmpty").show(1000)}
        console.log(tasks);
        $(this).val('');
    
    });

    //Remove task
    $('ul').on('click','.TDtrash', function(){ 
        $(this).parent('li').fadeOut(0);
        tasks.pop();
        console.log(tasks);
        if (tasks.length == 0) {$(".empty").show(1000);
        $(".notEmpty").hide(500);}

    });

    //Check Task
    $('ul').on('click', '.TDcheck', function(){ 
        $(this).parent('li').toggleClass('task_checked');
    });
    });

