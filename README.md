# responsivesvg
Plugin for responsive SVG

# How to call plugin
```javascript
customFunctions = [];
$responsiveSVG.init(
  containerMinWidth = 500,
  containerMinHeight = 480,
  SVGContainer = 'svg-container',
  groupShape = 'group-shape',
  divContainer = 'svg-cell',
  customFunctions
);
```

# Struture

```html
<div class="col-md-6" id="svg-cell">
    <svg
      version="1.1"
      baseprofile="full"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:ev="http://www.w3.org/2001/xml-events"
      id="svg-container"
      width="500" 
      height="480"
      viewBox="-100 0 500 480"
      preserveAspectRatio="xMidYMid meet"
    >     
      <g id="group-shape" transform="scale(1.0 1.0)">  
        <!-- POLYGON 1 -->
        <g id="polygon1" class="polygon">
          <path d="M160 134, 222 0, 393 125, 218 196 Q 203 156, 160 134"/>
        </g>
        <!-- POLYGON 2 -->
        <g id="polygon2" class="polygon">
          <path d="M218 196, 393 125, 396 356, 218 287 Q 236 238, 218 196" class="polygon"/>
        </g>
        <!-- POLYGON 3 -->
        <g id="polygon3" class="polygon">
          <path d="M218 287, 396 356, 224 481, 160 350 Q 202 331, 218 287"/>
        </g>
    </svg>
  </div>
  ```
