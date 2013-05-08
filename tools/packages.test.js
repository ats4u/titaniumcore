
var p = __package( this, "a.b.c" );
p.hello = "hello!";
trace( a.b.c.hello ); // print 'hello!'

// define class
var Hello = function(){
};
Hello.prototype.hello = function(){
    trace( "hello!" );
};

// export
__export( this, "a.b.c.Hello",  Hello );

var IHello;
var hello;

// import
IHello = __import( this, "a.b.c.Hello" );
hello = new IHello();
hello.hello();

// import directly
IHello = this.a.b.c.Hello;
hello = new IHello();
hello.hello();


// error test throws an exception.
try {
IHello = __import( this, "a.B.c.Hello" );
} catch ( e ) {
    trace( "Error : " + e  );
}

