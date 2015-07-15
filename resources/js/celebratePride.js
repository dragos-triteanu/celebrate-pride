/**
 * Created by Dragos on 7/2/2015.
 */
    function previewfile(file) {
        if (tests.filereader === true && acceptedTypes[file.type] === true) {
            var reader = new FileReader();
            $('#holder').find('img').remove();
            reader.onload = function (event) {
                 var image = new Image();
                 image.src = event.target.result;
                 image.className ='pridefyImage';
                 image.id ='pridifyImage';
                 holder.appendChild(image);
                };
            reader.readAsDataURL(file)
     }  else {
        holder.innerHTML += '<p>Uploaded ' + file.name + ' ' + (file.size ? (file.size/1024|0) + 'K' : '');
        console.log(file); }
     }

    var holder =  document.getElementById('holder'),
        tests = {
            filereader: typeof FileReader != 'undefined',
            dnd: 'draggable' in document.createElement('span'),
            formdata: !!window.FormData,
            progress: "upload" in new XMLHttpRequest
        },
        acceptedTypes = {
            'image/png': true,
            'image/jpeg': true,
            'image/gif': true
        }

    if (tests.dnd) {
        holder.ondragover = function () {
            this.className = 'hover';
            return false;
        };
        holder.ondrop = function (e) {
            e.preventDefault();
            previewfile(e.dataTransfer.files[0]);
        }

$( document ).ready(function() {

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

}
