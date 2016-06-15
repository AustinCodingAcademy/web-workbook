/**
 * Timing.js 1.0.4
 * Copyright 2015 Addy Osmani
 */
(function(window) {
    'use strict';

    /**
     * Navigation Timing API helpers
     * timing.getTimes();
     **/
    window.timing = window.timing || {
        /**
         * Outputs extended measurements using Navigation Timing API
         * @param  Object opts Options (simple (bool) - opts out of full data view)
         * @return Object      measurements
         */
        getTimes: function(opts) {
            var performance = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance;

            if (performance === undefined) {
                console.log('Unfortunately, your browser does not support the Navigation Timing API');
                return;
            }

            var timing = performance.timing;
            var api = {};
            opts = opts || {};

            if (timing) {
                if(opts && !opts.simple) {
                    for (var k in timing) {
                        if (timing.hasOwnProperty(k)) {
                           // api[k] = timing[k];
                        }
                    }
                }

                // Total time from start to load
                api.loadTime = timing.loadEventEnd - timing.fetchStart;
                api.fetchStart = timing.fetchStart; 
                api.LoadEvent = timing.loadEventEnd;
                // Time spent constructing the DOM tree
                api.domReadyTime = timing.domComplete - timing.domLoading;
                // Time consumed preparing the new page
                api.readyStart = timing.fetchStart - timing.navigationStart;
                // Time spent during redirection
                api.redirectTime = timing.redirectEnd - timing.redirectStart;
                // AppCache
                api.appcacheTime = timing.domainLookupStart - timing.fetchStart;
                // Time spent unloading documents
                api.unloadEventTime = timing.unloadEventEnd - timing.unloadEventStart;
                // DNS query time
                api.lookupDomainTime = timing.domainLookupEnd - timing.domainLookupStart;
                // TCP connection time
                api.connectTime = timing.connectEnd - timing.connectStart;
                // Time spent during the request
                api.requestTime = timing.responseEnd - timing.requestStart;
                // Request to completion of the DOM loading
                api.initDomTreeTime = timing.domInteractive - timing.responseEnd;
                // Load event time
                api.loadEventTime = timing.loadEventEnd - timing.loadEventStart;

            }

            return api;
        },
        /**
         * Uses console.table() to print a complete table of timing information
         * @param  Object opts Options (simple (bool) - opts out of full data view)
         */
        printTable: function(opts) {
            var table = {};
            var data  = this.getTimes(opts) || {};
            Object.keys(data).sort().forEach(function(k) {
                table[k] = {
                    ms: data[k],
                    s: +((data[k] / 1000).toFixed(2))
                };
            });
            //console.table(table);
        },
        /**
         * Uses console.table() to print a summary table of timing information
         */
        printSimpleTable: function() {
            this.printTable({simple: true});
        }
    };

    // By default, print the simple table
    return window.timing.printSimpleTable();

})(this);

beacon = function(opts){
    // Make sure we have a base object for opts
    opts = opts || {};
    // Setup defaults for options
    opts.url = opts.url || null;
    opts.vars = opts.vars || {};
    opts.error = opts.error || function(){};
    opts.success = opts.success || function(){};
 
    // Split up vars object into an array
    var varsArray = [];
    for(var key in opts.vars){ varsArray.push(key+'='+opts.vars[key]); }
    // Build query string
    var qString = varsArray.join('&');
 
    // Create a beacon if a url is provided
    if( opts.url )
    {
        // Create a brand NEW image object
        var beacon = new Image();
        // Attach the event handlers to the image object
        if( beacon.onerror )
        { beacon.onerror = opts.error; }
        if( beacon.onload )
        { beacon.onload  = opts.success; }
 
                // Attach the src for the script call
        beacon.src = opts.url + '?' + qString;
    }
}


window.addEventListener('load', function() {
	setTimeout(function(){
	var Timings = timing.getTimes(); 
	Timings.TestID = SC_RumID; 
    beacon({
          url : 'https://rum.statuscake.com:8000/',
          vars : Timings,
     });
	},100); 
  });

