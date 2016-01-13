var columns = require('columns').create();
var a = columns.addColumn('Column A');
// OR 
columns.addColumn('Column B');

setInterval(function(){
    a.write('foo');
    columns.column("Column B").write('The Time: ' + new Date() + '\n');
}, 1000);
