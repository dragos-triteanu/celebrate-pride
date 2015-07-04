/**
 * Created by Dragos on 7/2/2015.
 */
$( document ).ready(function() {

    $(".fileUpload").change(function(){
        readURL(this);
    });

    $("#pridifyButton").on("click",function(){
        //Has browser issues on Firefox
        Prideify('.pridefyImage');
    });

    $("#saveImageButton").on("click",function(){
        var imageSource = document.getElementById("pridifyImage").src;
        var a =  $("<a>")
            .attr("href", imageSource)
            .attr("download", "myImage.png")
            .appendTo("body");
        a[0].click();
    });
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.pridefyImage').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}