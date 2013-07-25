/**
 * @package ImpressPages

 *
 */

"use strict";

$(document).ready(function() {

    //if interactive file upload input found, load file upload javascript
    if ($('.ipModuleForm .ipmFileContainer').length) {
        $('body').append($('<script type="text/javascript" src="' + ip.baseUrl + ip.libraryDir + 'js/plupload/plupload.full.js"></script>'));
        $('body').append($('<script type="text/javascript" src="' + ip.baseUrl + ip.moduleDir + 'developer/form/public/file.js"></script>'));
    }

});