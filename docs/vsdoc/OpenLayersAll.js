
  
/* vsdoc for _global_ */

(function (window) {
    

    window._global_ = {
        /// <summary></summary>
        /// <returns type="_global_"/>
                
        formatJs: function(source, escodegenOptions, esprimaOptions) {
            /// <summary>Pretty prints javaScript using esprima and escodegen. Line endings
            ///  will be converted to the value stored in os.EOL</summary>
            /// <param name="source" type="String">The source code to prettify.</param>
            /// <param name="escodegenOptions" type="Object">Optional. Use different settings for
            ///  escodegen.</param>
            /// <param name="esprimaOptions" type="Object">Optional. Use different settings for
            ///  esprima.</param>
        }
        
    };

    var $x = window._global_;
    $x.__namespace = "true";
    $x.__typeName = "_global_";
})(this);

  

  
/* vsdoc for cli */

(function (window) {
    

    window.cli = {
        /// <summary></summary>
        /// <returns type="cli"/>
                
        main: function(opts, opts.infile, opts.outfile) {
            /// <summary>main function called when script is accessed through the command line.</summary>
            /// <param name="opts" type="Object">Options object.</param>
            /// <param name="opts.infile" type="String">The name of the file to be read,
            ///  also accepts from stdin.</param>
            /// <param name="opts.outfile" type="String">The name of the file to write
            ///  results to</param>
        }, 
        
        readin: function(cb) {
            /// <summary>Reads from stdin and calls the callback on the data received.</summary>
            /// <param name="cb" type="Function">The callback function to execute on the received
            ///  data.</param>
        }
        
    };

    var $x = window.cli;
    $x.__namespace = "true";
    $x.__typeName = "cli";
})(this);

  

