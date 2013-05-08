/*
 * RSA.test.js
 * See RSA.readme.txt for further information.
 *
 * Copyright(c) 2009 Atsushi Oka [ http://oka.nu/ ]
 * This script file is distributed under the LGPL
 */

    __unit( "RSA.test.js" );

    __uses( "packages.js" );
    // __uses( "trace.js" );
    // __uses( "elapse.js" );

    __uses( "SecureRandom.js" );
    __uses( "BigInteger.init1.js" );
    __uses( "BigInteger.init2.js" );
    __uses( "RSA.init1.js" );
    __uses( "RSA.init2.js" );

    // __uses( "nonstructured.js" );
    __uses( "BigInteger.init3.js" );
    __uses( "RSA.init3.js" );

    // import
    var BigInteger = titaniumcore.crypto.BigInteger;
    var RSA = titaniumcore.crypto.RSA;


    // var procPerSecond = null;
    // var procPerSecond = 1;
    // var procPerSecond = window==null?1:null;
    var timeout = 1;
    var frequency = window==null?1:0;
    if ( window == null ) {
    } else {
	Function.prototype.toString = function() {
	    return "(function)";
	};
    }

    var tracing = false;
    if ( tracing ) {
	Nonstructured.log = function(message){
	    trace(message);
	};
	BigInteger.log = function(message){
	    trace(message);
	};
	RSA.log = function(message) {
	    trace(message);
	};
    }
    
    Nonstructured.traceResponce( true );


    // var b = new BigInteger( "489234512" );
    // // trace( b.op_add( new BigInteger( "20" ) ) );
    // trace( new BigInteger( "11111111111111111111999999999999999999120" ).mod( b ) );

    trace( "hello" );

    function keyGenerateTest(keylen,exp) {
	var rsaKey = new RSA();

	function finalization() {
	    trace( "Finished!" );
	    trace( rsaKey.toString() );
	    trace( "---" );

	    var bytelen = Number(keylen/8);
	    variableText( rsaKey, bytelen );
	    trace( "---" );
	    variableText( rsaKey, bytelen );
	    trace( "---" );

	    ElapsedTime.display();
	    return BREAK;
	}
	var progress = function(c){
	    if ( c % 256 == 0 ) {
		trace( "progressing..."+c );
	    }
	}
	var done =function( succeeded, count, time ,startTime, finishTime ) {
	    trace( "process finished. count="+count + " elapse="+time +"ms " );
	    trace( "start:"+startTime.toString() );
	    trace( "finished:"+ finishTime.toString() );
	};
	var generator = rsaKey.stepping_generate(  keylen, exp );
	// ( [ generator , finalization, EXIT ] ).whip( procPerSecond, done );
	( [ generator , finalization, EXIT ] ).ready().frequency(frequency).timeout(timeout).progress(progress).done(done).go();
    }

    // keyGenerateTest(  "8","3");
    // keyGenerateTest(  "8","11");
    // keyGenerateTest(  "8","10001");
    // keyGenerateTest(  "16","3");
    // keyGenerateTest(  "32","10001");
    keyGenerateTest(  "128","10001");
    // keyGenerateTest(  "256","3");
    // keyGenerateTest(  "256","11" );
    // keyGenerateTest(  "256","13" );
    // keyGenerateTest(  "256","17" );
    // keyGenerateTest(  "256","10001" );
    // keyGenerateTest(  "512","10001" );
    // keyGenerateTest( "1024","10001" );
    // keyGenerateTest( "2048","10001" );
    // keyGenerateTest( "4096","10001" );

    function nextBytes( bs ) {
	for ( var i=0; i<bs.length; i++ ) {
	    bs[i]= Math.floor( Math.random() * 256 );
	}
	return bs;
    }


    function testVT( bitlen, count ) {
	var bytelen = Math.floor( bitlen/8 );
	var rsaKey = new RSA();
	var generate = rsaKey.stepping_generate( "" + bitlen, "10001" );
	// trace( "generate:"+generate );
	// trace( "rsaKey.encrypt:"+rsaKey.encrypt );
	// trace( "rsaKey.decrypt:"+rsaKey.decrypt );
	var error=0;
	var p = [
	    function(){
		trace("1************************");
		return BREAK;
	    },
	    generate,
	    function(){
		trace( "");
		trace( rsaKey.toString() );
		trace( "");
		trace("2************************");
		return BREAK;
	    },
	    [
		FOR( {i:0}, function(v){return v.i<count;}, function(v) {v.i++;} ),
		function(scope,param) {
		    trace("test:"+param.FOR.i );
		    trace( "***************************************************************" );
		    if ( variableText(rsaKey,bytelen ) ) {
		    } else {
			error++;
		    }
		    trace( "***************************************************************" );
		    trace("");

		    return BREAK;
		},
		AGAIN
	    ],
	    function() {
		if ( error==0 ) {
		    trace( "ALL OKAY!!" );
		} else {
		    trace( "FOUND ERROR!! count=" + error );
		}
		return BREAK;
	    },
	    function(){
		trace( "");
		trace( rsaKey.toString() );
		trace( "");
		return BREAK;
	    },
	    EXIT
	];

	var progress = function(c){
	    if ( c % 256 == 0 ) {
		trace( "progressing..."+c );
	    }
	}
	var done =function( succeeded, count, time ,startTime, finishTime ) {
	    trace( "process finished. count="+count + " elapse="+time +"ms " );
	    trace( "start:"+startTime.toString() );
	    trace( "finished:"+ finishTime.toString() );
	};

	// p.whip(timeout);
	p.ready().frequency(frequency).timeout(timeout).progress(progress).done(done).go();
    }

    // testVT(256,1000);


    function testActionScriptFalseOperation() {
	specTest(
	    "2be14a5f97a63100309cffa93e202fa2b134b2c65bd1b7fe9736db2f0406c712",
	    "8a5d78348fd5b24223bab405512b6bb74a5239d3a56cfe70cd987f69f6bafa59",
	    "10001",
	    "5c0a3f2adfbf2c3bf8de7a5fcb15d229722d9eea5cc35bb83032725cb44719bd"
	);

	specTest(
	    "6026448539dd1d77f75dd0fc057453c5506335b9f546fb007d3d47d929abd360",
	    "8a5d78348fd5b24223bab405512b6bb74a5239d3a56cfe70cd987f69f6bafa59",
	    "10001",
	    "5c0a3f2adfbf2c3bf8de7a5fcb15d229722d9eea5cc35bb83032725cb44719bd"
	);
    }
    // testActionScriptFalseOperation();

function specTest( hexText, n,e,d ) {
    var rsaKey = new RSA();
    rsaKey.privateKey( n, e, d );
    testCipher( rsaKey, new BigInteger( hexText, 16) );
}

function variableText( rsaKey, bytelen ) {
    // var text =  new Array( bytelen );
    // for ( var i=0;i<text.length;i++ ) {
    // 	text[i]=0x00;
    // }
    // text[0] =0xf0;
    // text.unshift(0);

    var text =  nextBytes( new Array( bytelen ) );
    // text.unshift(0);
    text[0] &= 0x7f;
    // text[0] = 0x00;

    var text = new BigInteger( text );
    trace( "bytelen="+bytelen );
    trace( "text.bitLength()"+text.bitLength() );
    return testCipher( rsaKey, text );
}

function testCipher( rsaKey, biText ) {
    var text = biText;
    var encrypted = rsaKey.processPublic( text );
    var decrypted = rsaKey.processPrivate( encrypted );
    trace( "t:" + text.     toString(16) );
    trace( "e:" + encrypted.toString(16) );
    trace( "d:" + decrypted.toString(16) );
    var v = text.compareTo( rsaKey.n ) ;
    if ( v<0 ) {
	// trace( "text < n" );
    } else if (v==0) {
	// trace( "text == n !!!!" );
    } else {
	trace( "n < text !!!!" );
    }
    if ( text.compareTo( decrypted ) == 0 ) {
	trace( "result:OK" );
	return true;
    } else {
	trace( "result:ERROR!" );
	return false;
    }
}


// vim:ts=8:noexpandtab:
