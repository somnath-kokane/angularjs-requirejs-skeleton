/* 
 * @Author: somnath
 * @Date:   2015-06-17 11:55:40
 * @Last Modified by:   somnath
 * @Last Modified time: 2015-06-17 14:04:16
 */

'use strict';

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/../'));
try {
    app.listen(1337);
    console.log('server started on http://localhost:1337/');
} catch (e) {
    console.log('could not start server on 1337 port');
}