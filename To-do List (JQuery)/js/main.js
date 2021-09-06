$(document).ready(function(){
    let tasks= [];

       ///checked localStorage
       if(localStorage.getItem('todo')){
        tasks = JSON.parse(localStorage.getItem('todo'));
        tasks.forEach(function(item) {
            $('ul').append(`<li class="list__task">${item.todo}<i class="TDstar"></i> <i class="TDcheck"></i> <i class="TDtrash"> </li>`)
            checkedEmpty();
        });
    }
    
    //checked ToDoList
    function checkedEmpty(){
        if (tasks.length !== 0){
            $(".list__empty").hide(500);
            $(".list__not-empty").show(1000)}
        $('.menu__input').val('');
    }

    //keybord Enter
    $('.menu__input').keydown(function(e){
        if(e.keyCode === 13 && $('.menu__input').val() != "" ){
            $('.menu__btn-add').trigger('click');}
    });

    //Add Task
    $('.menu__btn-add').click(function(){ 
        if ($('.menu__input').val() != ""){
            let input = $('.menu__input').val();    
            let newTodo= {
                todo: input,
                checked: false,
                importan: false,
            };
            tasks.push(newTodo);
            localStorage.setItem('todo', JSON.stringify(tasks));
            $('ul').append('<li class="list__task">' + input + '<i class="TDstar"></i> <i class="TDcheck"></i> <i class="TDtrash"> </li>')
            checkedEmpty();
        }
        else {
             alert('Pless Enter U Task');
             }
    });

    //Remove Task
    $('ul').on('click','.TDtrash', function(){ 
      $(this).parent('li').fadeOut(0);
        tasks.splice('li',1);
        if (tasks.length === 0) 
            {$(".list__empty").show(1000);
            $(".list__not-empty").hide(500);}
         localStorage.setItem('todo', JSON.stringify(tasks));
    });

    //Checked Task
    $('ul').on('click', '.TDcheck', function(){ 
        $(this).parent('li').toggleClass('task_checked');
    });

    //Important Task
    $('ul').on('click', '.TDstar', function(){ 
        $(this).parent('li').toggleClass('task_important');
    });
});
