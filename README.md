# responsivesvg
Plugin for responsive SVG

# How to use
This plugin need JQuery to work.

You must pass:
 + Width and Height of SVG;
 + The div that contain the SVG;
 + The ID of of tag <svg>;
 + The group <g> that contains all shapes;

# How to call plugin
```javascript
$responsiveSVG.init(500, 480, '#svg-cell', '#svg-container', '#group-shape');
```

# Sample Struture

```html
<div class="svg" id="svg-cell">
  <svg baseProfile="full" id="svg-container" preserveAspectRatio="xMidYMid meet" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xlink="http://www.w3.org/1999/xlink" style="height: 533.91px;">
    <g id="group-shape" transform="scale(1.0 1.0)" style="transform: scale(1.11);">
      <!-- FIRST GRAY SHAPE -->
      <g id="polygon-before" style="display: none;">
        <path d="M50.75,68.559l152.5-30.5l-44,95c0,0-41.25-21.5-89-4.5L50.75,68.559z" fill="#CCCCCC"></path>
        <text class="polygon-text" x="90" y="85">BEFORE</text>
        <text class="polygon-text" x="68" y="105">MENOPAUSE</text>
      </g>
      <!-- SECOND GRAY SHAPE -->
      <g id="polygon-after" style="display: none;">
        <path d="M159.333,352.167l47.333,97l-157.667-30L68.667,358.5C68.667,358.5,122,376.5,159.333,352.167z" fill="#CCCCCC"></path>
        <text class="polygon-text" x="89" y="385">AFTER</text>
        <text class="polygon-text" x="67" y="405">MENOPAUSE</text>
      </g>
      <!-- POLYGON 1 -->
      <g class="polygon" id="polygon1">
        <path d="M160 134, 222 0, 393 125, 218 196 Q 203 156, 160 134"></path>
      </g>
      <!-- POLYGON 2 -->
      <g class="polygon" id="polygon2">
        <path d="M218 196, 393 125, 396 356, 218 287 Q 236 238, 218 196"></path>
      </g>
      <!-- POLYGON 3 -->
      <g class="polygon" id="polygon3">
        <path d="M218 287, 396 356, 224 481, 160 350 Q 202 331, 218 287"></path>
      </g>
      <!-- POLYGON 1 : HOVER -->
      <g class="group-shape-hover" id="polygon1-hover" style="display: none;">
        <path class="shape-hover" d="M160 134, 222 0, 393 125, 218 196 Q 203 156, 160 134"></path>
        <circle class="circle-out" cx="178" cy="170" r="50"></circle>
        <circle class="circle-out-red" cx="178" cy="170" r="40"></circle>
        <path class="fire" d="M167.034,192.211c0,0-6.036-3.197-6.042-11.846c-0.004-6.102,2.359-8.912,6.042-13.387
        c3.904-4.744,4.028-5.599,3.08-10.188c0,0,3.791,3.702,2.843,9.24c0,0,2.961-1.186,2.961-7.818s-1.658-8.529-4.5-11.49
        c0,0,5.094,0.354,11.253,8.174c6.16,7.817,6.16,13.859,6.16,17.77c0,0,3.199-1.777,0-9.477c0,0,3.643,1.834,4.146,11.846
        c0.554,11.003-6.281,18.124-15.993,18.242c0,0-10.305,0.355-13.029-10.661C163.954,182.615,161.481,184.389,167.034,192.211z" fill="#FFFFFF"></path>
      </g>
      <!-- POLYGON 2 : HOVER -->
      <g class="group-shape-hover" id="polygon2-hover" style="display: inline;">
        <path class="shape-hover" d="M218 196, 393 125, 396 356, 218 287 Q 236 238, 218 196"></path>
        <circle class="circle-out" cx="199" cy="242" r="50"></circle>
        <circle class="circle-out-red" cx="199" cy="242" r="40"></circle>
        <path class="fire" d="M188.034,262.211c0,0-6.036-3.197-6.042-11.846c-0.004-6.102,2.359-8.912,6.042-13.387
        c3.904-4.744,4.028-5.599,3.08-10.188c0,0,3.791,3.702,2.843,9.24c0,0,2.961-1.186,2.961-7.818s-1.658-8.529-4.5-11.49
        c0,0,5.094,0.354,11.253,8.174c6.16,7.817,6.16,13.859,6.16,17.77c0,0,3.199-1.777,0-9.477c0,0,3.643,1.834,4.146,11.846
        c0.554,11.003-6.281,18.124-15.993,18.242c0,0-10.305,0.355-13.029-10.661C184.954,252.615,182.481,254.389,188.034,262.211z" fill="#FFFFFF" style="display: none;"></path>
      </g>
      <!-- POLYGON 3 : HOVER -->
      <g class="group-shape-hover" id="polygon3-hover" style="display: none;">
        <path class="shape-hover" d="M218 287, 396 356, 224 481, 160 350 Q 202 331, 218 287"></path>
        <circle class="circle-out" cx="174" cy="309" r="50"></circle>
        <circle class="circle-out-red" cx="174" cy="309" r="40"></circle>
        <path class="fire" d="M164.034,329.211c0,0-6.036-3.197-6.042-11.846c-0.004-6.101,2.359-8.912,6.042-13.386
        c3.904-4.744,4.028-5.599,3.08-10.188c0,0,3.791,3.702,2.843,9.24c0,0,2.961-1.185,2.961-7.818s-1.658-8.529-4.5-11.491
        c0,0,5.094,0.355,11.253,8.174c6.16,7.818,6.16,13.86,6.16,17.77c0,0,3.199-1.777,0-9.477c0,0,3.643,1.835,4.146,11.846
        c0.554,11.003-6.281,18.124-15.993,18.242c0,0-10.305,0.356-13.029-10.661C160.954,319.615,158.481,321.389,164.034,329.211z" fill="#FFFFFF"></path>
      </g>
      <!-- TEXTS -->
      <text class="polygon-text" id="text-shape1" x="195" y="120">PERIMENOPAUSE</text>
      <text class="polygon-text" id="text-shape2" x="250" y="250">MENOPAUSE</text>
      <text class="polygon-text" id="text-shape3" x="195" y="370">POSTMENOPAUSE</text>
    </g>
  </svg>
</div>
```
