const webpack = require('webpack')
const prodConfig = require('./webpack.prod.config')
const path = require("path")
var fs = require('fs');

process.env.NODE_ENV = 'production'

const distPath = path.resolve(__dirname,"../dist")
clearFolder(distPath)
fs.mkdirSync(distPath);

webpack(prodConfig,(err,status)=>{
    if (err) throw err
    process.stdout.write(status.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')
})

function clearFolder(floderPath){
  var folder_exists = fs.existsSync(floderPath);
  if(folder_exists){
      var dirList = fs.readdirSync(floderPath);
      dirList.forEach(function(fileName){
          var childPath = floderPath + "/" + fileName;
          if(fs.statSync(childPath).isDirectory()) { // recurse
              clearFolder(childPath);
          } else { // delete file
              fs.unlinkSync(childPath);
          }
      });
      fs.rmdirSync(floderPath);
  };
}