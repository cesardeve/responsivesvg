$responsiveSVG = {
  containerMinWidth: undefined,
  containerMinHeight: undefined,
  SVGContainer: undefined,
  divContainer: undefined,
  groupShape: undefined,
  currentScale: undefined,

  //Function that initialize the ResponsiveSVG Plugin
  init: function(containerMinWidth, containerMinHeight, svg_container, group_shape, svg_cell, customFunctions){
    $responsiveSVG.containerMinWidth = containerMinWidth;
    $responsiveSVG.containerMinHeight = containerMinHeight;
    $responsiveSVG.SVGContainer = document.getElementById(svg_container);
    $responsiveSVG.groupShape = document.getElementById(group_shape);
    $responsiveSVG.divContainer = document.getElementById(svg_cell);
    
    $responsiveSVG.firstRender();

    $responsiveSVG.triggers();
    $responsiveSVG.currentScale = $responsiveSVG.getScale($responsiveSVG.groupShape);

    if(customFunctions){
      customFunctions.forEach(function(item) {
        item();
      });
    }
      

  },

  //Triggers of application
  triggers: function(){
    $responsiveSVG.onGroupResize();
  },

  //Function that makes a fisrt Render of SVG
  firstRender : function(){
    if($responsiveSVG.getDimesions($responsiveSVG.divContainer).width < $responsiveSVG.containerMinWidth){
      differencePerc = ($responsiveSVG.getDimesions($responsiveSVG.divContainer).width/$responsiveSVG.containerMinWidth);
      $responsiveSVG.setScale(document.getElementById('group-shape'), differencePerc, differencePerc);
    }
    if($responsiveSVG.getDimesions($responsiveSVG.divContainer).height < $responsiveSVG.containerMinHeight){
      differencePerc = ($responsiveSVG.getDimesions($responsiveSVG.divContainer).height/$responsiveSVG.containerMinHeight);
      $responsiveSVG.setScale(document.getElementById('group-shape'), differencePerc, differencePerc);
    }
  },

  //Function that resize the group of shapes
  onGroupResize: function(){
    new ResizeSensor($responsiveSVG.divContainer, function() {
        containerHeight = $responsiveSVG.getDimesions($responsiveSVG.divContainer).height;
        containerWidth = $responsiveSVG.getDimesions($responsiveSVG.divContainer).width;

        percentageHeight = containerHeight/$responsiveSVG.containerMinHeight;
        percentageWidth= containerWidth/$responsiveSVG.containerMinWidth;

        if(containerHeight < $responsiveSVG.containerMinHeight || containerWidth < $responsiveSVG.containerMinWidth){

          if(percentageWidth < percentageHeight){
            percentageHeight = percentageWidth
          }else if(percentageHeight < percentageWidth){
            percentageWidth = percentageHeight
          }

          $responsiveSVG.setScale($responsiveSVG.groupShape, percentageWidth, percentageHeight)
          $responsiveSVG.setScale($responsiveSVG.SVGContainer, percentageWidth, percentageHeight)
        }

    });
  },

  //Getting scale of a element
  getScale: function(element){
    var scale = [];

    var result = element.getAttribute("transform").split("(").pop();
    result = result.replace(result.substring(result.length-1), "");
    result = result.split(" ");

    scale["x"] = result[0];
    scale["y"] = result[1];

    return scale;
  },

  //Set a scale in a element
  setScale: function(element, x, y){
    element.setAttribute("transform", "scale(" + x + " " + y +")");
  },

  //Getting area dimesions of a element
  getDimesions: function(element){
    var dimensions = [];
    dimensions['width'] = element.clientWidth;
    dimensions['height'] = element.clientHeight;
    return dimensions;
  },
  
}