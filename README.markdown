
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
you have to please take great care when you apply this library to your
application.

BACKGROUND
----------

Please let me explain the background of writing Titaniumcore.

I wrote this library in 2008 as a challenge. I am from Japan. I have graduated
neither high school nor university. I moved to Thailand in the middle of 2005.
Since then I have been trying to educate myself with cheap living cost in
Thailand.

In late 2008, I was learning about cryptographic algorithm and related topics.
After I finished reading the Bruce Schneier's _Applied Cryptography_,
I thought I needed some practical challenge to write code which use
cryptographic algorithm.

Since I published it to my website, a number of applications use Titaniumcore.
I did not expect such many people use my library. Indeed, it was so exciting
for me but this library was merely written to implement simple and small
applicatons not for any enterprise-like large systems which may refer a number
of libraries at same time.

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


