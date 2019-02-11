function setup() {
  createCanvas(400, 400);
  slider = createSlider(10,100,50);
}

function draw() {
  background(213, 222, 237);
  let InductiveKVA = 1754;
  let PI = 3.14159;
  var capacitance = slider.value();
  var capacitiveReactance = 1/(2*PI*60*capacitance*0.000001);
  var capacitiveKVA = 240*240/capacitiveReactance;
  var S_kvar = InductiveKVA - capacitiveKVA;

  S_KVA = sqrt(1500*1500 + S_kvar*S_kvar)

  var Current = S_KVA/240;

  var pf = 1500/S_KVA;


  //line
  fill(0,0,0)
  rect(50,50,5,150);//lefttop
  rect(50,50,300,5);//top
  rect(350,50,5,150);//right
  rect(50,200,305,5);//bottom

  //load
  fill(255,255,255);
  rect(335,70,35,60);
  fill(0,0,0);
  text("LOAD", 337, 30);
  text("1.5 kW", 290, 100);
  text("  Load", 290, 110);

  //source
  fill(255,255,255);
  ellipse(52,100,40);
  fill(0,0,0);
  text("SOURCE", 40, 30);
  text("240 V", 90, 90);
  text("RMS", 90, 100);
  text("60 Hz", 90, 110);

  //cap
  fill(0,0,0);
  rect(240,50,5,30);//topbranch
  rect(225,80,35,5);//topline 15px left start 30 wide
  rect(225,90,35,5);//bottomline
  rect(240,90,5,110);//bottombranch
  fill(0,0,0);
  text("CAP", 230, 30);
  text(slider.value(), 200, 100);
  text("uF", 200, 110);

  //Il
  fill(0,0,0);
  triangle(150,40,150,65,165,55);//topbranch
  text("SOURCE",153,70)
  text("CURRENT",153,80)

////////////////////////////////////////////////////////

  //Text markings

  //current
  text("I,SOURCE = ",50,300)
  text(Current.toFixed(2),50,312)

  //pow fac
  text("Power Factor = ",50,330)
  text(pf.toFixed(2),50,340)


  var y3 = S_kvar;

  y3 =  (y3 + 1537) * (340 - 260) / (1537 +418) + 260;

  //power circle
  fill(255,255,255);
  triangle(200,300,350,300,350,y3-20)

console.log(y3)









}
