/*
 * SHA.test.js
 * See SHA.readme.txt for further information.
 * Simple test 
 * Check if two different class interfaces work same.
 */

if ( __PACKAGE_ENABLED ) {
    __unit( "SHA.test.js" );
    __uses( "jsSHA.js" );
    __uses( "jsSHA.class.js" );
    __uses( "SHA.js" );
    __uses( "binary.js" );
}


/*import*/ jsSHA = sha.jsSHA;
/*import*/ SHA = sha.SHA;

//var inputString = "hello,world! :-)";
var inputString = "c";

// var inputString = "ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc";
// test for sha

var hash1 = new jsSHA( inputString ).getHash( "SHA-1", "HEX" );
trace( "hash(jsSHA):" + hash1 );

var hash2 = base16( SHA.create( "SHA-1" ).hash( str2utf8( inputString ) ) );
trace( "hash(SHA)  :" + hash2 );

var hash3 = base16( SHA.create( "SHA-1", "binary", "binary" ).hash( str2utf8( inputString ) ) );
trace( "hash(SHA)  :" + hash3 );

var hash4 = SHA.create( "SHA-1", "string", "hex" ).hash( inputString );
trace( "hash(SHA)  :" + hash4 );


// vim:ts=8 sw=4:noexpandtab:
