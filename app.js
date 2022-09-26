var langTools = ace.require("ace/ext/language_tools");
var htmlEditor = ace.edit("html");
var cssEditor = ace.edit("css");
var jsEditor = ace.edit("js");
htmlEditor.session.setMode("ace/mode/html");
htmlEditor.resize();
htmlEditor.setHighlightActiveLine(false);
htmlEditor.setShowPrintMargin(false);
htmlEditor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });
htmlEditor.setTheme("ace/theme/cobalt");
cssEditor.setTheme("ace/theme/cobalt");
jsEditor.setTheme("ace/theme/cobalt");

var clicked = false;
function day_night(){
  if (clicked) { //this will be executed on future clicks after first click
   
    htmlEditor.setTheme("ace/theme/cobalt");
    cssEditor.setTheme("ace/theme/cobalt");
    jsEditor.setTheme("ace/theme/cobalt");
//console.log('Next click');
    clicked = false;
    //or do something else
  } else { //this will only be executed once
    htmlEditor.setTheme("ace/theme/chrome");
    cssEditor.setTheme("ace/theme/chrome");
    jsEditor.setTheme("ace/theme/chrome");
   // console.log('First click');
    clicked = true;
  }
   //update to true after first click
 
}

function btn1(){

  //var bootsraptxt = "<!--predefined html, but editable-->";
  var bootsraptxt = '' + 
'<!doctype html>' + '\n'+ 

'<html lang="en">' + '\n' + 
'  <head>' + '\n' + 
'    <meta charset="utf-8">'+ '\n' + 
'    <meta name="viewport" content="width=device-width, initial-scale=1">' + '\n' + 
'    <title>Bootstrap demo</title>' + '\n' + 
'    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">' + '\n' + 
'  </head>' + '\n' + 
'  <body>' + '\n' + 
'    <h1>Hello, world!</h1>' + '\n' + 
'    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>' + '\n' + 
'  </body>' + '\n' + 
'</html>' + '\n' + 
'';

  htmlEditor.setValue(bootsraptxt);
  
 // alert(htmlEditor.getValue());
}

function btn2(){

// var mydiv = document.getElementById("html");
// var mycontent = document.createElement("p");
// mycontent.appendChild(document.createTextNode("This is a paragraph"));
// mydiv.appendChild(mycontent);
//var anchor = editor.session.doc.createAnchor(10, 10)
htmlEditor.find('</title>',{
  backwards: false,
  wrap: false,
  caseSensitive: false,
  wholeWord: false,
  regExp: false,
  
});


var currentPosition = htmlEditor.selection.getCursor();

//alert(currentPosition);
var anchor = htmlEditor.session.doc.createAnchor(10, 10)
htmlEditor.session.insert(currentPosition, '\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>')
anchor.getPosition().row == 11

  
 // htmlEditor.insertBefore(document.createElement("head"), htmlEditor.firstChild);
  //console.log(htmlEditor.getValue());

}

function btn3(){

  var variable = '' + '\n' + 
'<!DOCTYPE html>' + '\n'+ 
'<html lang="en">'+ '\n' + 
'<head>' + '\n'+ 
'  <meta charset="UTF-8">'+ '\n' + 
'  <meta http-equiv="X-UA-Compatible" content="IE=edge">'+ '\n' + 
'  <meta name="viewport" content="width=device-width, initial-scale=1.0">'+ '\n' + 
'  <title>Document</title>'+ '\n' + 
'</head>'+ '\n' + 
'<body>'+ '\n' + 
'  ' + 
'</body>'+ '\n' + 
'</html>' + '\n' + 
'';

htmlEditor.setValue(variable);

}

$(document).ready(function() {
  $("#fundnow").click(function(){

   var q = document.getElementById("searchquery").value;

   htmlEditor.find(q,{
    backwards: false,
    wrap: false,
    caseSensitive: false,
    wholeWord: false,
    regExp: false,
    
  });

  }); 
});

$(document).ready(function() {
  $("#fleftbtn").click(function(){

   var q = document.getElementById("searchquery").value;

   htmlEditor.find(q,{
    backwards: false,
    wrap: false,
    caseSensitive: false,
    wholeWord: false,
    regExp: false,
    
  });
  htmlEditor.findPrevious();
  }); 
});

$(document).ready(function() {
  $("#frightbtn").click(function(){

   var q = document.getElementById("searchquery").value;

   htmlEditor.find(q,{
    backwards: true,
    wrap: false,
    caseSensitive: false,
    wholeWord: false,
    regExp: false,
    
  });
  htmlEditor.findNext();
  }); 
});


var downclicked = false;
$(document).ready(function() {
  $("#downreplaybtn").click(function(){
    if (downclicked) { //this will be executed on future clicks after first click
   
      document.getElementById("replaceclass").style.display="none";
  //console.log('Next click');
  downclicked = false;
      //or do something else
    } else { //this will only be executed once
      document.getElementById("replaceclass").style.display="";
     // console.log('First click');
     downclicked = true;
    }

    
  }); 
});


$(document).ready(function() {
  $("#replacenow").click(function(){
  var sq = document.getElementById("searchquery").value;
   var q = document.getElementById("replacequery").value;
  
   //htmlEditor.find(sq);
   htmlEditor.replace(q);
  // htmlEditor.findPrevious();
  }); 
});


$(document).ready(function() {
  $("#replaceallbtn").click(function(){
  var sq = document.getElementById("searchquery").value;
   var q = document.getElementById("replacequery").value;
  
   //htmlEditor.find(sq);
   htmlEditor.replaceAll(q);
  // htmlEditor.findPrevious();
  }); 
});

function onsubversion(){
  var input_val = document.getElementById('versionv').value;
 // alert(input_val);

  

 if(input_val == 1){

   document.getElementById("cardboot").style.display="";
   
 }
}




$(document).ready(function() {
  $("#Gridbtn").click(function(){
    var currentPosition = htmlEditor.selection.getCursor();

    var variable = '' + '\n' + 
'<div class="container text-center">'+ '\n' + 
'  <div class="row">'+ '\n' + 
'    <div class="col">' + '\n'+ 
'      Column'+ '\n' + 
'    </div>'+ '\n' + 
'    <div class="col">' + '\n'+ 
'      Column'+ '\n' + 
'    </div>'+ '\n' + 
'    <div class="col">'+ '\n' + 
'      Column'+ '\n' + 
'    </div>'+ '\n' + 
'  </div>'+ '\n' + 
'</div>' + '\n'+ 
'';
    //alert(currentPosition);
    var anchor = htmlEditor.session.doc.createAnchor(10, 10)
    htmlEditor.session.insert(currentPosition, '\n '+ variable)
   // anchor.getPosition().row == 11
  }); 
});

$(document).ready(function() {
  $("#Containersbtn").click(function(){
    var currentPosition = htmlEditor.selection.getCursor();
    var a = '<div class="container"></div>';
    //alert(currentPosition);
    var anchor = htmlEditor.session.doc.createAnchor(10, 10)
    htmlEditor.session.insert(currentPosition, '\n '+ a)
   // anchor.getPosition().row == 11
  }); 
});

$(document).ready(function() {
  $("#Columnsbtn").click(function(){
    var currentPosition = htmlEditor.selection.getCursor();
    var variable = ''  + 
'<div class="container text-center">' + '\n' + 
'  <div class="row align-items-start">' + '\n' + 
'    <div class="col">'+ '\n' + 
'      One of three columns' + '\n'+ 
'    </div>'+ '\n' + 
'    <div class="col">'+ '\n' + 
'      One of three columns'+ '\n' + 
'    </div>'+ '\n' + 
'    <div class="col">'+ '\n' + 
'      One of three columns'+ '\n' + 
'    </div>'+ '\n' + 
'  </div>'+ '\n' + 
'  <div class="row align-items-center">'+ '\n' + 
'    <div class="col">'+ '\n' + 
'      One of three columns'+ '\n' + 
'    </div>'+ '\n' + 
'    <div class="col">'+ '\n' + 
'      One of three columns'+ '\n' + 
'    </div>'+ '\n' + 
'    <div class="col">'+ '\n' + 
'      One of three columns'+ '\n' + 
'    </div>'+ '\n' + 
'  </div>'+ '\n' + 
'  <div class="row align-items-end">' + '\n'+ 
'    <div class="col">'+ '\n' + 
'      One of three columns'+ '\n' + 
'    </div>'+ '\n' + 
'    <div class="col">'+ '\n' + 
'      One of three columns'+ '\n' + 
'    </div>'+ '\n' + 
'    <div class="col">'+ '\n' + 
'      One of three columns'+ '\n' + 
'    </div>' + '\n'+ 
'  </div>'+ '\n' + 
'</div>'+ '\n' + 
'';
    //alert(currentPosition);
    var anchor = htmlEditor.session.doc.createAnchor(10, 10)
    htmlEditor.session.insert(currentPosition, '\n '+ variable)
   // anchor.getPosition().row == 11
  }); 
});


$(document).ready(function() {
  $("#Alertsbtn").click(function(){
    var currentPosition = htmlEditor.selection.getCursor();
    var variable = '' + 
    '<div class="alert alert-primary" role="alert">'+ '\n' + 
    '  A simple primary alert—check it out!' + '\n'+ 
    '</div>' + 
    '';
    //alert(currentPosition);
    var anchor = htmlEditor.session.doc.createAnchor(10, 10)
    htmlEditor.session.insert(currentPosition, '\n '+ variable)
   // anchor.getPosition().row == 11
  }); 
});

$(document).ready(function() {
  $("#Buttonbtn").click(function(){
    var currentPosition = htmlEditor.selection.getCursor();
    var variable = '' + 
'<button type="button" class="btn btn-primary">Primary</button>' + 
'';
    //alert(currentPosition);
    var anchor = htmlEditor.session.doc.createAnchor(10, 10)
    htmlEditor.session.insert(currentPosition, '\n '+ variable)
   // anchor.getPosition().row == 11
  }); 
});

$(document).ready(function() {
  $("#Buttongroupbtn").click(function(){
    var currentPosition = htmlEditor.selection.getCursor();
    var variable = '' + 
'<div class="btn-group" role="group" aria-label="Basic example">' + '\n'+ 
'  <button type="button" class="btn btn-primary">Left</button>'+ '\n' + 
'  <button type="button" class="btn btn-primary">Middle</button>'+ '\n' + 
'  <button type="button" class="btn btn-primary">Right</button>' + '\n'+ 
'</div>' + 
'';
    //alert(currentPosition);
    var anchor = htmlEditor.session.doc.createAnchor(10, 10)
    htmlEditor.session.insert(currentPosition, '\n '+ variable)
   // anchor.getPosition().row == 11
  }); 
});

function btn4(){

  htmlEditor.find('</title>',{
    backwards: false,
    wrap: false,
    caseSensitive: false,
    wholeWord: false,
    regExp: false,
    
  });
  
  
  var currentPosition = htmlEditor.selection.getCursor();
  var a = '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>';
  //alert(currentPosition);
  var anchor = htmlEditor.session.doc.createAnchor(10, 10)
  htmlEditor.session.insert(currentPosition, '\n '+ a)
  anchor.getPosition().row == 11
  

}



cssEditor.session.setMode("ace/mode/css");
cssEditor.resize();
cssEditor.setHighlightActiveLine(false);
cssEditor.setShowPrintMargin(false);
cssEditor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });



jsEditor.session.setMode("ace/mode/javascript");
jsEditor.resize();
jsEditor.setHighlightActiveLine(false);
jsEditor.setShowPrintMargin(false);
jsEditor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });




function compiler() {
  var htmlValue = htmlEditor.getValue();
 // alert(htmlValue);
  var cssValue = cssEditor.getValue();
  var jsValue = jsEditor.getValue();
  var result = document.getElementById("result").contentWindow.document;

  
   
  result.open();
  result.writeln(
    "<style>" +
    cssValue +
    "</style>" +
    htmlValue +
    "<script>" +
    jsValue +
    "</script>"
  );
  result.close();
}

var allButtons = document.querySelectorAll("#button-wrapper button");
var allPanels = document.querySelectorAll("#ide-container .panel-wrapper");

function switchPanel(panelIndex) {
  switcher(panelIndex);
}

switchPanel(0);

function runEdit(panelIndex) {
  switcher(panelIndex);
  compiler();
}

function switcher(panelIndex) {
  allButtons.forEach(function (node) {
    node.style.background = "";
  });
  allButtons[panelIndex].style.background = "#002240";
  allPanels.forEach(function (node) {
    node.style.display = "none";
  });
  allPanels[panelIndex].style.display = "block";
}