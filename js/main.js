

//make a grid to add content to; this is a bit rough -- will explore other options later
//default dimensions are 50 * 50
function createGrid(width = 50, height = 50){

  //calculate how big a wrapper is required to contain the width...
  let wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  document.body.appendChild(wrapper);


  for(let y = 0;y<height;y++){
    for(let x = 0;x<width;x++){
      let markup = document.createElement("div");
      markup.className = "cell";
      wrapper.appendChild(markup);
    }
  }


}


createGrid();
