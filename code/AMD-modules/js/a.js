
//console.log('a.js');

//----------------------------------------------

// (function () {

//     App.b.doWork();
//     App.c.doWork();
    
//     var o={
//         doWork:function(){
//             console.log('A work...');
//         }
//     };

//     App.a = o; // export

//  })();

//----------------------------------------------
 
define('js/a', ['js/b','js/c'], function (b,c) { 
    
    b.doWork();
    c.doWork();

    var i = 100;

    var o = {
        doWork:function(){
            console.log('A work...');
        }
    };

    return o;

});

//----------------------------------------------