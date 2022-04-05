screen_height = 0;
screen_width = 0;
draw_apple = "";
apple = "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=20&m=185262648&s=612x612&w=0&h=nxfd_QVNvUHjaZLq-p7jnF_TFm1N-vZTSy-wFyScoQg=";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event) 
{
    console.log(event);

    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;
    if(content == "apple")
    {
        screen_height = Math.floor(Math.random() * 900);
        screen_width = Math.floor(Math.random() * 600);   
        document.getElementById("status").innerHTML = "Started drawing Apple ";
        draw_apple = "set"; 
    }
}

function setup()
{
    canvas = createCanvas(900, 600);
}

function draw() {
    if(draw_apple == "set")
    {
      radius = Math.floor(Math.random() * 100);
      circle(screen_height, screen_width, radius);
      document.getElementById("status").innerHTML = "Apple is drawn ";
      draw_apple = "";
    }
  
  }