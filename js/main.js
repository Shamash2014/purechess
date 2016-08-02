'use strict';

// Using strict mode, the best thing we can do

let main = () => {
  // generating html canvas and drawning chess board
  draw({
    width: 400,
    height: 400,

    tile: {
      width: 8,
      height: 8
    },

    backgrounds: {
      white: 'white',
      black: 'black'
    }
  });
}

let drawSquare = (cntx, { x, y, color, height, width }) => {
  cntx.fillStyle = color;
  return cntx.fillRect(x, y, width, height);
}

let drawPiece = (cntx, { charCode, x, y }) => {
  cntx.font = '40px Arial';
  return cntx.fillText(String.fromCharCode(charCode), x, y)
}

let isEven = (num) => (num == 0 || num % 2 == 0);

let draw = ({ width, height, tile, backgrounds }) => {
   let canvas = document.getElementById('board');
   let ctx = canvas.getContext('2d');

   let tileHeight = height / tile.height;
   let tileWidth = width / tile.width;

   const rows = [...Array(tile.width).keys()];
   const columns = [...Array(tile.height).keys()];

   rows.forEach((row) => {
     const y = row * tileHeight;

     return columns.forEach((column) => {
       const x = column * tileWidth;

       let color = ((isEven(row) && !isEven(column)) || (!isEven(row) && isEven(column))) ? backgrounds.black : backgrounds.white;

       drawSquare(ctx, {
         x,
         y,
         color,
         height: tileHeight,
         width: tileWidth
       })

       drawPiece(ctx, {
         charCode: 9821,
         x,
         y
       })
     })
   })
}

main();
