/*
 * SOAEP.test.js
 * See SOAEP.readme.txt for further information.
 *
 * Copyright(c) 2009 Atsushi Oka [ http://oka.nu/ ]
 * This script file is distributed under the LGPL
 */

__unit( "SOAEP.test.js" );
__uses( "SOAEP.js" );
__uses( "binary.js" );

// import
var SOAEP = __import( this, "titaniumcore.crypto.SOAEP" );
var Cipher = __import( this, "titaniumcore.crypto.Cipher" );
var SecureRandom = __import( this, "titaniumcore.crypto.SecureRandom" );

if ( window != null ) {
    Function.prototype.toString = function() {
	return "[type Function]";
    };
}


function simple( textString,size ) {
    trace( "hello" );

    var cipher = Cipher.algorithm( Cipher.TWOFISH );
    var random = new SecureRandom();
    var soaep = new SOAEP( random, cipher );

    trace( "input:" );
    trace( textString );
    trace("");

    var text = str2utf8( textString );

    var encode = soaep.encode( text, size );
    trace( "encode:" );
    trace(  base16( encode ,16, ' ' ) );
    trace("");

    var decode = soaep.decode( encode, size );
    trace( "decode:" )
    trace( base16( decode, 16, ' ' ) );
    trace("");

    var decodeString = utf82str( decode );

    trace( "output:" );
    trace( decodeString );
    trace("");

    if ( cmparr( text,decode ) ) { 
	trace( "Ok.");
    } else {
	trace( "NG.");
    }
}

// simple( "hello,world! hello,world!" ,512/8);


function binary( text,size ) {
    var cipher = Cipher.algorithm( Cipher.TWOFISH );
    var random = new SecureRandom();
    var soaep = new SOAEP( random, cipher );

    trace( "input:" );
    trace(  base16( text ,16, ' ' ) );
    trace( "" );

    var encode = soaep.encode( text.concat(), size );
    trace( "encoded:" );
    trace(  base16( encode ,16, ' ' ) );
    trace( "" );

    var decode = soaep.decode( encode.concat(), size );
    trace( "output:" )
    trace( base16( decode, 16, ' ' ) );
    trace( "" );

    if ( cmparr( text, decode ) ) { 
	trace( "OK");
	return true;
    } else {
	trace( "*** NG! *** ");
	return false;
    }
}

function mct(trial,lenFrom, lenTo,size ) {
    var flg=true;
    for ( var t=0; t<trial; t++ ) {
	for ( var len=lenFrom; len<lenTo; len++ ) {
	    var text = new Array(len);
	    for ( var i=0;i<len;i++ ) {
		text[i] = Math.floor( Math.random()*256 );
	    }

	    try {
		if ( binary( text,size ) ) {
		} else {
		    flg=false;
		}

	    } catch ( e ) {
		flg=false;
		trace( "*** ERROR *** : an error occured " + e );
	    }
	    trace( "--------------------" );
	}
    }
    if ( flg ) {
	trace( "ALL OK" );
    } else {
	trace( "FOUND ERROR." );
    }
}

function testA() {
    binary( base16_decode( "0548252E85F2571A2233B32553302561A480B5BC1F28355C8D04FDF6B21B38F1B2B88202C5243F2CE2AF1DE664FC362AF7C42C19C1CC680C354303D6F056E70B" ), 1024/8 );
    binary( base16_decode( "FB2B11388B4775607A410AFCB4B70C8D342BABE3B63DC910F1DF10DF51DF20F440FB68F9320468CFE2681526E85A2C665865C83C607EC98D96F12119C0349F00" ), 1024/8 );
    // binary( [0x05,0x48,0x25,0x2E] , 1024/8 );
    // binary( base16_decode( "0548252E" ) , 1024/8 );
}
testA();


// mct(1,0,64,512/8);

// vim:ts=8 sw=4:noexpandtab:
