(()=>{var e,t,n="",c=100,i=100,r=!1,a=[],o=document.querySelector("[data-score]"),d=document.querySelector("[data-character-block]"),s=document.querySelector("[data-start-button]"),l=document.querySelector("[data-stop-button]"),u=document.querySelector("[data-reset-button]"),v=document.querySelector("[data-score-button]"),L=document.querySelector("[data-progress-bar]"),b=document.querySelector("[data-ball]"),m=document.querySelector("[data-score-list]"),f=document.querySelector("[data-close-button]"),h=function(){clearInterval(e),clearInterval(t)},y=function(e,t){var n=e-.5+Math.random()*(t-e+1);return Math.round(n)},S=function(){var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZ";e+=t.charAt(Math.floor(Math.random()*t.length)),d.innerHTML=e,n=e},E=function(){b.setAttribute("style","width:".concat(c,"px; height:").concat(c,"px"))},M=function(){i<=0?clearInterval(t):(i-=.5,L.classList.add("visible"),L.setAttribute("style","width:".concat(i,"%")))},k=function(){g(),e=setInterval(q,2e3)},p=function(){r=!0,h(),L.classList.add("hidden"),s.setAttribute("disabled","true"),document.removeEventListener("keydown",H),a.push(c)},q=function(){c-=y(10,15),T(),g()},g=function(){r||(i=100,o.innerHTML=c.toString(),S(),E())},H=function(t){n===t.key.toUpperCase()?c+=y(5,10):c-=y(20,25),o.innerHTML=c.toString(),i=100,clearInterval(e),k(),E(),S(),T()},T=function(){return c>=200?(o.innerHTML="YOU WIN! YOUR SCORE: ".concat(c),L.classList.add("hidden"),void p()):c<=0?(o.innerHTML="YOU LOSE! YOUR SCORE: ".concat(c),L.classList.add("hidden"),void p()):void 0},A=function(){s.removeAttribute("disabled"),r=!0,document.removeEventListener("keydown",H),h()};s.addEventListener("click",(function(){r=!1,s.setAttribute("disabled","true"),L.classList.add("visible"),m.classList.remove("visible"),f.classList.remove("visible"),k(),M(),t=setInterval(M,10),document.addEventListener("keydown",H)})),l.addEventListener("click",(function(){return A()})),u.addEventListener("click",(function(){s.removeAttribute("disabled"),r=!0,h(),c=100,i=100,E(),o.innerHTML="".concat(c),L.classList.add("hidden"),document.removeEventListener("keydown",H)})),v.addEventListener("click",(function(){m.classList.add("visible"),f.classList.add("visible"),m.innerHTML="",a.map((function(e,t){var n=document.createElement("div");n.innerHTML="".concat(t+1,": ").concat(e),n.classList.add("new-score"),m.appendChild(n)})),A()})),f.addEventListener("click",(function(){return m.classList.toggle("visible"),void f.classList.toggle("visible")}))})();