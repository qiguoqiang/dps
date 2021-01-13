module.exports = `
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>example11111</title>
    <style>
      @keyframes opacity {
        0% {
            opacity: 1
        }
        50% {
            opacity: .5
        }
        100% {
            opacity: 1
        }
      }

      @keyframes skeleton-stripes {
          0% {
                background-position: -500px 0;
            }
            100% {
                background-position: 500px 0;
            }
    }
    </style>
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
`;


// @keyframes skeleton-stripes {
//   0% {
//       background-position: -500px 0;
//   }
//   100% {
//       background-position: 500px 0;
//   }
// }

// @keyframes skeleton-stripes {
//   0% {
//       background-position: 0 0;
//   }

//   to {
//       background-position: 480px 0;
//   }
// }