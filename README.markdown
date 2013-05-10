
Titaniumcore Javascript Cryptography Toolkit
============================================

Author :  Atsushi Oka (I am from Japan)  
Website : http://ats.oka.nu/  https://github.com/ats4u  

PREFARE
-------

Titaniumcore is a Javascript Cryptography Toolkit which supports asynchronous
RSA key generation. The source code set that this github repository contains
is formerly published as "Titaniumcore.js" at the website http://ats.oka.nu/
since Jan 23,2009.

Titaniumcore contains a number of known bugs which have not been fixed yet, so
please take great care when you apply this library to your application.



BACKGROUND
----------

Please let me explain the background of writing Titaniumcore.

I wrote this library in 2008 as a challenge. 

I have graduated neither high school nor university. Since I moved to Thailand
from Japan in the middle of 2005, I have been trying to educate myself with
cheap living cost in Thailand.

In late 2008, I was learning about cryptographic algorithm and related topics.
After I finished reading the Bruce Schneier's _Applied Cryptography_, I thought
I needed some practical challenge such as writing code which use cryptographic
algorithm.

At that time, I was developing a system which I invent by myself. ( And the
system is still under development.) The system needed client side RSA processing
such as RSA key generation. I felt that RSA processing might be a good trial to
me to learn cryptographic programming.

Somehow I thought the library must endure in practical use. RSA key generation
usually consumes large CPU time. Especially, in 2008, common browsers were not
so powerful as modern browsers in 2013. This is the reason I have invented an
asynchronous processing framework in JavaScript.

Since I published it to my website, a number of applications adopt
Titaniumcore.  I did not expect such many people use my library. Indeed, it was
so exciting for me but this library was merely written to implement simple and
small applicatons not for any enterprise-like large systems which may refer
a number of libraries at same time.

When you apply Titaniumcore.js in a larger project, I think the most serious
problem which the library causes is function name conflict which is caused by
extending Object.prototype. Extending Object.prototype effectively breaks the
consistency of 'for ( var i in obj )' style loop. (The issue was not widely
known at 2008.)

Another problem which this library contains may be caused by upcoming HTML5
WebWorker feauture. Asynchronous execution of Titaniumcore is implemented by my
self-invented library "nonstructured.js". WebWorker deprecates
nonstructured.js.

There are other out-dated code in the library.

I am here to register the Titaniumcore to Github, in order to make it up-to-date
for applying in modern browsers.



TODO
----
- Rewrite it to be not extending Object.prototype.
- Adapt it to new WebWorker feauture whiche is introduced in HTML5.
- Adapt it to modern import mechanism such as CommonJS.
- Support standard RSA padding schemes to communicate server-applications which
  are written in using common library such as JCA, etc.  (Now Titaniumcore only
  supports an RSA padding scheme which I have invented by myself. This is
  surely, extremely, annoying for users. )
- Rewrite READMEs.
- Integrate many great updates by Titaniumcore users in GitHub.
- Create a discussion group on somewhere like Google's.



DIRECTORIES OF THIS PROJECT
---------------------------

- JavaScript Cryptography Toolkit Library   
  See ./crypto/readme.txt for further information.

- A Non-Structure Oriented Programming Framework   
  See  ./nonstructured/nonstructured.readme.txt for further information.


- Tools - Some Utilities   
  See ./tools/readme.txt for further information.



LICENCE
-------
LGPLv3  

  
CONTACT
--------
Author :  Atsushi Oka (I am from Japan)  
Website : http://ats.oka.nu/  https://github.com/ats4u  
mailto : ats.creativity@gmail.com  
Licence : LGPLv3  
Modified Date May 11,2013  


