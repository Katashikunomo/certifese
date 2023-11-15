$(document).ready(function () {
    // Agregar clase 
    $('.category_list .category_Item[category="all"]').addClass('ct_item-active');
     $('.category_Item').click(function(){
        let catProduct = $(this).attr('category');
        console.log(catProduct);
         $('.category_Item').removeClass('ct_item-active');
         $(this).addClass('ct_item-active');

        //  Ocultando

        $('.product-item').css('transform', 'scale(0)');

        function hideProduct() {
            $('.product-item').hide(); 
        } setTimeout(hideProduct,400);
        // $('.product-item').hide();
        
        // Mostrar el seleccionado
        function showProduct(params) {
            
            $('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)')
            $('.product-item[category="'+catProduct+'"]').show();
        }setTimeout(showProduct,400)
     });

     $('.category_Item[category="all"]').click(function(){
         
         function showAll(params) {
             
             $('.product-item').css('transform','scale(1)');
             $('.product-item').show();
        }setTimeout(showAll, 400);
     });

})