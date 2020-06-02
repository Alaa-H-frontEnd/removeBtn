
function add() {
    let addInput = `
    
                <div id="form_remove">
                    <input type="text" class="form-control remv" > <br>
                    <button onclick="remove_input()" class="btn btn-danger mb-5 remv" id="del">remove</button> <br>
                </div>    
                    
                    `;

    $('#more').append(addInput);
    
}
 
function remove_input(){
   

        $('#form_remove').remove();
        

}




// $('#del').click(function(){

//         $('#form_remove').remove('.remv');
//     });




// ##################################################################################################

// SCROLL....
// $('.navcustom ul li').click( function(){

//     $(this).children().toggleClass('active');
//     $(this).siblings().children().removeClass('active');
// } );




