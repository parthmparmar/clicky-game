(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(27)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/baby_yoda.fa1b0be8.jpg"},function(e,a,t){e.exports=t.p+"static/media/batman.640d3f99.jpg"},function(e,a,t){e.exports=t.p+"static/media/captain_america.89c4fa2f.jpg"},function(e,a,t){e.exports=t.p+"static/media/hulk.156484dc.jpg"},function(e,a,t){e.exports=t.p+"static/media/iorn_man.6ad21feb.jpg"},function(e,a,t){e.exports=t.p+"static/media/spider_man.c6b9716b.jpg"},function(e,a,t){e.exports=t.p+"static/media/storm.b9a5a4fd.jpg"},function(e,a,t){e.exports=t.p+"static/media/subzero.ee512b86.jpg"},function(e,a,t){e.exports=t.p+"static/media/superman.5a78bb12.jpg"},function(e,a,t){e.exports=t.p+"static/media/venom.124d942f.jpg"},function(e,a,t){e.exports=t.p+"static/media/wolverine.0a4af948.jpg"},function(e,a,t){e.exports=t.p+"static/media/wonder_woman.6cdcd3bd.jpg"},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(2),o=t.n(c),i=(t(13),t(14),t(3)),m=t(4),s=t(6),l=t(5),u=t(7),p=[{name:"babyYoda",image:t(15)},{name:"batman",image:t(16)},{name:"captainAmerica",image:t(17)},{name:"hulk",image:t(18)},{name:"ironMan",image:t(19)},{name:"spiderman",image:t(20)},{name:"storm",image:t(21)},{name:"subzero",image:t(22)},{name:"superman",image:t(23)},{name:"venom",image:t(24)},{name:"wolverine",image:t(25)},{name:"wonder_woman",image:t(26)}];var d=function(e){return n.a.createElement("div",{className:"top-bar mt-3 mb-4"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("h4",null,"Clicky Game")),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("h4",null,e.msg)),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("h4",null,"Your Score: ",e.score," | Your Top Score: ",e.topScore))))};var g=function(){return n.a.createElement("div",{className:"jumbotron jumbotron-fluid"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"display-4"},"Superhero Clicky Game"),n.a.createElement("p",{className:"lead"},"How good is you memory?  Good enough to be a Superhero or a Superfan?")))},f=function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(n)))).state={imageArray:p,clickedArray:[],Score:0,topScore:0,msg:"Click an Image to Play Game!"},t.playGame=function(e){var a=t.randomizeArray();if(1==t.checkArray(e))t.setState({imageArray:a,Score:0,clickedArray:[],msg:"You Guessed Incorrectly!"});else{var r=t.state.clickedArray.concat(e),n=t.state.Score+1,c=t.topScoreCheck(n);t.setState({imageArray:a,clickedArray:r,Score:n,topScore:c,msg:"You Guessed Correctly!"})}},t.checkArray=function(e){return!!t.state.clickedArray.includes(e)},t.topScoreCheck=function(e){return e>t.state.topScore?e:t.state.topScore},t.randomizeArray=function(){for(var e=t.state.imageArray.slice(),a=e.length-1;a>0;a--){var r=Math.floor(Math.random()*(a+1)),n=[e[r],e[a]];e[a]=n[0],e[r]=n[1]}return e},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this.randomizeArray();this.setState({imageArray:e})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(d,{score:this.state.Score,topScore:this.state.topScore,msg:this.state.msg}),n.a.createElement(g,null),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},this.state.imageArray.map((function(a){return n.a.createElement("div",{className:"col-md-2"},n.a.createElement("img",{key:a.name,className:"img-fluid p-2 mt-3",src:a.image,onClick:function(){return e.playGame(a.name)},alt:"superhero"}))})))))}}]),a}(r.Component);var y=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.920acde9.chunk.js.map