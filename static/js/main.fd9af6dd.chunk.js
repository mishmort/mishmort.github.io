(this.webpackJsonpmishmort=this.webpackJsonpmishmort||[]).push([[0],{18:function(e,t,s){},19:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),r=s(21),n=s.n(r),i=(s(18),s(8)),l=s(2),j=s.p+"static/media/globe.506f1f55.svg",o=(s(19),s(9)),d=s(17),b=s(0),m=function(e){var t=e.id,s=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},c=["#6C9AF3","#BCC578","#F69BC8","#E6CF77","#B396E2","#010614"],a=s(1,2),r=c[s(0,c.length-1)],n={width:"300px",height:"300px",top:s(-20,100)+"%",left:s(0,100)+"%",transform:"scale("+a+")",backgroundColor:r,position:"absolute",borderRadius:Object(o.a)(Array(4).keys()).map((function(){return s(10,100)+"%"})).join(" ")+" / "+Object(o.a)(Array(4).keys()).map((function(){return s(10,100)+"%"})).join(" ")},i=function e(t){Object(d.a)({targets:".blob-"+t,translateX:s(-200,200),translateY:s(-200,200),scale:s(1.5,2),duration:2e4,easing:"easeInOutQuad",complete:function(){return e(t)}})};return function(e){Object(d.a)({targets:".blob-"+e,translateX:s(-200,200),translateY:s(-200,200),scale:s(1.5,2),duration:500,easing:"easeInOutQuad",complete:function(){return i(e)}})}(t),Object(b.jsx)("div",{className:"blob blob-"+t,style:n})},O=function(){var e=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)};return Object(b.jsx)("div",{className:"blur",children:Object(o.a)(Array(10).keys()).map((function(t){var s=e(0,100),c=e(0,100);return Object(b.jsx)(m,{id:t,x:s,y:c})}))})},u=s(4),x=function(){var e=Object(l.f)(),t=Object(c.useState)("/"===e.pathname?17:0),s=Object(u.a)(t,2),a=s[0],r=s[1];return Object(c.useEffect)((function(){a>0&&setTimeout((function(){return r(a-1)}),1e3)})),Object(b.jsx)("div",{className:"nav",children:0===a&&Object(b.jsxs)("div",{className:"pages",children:[Object(b.jsx)(i.b,{className:"navlink",to:"/about",children:Object(b.jsx)("span",{className:"navlinktext",children:"about"})}),Object(b.jsx)(i.b,{className:"navlink",to:"/skillseducation",children:Object(b.jsx)("span",{className:"navlinktext",children:"skills + education"})}),Object(b.jsx)(i.b,{className:"navlink",to:"/",children:Object(b.jsx)("img",{className:"homelogo",src:"mishmortlogo.svg",alt:"mishmort logo",width:"30%"})}),Object(b.jsx)(i.b,{className:"navlink",to:"/experience",children:Object(b.jsx)("span",{className:"navlinktext",children:"experience"})}),Object(b.jsx)(i.b,{className:"navlink",to:"/projects",children:Object(b.jsx)("span",{className:"navlinktext",children:"projects"})})]})})},h=s.p+"static/media/resume.554ce713.svg",p=s.p+"static/media/codepen.88957c5d.svg",f=s.p+"static/media/github.b8feec6f.svg",v=s.p+"static/media/linkedin.1fff2a6f.svg",g=s.p+"static/media/twitter.97df7401.svg",N=s.p+"static/media/Camisha_Mortensen_Resume.2a1edde5.pdf",y=function(){return Object(b.jsxs)("div",{className:"about",children:[Object(b.jsxs)("div",{className:"bio",children:[Object(b.jsx)("div",{className:"biotitle",children:"ABOUT"}),Object(b.jsxs)("span",{children:["Hi, I'm Misha",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"I'm a developer and designer living in Toronto. I'm a fourth year computer science student at McMaster University and a Canadian-American dual citizen. I enjoy combining my love for art and programming.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"I started at the University of Waterloo in a design and business program.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Now I'm working on full-stack web projects and solidifying my understanding of the fundamentals of computer science.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Outside of my work, I spend time running, playing games, sewing and watching cartoons.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Please check out my work and find my resume below. Feel free to reach out anytime!",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Misha :-)"]})]}),Object(b.jsx)("div",{className:"selfie"}),Object(b.jsxs)("div",{className:"links",children:[Object(b.jsx)("div",{className:"resumetitle",children:"RESUME"}),Object(b.jsx)("div",{className:"resumetitle",children:"TWITTER"}),Object(b.jsx)("div",{className:"resumetitle",children:"CODEPEN"}),Object(b.jsx)("div",{className:"resumetitle",children:"LINKEDIN"}),Object(b.jsx)("div",{className:"resumetitle",children:"GITHUB"}),Object(b.jsx)("a",{className:"link",target:"_blank",href:N,style:{backgroundImage:"url(".concat(h,")")}}),Object(b.jsx)("a",{className:"link",target:"_blank",href:"https://twitter.com/_mishmort_",style:{backgroundImage:"url(".concat(g,")")}}),Object(b.jsx)("a",{className:"link",target:"_blank",href:"https://codepen.io/mishmort",style:{backgroundImage:"url(".concat(p,")")}}),Object(b.jsx)("a",{className:"link",target:"_blank",href:"https://www.linkedin.com/in/camisha-mortensen-10b9b1110/",style:{backgroundImage:"url(".concat(v,")")}}),Object(b.jsx)("a",{className:"link",target:"_blank",href:"https://github.com/mishmort",style:{backgroundImage:"url(".concat(f,")")}})]})]})},k=function(e){var t=e.reloadtimer,s=Object(c.useState)(t.current?15:0),a=Object(u.a)(s,2),r=a[0],n=a[1];console.log(t),console.log(r);var i={color:"white",opacity:r<9?"100%":"0%",fontSize:"15px",gridArea:"globe"};return Object(c.useEffect)((function(){r>0&&setTimeout((function(){return n(r-1)}),1e3),1===r&&(t.current=!1)})),Object(b.jsx)("div",{className:r>=10?"stat statani outerglobe":"stat outerglobe",children:Object(b.jsx)("div",{className:"innerglobe globe",style:i})})},S=function(e){var t=e.reloadtimer,s=Object(c.useState)(t.current?15:0),a=Object(u.a)(s,2),r=a[0],n=a[1],i={color:"white",opacity:r<8?"100%":"0%",fontSize:"15px",gridArea:"knowledge"};return Object(c.useEffect)((function(){r>0&&setTimeout((function(){return n(r-1)}),1e3),1===r&&(t.current=!1)})),Object(b.jsx)("div",{className:r>=10?"stat statani":"stat",children:Object(b.jsxs)("div",{className:"innerknowledge",style:i,children:[Object(b.jsx)("div",{className:"bar",children:Object(b.jsx)("div",{className:"innerbar bar1"})}),Object(b.jsx)("div",{className:"bar",children:Object(b.jsx)("div",{className:"innerbar bar2"})}),Object(b.jsx)("div",{className:"bar",children:Object(b.jsx)("div",{className:"innerbar bar3"})})]})})},E=function(e){var t=e.reloadtimer,s=Object(c.useState)(!1),a=Object(u.a)(s,2),r=a[0],n=a[1],i=Object(c.useRef)(null),l=Object(c.useState)(void 0),j=Object(u.a)(l,2),o=j[0],d=j[1],m=Object(c.useState)(t.current?15:0),O=Object(u.a)(m,2),x=O[0],h=O[1],p=Object(c.useCallback)((function(e){var t=g(e);t&&(d(t),n(!0))}),[]);Object(c.useEffect)((function(){if(i.current){var e=i.current;return e.addEventListener("mouseenter",p),function(){e.removeEventListener("mouseenter",p)}}}),[p]);var f=Object(c.useCallback)((function(e){if(r){var t=g(e);o&&t&&(N(o,t),d(t))}}),[r,o]);Object(c.useEffect)((function(){if(i.current){var e=i.current;return e.addEventListener("mousemove",f),function(){e.removeEventListener("mousemove",f)}}}),[f]);var v=Object(c.useCallback)((function(){n(!1),d(void 0)}),[]);Object(c.useEffect)((function(){if(i.current){var e=i.current;return e.addEventListener("mouseleave",v),function(){e.removeEventListener("mouseleave",v)}}}),[v]);var g=function(e){if(i.current)return{x:e.offsetX,y:e.offsetY}},N=function(e,t){if(i.current){var s=i.current.getContext("2d");s&&(s.strokeStyle="white",s.lineJoin="round",s.lineWidth=.5,s.beginPath(),s.moveTo(e.x,e.y),s.lineTo(t.x,t.y),s.closePath(),s.stroke())}};Object(c.useEffect)((function(){x>0&&setTimeout((function(){return h(x-1)}),1e3),1===x&&(t.current=!1)}));var y=function(){return Object(b.jsxs)("div",{className:x>=6?"statafter":"phwrap",children:[Object(b.jsx)("div",{className:"ph phx"}),Object(b.jsx)("div",{className:"ph phy"})]})};return Object(b.jsxs)("div",{style:{gridArea:"canvas",width:"100%",height:"100%"},className:x>=10?"stat statani outerdraw":x>=6?"stat":"stat outerdraw",children:[!r&&Object(b.jsx)(y,{}),Object(b.jsx)("canvas",{style:{},className:x>=7?"statafter":"",ref:i,width:"250px",height:"250px"})]})},w=function(e){var t=e.reloadtimer,s=Object(c.useState)(t.current?15:0),a=Object(u.a)(s,2),r=a[0],n=a[1],i={opacity:r<7?"100%":"0%",gridArea:"spinny"};return Object(c.useEffect)((function(){r>0&&setTimeout((function(){return n(r-1)}),1e3),1===r&&(t.current=!1)})),Object(b.jsx)("div",{className:r>=10?"stat statani":"stat",children:Object(b.jsxs)("div",{className:"innerspinny",style:i,children:[Object(b.jsx)("div",{className:"thincircle"}),Object(b.jsx)("div",{className:"thickcircle"})]})})},M=function(e){var t=e.reloadtimer,s=Object(c.useState)(t.current?15:0),a=Object(u.a)(s,2),r=a[0],n=a[1],i={color:"white",opacity:r<5?"100%":"0%",fontSize:"15px",gridArea:"mish"};Object(c.useEffect)((function(){r>0&&setTimeout((function(){return n(r-1)}),1e3),1===r&&(t.current=!1)}));var l=Object(c.useRef)(null),j=Object(c.useRef)(null),o=Object(c.useState)(0),d=Object(u.a)(o,2),m=d[0],O=d[1],x=Object(c.useState)(0),h=Object(u.a)(x,2),p=h[0],f=h[1],v=Object(c.useCallback)((function(e){O(-(window.innerWidth/2-e.pageX)/90),f(-(window.innerHeight/2-e.pageY)/190)}),[]);return Object(c.useEffect)((function(){if(!(!l.current|!j.current)){var e=l.current,t=j.current;return window.addEventListener("mousemove",v),function(){e.removeEventListener("mousemove",v),t.removeEventListener("mousemove",v)}}}),[v]),Object(b.jsx)("div",{className:r>=10?"stat statani outermish":"stat outermish",children:Object(b.jsx)("div",{className:"innermish",style:i,children:Object(b.jsxs)("div",{className:"eyewrap",children:[Object(b.jsx)("div",{className:"eye leye",style:{transition:"transform 0.1s",transform:"translateY("+p+"px) translateX("+m+"px)"},ref:l}),Object(b.jsx)("div",{className:"eye reye",style:{transition:"transform 0.1s",transform:"translateY("+p+"px) translateX("+m+"px)"},ref:j})]})})})},A=function(e){var t=e.reloadtimer,s=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},a=Object(c.useState)(t.current?15:0),r=Object(u.a)(a,2),n=r[0],i=r[1],l=Object(c.useState)(s(0,8)),j=Object(u.a)(l,2),o=j[0],d=j[1],m={opacity:n<4?"100%":"0%",gridArea:"game"},O={backgroundColor:"white"};Object(c.useEffect)((function(){n>0&&setTimeout((function(){return i(n-1)}),1e3),1===n&&(t.current=!1)}));var x=function(e){d(s(0,8))};return Object(b.jsx)("div",{className:n>=10?"stat statani outergame":"stat outergame",children:Object(b.jsxs)("div",{className:"innergame",style:m,children:[Object(b.jsx)("button",{className:"button",style:0===o?O:{},onMouseEnter:0===o?function(){return x()}:function(){}}),Object(b.jsx)("button",{className:"button",style:1===o?O:{},onMouseEnter:1===o?function(){return x()}:function(){}}),Object(b.jsx)("button",{className:"button",style:2===o?O:{},onMouseEnter:2===o?function(){return x()}:function(){}}),Object(b.jsx)("button",{className:"button",style:3===o?O:{},onMouseEnter:3===o?function(){return x()}:function(){}}),Object(b.jsx)("button",{className:"button",style:4===o?O:{},onMouseEnter:4===o?function(){return x()}:function(){}}),Object(b.jsx)("button",{className:"button",style:5===o?O:{},onMouseEnter:5===o?function(){return x()}:function(){}}),Object(b.jsx)("button",{className:"button",style:6===o?O:{},onMouseEnter:6===o?function(){return x()}:function(){}}),Object(b.jsx)("button",{className:"button",style:7===o?O:{},onMouseEnter:7===o?function(){return x()}:function(){}}),Object(b.jsx)("button",{className:"button",style:8===o?O:{},onMouseEnter:8===o?function(){return x()}:function(){}})]})})},I=function(e){var t=e.reloadtimer,s=Object(c.useState)(t.current?15:0),a=Object(u.a)(s,2),r=a[0],n=a[1],i={color:"white",opacity:r<3?"100%":"0%",gridArea:"spintext"};return Object(c.useEffect)((function(){r>0&&setTimeout((function(){return n(r-1)}),1e3),1===r&&(t.current=!1)})),Object(b.jsx)("div",{className:r>=10?"stat statani outerspintext":"stat outerspintext",children:Object(b.jsx)("div",{className:"innerspintext",style:i,children:Object(b.jsxs)("div",{class:"text",children:[Object(b.jsx)("span",{style:{transform:"rotate(0deg)"},children:"t"}),Object(b.jsx)("span",{style:{transform:"rotate(10deg)"},children:"h"}),Object(b.jsx)("span",{style:{transform:"rotate(20deg)"},children:"i"}),Object(b.jsx)("span",{style:{transform:"rotate(30deg)"},children:"n"}),Object(b.jsx)("span",{style:{transform:"rotate(40deg)"},children:"g"}),Object(b.jsx)("span",{style:{transform:"rotate(50deg)"},children:"s"}),Object(b.jsx)("span",{style:{transform:"rotate(60deg)"},children:" "}),Object(b.jsx)("span",{style:{transform:"rotate(70deg)"},children:"a"}),Object(b.jsx)("span",{style:{transform:"rotate(80deg)"},children:"r"}),Object(b.jsx)("span",{style:{transform:"rotate(90deg)"},children:"e"}),Object(b.jsx)("span",{style:{transform:"rotate(100deg)"},children:"n"}),Object(b.jsx)("span",{style:{transform:"rotate(110deg)"},children:"'"}),Object(b.jsx)("span",{style:{transform:"rotate(120deg)"},children:"t"}),Object(b.jsx)("span",{style:{transform:"rotate(130deg)"},children:" "}),Object(b.jsx)("span",{style:{transform:"rotate(140deg)"},children:"a"}),Object(b.jsx)("span",{style:{transform:"rotate(150deg)"},children:"l"}),Object(b.jsx)("span",{style:{transform:"rotate(160deg)"},children:"w"}),Object(b.jsx)("span",{style:{transform:"rotate(170deg)"},children:"a"}),Object(b.jsx)("span",{style:{transform:"rotate(180deg)"},children:"y"}),Object(b.jsx)("span",{style:{transform:"rotate(190deg)"},children:"s"}),Object(b.jsx)("span",{style:{transform:"rotate(200deg)"},children:" "}),Object(b.jsx)("span",{style:{transform:"rotate(210deg)"},children:"w"}),Object(b.jsx)("span",{style:{transform:"rotate(220deg)"},children:"h"}),Object(b.jsx)("span",{style:{transform:"rotate(230deg)"},children:"a"}),Object(b.jsx)("span",{style:{transform:"rotate(240deg)"},children:"t"}),Object(b.jsx)("span",{style:{transform:"rotate(250deg)"},children:" "}),Object(b.jsx)("span",{style:{transform:"rotate(260deg)"},children:"t"}),Object(b.jsx)("span",{style:{transform:"rotate(270deg)"},children:"h"}),Object(b.jsx)("span",{style:{transform:"rotate(280deg)"},children:"e"}),Object(b.jsx)("span",{style:{transform:"rotate(290deg)"},children:"y"}),Object(b.jsx)("span",{style:{transform:"rotate(300deg)"},children:" "}),Object(b.jsx)("span",{style:{transform:"rotate(310deg)"},children:"s"}),Object(b.jsx)("span",{style:{transform:"rotate(320deg)"},children:"e"}),Object(b.jsx)("span",{style:{transform:"rotate(330deg)"},children:"e"}),Object(b.jsx)("span",{style:{transform:"rotate(340deg)"},children:"m"})]})})})},L=function(e){var t=e.reloadtimer,s=Object(c.useState)(t.current?15:0),a=Object(u.a)(s,2),r=a[0],n=a[1],i={color:"white",opacity:r<2?"100%":"0%",fontSize:"15px",gridArea:"graph"};return Object(c.useEffect)((function(){r>0&&setTimeout((function(){return n(r-1)}),1e3),1===r&&(t.current=!1)})),Object(b.jsx)("div",{className:r>=10?"stat statani":"stat",children:Object(b.jsxs)("div",{className:"innergraph",style:i,children:[Object(b.jsxs)("svg",{className:"out",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 373.74 244.34",children:[Object(b.jsx)("defs",{}),Object(b.jsx)("g",{id:"Layer_2","data-name":"Layer 2",children:Object(b.jsx)("g",{id:"Layer_1-2","data-name":"Layer 1",children:Object(b.jsx)("polygon",{class:"cls-1",points:"163.32 23.09 55.32 81.09 1.42 174.64 125.32 230.09 218.32 214.09 287.32 243.09 372.5 114.79 277.32 1.09 163.32 23.09"})})})]}),Object(b.jsxs)("svg",{className:"mid",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 199.31 160.14",children:[Object(b.jsx)("defs",{}),Object(b.jsx)("g",{id:"Layer_2","data-name":"Layer 2",children:Object(b.jsx)("g",{id:"Layer_1-2","data-name":"Layer 1",children:Object(b.jsx)("polygon",{class:"cls-1",points:"12.52 33.08 1.02 103.59 12.52 159.07 179.52 144.08 198.19 46.66 119.52 1.08 12.52 33.08"})})})]}),Object(b.jsxs)("svg",{className:"inn",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 144.56 85.08",children:[Object(b.jsx)("defs",{}),Object(b.jsx)("g",{id:"Layer_2","data-name":"Layer 2",children:Object(b.jsx)("g",{id:"Layer_1-2","data-name":"Layer 1",children:Object(b.jsx)("polygon",{class:"cls-1",points:"32.48 8.04 123.48 1.04 143.48 24.04 134.48 68.04 67.48 84.04 1.48 61.04 32.48 8.04"})})})]})]})})},T=function(e){var t=e.reloadtimer,s=Object(c.useState)(t.current?15:0),a=Object(u.a)(s,2),r=a[0],n=a[1],i={opacity:r<1?"100%":"0%",gridArea:"pins"};Object(c.useEffect)((function(){r>0&&setTimeout((function(){return n(r-1)}),1e3),1===r&&(t.current=!1)}));var l=function(e){var t=e.pinid,s=Object(c.useState)(0),a=Object(u.a)(s,2),r=a[0],n=a[1],i=0;Object(c.useEffect)((function(){var e=setInterval((function(){i+=t/5,n(10*Math.sin(i))}),1e3);return function(){return clearInterval(e)}}),[]);var l={transition:"transform 1s",transform:"rotate("+30*t+"deg) translateY("+r+"px)"};return Object(b.jsx)("div",{className:"pin",style:l})};return Object(b.jsx)("div",{className:r>=10?"stat statani":"stat",children:Object(b.jsxs)("div",{className:"innerpins",style:i,children:[Object(b.jsx)("div",{className:"pinbody"}),Object(o.a)(Array(12).keys()).map((function(e){return Object(b.jsx)(l,{pinid:e})}))]})})},C=function(e){var t=e.reloadtimer;return Object(b.jsx)("div",{className:"home",children:Object(b.jsxs)("div",{className:"allstats",children:[Object(b.jsx)(k,{reloadtimer:t}),Object(b.jsx)(S,{reloadtimer:t}),Object(b.jsx)(w,{reloadtimer:t}),Object(b.jsx)(E,{reloadtimer:t}),Object(b.jsx)(M,{reloadtimer:t}),Object(b.jsx)(A,{reloadtimer:t}),Object(b.jsx)(I,{reloadtimer:t}),Object(b.jsx)(L,{reloadtimer:t}),Object(b.jsx)(T,{reloadtimer:t})]})})},R=function(){return Object(b.jsxs)("div",{className:"skillseducation",children:[Object(b.jsxs)("div",{className:"mcmaster",children:[Object(b.jsx)("div",{className:"mcmastertitle",children:"MCMASTER UNIVERSITY"}),Object(b.jsxs)("div",{id:"programname",children:[" B.Sc.",Object(b.jsx)("br",{}),"Computer Science",Object(b.jsx)("br",{})]}),Object(b.jsx)("br",{})," ",Object(b.jsx)("br",{}),Object(b.jsxs)("div",{id:"programinfo",children:["Expected Graduation: April 2023 ",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"GPA: 3.4"]})]}),Object(b.jsxs)("div",{className:"waterloo",children:[Object(b.jsx)("div",{className:"waterlootitle",children:"UNIVERSITY OF WATERLOO"}),Object(b.jsxs)("div",{id:"programname",children:["Global Business ",Object(b.jsx)("br",{}),"& Digial Arts "]})," ",Object(b.jsx)("br",{})," ",Object(b.jsx)("br",{}),Object(b.jsxs)("div",{id:"programinfo",children:["September 2018 - April 2023 ",Object(b.jsx)("br",{})," ",Object(b.jsx)("br",{}),"GPA: 4.0"]})]}),Object(b.jsxs)("div",{className:"skills",children:[Object(b.jsx)("div",{className:"skillstitle",children:"SKILLS"}),Object(b.jsx)("p",{className:"skill",children:"JavaScript"}),Object(b.jsx)("p",{className:"skill",children:"HTML"}),Object(b.jsx)("p",{className:"skill",children:"CSS"}),Object(b.jsx)("p",{className:"skill",children:"React"}),Object(b.jsx)("p",{className:"skill",children:"Java"}),Object(b.jsx)("p",{className:"skill",children:"Python"}),Object(b.jsx)("p",{className:"skill",children:"Processing"}),Object(b.jsx)("p",{className:"skill",children:"SQL"}),Object(b.jsx)("p",{className:"skill",children:"Haskell"}),Object(b.jsx)("p",{className:"skill",children:"WordPress"}),Object(b.jsx)("p",{className:"skill",children:"Illustrator"}),Object(b.jsx)("p",{className:"skill",children:"PhotoShop"}),Object(b.jsx)("p",{className:"skill",children:"After Effects"}),Object(b.jsx)("p",{className:"skill",children:"Premiere Pro"}),Object(b.jsx)("p",{className:"skill",children:"UX"}),Object(b.jsx)("p",{className:"skill",children:"Typescript"})]}),Object(b.jsxs)("div",{className:"releventcourses",children:[Object(b.jsx)("div",{className:"releventcoursestitle",children:"RELEVENT COURSES"}),Object(b.jsx)("p",{className:"skill",children:"Data Structures & Algorithms"}),Object(b.jsx)("p",{className:"skill",children:"Databases"}),Object(b.jsx)("p",{className:"skill",children:"Intro to Software Development"}),Object(b.jsx)("p",{className:"skill",children:"Information Security"}),Object(b.jsx)("p",{className:"skill",children:"Advanced Algorithms"}),Object(b.jsx)("p",{className:"skill",children:"Principles of Programming"}),Object(b.jsx)("p",{className:"skill",children:"Discrete Math"}),Object(b.jsx)("p",{className:"skill",children:"Computer Architecture"})]})]})},P=function(){return Object(b.jsxs)("div",{className:"experience",children:[Object(b.jsxs)("div",{className:"exp exp1",children:[Object(b.jsx)("div",{id:"wdc",className:"exptitle",children:"WEB + DIGITAL CO-OP"}),Object(b.jsxs)("div",{className:"expdetails",children:[Object(b.jsx)("div",{className:"employer",children:"McMaster University"}),Object(b.jsx)("div",{className:"duration",children:"05/21 - PRESENT"})]}),Object(b.jsxs)("ul",{className:"explist",children:[Object(b.jsx)("li",{children:"Maintained, Created and Launched Multiple McMaster Websites"}),"\xa0",Object(b.jsx)("li",{children:"Marketing Communications to Key Stakeholders"}),"\xa0",Object(b.jsx)("li",{children:"Graphic Design"}),"\xa0"]})]}),Object(b.jsxs)("div",{className:"exp exp2",children:[Object(b.jsx)("div",{id:"homg",className:"exptitle",children:"HEAD OF MOTION GRAPHICS"}),Object(b.jsxs)("div",{className:"expdetails",children:[Object(b.jsxs)("div",{className:"employer",children:["Fashion",Object(b.jsx)("br",{})," for Change"]}),Object(b.jsx)("div",{className:"duration",children:"11/17 - 04/18"})]}),Object(b.jsxs)("ul",{className:"explist",children:[Object(b.jsx)("li",{children:"Created Animated Advertisements and Graphics"}),"\xa0",Object(b.jsx)("li",{children:"Created Live Interactive Graphics for Performance"}),"\xa0",Object(b.jsx)("li",{children:"Participated in Video Shoots"}),"\xa0",Object(b.jsx)("li",{children:"Edited Promotional Footage"}),"\xa0"]})]}),Object(b.jsxs)("div",{className:"exp exp3",children:[Object(b.jsx)("div",{id:"mamm",className:"exptitle",children:"MARKETING + MEDIA MANAGER"}),Object(b.jsxs)("div",{className:"expdetails",children:[Object(b.jsx)("div",{className:"employer",children:"UWaterloo Theatre Club"}),Object(b.jsx)("div",{className:"duration",children:"01/17 - 05/17"})]}),Object(b.jsxs)("ul",{className:"explist",children:[Object(b.jsx)("li",{children:"Graphic Design"}),"\xa0",Object(b.jsx)("li",{children:"Social Media Management"}),"\xa0",Object(b.jsx)("li",{children:"Marketing"}),"\xa0",Object(b.jsx)("li",{children:"Communications"}),"\xa0"]})]}),Object(b.jsxs)("div",{className:"exp exp4",children:[Object(b.jsx)("div",{id:"idolst",className:"exptitle",children:"DELTAHACKS 7"}),Object(b.jsxs)("div",{className:"expdetails",children:[Object(b.jsx)("div",{className:"employer",children:"McMaster University"}),Object(b.jsx)("div",{className:"duration",children:"03/21"})]}),Object(b.jsxs)("ul",{className:"explist",children:[Object(b.jsx)("li",{children:"Helped Develop a Flash Card App for Students"}),"\xa0",Object(b.jsx)("li",{children:"Graphic Design"}),"\xa0",Object(b.jsx)("li",{children:"Front-end Development"}),"\xa0"]})]})]})},D=function(){return Object(b.jsxs)("div",{className:"projects",children:[Object(b.jsxs)("div",{className:"proj proj1",children:[Object(b.jsx)("div",{className:"projtitle",children:"PEST MAPPER"}),Object(b.jsx)("div",{className:"thumb1"}),Object(b.jsxs)("div",{className:"projdetails",children:["Platform for tennants to report pest issues",Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"ReactJS"}),Object(b.jsx)("li",{children:"Java"}),Object(b.jsx)("li",{children:"SpringBoot"}),Object(b.jsx)("li",{children:"PostgreSQL"})]}),Object(b.jsx)("a",{target:"_blank",href:"http://pestmapper-env.eba-2ypfqjyc.us-east-2.elasticbeanstalk.com/",children:Object(b.jsx)("button",{className:"projlink",children:"Visit"})})]})]}),Object(b.jsxs)("div",{className:"proj proj2",children:[Object(b.jsx)("div",{className:"projtitle",children:"WORDS OFF STREAM"}),Object(b.jsx)("div",{className:"thumb2"}),Object(b.jsxs)("div",{className:"projdetails",children:["Single player version of the streaming puzzle game",Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"ReactJS"}),Object(b.jsx)("li",{children:"JS"}),Object(b.jsx)("li",{children:"HTML"}),Object(b.jsx)("li",{children:"CSS"})]})]})]}),Object(b.jsxs)("div",{className:"proj proj3",children:[Object(b.jsx)("div",{className:"projtitle",children:"COLOR VISUALIZER"}),Object(b.jsx)("div",{className:"thumb3"}),Object(b.jsxs)("div",{className:"projdetails",children:["Interactive graphics display allowing audience to change stage backdrop via Twitter",Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"JS"}),Object(b.jsx)("li",{children:"Processing"})]})]})]}),Object(b.jsxs)("div",{className:"proj proj4",children:[Object(b.jsx)("div",{className:"projtitle",children:"MISHEGG"}),Object(b.jsx)("div",{className:"thumb4"}),Object(b.jsxs)("div",{className:"projdetails",children:["Grade calculator app for students",Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"ReactJS"}),Object(b.jsx)("li",{children:"JS"}),Object(b.jsx)("li",{children:"HTML"}),Object(b.jsx)("li",{children:"CSS"})]})]})]})]})},G=function(){return Object(b.jsx)("div",{className:"notfound",children:"huh? what are you doing here?"})};var _=function(){var e=Object(c.useRef)(!0);return Object(b.jsxs)("div",{className:"mishmort",children:[Object(b.jsx)(O,{}),Object(b.jsxs)("div",{className:"main",children:[Object(b.jsxs)(i.a,{basename:"",children:[Object(b.jsx)(x,{}),Object(b.jsx)("div",{className:"content",children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/about",children:Object(b.jsx)(y,{})}),Object(b.jsx)(l.a,{exact:!0,path:"/skillseducation",children:Object(b.jsx)(R,{})}),Object(b.jsx)(l.a,{exact:!0,path:"/",children:Object(b.jsx)(C,{reloadtimer:e})}),Object(b.jsx)(l.a,{exact:!0,path:"/experience",children:Object(b.jsx)(P,{})}),Object(b.jsx)(l.a,{exact:!0,path:"/projects",children:Object(b.jsx)(D,{})}),Object(b.jsx)(l.a,{exact:!0,path:"/*",children:Object(b.jsx)(G,{})})]})})]}),Object(b.jsxs)("div",{className:"footer",children:[Object(b.jsx)("img",{src:j,alt:"globe icon",className:"globelogo",width:"14%"}),Object(b.jsx)("span",{id:"footertitle",children:"MISHMORT"})]})]})]})};n.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.fd9af6dd.chunk.js.map