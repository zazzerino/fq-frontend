(this["webpackJsonpfretboard-quiz"]=this["webpackJsonpfretboard-quiz"]||[]).push([[0],{17:function(e,t,n){e.exports=n(31)},22:function(e,t,n){},23:function(e,t,n){},29:function(e,t,n){e.exports=n.p+"static/media/smb_coin.a3676413.wav"},30:function(e,t,n){e.exports=n.p+"static/media/smb_bowserfalls.38e18822.wav"},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(6),o=n.n(c),u=(n(22),n(23),n(5)),s=n(2),l=n(12);function i(e){var t=/([a-zA-Z])(#{1,2}||b{1,2})\/?(\d)/g.exec(e);if(null!=t){var n=Object(l.a)(t,4);return{whiteKey:n[1],accidental:n[2],octave:n[3]}}throw new Error("".concat(e," could not be parsed."))}function f(e){return e[Math.floor(Math.random()*e.length)]}function E(e){var t=i(e),n=t.whiteKey,r=t.accidental,a=t.octave;return{C:0,D:2,E:4,F:5,G:7,A:9,B:11}[n]+{bb:-2,b:-1,"":0,"#":1,"##":2}[r]+12*(parseInt(a)+1)}var O={useSharps:!0,useFlats:!0,useDoubleSharps:!1,useDoubleFlats:!1,octaves:[3,4,5],whiteKeys:["C","D","E","F","G","A","B"],lowestNote:"E3",highestNote:"G#5",stringsToUse:[1,2,3,4,5,6]};function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(s.a)({},O,{},e),n=["A","B","C","D","E","F","G"],r=[3,4,5,6],a=["","","",""];t.useSharps&&(a.push("#"),a.push("#")),t.useFlats&&(a.push("b"),a.push("b")),t.useDoubleSharps&&a.push("##"),t.useDoubleFlats&&a.push("bb");var c=E(t.lowestNote),o=E(t.highestNote);function u(){return f(n)+f(a)+f(r)}for(var l=u(),i=E(l);i<c||i>o;)i=E(l=u());return l}function d(e,t){var n=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],r=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],a=i(e),c=a.whiteKey,o=a.accidental,u=a.octave,s=c+o,f=n.indexOf(s),E=r.indexOf(s),O=-1===f?[r,E]:[n,f],b=Object(l.a)(O,2),d=b[0],v=b[1]+t;return d[(v%12+12)%12]+(parseInt(u)+Math.floor(v/12)).toString()}var v=["E3","A3","D4","G4","B4","E5"];function h(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,r=[],a=0;a<e.length;a++)for(var c=t;c<=n;c++)r.push({string:Math.abs(a-e.length),fret:c,note:d(e[a],c)});return r}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h();return t.find((function(t){return t.string===e.string&&t.fret===e.fret})).note}function m(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0]?E(t[0]):null;return t.every((function(e){return r===E(e)}))}var G=n(1);function S(e,t){var n=function(e){var t=/\d$/.exec(e);if(null!=t){var n=t.index;return e.slice(0,n)+"/"+e.slice(n)}throw new Error("".concat(e," does not contain an octave number."))}(t),r=new u.Flow.StaveNote({keys:[n],duration:"w"}),a=i(t).accidental;""!==a?(r.addAccidental(0,new u.Flow.Accidental(a)),r.setExtraLeftPx(e.stave.getWidth()/3.8)):r.setExtraLeftPx(e.stave.getWidth()/3.25),u.Flow.Formatter.FormatAndDraw(e.context,e.stave,[r])}function T(e){var t=a.a.useRef(null),n=Object(G.c)((function(e){return e.noteToGuess}));return a.a.useEffect((function(){var e=function(e,t,n){!function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(e);var r=new u.Flow.Renderer(e,3);r.resize(t,n);var a=r.getContext(),c=new u.Flow.Stave(0,0,t-1);return c.addClef("treble"),c.setContext(a),{renderer:r,context:a,stave:c}}(t.current,200,130);e.stave.draw(),null!=n&&S(e,n)})),a.a.createElement("div",{className:"Stave"},a.a.createElement("div",{id:"stave-ref",ref:t}))}var L,g,F=n(15);function _(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=[],r=!0,a=!1,c=void 0;try{for(var o,u=e.stringsToUse[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)for(var s=o.value,l=0;l<t;l++){var i=p({string:s,fret:l});n.push(E(i))}}catch(d){a=!0,c=d}finally{try{r||null==u.return||u.return()}finally{if(a)throw c}}for(var f=b(e);!n.includes(E(f));)f=b(e);return f}(e);return{type:L.NEW_NOTE_TO_GUESS,payload:t}}!function(e){e.FRETBOARD_CLICK="FRETBOARD_CLICK",e.NEW_NOTE_TO_GUESS="NEW_NOTE_TO_GUESS",e.RESET="RESET",e.TOGGLE_SHARPS="TOGGLE_SHARPS",e.TOGGLE_FLATS="TOGGLE_FLATS",e.TOGGLE_DOUBLE_SHARPS="TOGGLE_DOUBLE_SHARPS",e.TOGGLE_DOUBLE_FLATS="TOGGLE_DOUBLE_FLATS",e.TOGGLE_STRING="TOGGLE_STRING"}(L||(L={})),function(e){e.PLAYING="PLAYING",e.CORRECT="CORRECT",e.INCORRECT="INCORRECT"}(g||(g={}));function w(e){var t=r.useRef(null),n=Object(G.b)(),a=Object(G.c)((function(e){return e.noteToGuess})),c=Object(G.c)((function(e){return e.clickedFret})),o=Object(G.c)((function(e){return e.status}));return r.useEffect((function(){var e=o===g.CORRECT,t=o===g.PLAYING,r=[];if(null!=c){var u=e?"lime":"deeppink";if(r.push(Object(s.a)({},c,{color:u})),!e){var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h();return t.find((function(t){return m(e,t.note)}))}(a);r.push(Object(s.a)({},l,{color:"lime"}))}}new F.FretboardDiagram({id:"fretboard-ref",dots:r,showFretNums:!0,showStringNames:!0,drawDotOnHover:t,onClick:function(e){t&&n(function(e){return{type:L.FRETBOARD_CLICK,payload:e}}(e))}})})),r.createElement("div",{className:"Fretboard"},r.createElement("div",{id:"fretboard-ref",ref:t}))}var C=function(e){var t=Object(G.b)(),n=Object(G.c)((function(e){return e.noteOpts}));return a.a.createElement("button",{className:"NewNoteButton",onClick:function(){return t(_(n))}},"New Note")};function N(){var e=Object(G.c)((function(e){return e.guesses})),t=e.filter((function(e){return e.isCorrect})).length,n=e.filter((function(e){return!e.isCorrect})).length;return r.createElement("div",{className:"UserScore"},r.createElement("p",null,"Correct: ",t),r.createElement("p",null,"Incorrect: ",n))}function A(){var e=Object(G.b)();return a.a.createElement("button",{className:"ResetButton",onClick:function(){return e({type:L.RESET})}},"Restart")}function R(){var e=Object(G.b)(),t=Object(G.c)((function(e){return e.noteOpts.useSharps}));return r.createElement("div",{className:"SharpCheckbox"},r.createElement("label",{htmlFor:"useSharps"},"sharps"),r.createElement("input",{type:"checkbox",name:"useSharps",checked:t,onChange:function(){return e({type:L.TOGGLE_SHARPS})}}))}function y(){var e=Object(G.b)(),t=Object(G.c)((function(e){return e.noteOpts.useFlats}));return r.createElement("div",{className:"FlatCheckbox"},r.createElement("label",{htmlFor:"useFlats"},"flats"),r.createElement("input",{type:"checkbox",name:"useFlats",checked:t,onChange:function(){return e({type:L.TOGGLE_FLATS})}}))}function j(){var e=Object(G.b)(),t=Object(G.c)((function(e){return e.noteOpts.useDoubleSharps}));return r.createElement("div",{className:"DoubleSharpCheckbox"},r.createElement("label",{htmlFor:"useDoubleSharps"},"double-sharps"),r.createElement("input",{type:"checkbox",name:"useDoubleSharps",checked:t,onChange:function(){return e({type:L.TOGGLE_DOUBLE_SHARPS})}}))}function D(){var e=Object(G.b)(),t=Object(G.c)((function(e){return e.noteOpts.useDoubleFlats}));return r.createElement("div",{className:"DoubleFlatCheckbox"},r.createElement("label",{htmlFor:"useDoubleFlats"},"double-flats"),r.createElement("input",{type:"checkbox",name:"useDoubleFlats",checked:t,onChange:function(){return e({type:L.TOGGLE_DOUBLE_FLATS})}}))}function k(e){return r.createElement("div",{className:"AccidentalSelect"},r.createElement("p",null,"Accidentals"),r.createElement("div",{className:"accidental-checkboxes"},r.createElement(R,null),r.createElement(y,null),r.createElement(j,null),r.createElement(D,null)))}function x(e){var t=Object(G.b)(),n=Number(e.stringNum),r="string-".concat(n),c=Object(G.c)((function(e){return e.noteOpts.stringsToUse.includes(n)}));return a.a.createElement("div",null,a.a.createElement("label",{htmlFor:r},"".concat(n)),a.a.createElement("input",{type:"checkbox",name:r,checked:c,onChange:function(){return t(function(e){return{type:L.TOGGLE_STRING,payload:e}}(n))}}))}function B(){return a.a.createElement("div",{className:"StringSelect"},a.a.createElement("p",null,"Strings"),a.a.createElement("div",{className:"string-checkboxes"},[1,2,3,4,5,6].map((function(e){return a.a.createElement(x,{stringNum:e,key:String(e)})}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=n(7),U=n(16),P=n(11),H=n.n(P),K=n(29),W=n(30),Y=new H.a(K),z=new H.a(W);function M(){return{noteToGuess:b(O),clickedFret:null,status:g.PLAYING,guesses:[],noteOpts:O}}function q(e,t){return Object(s.a)({},e,{noteToGuess:t.payload,clickedFret:null,status:g.PLAYING})}function J(e,t){var n,r,a=(n=e.noteToGuess,null!=(r=t.payload)&&m(n,p(r))),c=a?g.CORRECT:g.INCORRECT;a?Y.play():z.play();var o=e.guesses.concat([{noteToGuess:e.noteToGuess,clickedFret:t.payload,isCorrect:a}]);return Object(s.a)({},e,{clickedFret:t.payload,status:c,guesses:o})}function $(e,t){switch(t.type){case L.TOGGLE_SHARPS:var n=Object(s.a)({},e.noteOpts,{useSharps:!e.noteOpts.useSharps});return Object(s.a)({},e,{noteOpts:n});case L.TOGGLE_FLATS:var r=Object(s.a)({},e.noteOpts,{useFlats:!e.noteOpts.useFlats});return Object(s.a)({},e,{noteOpts:r});case L.TOGGLE_DOUBLE_SHARPS:var a=Object(s.a)({},e.noteOpts,{useDoubleSharps:!e.noteOpts.useDoubleSharps});return Object(s.a)({},e,{noteOpts:a});case L.TOGGLE_DOUBLE_FLATS:var c=Object(s.a)({},e.noteOpts,{useDoubleFlats:!e.noteOpts.useDoubleFlats});return Object(s.a)({},e,{noteOpts:c})}}function Z(e,t){var n,r,a=(n=e.noteOpts.stringsToUse,r=t.payload,n.includes(r)?n.filter((function(e){return e!=r})):[].concat(Object(U.a)(n),[r])),c=Object(s.a)({},e.noteOpts,{stringsToUse:a});return Object(s.a)({},e,{noteOpts:c})}var Q=Object(I.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.NEW_NOTE_TO_GUESS:return q(e,t);case L.FRETBOARD_CLICK:return J(e,t);case L.RESET:return M();case L.TOGGLE_SHARPS:case L.TOGGLE_FLATS:case L.TOGGLE_DOUBLE_SHARPS:case L.TOGGLE_DOUBLE_FLATS:return $(e,t);case L.TOGGLE_STRING:return Z(e,t);default:return e}}));Q.subscribe((function(){return console.log(Q.getState())})),o.a.render(a.a.createElement(G.a,{store:Q},a.a.createElement((function(){var e=Object(G.b)(),t=Object(G.c)((function(e){return e.status})),n=Object(G.c)((function(e){return e.noteOpts}));function c(r){if(t!==g.PLAYING)switch(r.key){case"Enter":case" ":e(_(n))}}return Object(r.useEffect)((function(){return window.addEventListener("keypress",c),function(){window.removeEventListener("keypress",c)}})),a.a.createElement("div",{className:"App"},a.a.createElement(N,null),a.a.createElement(T,null),a.a.createElement(w,null),a.a.createElement(C,null),a.a.createElement(B,null),a.a.createElement(k,null),a.a.createElement(A,null))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.2a7ace98.chunk.js.map