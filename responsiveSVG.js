;
//define module
var $responsiveSVG = (function($) {
  var containerMinWidth;
  var containerMinHeight;
  var SVG;
  var SVGContainer;
  var SVGShape;

  // Function that initialize the ResponsiveSVG Plugin
  var init = function(contMinWidth, contMinHeight, svg, svgContainer, svgShape) {
    containerMinWidth = contMinWidth;
    containerMinHeight = contMinHeight;
    SVG = $(svg);
    SVGContainer = $(svgContainer);
    SVGShape = $(svgShape);

    firstRender();
    onGroupResize();
  };

  var getShapeHeight = function(element) {
    var shape = element.attr('id').split('#')[0];
    return document.getElementById(shape).getBBox().height;
  };

  // Function that makes a fisrt Render of SVG
  var firstRender = function() {
    var differencePerc = (SVG.width() / containerMinWidth);
    SVGContainer.height(getShapeHeight(SVGShape) * differencePerc);
    setScale(SVGShape, differencePerc);
  };

  // Function that resize the group of shapes
  var onGroupResize = function() {
    $(window).on('resize', function() {
      percentageWidth = $(SVG).width() / containerMinWidth;
      differencePerc = percentageWidth;

      setScale(SVGShape, differencePerc);
      var shapeHeight = getShapeHeight(SVGShape) * differencePerc;
      SVGContainer.height(shapeHeight);
    });
  };

  // Set a scale in a element
  var setScale = function(element, val) {
    element.css("transform", "scale(" + val + ")");
  };

  return {
    init : init,
  };
})(jQuery);
