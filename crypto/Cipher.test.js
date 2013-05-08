/*
 * Cipher.text.js
 * A block-cipher algorithm implementation on JavaScript
 * See Cipher.readme.txt for further information.
 *
 * Copyright(c) 2009 Atsushi Oka [ http://oka.nu/ ]
 * This script file is distributed under the LGPL
 */

__unit( "Cipher.test.js" );
__uses( "packages.js" );
__uses( "Cipher.js" );

//
// import
//
var Cipher = __import( this, "titaniumcore.crypto.Cipher" );


/**
 * Returns a string of hexadecimal digits from a byte array. Each
 * byte is converted to 2 hex symbols.
 */
var HEX_DIGITS = [ '0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F' ];

function toHexNIST(ba) {
    var length = ba.length;
    var buf = new Array( length * 2 );
    for (var i = length, j = 0, k; i > 0; ) {
	k = ba[--i];
	buf[j++] = HEX_DIGITS[(k >>> 4) & 0x0F];
	buf[j++] = HEX_DIGITS[ k        & 0x0F];
    }
    var s="";
    for ( var i=0; i<buf.length; i++ ) {
	s=s+buf[i];
    }
    return s;
}

function toString( ba ) {
//    return toHexNIST( ba );
    return base16( ba );
}

function test( algorithm, keyBytes, dataBytes ) {
    var encrypt = Cipher.create( algorithm, Cipher.ENCRYPT, Cipher.ECB, Cipher.NO_PADDING );
    var decrypt = Cipher.create( algorithm, Cipher.DECRYPT, Cipher.ECB, Cipher.NO_PADDING );

    var inputText  = dataBytes.concat();
    var cipherText = encrypt.execute( keyBytes, inputText.concat() );
    var outputText  = decrypt.execute( keyBytes, cipherText.concat() );

    trace( "algorithm :" + algorithm );
    trace( "key :" + toString( keyBytes ) );
    trace( "text :" + toString( inputText ) );
    trace( "encrypt:"+ toString( cipherText ) );
    trace( "decrypt:"+ toString( outputText ) );
    trace("");
}

function vk( algorithm ) {
    var encrypt = Cipher.create( algorithm, Cipher.ENCRYPT, Cipher.ECB, Cipher.NO_PADDING );
    var decrypt = Cipher.create( algorithm, Cipher.DECRYPT, Cipher.ECB, Cipher.NO_PADDING );

    var arrays = [
	[ 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0 ],
	[ 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0 ],
	[ 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0 ]
    ];

    for ( var ai=0; ai<arrays.length; ai++ ) {
	var key = arrays[ai];
	var I=0;
	trace( "==========" );
	trace( "" );
	trace( "KEYSIZE=" + (key.length*8) );
	trace( "" );
	trace( "PT=" + toString( [ 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0 ] ) );
	trace( "" );
	for ( var i=0; i<key.length; i++ ) {
	    for ( var j=0; j<8; j++ ){
		I++;
		var value = 1 << ( 7-j );
		key[i] = value;

		var text = [ 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0 ];

		encrypt.execute( key, text );

		trace( "I="+I );
		// trace( "KEY="+toString( key ).toLowerCase() );
		// trace( "CT="+toString( text ).toLowerCase() );
		trace( "KEY="+toString( key ) );
		trace( "CT="+toString( text ) );
		trace( "");
	    }
	    key[i]=0;
	}
    }
}

function vt( algorithm ) {
    var encrypt = Cipher.create( algorithm, Cipher.ENCRYPT, Cipher.ECB, Cipher.NO_PADDING );

    var arrays = [
	[ 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0 ],
	[ 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0 ],
	[ 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0 ]
    ];

    for ( var ai=0; ai<arrays.length; ai++ ) {
	var key = arrays[ai];
	var I=0;
	var text = [ 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0 ];
	trace( "==========" );
	trace( "" );
	trace( "KEYSIZE=" + (key.length*8) );
	trace( "" );
	trace( "KEY=" + toString( key ) );
	trace( "" );

	for ( var i=0; i<text.length; i++ ) {
	    for ( var j=0; j<8; j++ ){
		I++;
		var value = 1 << ( 7-j );
		text[i] = value;

		text2 = text.concat();
		encrypt.execute( key,text2 );

		trace( "I="+I );
		// trace( "PT="+toString( text ).toLowerCase() );
		// trace( "CT="+toString( text2 ).toLowerCase() );
		trace( "PT="+toString( text ) );
		trace( "CT="+toString( text2 ) );
		trace( "");
	    }
	    text[i]=0;
	}

    }
}

function ecb_e( algorithm ) {
    var encrypt = Cipher.create( algorithm, Cipher.ENCRYPT, Cipher.ECB, Cipher.NO_PADDING );

    var arrays = [
	[ 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0 ],
	[ 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0 ],
	[ 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0 ]
    ];

    for ( var ai=0; ai<arrays.length; ai++ ) {
	var key = arrays[ai];
	var I=0;
	var text = [ 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0 ];
	trace( "==========" );
	trace( "" );
	trace( "KEYSIZE=" + (key.length*8) );
	trace( "" );

	for ( var i=0; i<40; i++ ) {
	    I++;
	    trace( "I=" + I );
	    trace( "KEY=" + toString( key ) );
	    trace( "PT=" + toString( text ) );

	    encrypt.execute( key, text );

	    trace( "CT=" + toString( text ) );
	    trace( "" );

	    for ( var j=0; j<key.length; j++ ) {
		key[j] ^= text[j % text.length ];
	    }
	}

    }
}


// var keyBytes  = str2utf8( "hello   hello   " );
// var dataBytes = str2utf8( "hello,world! :-)" );
// test1(keyBytes,dataBytes);

// test( Cipher.RIJNDAEL,keyBytes, dataBytes );
// test( Cipher.TWOFISH ,keyBytes, dataBytes );
// test( Cipher.SERPENT ,keyBytes, dataBytes );

// trace( toHexNIST( [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15  ] ) );

// test( Cipher.RIJNDAEL, [ 0x80,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0 ], [ 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0 ] )
// test( Cipher.TWOFISH,  [ 0x80,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0 ], [ 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0 ] )
// test( Cipher.SERPENT,  [ 0x80,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0 ], [ 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0 ] )

// test( Cipher.RIJNDAEL, [ 0x00,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0 ], [ 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0 ] )
// test( Cipher.TWOFISH,  [ 0x00,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0 ], [ 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0 ] )
// test( Cipher.SERPENT,  [ 0x00,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0 ], [ 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0 ] )


// vk( Cipher.RIJNDAEL );
// vk( Cipher.SERPENT  );
// vk( Cipher.TWOFISH  );

vt( Cipher.RIJNDAEL );
// vt( Cipher.SERPENT  );
// vt( Cipher.TWOFISH  );

// ecb_e( Cipher.RIJNDAEL );
// ecb_e( Cipher.SERPENT  );
// ecb_e( Cipher.TWOFISH  );


// vim:ts=8 sw=4:noexpandtab:
