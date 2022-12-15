var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(img){
    var imagenobjeto=img;
    imagenobjeto.scaleToWidth(700);
    imagenobjeto.scaleToHeight(510);
    imagenobjeto.set({
    top:0,
    left:0
    });
    canvas.add(imagenobjeto);

    }
    );

	
}

function tocarmusica(){
x.play();
}
  