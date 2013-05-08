
function initScramble( packageRoot ) {
    if ( packageRoot.__PACKAGE_ENABLED ) {
        __unit( "scramble.js" );
        __uses( "packages.js" );
    }
    function encode( s ) {
    }
    function decode() {
    }
    function Scrambler() {
    }
    Scrambler.encode = encode;
    Scrambler.decode = decode;

    __export( packageRoot, "titaniumcore.crypto.Scrambler", Scrambler );
}
