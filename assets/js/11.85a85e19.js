(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{542:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("使用时，把"),a("code",[s._v("8080")]),s._v("替换成实际端口号即可")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("@echo off"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("setlocal EnableDelayedExpansion  \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Dstport")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" /F "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"usebackq skip=4 tokens=2,5"')]),s._v(" %%a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v('"netstat -ano -p tcp"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" /F "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tokens=2 delims=:"')]),s._v(" %%k "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%%a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%%k  \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("Port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" %%b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("portandpid.txt  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" /F "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tokens=2 delims=:"')]),s._v(" %%c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%%c  \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" /F "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tokens=1,2 delims= "')]),s._v(" %%d "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("portandpid.txt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" %%d   \n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" %Dstport%  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" %%d "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" %Dstport% taskkill /f /pid %%e  \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \ndel portandpid.txt    \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Dstport")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("  \ngoto :eof  \n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'结束了'")]),s._v("\npause\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);