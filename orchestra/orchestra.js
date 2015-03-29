function play(instrument)
{
  var sound;

  // Check what button was clicked.
  if (instrument === "violin") 
  {
    sound = "Cri-cri-cri";
    
  }
  else if (instrument === "trumpet")
  {
    sound = "Tu-tu-tu";
    

  }
  else if (instrument === "piano")
  {
    sound = "Pabam-pabam";
    
  }
   console.log(sound);
  // Display the sound.
  document.getElementById("scene").innerHTML = sound;
}