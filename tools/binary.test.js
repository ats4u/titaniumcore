function _test1( bin1 ) {
    var str = utf82str( bin1 );
    var bin2 = str2utf8( str );
    var correct = equals( bin1,bin2 );
    trace( "in:"  + base16(bin1,64) );
    trace( "str:" + str );
    trace( "out:" + base16(bin2,64) );
    trace( "correct?"+ correct );
    trace( "" );
    return correct;
}

function test(){
    // trace( base16( base64_encode( str2utf8( "hello,world!:-) hello,world!:-) " )  ) ) );
    // trace( ( base64_encode( str2utf8( "hello,world!:-) hello,world!:-) ‚¢‚ë‚Í‚É‚Ù" )  ) ) );
    // trace( base64_decode( data ) );

    var data1 = ""
	+ "VGhlIEFkdmFuY2VkIEVuY3J5cHRpb24gU3RhbmRhcmQgKEFFUyksIHRoZSBibG9jayBjaXBoZXIgcmF0"
	+ "aWZpZWQgYXMgYSBzdGFuZGFyZCBieSBOYXRpb25hbCBJbnN0aXR1dGUgb2YgU3RhbmRhcmRzIGFuZCBU"
	+ "ZWNobm9sb2d5IG9mIHRoZSBVbml0ZWQgU3RhdGVzIChOSVNUKSwgd2FzIGNob3NlbiB1c2luZyBhIHBy"
	+ "b2Nlc3MgbWFya2VkbHkgbW9yZSBvcGVuIGFuZCB0cmFuc3BhcmVudCB0aGFuIGl0cyBwcmVkZWNlc3Nv"
	+ "ciwgdGhlIGFnaW5nIERhdGEgRW5jcnlwdGlvbiBTdGFuZGFyZCAoREVTKS4gVGhpcyBwcm9jZXNzIHdv"
	+ "biBwbGF1ZGl0cyBmcm9tIHRoZSBvcGVuIGNyeXB0b2dyYXBoaWMgY29tbXVuaXR5LCBhbmQgaGVscGVk"
	+ "IHRvIGluY3JlYXNlIGNvbmZpZGVuY2UgaW4gdGhlIHNlY3VyaXR5IG9mIHRoZSB3aW5uaW5nIGFsZ29y"
	+ "aXRobSBmcm9tIHRob3NlIHdobyB3ZXJlIHN1c3BpY2lvdXMgb2YgYmFja2Rvb3JzIGluIHRoZSBwcmVk"
	+ "ZWNlc3NvciwgREVTLg0KDQpBIG5ldyBzdGFuZGFyZCB3YXMgbmVlZGVkIHByaW1hcmlseSBiZWNhdXNl"
	+ "IERFUyBoYXMgYSByZWxhdGl2ZWx5IHNtYWxsIDU2LWJpdCBrZXkgd2hpY2ggd2FzIGJlY29taW5nIHZ1"
	+ "bG5lcmFibGUgdG8gYnJ1dGUgZm9yY2UgYXR0YWNrcy4gSW4gYWRkaXRpb24gdGhlIERFUyB3YXMgZGVz"
	+ "aWduZWQgcHJpbWFyaWx5IGZvciBoYXJkd2FyZSBhbmQgaXMgcmVsYXRpdmVseSBzbG93IHdoZW4gaW1w"
	+ "bGVtZW50ZWQgaW4gc29mdHdhcmUuIFdoaWxlIFRyaXBsZS1ERVMgYXZvaWRzIHRoZSBwcm9ibGVtIG9m"
	+ "IGEgc21hbGwga2V5IHNpemUsIGl0IGlzIHZlcnkgc2xvdyBpbiBzb2Z0d2FyZSwgaXMgdW5zdWl0YWJs"
	+ "ZSBmb3IgbGltaXRlZC1yZXNvdXJjZSBwbGF0Zm9ybXMsIGFuZCBtYXkgYmUgYWZmZWN0ZWQgYnkgcG90"
	+ "ZW50aWFsIHNlY3VyaXR5IGlzc3VlcyBjb25uZWN0ZWQgd2l0aCB0aGUgKHRvZGF5IGNvbXBhcmF0aXZl"
	+ "bHkgc21hbGwpIGJsb2NrIHNpemUgb2YgNjQgYml0cy4=";

    // trace( "result:"+bin2str( base64_decode( data1 ) ) );

    var data2 = ""
	+ "VHdvZmlzaCDigJQg0YHQuNC80LzQtdGC0YDQuNGH0L3Ri9C5INCw0LvQs9C+0YDQuNGC0Lwg0LHQu9C+" 
	+ "0YfQvdC+0LPQviDRiNC40YTRgNC+0LLQsNC90LjRjyDRgSDRgNCw0LfQvNC10YDQvtC8INCx0LvQvtC6"
	+ "0LAgMTI4INCx0LjRgiDQuCDQtNC70LjQvdC+0Lkg0LrQu9GO0YfQsCDQtNC+IDI1NiDQsdC40YIuINCn"
	+ "0LjRgdC70L4g0YDQsNGD0L3QtNC+0LIgMTYuINCg0LDQt9GA0LDQsdC+0YLQsNC9INCz0YDRg9C/0L/Q"
	+ "vtC5INGB0L/QtdGG0LjQsNC70LjRgdGC0L7QsiDQstC+INCz0LvQsNCy0LUg0YEg0JHRgNGO0YHQvtC8"
	+ "INCo0L3QsNC50LXRgNC+0LwuINCv0LLQu9GP0LvRgdGPINC+0LTQvdC40Lwg0LjQtyDQv9GP0YLQuCDR"
	+ "hNC40L3QsNC70LjRgdGC0L7QsiDQstGC0L7RgNC+0LPQviDRjdGC0LDQv9CwINC60L7QvdC60YPRgNGB"
	+ "0LAgQUVTLiDQkNC70LPQvtGA0LjRgtC8INGA0LDQt9GA0LDQsdC+0YLQsNC9INC90LAg0L7RgdC90L7Q"
	+ "stC1INCw0LvQs9C+0YDQuNGC0LzQvtCyIEJsb3dmaXNoLCBTYWZlciDQuCBTcXVhcmUuCgrQntGC0LvQ"
	+ "uNGH0LjRgtC10LvRjNC90YvQvNC4INC+0YHQvtCx0LXQvdC90L7RgdGC0Y/QvNC4INCw0LvQs9C+0YDQ"
	+ "uNGC0LzQsCDRj9Cy0LvRj9GO0YLRgdGPINC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INC/0YDQtdC0"
	+ "0LLQsNGA0LjRgtC10LvRjNC90L4g0LLRi9GH0LjRgdC70Y/QtdC80YvRhSDQuCDQt9Cw0LLQuNGB0Y/R"
	+ "idC40YUg0L7RgiDQutC70Y7Rh9CwIFMt0LHQu9C+0LrQvtCyINC4INGB0LvQvtC20L3QsNGPINGB0YXQ"
	+ "tdC80LAg0YDQsNC30LLRkdGA0YLQutC4INC/0L7QtNC60LvRjtGH0LXQuSDRiNC40YTRgNC+0LLQsNC9"
	+ "0LjRjy4g0J/QvtC70L7QstC40L3QsCBuLdCx0LjRgtC90L7Qs9C+INC60LvRjtGH0LAg0YjQuNGE0YDQ"
	+ "vtCy0LDQvdC40Y8g0LjRgdC/0L7Qu9GM0LfRg9C10YLRgdGPINC60LDQuiDRgdC+0LHRgdGC0LLQtdC9"
	+ "0L3QviDQutC70Y7RhyDRiNC40YTRgNC+0LLQsNC90LjRjywg0LTRgNGD0LPQsNGPIOKAlCDQtNC70Y8g"
	+ "0LzQvtC00LjRhNC40LrQsNGG0LjQuCDQsNC70LPQvtGA0LjRgtC80LAgKNC+0YIg0L3QtdGRINC30LDQ"
	+ "stC40YHRj9GCIFMt0LHQu9C+0LrQuCkuCgpJbiBjcnlwdG9ncmFwaHksIFR3b2Zpc2ggaXMgYSBzeW1t"
	+ "ZXRyaWMga2V5IGJsb2NrIGNpcGhlciB3aXRoIGEgYmxvY2sgc2l6ZSBvZiAxMjggYml0cyBhbmQga2V5"
	+ "IHNpemVzIHVwIHRvIDI1NiBiaXRzLiBJdCB3YXMgb25lIG9mIHRoZSBmaXZlIGZpbmFsaXN0cyBvZiB0"
	+ "aGUgQWR2YW5jZWQgRW5jcnlwdGlvbiBTdGFuZGFyZCBjb250ZXN0LCBidXQgd2FzIG5vdCBzZWxlY3Rl"
	+ "ZCBmb3Igc3RhbmRhcmRpc2F0aW9uLiBUd29maXNoIGlzIHJlbGF0ZWQgdG8gdGhlIGVhcmxpZXIgYmxv"
	+ "Y2sgY2lwaGVyIEJsb3dmaXNoLgoKVHdvZmlzaCdzIGRpc3RpbmN0aXZlIGZlYXR1cmVzIGFyZSB0aGUg"
	+ "dXNlIG9mIHByZS1jb21wdXRlZCBrZXktZGVwZW5kZW50IFMtYm94ZXMsIGFuZCBhIHJlbGF0aXZlbHkg"
	+ "Y29tcGxleCBrZXkgc2NoZWR1bGUuIE9uZSBoYWxmIG9mIGFuIG4tYml0IGtleSBpcyB1c2VkIGFzIHRo"
	+ "ZSBhY3R1YWwgZW5jcnlwdGlvbiBrZXkgYW5kIHRoZSBvdGhlciBoYWxmIG9mIHRoZSBuLWJpdCBrZXkg"
	+ "aXMgdXNlZCB0byBtb2RpZnkgdGhlIGVuY3J5cHRpb24gYWxnb3JpdGhtIChrZXktZGVwZW5kZW50IFMt"
	+ "Ym94ZXMpLiBUd29maXNoIGJvcnJvd3Mgc29tZSBlbGVtZW50cyBmcm9tIG90aGVyIGRlc2lnbnM7IGZv"
	+ "ciBleGFtcGxlLCB0aGUgcHNldWRvLUhhZGFtYXJkIHRyYW5zZm9ybSAoUEhUKSBmcm9tIHRoZSBTQUZF"
	+ "UiBmYW1pbHkgb2YgY2lwaGVycy4gVHdvZmlzaCB1c2VzIHRoZSBzYW1lIEZlaXN0ZWwgc3RydWN0dXJl"
	+ "IGFzIERFUy4KClR3b2Zpc2jvvIjjg4jjgqXjg7zjg5XjgqPjg4Pjgrfjg6XvvInjgajjga/jgIHjg5bj"
	+ "g6vjg7zjgrnjg7vjgrfjg6Xjg4rjgqTjgqLjg7zjgpLkuK3lv4PjgajjgZfjgZ/jg5fjg63jgrjjgqfj"
	+ "gq/jg4jjg4Hjg7zjg6DjgavjgojjgaPjgabplovnmbrjgZXjgozjgZ/jg5bjg63jg4Pjgq/mmpflj7fj"
	+ "ga7lkI3np7DjgIJOSVNUKOOCouODoeODquOCq+Wbveeri+aomea6luaKgOihk+eglOeptuaJgCnjgYzl"
	+ "hazli5/jg7vlrp/mlr3jgZfjgZ9BRVPmmpflj7fjgrvjg6zjgq/jgrfjg6fjg7PjgavjgYrjgZHjgovj"
	+ "g5XjgqHjgqTjg4rjg6rjgrnjg4jjga7jgbLjgajjgaTjgILjgrvjg6zjgq/jgrfjg6fjg7Pjga/jg5nj"
	+ "g6vjgq7jg7zjga7jg6vjg7zjg7TjgqHjg7Pjg7vjgqvjg4jjg6rjg4Pjgq/lpKflrabnoJTnqbbjg4Hj"
	+ "g7zjg6DjgYzplovnmbrjgZfjgZ9SaWpuZGFlbOOBq+aVl+OCjOOBn+OBjOOAgeaal+WPt+WMluODu+ik"
	+ "h+WQiOWMluOBruWHpueQhumAn+W6puOBrumdouOBp+OBr1R3b2Zpc2jjga7mlrnjgYzlhKrjgozjgabj"
	+ "gYTjgovjgajjgZnjgovoqZXjgoLjgYLjgotbMV3jgIIKCjEyOOOAgTE5MuOAgTI1NuODk+ODg+ODiOOB"
	+ "ruS4ieeoruOBrumNtemVt+OCkumBuOaKnuWPr+iDveOAguODluODreODg+OCr+mVt+OBrzEyOOODk+OD"
	+ "g+ODiOOAgjE5OTPlubTjgavjg5bjg6vjg7zjgrnjg7vjgrfjg6Xjg4rjgqTjgqLjg7zjgYzplovnmbrj"
	+ "gZfjgZ/lr77np7Djg5bjg63jg4Pjgq/mmpflj7fjgIFCbG93ZmlzaOOBrueZuuWxleWei+OBqOS9jee9"
	+ "ruOBpeOBkeOCieOCjOOBpuOBhOOCi+OAguaKgOihk+eahOOBq+OBr0Jsb3dmaXNo44Go5ZCM5Z6L44Gu"
	+ "5ZCE56iu44Ki44Or44K044Oq44K644Og44KS5L2/55So44GX44Gm44GE44KL44GM44CB5Li744Gr44ON"
	+ "44OD44OI44Ov44O844Kv44K344K544OG44Og44Gr44GK44GR44KL5Yip55So44KS5b+16aCt44Gr572u"
	+ "44GE44Gf6Y215ouh5aSn44Ki44Or44K044Oq44K644Og44Gu6auY6YCf5YyW44GM5pa944GV44KM44Gf"
	+ "44CCIEJsb3dmaXNo44Go5ZCM5qeY44Gr54m56Kix44GM5Y+W5b6X44GV44KM44Gm44GK44KJ44Ga44CB"
	+ "44Ki44Or44K044Oq44K644Og44Gv44Op44Kk44K744Oz44K544OV44Oq44O844Go44GX44Gm5YWs6ZaL"
	+ "44GV44KM44Gm44GE44KL44CCCgrguYPguJnguKfguLTguJfguKLguLLguIHguLLguKPguYDguILguYng"
	+ "uLLguKPguKvguLHguKrguKXguLHguJrguJnguLHguYnguJkg4LmC4Lia4Lil4Lin4LmM4Lif4Li04LiK"
	+ "IChCbG93ZmlzaCkg4LmA4Lib4LmH4LiZ4LiB4Liy4Lij4LmA4LiC4LmJ4Liy4Lij4Lir4Lix4Liq4Lin"
	+ "4Li04LiY4Li14Lir4LiZ4Li24LmI4LiH4LiL4Li24LmI4LiH4LmD4LiK4LmJ4Lin4Li04LiY4Li14LiB"
	+ "4Liy4Lij4LmA4LiC4LmJ4Liy4Lij4Lir4Lix4Liq4LmB4Lia4Lia4Lia4Lil4LmH4Lit4LiBIChCbG9j"
	+ "ayBDaXBoZXIpIOC5geC4peC4sCDguITguLXguKLguYzguYHguJrguJrguKrguKHguKHguLLguJXguKMg"
	+ "KFN5bW1ldHJpYyBLZXkpIOC4i+C4tuC5iOC4h+C5hOC4lOC5ieC4o+C4seC4muC4geC4suC4o+C4reC4"
	+ "reC4geC5geC4muC4muC5g+C4meC4m+C4tSDguIQu4LioLiAxOTkzIOC5guC4lOC4ouC4meC4suC4ouC4"
	+ "muC4o+C4ueC4hCDguIrguYTguJnguKLguYzguYDguK3guK3guKPguYwgKEJydWNlIFNjaG5laWVyKSDg"
	+ "uIvguLbguYjguIfguYDguJvguYfguJnguYDguIjguYnguLLguJ7guYjguK3guYHguKvguYjguIfguKfg"
	+ "uLTguJfguKLguLLguIHguLLguKPguYDguILguYnguLLguKPguKvguLHguKrguKXguLHguJog4LmB4Lil"
	+ "4Liw4LiB4Liy4Lij4LmA4LiC4LmJ4Liy4Lij4Lir4Lix4Liq4LmB4Lia4LiaIEJsb3dmaXNoIOC4meC4"
	+ "teC5ieC5hOC4lOC5ieC4o+C4seC4muC4hOC4p+C4suC4oeC4meC4tOC4ouC4oeC5gOC4m+C5h+C4meC4"
	+ "reC4ouC5iOC4suC4h+C4ouC4tOC5iOC4h+C5g+C4meC4geC4suC4o+C4meC4s+C4oeC4suC5g+C4iuC5"
	+ "ieC4l+C4suC4h+C4lOC5ieC4suC4meC4geC4suC4o+C5gOC4guC5ieC4suC4o+C4q+C4seC4quC4geC4"
	+ "seC4muC4nOC4peC4tOC4leC4oOC4seC4k+C4keC5jCDguILguK3guIfguIvguK3guJ/guJXguYzguYHg"
	+ "uKfguKPguYzguJXguYjguLLguIcg4LmGIOC4l+C4seC5ieC4h+C4ouC4seC4h+C4ouC4suC4geC4leC5"
	+ "iOC4reC4geC4suC4o+C5guC4iOC4oeC4leC4teC5geC4peC4sOC4luC4ueC4geC5gOC4iOC4suC4sOC4"
	+ "p+C4tOC5gOC4hOC4o+C4suC4sOC4q+C5jOC4iOC4suC4gSBDcnlwdGFuYWx5c2lzIOC4reC4teC4geC4"
	+ "lOC5ieC4p+C4oiDguKLguLTguYjguIfguYTguJvguIHguKfguYjguLLguJnguLHguYnguJnguYPguJng"
	+ "uJvguLHguIjguIjguLjguJrguLHguJkg4Lit4Lix4Lil4LiB4Lit4Lij4Li04LiX4Li24LihIEJsb3dm"
	+ "aXNoIOC4meC4teC5ieC4geC5h+C4ouC4seC4h+C5gOC4m+C5h+C4meC4l+C4teC5iOC4meC4tOC4ouC4"
	+ "oeC5g+C4meC4muC4o+C4o+C4lOC4suC4p+C4tOC4mOC4teC4geC4suC4o+C5gOC4guC5ieC4suC4o+C4"
	+ "q+C4seC4quC5geC4muC4miBCbG9jayBDaXBoZXIg4LmA4LiK4LmI4LiZ4LmA4LiU4Li14Lii4Lin4LiB"
	+ "4Lix4LiaIOC4reC4seC4peC4geC4reC4o+C4tOC4l+C4tuC4oeC4reC4t+C5iOC4mSDguYYg4LmA4LiK"
	+ "4LmI4LiZIEFFUyDguYHguKXguLAgVHdvZmlzaAoK4LiV4LmJ4LiZ4LiB4Liz4LmA4LiZ4Li04LiU4LiC"
	+ "4Lit4LiH4Lit4Lix4Lil4LiB4Lit4Lij4Li04LiX4Li24LihIEJsb3dmaXNoIOC5gOC4geC4tOC4lOC4"
	+ "guC4tuC5ieC4meC4iOC4suC4geC4geC4suC4o+C4meC4s+C4reC4reC4geC4oeC4suC5gOC4nOC4ouC5"
	+ "geC4nuC4o+C5iOC5g+C4meC4geC4suC4o+C5geC4quC4lOC4h+C4nOC4peC4h+C4suC4meC4l+C4suC4"
	+ "h+C4lOC5ieC4suC4meC4p+C4tOC4l+C4ouC4suC4geC4suC4o+C5gOC4guC5ieC4suC4o+C4q+C4seC4"
	+ "quC4peC4seC4muC5g+C4mSDguIfguLLguJkgRmlyc3QgRmFzdCBTb2Z0d2FyZSBFbmNyeXB0aW9uIFdv"
	+ "cmtzaG9wIOC4l+C4teC5iOC5gOC4oeC4t+C4reC4hyBDYW1icmlkZ2Ug4Lib4Lij4Liw4LmA4LiX4Lio"
	+ "4Lit4Lix4LiH4LiB4Lik4Lip4LmD4LiZ4Lib4Li1IOC4hC7guKguIDE5OTQg4LmB4Lil4Liw4LmD4LiZ"
	+ "4LmA4LiU4Li34Lit4LiZ4LmA4Lih4Lip4Liy4Lii4LiZ4LmD4LiZ4Lib4Li14LmA4LiU4Li14Lii4Lin"
	+ "4LiB4Lix4LiZIEJsb3dmaXNoIOC4geC5h+C5hOC4lOC5ieC4o+C4seC4muC4geC4suC4o+C4leC4teC4"
	+ "nuC4tOC4oeC4nuC5jOC5g+C4meC4p+C4suC4o+C4quC4suC4o+C4guC4reC4hyBEci4gRG9iYiDguIjg"
	+ "uJnguYDguKHguLfguYjguK0gMSDguJvguLXguJXguYjguK3guKHguLIgQmxvd2Zpc2gg4LiB4LmH4LmE"
	+ "4LiU4LmJ4Lib4Lij4Liy4LiB4LiP4Lit4Li14LiB4LiE4Lij4Lix4LmJ4LiH4LmD4LiZ4Lin4Liy4Lij"
	+ "4Liq4Liy4Lij4LiJ4Lia4Lix4Lia4LmA4LiU4Li34Lit4LiZ4LiB4Lix4LiZ4Lii4Liy4Lii4LiZ4LiC"
	+ "4Lit4LiH4Lib4Li1IDE5OTUg4LiC4Lit4LiHIERyLiBEb2JiCgrguJnguLLguKIgQnJ1Y2UgU2NobmVp"
	+ "ZXIg4LmE4LiU4LmJ4Lit4Lit4LiB4LmB4Lia4Lia4Lit4Lix4Lil4LiB4Lit4Lij4Li04LiX4Li24Lih"
	+ "IEJsb3dmaXNoIOC5guC4lOC4ouC5g+C4iuC5ieC4reC4seC4peC4geC4reC4o+C4tOC4l+C4tuC4oeC4"
	+ "l+C4seC5iOC4pyDguYYg4LmE4Lib4LmD4LiZ4LiB4Liy4LijIOC4reC4reC4geC5geC4muC4miDguYHg"
	+ "uKXguLAgQmxvd2Zpc2gg4LiZ4Li14LmJ4LiB4LmH4LmE4LiU4LmJ4LmA4LiC4LmJ4Liy4Lih4Liy4LmB"
	+ "4LiX4LiZ4LiX4Li14LmI4Lit4Lix4Lil4LiB4Lit4Lij4Li04LiX4Li24LihIERFUyDguYHguKXguLAg"
	+ "SURFQSDguJfguLXguYjguYDguJvguYfguJnguK3guLHguKXguIHguK3guKPguLTguJfguLbguKHguJfg"
	+ "uLXguYjguYTguJTguYnguKPguLHguJrguITguKfguLLguKHguJnguLTguKLguKHguYPguJnguK3guJTg"
	+ "uLXguJUg4LiX4Lix4LmJ4LiH4Lii4Lix4LiH4LmE4Lih4LmI4Lih4Li14Lib4Lix4LiN4Lir4Liy4LmD"
	+ "4LiZ4LiB4Liy4Lij4LiX4Liz4LiH4Liy4LiZ4LmA4Lir4Lih4Li34Lit4LiZ4Lit4Lii4LmI4Liy4LiH"
	+ "4LiX4Li14LmI4Lit4Lix4Lil4LiB4Lit4Lij4Li04LiX4Li24Lih4LmD4LiZ4Lit4LiU4Li14LiV4Lib"
	+ "4Lij4Liw4Liq4Lia4LiB4Lix4LiZIOC4iOC4tuC4h+C4l+C4s+C5g+C4q+C5ieC4q+C4peC4suC4oiDg"
	+ "uYYg4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZ4LmB4Lil4Liw4Lia4Lij4Li04Lip4Lix4LiX4LiX4Liy"
	+ "4LiH4LiU4LmJ4Liy4LiZ4LiL4Lit4Lif4LiV4LmM4LmB4Lin4Lij4LmM4LiV4LmI4Liy4LiHIOC5hiDg"
	+ "uKvguLHguJnguKHguLLguYPguIrguYnguK3guLHguKXguIHguK3guKPguLTguJfguLbguKEgQmxvd2Zp"
	+ "c2gg4LiB4Lix4LiZ4Lih4Liy4LiB4Lii4Li04LmI4LiH4LiC4Li24LmJ4LiZIOC4iOC4suC4geC4l+C4"
	+ "teC5iOC5gOC4oeC4t+C5iOC4reC4geC5iOC4reC4meC4meC4seC5ieC4meC4reC4seC4peC4geC4reC4"
	+ "o+C4tOC4l+C4tuC4oeC5g+C4meC4geC4suC4o+C5gOC4guC5ieC4suC4o+C4q+C4seC4quC4meC4seC5"
	+ "ieC4meC4iOC4sOC4leC5ieC4reC4h+C4oeC4teC4geC4suC4o+C4iOC4lOC4peC4tOC4guC4quC4tOC4"
	+ "l+C4mOC4tOC5jOC5g+C4mSDguIHguLLguKPguJnguLPguKHguLLguYPguIrguYnguIfguLLguJkg4LmB"
	+ "4Lil4Liw4LmA4LiI4LmJ4Liy4LiC4Lit4LiH4Lic4Li54LmJ4LiX4Li14LmI4LiI4Liw4Lit4LiZ4Li4"
	+ "4LiN4Liy4LiV4LmD4Lir4LmJ4LmD4LiK4LmJ4LiH4Liy4LiZ4LiE4Li34Lit4Lir4LiZ4LmI4Lin4Lii"
	+ "4LiH4Liy4LiZ4LiC4Lit4LiH4Lij4Lix4LiQ4Lia4Liy4Lil4LmA4LiX4LmI4Liy4LiZ4Lix4LmJ4LiZ"
	+ "IOC5geC4leC5iOC4reC4seC4peC4geC4reC4o+C4tOC4l+C4tuC4oSBCbG93ZmlzaCDguJnguLXguYng"
	+ "uYTguJTguYnguYDguJvguYfguJnguK3guLHguKXguIHguK3guKPguLTguJfguLbguKHguJXguLHguKfg"
	+ "uYHguKPguIHguJfguLXguYjguYTguJTguYnguKHguLXguIHguLLguKPguJnguLPguK3guK3guIHguKHg"
	+ "uLLguYPguKvguYnguYPguIrguYnguYTguJTguYnguK3guKLguYjguLLguIfguYDguKrguKPguLUg4LmC"
	+ "4LiU4Lii4LmE4Lih4LmI4Lih4Li14Lil4Li04LiC4Liq4Li04LiX4LiY4Li04LmM4LmD4LiZ4LiB4Liy"
	+ "4Lij4LmD4LiK4LmJ4LiH4Liy4LiZ4LmD4LiUIOC5hiDguJfguLHguYnguIfguKrguLTguYnguJkg4Liq"
	+ "4Li04LmI4LiH4LiZ4Li14LmJ4LmA4Lil4Lii4LmA4Lib4LmH4LiZ4Liq4Li04LmI4LiH4LiX4Li14LmI"
	+ "4LiI4Li44LiU4Lib4Lij4Liw4LiB4Liy4Lii4LmD4Lir4LmJ4Lit4Lix4Lil4LiB4Lit4Lij4Li04LiX"
	+ "4Li24LihIEJsb3dmaXNoIOC5hOC4lOC5ieC5gOC4m+C5h+C4meC4l+C4teC5iOC4meC4tOC4ouC4oeC4"
	+ "geC4seC4meC4reC4ouC5iOC4suC4h+C4o+C4p+C4lOC5gOC4o+C5h+C4pyDguYHguKXguLDguJXguYjg"
	+ "uK3guYDguJnguLfguYjguK3guIfguIjguJnguJbguLbguIfguJvguLHguIjguIjguLjguJrguLHguJkK"
	+ "CuC4reC4seC4peC4geC4reC4o+C4tOC4l+C4tuC4oSBCbG93ZmlzaCDguYDguJvguYfguJnguIHguLLg"
	+ "uKPguYPguIrguYnguITguLXguKLguYzguYHguJrguJogVmFyaWFibGUtTGVuZ3RoIEtleSDguYLguJTg"
	+ "uKLguKHguLXguILguJnguLLguJTguITguKfguLLguKHguKLguLLguKfguILguK3guIfguITguLXguKLg"
	+ "uYzguJXguLHguYnguIfguYHguJXguYjguILguJnguLLguJQgMzIgQml0IOC4iOC4meC4luC4tuC4hyA0"
	+ "NDggQml0IOC4i+C4tuC5iOC4h+C4iOC4sOC4l+C4s+C5g+C4q+C5ieC5gOC4geC4tOC4lOC4hOC4p+C4"
	+ "suC4oeC4ouC4t+C4lOC4q+C4ouC4uOC5iOC4meC5g+C4meC4geC4suC4o+C5gOC4peC4t+C4reC4geC5"
	+ "g+C4iuC5ieC4hOC4teC4ouC5jOC4geC4seC4muC4geC4suC4o+C5gOC4guC5ieC4suC4o+C4q+C4seC4"
	+ "quC5geC4muC4miBCbG9jayBDaXBoZXIg4Lih4Liy4LiB4Lii4Li04LmI4LiH4LiC4Li24LmJ4LiZ4LiL"
	+ "4Li24LmI4LiH4LiI4Liw4LiU4Li14LiB4Lin4LmI4Liy4Lin4Li04LiY4Li14LiB4Liy4Lij4LmB4Lia"
	+ "4LiaIERFUyDguKvguKPguLfguK0gSURFQSDguIvguLbguYjguIfguKHguLXguIHguLLguKMgRml4ZWQt"
	+ "TGVuZ3RoIEtleSDguYLguJTguKLguYPguIrguYnguITguLXguKLguYzguILguJnguLLguJQgMzIgQml0"
	+ "IOC5gOC4l+C5iOC4suC4meC4seC5ieC4mQoKCk5hIGNyaXB0b2dyYWZpYSwgQmxvd2Zpc2ggw6kgdW1h"
	+ "IGNpZnJhIHNpbcOpdHJpY2EgZGUgYmxvY29zIHF1ZSBwb2RlIHNlciB1c2FkbyBlbSBzdWJzdGl0dWnD"
	+ "p8OjbyBhbyBERVMgb3UgSURFQS4gRWxlIHRvbWEgdW1hIGNoYXZlIGRlIHRhbWFuaG8gdmFyacOhdmVs"
	+ "LCBkZSAzMiBhIDQ0OCBiaXRzLCB0b3JuYW5kby1vIGlkZWFsIHBhcmEgYXBsaWNhw6fDtWVzIHRhbnRv"
	+ "IGRvbcOpc3RpY2FzLCBxdWFudG8gY29tZXJjaWFpcy4gTyBCbG93ZmlzaCBmb2kgZGVzZW52b2x2aWRv"
	+ "IGVtIDE5OTMgcG9yIEJydWNlIFNjaG5laWVyIGNvbW8gdW1hIGFsdGVybmF0aXZhIGdyw6F0aXMgbWFp"
	+ "cyByw6FwaWRhIHBhcmEgb3MgYWxnb3LDrXRtb3MgY3JpcHRvZ3LDoWZpY29zIGV4aXN0ZW50ZXMuIERl"
	+ "c2RlIGVudMOjbyBlbGUgdmVtIHNlbmRvIGFuYWxpc2FkbyBkZSBmb3JtYSBjb25zaWRlcsOhdmVsIGUg"
	+ "ZXN0w6EgY29ucXVpc3RhbmRvIGEgYWNlaXRhw6fDo28gZG8gbWVyY2FkbyBjb21vIHVtIGFsZ29yaXRt"
	+ "byBmb3J0ZS4gTyBCbG93ZmlzaCBuw6NvIMOpIHBhdGVudGVhZG8sIHRlbSBzdWEgbGljZW7Dp2EgZ3LD"
	+ "oXRpcyBlIGVzdMOhIGEgZGlzcG9zacOnw6NvIHBhcmEgdG9kb3MuCgpPIGFydGlnbyBvcmlnaW5hbCBk"
	+ "byBCbG93ZmlzaCBmb2kgYXByZXNlbnRhZG8gbm8gIkZpcnN0IEZhc3QgU29mdHdhcmUgRW5jcnlwdGlv"
	+ "biBXb3Jrc2hvcCIgb2NvcnJpZG8gZW0gQ2FtYnJpZGdlLCBNQSwgRVVBLiBPcyByZXN1bHRhZG9zIGRv"
	+ "IHdvcmtzaG9wIGZvcmFtIHB1YmxpY2Fkb3MgcG9yIFNwcmluZ2VyLVZlcmxhbmYsICJMZWN0dXJlIE5v"
	+ "dGVzIGluIENvbXB1dGVyIFNjaWVuY2UiICM4MDksIDE5OTQpLiBBIGVkacOnw6NvIGRlIGFicmlsIGRl"
	+ "IDE5OTQgZGUgIkRyLiBEb2JiJ3MgSm91cm5hbCIgdGFtYsOpbSB0cmF0b3UgZXhww7RzIGEgcHJvcG9z"
	+ "dGEgZGUgQnJ1Y2UgU2NobmVpZXIuICJCbG93ZmlzaCAtLSBPbmUgWWVhciBMYXRlciIgZm9pIHB1Ymxp"
	+ "Y2FkYSBlbSBTZXRlbWJybyBkZSAxOTk1IGVtIG91dHJhIGVkacOnw6NvIGRlICJEci4gRG9iYidzIEpv"
	+ "dXJuYWwiLgoKTXVpdG9zIGVzdHVkaW9zb3MgZW0gY3JpcHRvZ3JhZmlhIGV4YW1pbmFyYW0gbyBCbG93"
	+ "ZmlzaCwgZW50cmV0YW50bywgYWluZGEgc8OjbyBwb3Vjb3Mgb3MgcmVzdWx0YWRvcyBwdWJsaWNhZG9z"
	+ "LiBTZXJnZSBWYXVkZW5heSBleGFtaW5vdSBjaGF2ZXMgZnJhY2FzIG5vIEJsb3dmaXNoOiBleGlzdGUg"
	+ "dW1hIGNsYXNzZSBkZSBjaGF2ZXMgcXVlIHBvZGVtIHNlciBkZXRlY3RhZGFzIC0gbWFzIG7Do28gInF1"
	+ "ZWJyYWRhcyIgLSBubyBCbG93ZmlzaCBjb20gdmFyaWFudGVzIGRlIDE0IGl0ZXJhw6fDtWVzIG91IG1l"
	+ "bm9zLgoKUXVhbHF1ZXIgcGVzc29hIHBvZGUgb2J0ZXIgdW1hIGPDs3BpYSBkbyBjw7NkaWdvLWZvbnRl"
	+ "IGRvIEJsb3dmaXNoIGEgcGFydGlyIGRhIEludGVybmV0IGUgZmF6ZXIgdXNvIGVtIHN1YXMgYXBsaWNh"
	+ "w6fDtWVzLiBOw6NvIGjDoSByZWdyYXMgZGUgdXNvIGRvIGPDs2RpZ28uIEJydWNlIFNjaG5laWVyIHBl"
	+ "ZGUsIHNvbWVudGUsIHF1ZSBzZWphIG5vdGlmaWNhZG8gZGUgYXBsaWNhw6fDtWVzIGNvbWVyY2lhaXMg"
	+ "cGFyYSBxdWUgcG9zc2FtIHNlciBsaXN0YWRhcyBlbSBzdWEgcMOhZ2luYSBuYSBJbnRlcm5ldC4KCi0t"
	+ "LS0tLS0KQmxvd2Zpc2gKCkJsb3dmaXNoIMOkciBlbiBrcnlwdGVyaW5nc3Rla25payBzb20gdXR2ZWNr"
	+ "bGFkZXMgw6VyIDE5OTMgYXYgQnJ1Y2UgU2NobmVpZXIuIEFsZ29yaXRtZW4gdmFyIHTDpG5rdCBzb20g"
	+ "ZW4gZ3JhdGlzIG9jaCBsaWNlbnNmcmkga29ua3VycmVudCB0aWxsIERFUyBvY2ggSURFQS4gQmxvd2Zp"
	+ "c2hueWNrbGFyIGhhciB2YXJpYWJlbCBsw6RuZ2QsIDMyIHRpbGwgNDQ4IGJpdGFyICg0IHRpbGwgNTYg"
	+ "dGVja2VuKS4gQWxnb3JpdG1lbiDDpHIgbXlja2V0IHNuYWJiYXJlIMOkbiBiw6VkZSBERVMgb2NoIElE"
	+ "RUEgb2NoIGFudsOkbmRzIGkgw7Z2ZXIgMTUwIHByb2R1a3Rlci4gRGVuIMOkciDDpHZlbiBzdGFuZGFy"
	+ "ZCBpIE9wZW5CU0QuCgo=";

    // trace( "result:"+bin2str( base64_decode( data2 ) ) );

    _test1( base64_decode( data1 ) );
    _test1( base64_decode( data2 ) );
    _test1( [ 32,33,34,35,36 ] );
    _test1( str2utf8( "‚ " ) );

    var correct = true;
    for ( var i=0;i<16; i++ ) {
	var arr = new Array();
	for ( var j=0; j<16; j++ ){
	    arr[j] = 0xFFFFFF & ( Math.random() * 0x10FFFF );
	}
	correct = _test1( str2utf8( char2str( arr ) ) ) & correct;
    }

    trace( correct ? "everything was converted correctly." : "error found." );
}

function mct(){
    var trialCount=10;
    var lengthFrom=0;
    var lengthTo=257;
    try {
	base64_test( trialCount, lengthFrom, lengthTo );
    } catch ( e ) {
	trace( "ERROR OCCURED "+e);
    }
}
// mct();
function mctx(){
    var trialCount=10;
    var lengthFrom=0;
    var lengthTo=257;
    try {
	base64x_test( trialCount, lengthFrom, lengthTo );
    } catch ( e ) {
	trace( "ERROR OCCURED "+e);
    }
}
// mctx();

function base64x(){
    var data = [0xff,0xff,0xff,0xfb,0xff,0xff,0xff,0xfc  ];
    trace( base64_encode( data ) );
    trace( base64x_encode( data ) );
    trace( base64x_pre_decode( "xaxbxaxbxx") );
}

base64();

function embedTest() {
    // trace( (1729).i2ba().base64());
    // trace( ("AAAGwQ==").base64().ba2i() ); // 
    // trace( ("hello,world!").utf8().base64() );
    // trace( ("aGVsbG8sd29ybGQh").base64().utf8() );
    // trace( (0xCAFEBABE).hex() );
    // trace( ([0xCA,0xFE,0xBA,0xBE]).hex() );
    // trace( ([0xCA,0xFE,0xBA,0xBE]).base64() );
    // trace( ([0xDE,0xAD,0xCA,0xFE]).base64() );

    //                trace( ("3q3K/g==").base64().hex() );
    //                // Displays "3q3K/g=="
    //                trace( ([0xDE,0xAD,0xCA,0xFE]).base64x() ); 

    //                // Displays "DEADCAFE"
    //                trace( ("3q3K/g==").base64x().hex() );

    //var i = 0xcafebabe;
    //trace( i.i2ba().base64() );

    // var a = 0xcda912c9;
    // trace( a.i2ba() );
    // trace( a.i2ba().base64() );
    // trace( a.i2ba().base64x() );
    // trace( a.i2ba().base64x().base64x() );
    // var s = "hello,world!";
    // trace( s.utf8() );
    // trace( s.utf8().base64x().base64x().utf8() );
    // trace( a.i2ba().base16().base16() );

    // var aa = [1,2,3];
    // trace( aa.ba2ia().ia2ba().base16() );
}

// embedTest();




