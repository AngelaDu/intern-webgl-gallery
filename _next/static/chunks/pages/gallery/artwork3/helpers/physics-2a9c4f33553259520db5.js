_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[33],{VH5G:function(n,i,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gallery/artwork3/helpers/physics",function(){return o("xVGw")}])},xVGw:function(n,i,o){"use strict";function e(n,i,o,e,r,t,s,a,c,d,p){if(null!=n){var u,l,f,w,_;n.step(),function(n,i,o,e,r,t,s,a,c,d){if(!o.every((function(n){return n.animated})))for(var p=0;p<c;p++)e[p].every(i.isAsleep)&&!o[p].animated&&(a&&console.log("all bodies are asleep"),d(n,r[p],t[p],s),o[p].animated=!0)}(i,o,e,r,t,s,a,c,d,p);for(var y=0;y<d;y++)for(_=r[y].length,f=r[y],w=t[y];_--;)l=f[_],u=w[_],l.sleeping||(u.position.copy(l.getPosition()),u.quaternion.copy(l.getQuaternion()))}}function r(n,i,o,e){var r=[50,800,800],t=[400,0,0],s=[-400,0,0],a=[800,800,50],c=[0,0,-400],d=[0,0,400],p=e(n,r,t,[0,0,0],16777215),u=e(n,r,s,[0,0,0],16777215),l=e(n,a,c,[0,0,0],16777215),f=e(n,a,d,[0,0,0],16777215);i.add({size:r,pos:t,world:i,friction:.5}),i.add({size:r,pos:s,world:i,friction:.5}),i.add({size:a,pos:c,world:i,friction:.5}),i.add({size:a,pos:d,world:i,friction:.5}),o.concat([p,u,f,l])}o.r(i),o.d(i,"initWalls",(function(){return r})),o.d(i,"updateOimoPhysics",(function(){return e}))}},[["VH5G",0]]]);