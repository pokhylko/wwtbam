(this.webpackJsonpwwtbam=this.webpackJsonpwwtbam||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"question":"How many seconds are in an hour?","answers":["1000","2345","3600","6300"],"correct":"3600"},{"question":"What makeup product makes eyelashes appear longer?","answers":["Mascara","Blush","Foundation","Lipstick"],"correct":"Mascara"},{"question":"What city contains the Eiffel Tower?","answers":["Sydney","Las Angeles","New York City","Paris"],"correct":"Paris"},{"question":"Which sport is also known as football?","answers":["Soccer","Basketball","Baseball","Cricket"],"correct":"Soccer"},{"question":"How many continents are there?","answers":["5","6","7","8"],"correct":"7"},{"question":"Who wasn\'t a member of the Beatles?","answers":["John Lennon","Paul McCartney","Ringo Star","Justin Timberlake"],"correct":"Justin Timberlake"},{"question":"Which of the following is not a type of pasta?","answers":["Spaghetti","Escargot","Fettuccine","Ziti"],"correct":"Escargot"},{"question":"Which state has cities named San Francisco and Hollywood?","answers":["California","Utah","Hawaii","Montana"],"correct":"California"},{"question":"Which instrument does not have strings?","answers":["Guitar","Bass","Trombone","Cello"],"correct":"Trombone"},{"question":"What product does Tesla produce?","answers":["Ice cream","Televisions","Hair brushes","Electric cars"],"correct":"Electric cars"},{"question":"Which animal is not a primate?","answers":["Chimpanzee","Dolphin","Gorillla","Orangutan"],"correct":"Dolphin"},{"question":"What gas makes voices sound higher when inhaled?","answers":["Oxygen","Nitrogen","Sulfur Hexafluoride","Helium"],"correct":"Helium"}]')},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),c=a.n(n),r=a(5),i=a.n(r),o=(a(12),a(2)),l=(a(13),a(14),a(3)),u=a.n(l),m=a.p+"static/media/like.ae778be2.svg",h=function(e){var t=e.setGameStart,a=e.gameOver,n=e.score;return Object(s.jsx)("div",{className:u()("game-start",{"game-start_bg":!a}),children:Object(s.jsxs)("div",{className:"game-start__wrapper",children:[Object(s.jsx)("img",{className:"game-start__logo",src:m,alt:"like"}),Object(s.jsxs)("div",{className:"game-start__content",children:[a?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{className:"game-start__score-title",children:"Total score:"}),Object(s.jsx)("h2",{className:"game-start__title",children:"$".concat(n.toLocaleString()," earned")})]}):Object(s.jsx)("h1",{className:"game-start__title",children:"Who wants to be a\xa0millionaire?"}),Object(s.jsx)("button",{onClick:function(){t(!0)},className:"game-start__button",children:"Start"})]})]})})},b=(a(15),a(6)),d=["A","B","C","D"],j=[500,1e3,2e3,4e3,8e3,16e3,32e3,64e3,125e3,25e4,5e5,1e6],f=function(e){var t=e.setGameStart,a=e.setGameOver,c=e.setScore,r=Object(n.useState)(0),i=Object(o.a)(r,2),l=i[0],m=i[1],h=Object(n.useState)(!1),f=Object(o.a)(h,2),g=f[0],O=f[1],_=Object(n.useState)(!1),w=Object(o.a)(_,2),p=w[0],v=w[1],x=[].concat(j).reverse(),S=b[l],N=Object(n.useCallback)((function(e){k(e),t(!1),a(!0)}),[]);Object(n.useEffect)((function(){g&&setTimeout((function(){m((function(e){return e+1})),O(!1)}),1e3)}),[g]),Object(n.useEffect)((function(){p&&setTimeout((function(){N(l),v(!1)}),1e3)}),[p,l,N]);var k=function(e){c(0===e?0:j[e-1])};return Object(s.jsx)("div",{className:"game-field",children:Object(s.jsxs)("div",{className:"game-field__wrapper",children:[Object(s.jsxs)("div",{className:"game-field__question",children:[Object(s.jsx)("h2",{className:"game-field__title",children:S.question}),Object(s.jsx)("div",{className:"game-field__answers",children:S.answers.map((function(e,t){return Object(s.jsxs)("button",{className:u()("game-field__answer","answer-button",{"answer-button_correct":e===g,"answer-button_wrong":e===p}),onClick:function(){return function(e){e!==S.correct&&v(e),e===S.correct&&10===l&&O(e),e===S.correct&&O(e)}(e)},children:[Object(s.jsx)("span",{className:"answer-button__letter",children:d[t]}),e]},e)}))})]}),Object(s.jsx)("div",{className:"game-field__steps",children:x.map((function(e){return Object(s.jsx)("div",{className:u()("game-field__step",{"game-field__step_inactive":e>j[l],"game-field__step_current":e===j[l],"game-field__step_finished":e<j[l]}),children:"$".concat(e.toLocaleString())},e)}))})]})})},g=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),i=Object(o.a)(r,2),l=i[0],u=i[1],m=Object(n.useState)(0),b=Object(o.a)(m,2),d=b[0],j=b[1];return Object(s.jsx)("div",{className:"game",children:a?Object(s.jsx)(f,{setGameStart:c,setGameOver:u,setScore:j}):Object(s.jsx)(h,{setGameStart:c,gameOver:l,score:d})})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root")),O()}],[[16,1,2]]]);
//# sourceMappingURL=main.f0bbbbc3.chunk.js.map