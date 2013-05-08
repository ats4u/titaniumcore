/////////////////////////////////////////////////////////
//                                                     //
// "nonstructured.samples.js"                          //
// A Framework for Non-Structure Oriented Programming  //
// Automatic Test                                      //
// Copyright(c) 2008 Atsushi Oka [ http://oka.nu/ ]    //
// This script file is distributed under the LGPL      //
//                                                     //
/////////////////////////////////////////////////////////

function initializeTest() {

    if ( window != null ) {
	Nonstructured.frequency=0;
    }

    function execute(queue,all) {
	function Result( sequential, closure, name,endless, succeeded, count, elapsed, startTime, endTime ) {
	    this.sequential=sequential;
	    this.closure=closure;
	    this.name =name;
	    this.endless=endless;
	    this.succeeded=succeeded;
	    this.count=count;
	    this.elapsed=elapsed;
	    this.startTime=startTime;
	    this.endTime=endTime;
	};
	var result = [];
	var i = 0;
	var totalCount=0;
	var errorCount = 0;
	var lookup;

	if ( all ) {
	    lookup = function() {
	    };
	} else {
	    lookup = function(){
		while ( ( i < queue.length ) && ( ! queue[i].exec ) ) {
		    i++;
		}
	    };
	}

	lookup();

	var next = function( succeeded, count, elapsed, startTime, endTime ) {
	    if ( arguments.length != 0 ) {
		var correct = succeeded == (!queue[i].endless);
		trace( "SUCCEEDED=" + succeeded );
		trace( "ENDLESS=" + queue[i].endless );
		trace( "RESULT=" + ( correct ? "OK" : "***NG!***" ) );

		if ( ! correct ) {
		    errorCount++;
		}
		result.push( 
		    new Result( 
			i, 
			queue[i],
			queue[i].name,
			queue[i].endless,
			succeeded, count, elapsed, startTime, endTime 
		    ) 
		);
		i++;
	    }

	    lookup();

	    if ( i < queue.length ) {
		trace( "----------START!-----------" );
		trace( "I=" + i );
		trace( "NAME=" + queue[i].name );
		totalCount++;
		queue[i].ready().limit(100).done( next ).go();
	    } else {
		trace( "----------FINISHED!-----------" );
		trace( "all done!" );
		trace( "Total Count=" +totalCount );
		trace( "Error Count=" +errorCount );
	    }
	};
	next();
    }

    function define() {
	var queue = [];
	var func;
	var funcgen;



	func = function() {
	}
	func.name = "RESULT TEST ( undefined )";
	func.endless = true;
	// func.exec = true;
	queue.push( func );


	func = function() {
	    return null;
	}
	func.name = "RESULT TEST ( null )";
	func.endless = true;
	// func.exec = true;
	queue.push( func );


	func = function() {
	    return ({});
	}
	func.name = "RESULT TEST ( {} )";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	func = function() {
	    return 0;
	}
	func.name = "RESULT TEST ( 0 )";
	func.endless = true;
	// func.exec = true;
	queue.push( func );


	func = function() {
	    return '';
	}
	func.name = "RESULT TEST ( '' )";
	func.endless = true;
	// func.exec = true;
	queue.push( func );


	func = function() {
	    return true;
	}
	func.name = "RESULT TEST ( true )";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	func = function() {
	    return false;
	}
	func.name = "RESULT TEST ( true )";
	func.endless = true;
	// func.exec = true;
	queue.push( func );


	func = function() {
	    return BREAK;
	}
	func.name = "RESULT TEST ( BREAK )";
	func.endless = false;
	//func.exec = true;
	queue.push( func );


	func = function() {
	    return CONTINUE;
	}
	func.name = "RESULT TEST ( CONTINUE )";
	func.endless = true;
	// func.exec = true;
	queue.push( func );


	func = function() {
	    return EXIT;
	}
	func.name = "RESULT TEST ( EXIT )";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	func = function() {
	    return AGAIN;
	}
	func.name = "RESULT TEST ( AGAIN )";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	func = function() {
	    return ({}).BREAK();
	}
	func.name = "RESULT TEST ( ({}).BREAK() )";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	func = function() {
	    return ({}).CONTINUE();
	}
	func.name = "RESULT TEST ( ({}).CONTINUE() )";
	func.endless = true;
	// func.exec = true;
	queue.push( func );


	func = function() {
	    return ({}).EXIT();
	}
	func.name = "RESULT TEST ( ({}).EXIT() )";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	func = function() {
	    return ({}).AGAIN();
	}
	func.name = "RESULT TEST ( ({}).AGAIN() )";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	func = function() {
	    return [
		function() {
		    trace("HELLO");
		    return BREAK;
		},
		EXIT
	    ];
	}
	func.name = "RESULT TEST ( [] )";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	func = function() {
	    return function() {
		trace("HELLO");
		return BREAK;
	    };
	}
	func.name = "RESULT TEST ( function(){} )";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	func = function() {
	    return function() {
		trace("HELLO");
		return BREAK;
	    }.CONTINUE();
	}
	func.name = "RESULT TEST ( function(){} )";
	func.endless = true;
	// func.exec = true;
	queue.push( func );


	//////////////////////////////////////////////////////////////

	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    function() {
		trace( "world!" );
		return BREAK();
	    }
	];
	func.name = "list1";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    function() {
		trace( "world!" );
		return BREAK;
	    }
	];
	func.name = "list1";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    function() {
		trace( "world!" );
		return ({}).BREAK();
	    }
	];
	func.name = "list2";
	func.endless = false;
	// func.exec = true;
	queue.push( func );

	//

	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    function() {
		trace( "world!" );
		return CONTINUE();
	    }
	];
	func.name = "list3";
	func.endless = true;
	// func.exec = true;
	queue.push( func );


	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    function() {
		trace( "world!" );
		return CONTINUE;
	    }
	];
	func.name = "list3";
	func.endless = true;
	// func.exec = true;
	queue.push( func );


	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    function() {
		trace( "world!" );
		return ({}).CONTINUE();
	    }
	];
	func.name = "list4";
	func.endless = true;
	// func.exec = true;
	queue.push( func );

	//

	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    function() {
		trace( "world!" );
		return EXIT();
	    }
	];
	func.name = "list5";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    function() {
		trace( "world!" );
		return EXIT;
	    }
	];
	func.name = "list5";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    function() {
		trace( "world!" );
		return ({}).EXIT();
	    }
	];
	func.name = "list6";
	func.endless = false;
	// func.exec = true;
	queue.push( func );

	//

	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    function() {
		trace( "world!" );
		return AGAIN();
	    }
	];
	func.name = "list7";
	func.endless = true;
	// func.exec = true;
	queue.push( func );

	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    function() {
		trace( "world!" );
		return AGAIN;
	    }
	];
	func.name = "list7";
	func.endless = true;
	// func.exec = true;
	queue.push( func );


	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    function() {
		trace( "world!" );
		return ({}).AGAIN();
	    }
	];
	func.name = "list8";
	func.endless = true;
	// func.exec = true;
	queue.push( func );

	//

	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    function() {
		trace( "world!" );
		return LABEL();
	    }
	];
	func.name = "list9";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    function() {
		trace( "world!" );
		return LABEL;
	    }
	];
	func.name = "list9";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    function() {
		trace( "world!" );
		return ({}).LABEL();
	    }
	];
	func.name = "list10";
	func.endless = false;
	// func.exec = true;
	queue.push( func );



	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    CONTINUE
	];
	func.name = "list (CONTINUE DIRECT)";
	func.endless = true;
	// func.exec = true;
	queue.push( func );

	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    BREAK
	];
	func.name = "list (BREAK DIRECT)";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    EXIT
	];
	func.name = "list (EXIT DIRECT)";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    AGAIN
	];
	func.name = "list (AGAIN DIRECT)";
	func.endless = true;
	// func.exec = true;
	queue.push( func );


	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    LABEL
	];
	func.name = "list (LABEL DIRECT)";
	func.endless = false;
	// func.exec = true;
	queue.push( func );



	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    function() {
		trace( "world!" );
		return BREAK;
	    },
	    function() {
		trace( "AGAIN!" );
		return AGAIN;
	    },
	    function() {
		trace( "foo!" );
		return BREAK;
	    },
	    function() {
		trace( "bar!" );
		return BREAK;
	    }
	];
	func.name = "list ( AGAIN INDIRECT ) ";
	func.endless = true;
	// func.exec = true;
	queue.push( func );


	/*
	 * A constant value AGAIN can be used as a closure,too.
	 * It always returns AGAIN itself so this example is valid.
	 */
	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    function() {
		trace( "world!" );
		return BREAK;
	    },
	    AGAIN,
	    function() {
		trace( "foo!" );
		return BREAK;
	    },
	    function() {
		trace( "bar!" );
		return BREAK;
	    }
	];
	func.name = "list ( AGAIN DIRECT ) ";
	func.endless = true;
	// func.exec = true;
	queue.push( func );


	/**
	 * This is an example to implement a loop process with limited looping count.
	 */
	var v=0;
	func = [
	    function() {
		trace( "LOOP!" );
		return BREAK;
	    },
	    function() {
		if ( ++v<10 ) {
		    trace( "AGAIN." );
		    return AGAIN;
		} else {
		    trace( "BREAK." );
		    return BREAK;
		}
	    },
	    function() {
		trace( "EXIT." );
		return EXIT;
	    }
	];
	func.name = "list ( AGAIN WITH LIMITED COUNT ) ";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	/**
	 * This is an example of nested multi-statement.
	 */
	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    function() {
		trace( "world!" );
		return BREAK;
	    },
	    [
		function() {
		    trace( "hello!" );
		    return BREAK;
		},
		function() {
		    trace( "world!" );
		    return BREAK;
		},
		EXIT
	    ],
	    function() {
		trace( "foo!" );
		return BREAK;
	    },
	    function() {
		trace( "bar!" );
		return BREAK;
	    },
	    EXIT
	];
	func.name = "nested list.1";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	/**
	 * This is an example of nested multi-statement.
	 */
	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    function() {
		trace( "world!" );
		return BREAK;
	    },
	    [
		function() {
		    trace( "hello!" );
		    return BREAK;
		},
		function() {
		    trace( "world!" );
		    return BREAK;
		}
	    ],
	    function() {
		trace( "foo!" );
		return BREAK;
	    },
	    function() {
		trace( "bar!" );
		return BREAK;
	    }
	];
	func.name = "nested list.2 ( missing EXIT )";
	func.endless = false;
	// func.exec = true;
	queue.push( func );
	

	/**
	 * If a closure returns an Array object ( multi-statement ), it will be
	 * executed recursively. But an arbitrary object is recognized as true,
	 * it will never exit from the multiple-statement.  That is "foo!"
	 * "bar!" will never be printed. This example will not stop.
	 */
	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    function() {
		trace( "world!" );
		return BREAK;
	    },
	    function() {
		return [
		    function() {
			trace( "hello!" );
			return BREAK;
		    },
		    function() {
			trace( "world!" );
			return BREAK;
		    },
		    EXIT
		]
	    },
	    function() {
		trace( "foo!" );
		return BREAK;
	    },
	    function() {
		trace( "bar!" );
		return BREAK;
	    },
	    EXIT
	];
	func.name = "nested list ( by indirect calling without [].BREAK() )";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	/**
	 * BREAK() method is always available on any arbitrary object. Call
	 * BREAK() method on the Array object (multi-statement) to make it
	 * execute only once.
	 */
	func = [
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    function() {
		trace( "world!" );
		return BREAK;
	    },
	    function() {
		return [
		    function() {
			trace( "hello!" );
			return BREAK;
		    },
		    function() {
			trace( "world!" );
			return BREAK;
		    },
		    EXIT
		].BREAK();
	    },
	    function() {
		trace( "foo!" );
		return BREAK;
	    },
	    function() {
		trace( "bar!" );
		return BREAK;
	    },
	    EXIT
	];
	func.name = "nested list ( by indirect calling with [].BREAK() )";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	/*
	 *
	 */
	func = [
	    function() {
		trace( "hello,world!" );
		return BREAK;
	    },
	    function() {
		return [
		    function() {
			trace( "hello!" );
			return BREAK;
		    },
		    function() {
			trace( "world!" );
			return BREAK;
		    },
		    function() {
			trace( "1. returning EXIT injected function." );
			return function() {
			    trace( "2. EXIT injected function was called." );
			    return BREAK;
			}.EXIT();
		    }
		].BREAK();
	    },
	    function() {
		trace( "hello!" );
		return BREAK;
	    },
	    function() {
		trace( "world!" );
		return BREAK;
	    },
	    EXIT
	];
	func.name = "nested list ( by indirect calling with [].EXIT() )";
	func.endless = false;
	// func.exec = true;
	queue.push( func );



	/*
	 *
	 */
	func = [
	    function() {
		trace( "hello,world! 1.1" );
		return BREAK;
	    },
	    [
		function() {
		    trace( "hello,world! 2.1" );
		    return BREAK;
		},
		[
		    function() {
			trace( "hello,world! 3.1" );
			return BREAK;
		    },
		    function() {
			trace( "HELLO,WORLD!" );
			return BREAK;
		    },
		    function() {
			trace( "hello,world! 3.2" );
			return BREAK;
		    },
		    EXIT
		],
		function() {
		    trace( "hello,world! 2.2" );
		    return BREAK;
		},
		EXIT
	    ],
	    function() {
		trace( "hello,world! 1.2" );
		return BREAK;
	    },
	    EXIT
	];
	func.name = "triple nested array";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	/**
	 * This is an example for calling subroutine.
	 *
	 * A closure using nonstructured.js always takes three parameters. The
	 * parameters are called scope, param and subparam. 
	 *
	 * The scope parameter refers a object which is analogous to global
	 * scope in structured oriented programming. The scope parameter always
	 * refers the identical object druing the session.
	 *
	 * Parameter param and parameter subparam are used for calling
	 * subroutine. When a closure returns a newly generated closure, it will
	 * be called recursively as descibed above. In this case, if you set
	 * some fields on the object which is refered by the parameter subparam, 
	 * it will be able to be refered from the decendant closure.
	 *
	 * For further information, check below example.
	 *
	 */

	funcgen = function() {
	    var subroutine = function(scope,param,subparam) {
		trace( "hello,world! 2.1: subroutine" );
		// 2. you can retrieve the value 1729 on the param object.
		// 3. you can also set any value on the param object.  It can be refered later.
		param.result = param.value * param.value ; 
		return BREAK;
	    };
	    return [
		function(scope,param,subparam) {
		    trace( "hello,world! 1.1:" );
		    subparam.value = 1729;  // 1. Set any value on the subparam object.
		    return subroutine.BREAK();
		},
		function( scope, param, subparam ) {
		    trace( "hello,world! 1.2:" + subparam.result );
		    // 4. you can retrieve the value 2989441 (==1729*1729) on the subparam object.
		    return BREAK;
		},
		EXIT
	    ];
	};
	func = funcgen();
	func.name = "function calling test1";
	func.endless = false;
	// func.exec = true;
	queue.push( func );
	

	funcgen = function() {
	    var subroutine = function(scope,param,subparam) {
		trace( "hello,world! 2.1: subroutine" );
		// 2. you can retrieve the value 1729 on the param object.
		// 3. you can also set any value on the param object.  It can be refered later.
		param.result = param.value * param.value ; 
		return BREAK;
	    };
	    return [
		function(scope,param,subparam) {
		    trace( "hello,world! 1.1:" );
		    subparam.value = 1729;  // 1. Set any value on the subparam object.
		    return subroutine /*.BREAK()*/;
		},
		function( scope, param, subparam ) {
		    trace( "hello,world! 1.2:" + subparam.result );
		    // 4. you can retrieve the value 2989441 (==1729*1729) on the subparam object.
		    return BREAK;
		},
		EXIT
	    ];
	};
	func = funcgen();
	func.name = "function calling test2 ( without injection ) ";
	func.endless = false;
	// func.exec = true;
	queue.push( func );





	/**
	 * LABEL() method create an LABEL object.  The purpose of this object is
	 * for BREAKing nested multiple-statements. 
	 * For further information, see below example and comments.
	 */

	func = function() {
	    return LABEL("HELLO").BREAK();
	};
	func.name = "LABEL TEST1";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	func = function() {
	    return LABEL("HELLO");
	};
	func.name = "LABEL TEST2";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	funcgen = function( name ) {
	    return [
		function(scope,param,subparam) {
		    trace( "hello,world! 1.1" );
		    return BREAK;
		},
		[
		    function(scope,param,subparam) {
			trace( "hello,world! 2.1" );
			return BREAK;
		    },
		    [
			function(scope,param,subparam) {
			    trace( "hello,world! 3.1" );
			    return BREAK;
			},
			function(scope,param,subparam) {
			    trace( "hello,world! EXIT" );
			    return LABEL( name ).EXIT(); // Generating a LABEL object and alter it as EXIT value.
			},
			function(scope,param,subparam) {
			    trace( "hello,world! 3.2" );
			    return BREAK;
			},
			EXIT
		    ].IDENTIFY("LOOP3"), // Calling a injection to give a name to this multi-statement. Now its name is LOOP3. 
		    function(scope,param,subparam) {
			trace( "hello,world! 2.2" );
			return BREAK;
		    },
		    EXIT
		].IDENTIFY("LOOP2"), // Calling a injection to give a name to this multi-statement. Now its name is LOOP2. 
		function(scope,param,subparam) {
		    trace( "hello,world! 1.2" );
		    return BREAK;
		},
		EXIT
	    ].IDENTIFY("LOOP1"); // Calling a injection to give a name to this multi-statement. Now its name is LOOP1.
	};

	func = funcgen( "LOOP1" );
	func.name = "LABEL TEST(LOOP1)";
	func.endless = false;
	// func.exec = true;
	queue.push( func );

	func = funcgen( "LOOP2" );
	func.name = "LABEL TEST(LOOP2)";
	func.endless = false;
	// func.exec = true;
	queue.push( func );

	func = funcgen( "LOOP3" );
	func.name = "LABEL TEST(LOOP3)";
	func.endless = false;
	// func.exec = true;
	queue.push( func );

	func = funcgen( "LOOPX" );
	func.name = "LABEL TEST(LOOPX NOT FOUND)";
	func.endless = false;
	// func.exec = true;
	queue.push( func );




	/**
	 * This is an example of FOR method.
	 *
	 * FOR method generates a newly created closure which implements "for"
	 * statement in Non-Structure Oriented Programming.
	 *
	 * FOR() method takes three parameters "variable", "condition" and "loop".
	 *
	 *   - parameter variable  : give an initialized object to this parameter. 
	 *   - parameter condition : give a closure with one parameter that checks loop condition.
	 *   - parameter loop      : give a closure with one parameter that processes increment/decrement task.
	 *
	 *  For further information, see below example and comments.
	 */

	func = [
	    //   vvvv This object will be refered as parameter "vari" from the latter closures.
	    FOR( {i:0}, function(vari){ return vari.i<10;}, function(vari) { vari.i++ } ),
	    function(scope,param,subparam) {
		// A FOR closure always sets "variable" object on the object "param". 
		// It can be refered as "FOR" field. This object is identical to
		// object which is refered as "vari" parameter on this example.
		trace( param.FOR.i ); 
		return BREAK;
	    },
	    AGAIN // Always return AGAIN.
	];
	func.name = "FOR TEST";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	/**
	 *  This is a much complex example of FOR method.
	 */
	func = [
	    FOR( {i:0}, function(v){ return v.i<10;}, function(v) { v.i++ } ),
	    function(scope,param,subparam) {
		trace( param.FOR.i );
		return BREAK;
	    },
	    [
		function() { 
		    trace( "hello1" );
		    return BREAK;
		},
		function() { 
		    trace( "hello2" );
		    return BREAK;
		},
		function() { 
		    trace( "hello3" );
		    return BREAK;
		},
		EXIT
	    ],
	    AGAIN
	];
	func.name = "FOR & LOOP TEST";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	func = [
	    FOR( {i:0}, function(v){ return v.i<10;}, function(v) { v.i++ } ),
	    function(scope,param,subparam) {
		trace( param.FOR.i );
		return BREAK;
	    },
	    [
		function() { 
		    trace( "hello1" );
		    return BREAK;
		},
		function() { 
		    trace( "hello2" );
		    return BREAK;
		},
		function() { 
		    trace( "hello3" );
		    return BREAK;
		}
		// , EXIT
	    ],
	    AGAIN
	];
	func.name = "FOR & LOOP TEST";
	func.endless = false;
	// func.exec = true;
	queue.push( func );





	funcgen = function() {
	    function createSub(id,sub) {
		return [
		    function( scope, param, subparam ){
			subparam.i = param.i+1;
			trace( "calling"+id+":" + subparam.i );
			return sub.BREAK();
		    },
		    function( scope, param, subparam ){
			trace( "returned"+id+":" + subparam.result );
			param.result = subparam.result;
			return BREAK;
		    },
		    EXIT
		];
	    }
	    var sub2 = function( scope, param, subparam ){
		param.result = param.i*2;
		return BREAK;
	    };
	    return [
		function( scope, param, subparam ){
		    subparam.i = 1;
		    trace( "calling0:" + subparam.i );
		    return createSub( 1, createSub( 2, createSub( 3, sub2 ) ) ).BREAK();
		},
		function( scope, param, subparam ){
		    trace( "returned0:" + subparam.result );
		    return BREAK;
		},
		EXIT
	    ];
	};
	func = funcgen();
	func.name = "NESTED CALLING";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	funcgen = function() {
	    var midNone = function(){
		return BREAK();
	    };
	    var midExit1 = function(){
		return EXIT();
	    };
	    var midExit2 = function(){
		return LABEL("OUTER").EXIT();
	    };
	    function createSub(id,mid,sub) {
		return [
		    function( scope, param, subparam ){
			subparam.i = param.i+1;
			trace( "calling"+id+":" + subparam.i );
			return sub.BREAK();
		    },
		    mid,
		    function( scope, param, subparam ){
			trace( "returned"+id+":" + subparam.result );
			param.result = subparam.result;
			return BREAK;
		    },
		    EXIT
		];
	    }
	    var sub2 = function( scope, param, subparam ){
		param.result = param.i*2;
		return BREAK();
	    };

	    return function(scope,param,subparam) {
		subparam.i=0;
		var f = createSub( 0, midNone, createSub( 1, midNone,createSub( 2, midNone,createSub( 3, midExit2, sub2 ) ).IDENTIFY("OUTER") ) );
		trace( "f.IDENTIFIED()="+f.IDENTIFIED() );
		return f;
	    }
	};
	func = funcgen();
	func.name = "LABEL AS A FLOW CONTROLLER";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	func = [
	    function(){
		trace("HELLO1.1");
		return BREAK;
	    },
	    [
		function(){
		    trace("HELLO2.1");
		    return BREAK;
		},
		[
		    function(){
			trace("HELLO3.1");
			return BREAK;
		    },
		    [
			function(){
			    trace("HELLO4.1");
			    return BREAK;
			},
			[
			    function(){
				trace("HELLO5.1");
				return BREAK;
			    },
			    function(){
				trace("HELLO5.2");
				return LABEL("LOOP3").EXIT();
			    },
			    EXIT
			].IDENTIFY("LOOP5"),
			function(){
			    trace("HELLO4.2");
			    return BREAK;
			},
			EXIT
		    ].IDENTIFY("LOOP4"),
		    function(){
			trace("HELLO3.2");
			return BREAK;
		    },
		    EXIT
		].IDENTIFY("LOOP3"),
		function(){
		    trace("HELLO2.2");
		    return BREAK;
		},
		EXIT
	    ].IDENTIFY("LOOP2"),
	    function(){
		trace("HELLO1.2");
		return BREAK;
	    },
	    EXIT
	].IDENTIFY("LOOP1");
	func.name = "BREAK NESTED LOOP2";
	func.endless = false;
	// func.exec = true;
	queue.push( func );


	return queue;
    }

    var queue = define();
    execute( queue ,true );
}

// Nonstructured.frequency = 0;
initializeTest();


// vim:ts=8:

