"use strict";(self.webpackChunkffx_monster_arena=self.webpackChunkffx_monster_arena||[]).push([[190],{190:function(e,s,n){n.r(s),n.d(s,{default:function(){return F}});var i=n(689),t=n(288),a=n(942),c=n(439),l=n(694),r=n.n(l),o=n(791),d=n(851),m=n(991),u="style_enemy__4-XEq",x="style_misplaced__1L5Cy",f="style_check__u+v62",h="style_portrait__Jrwlq",j="style_information__yZ2PG",p="style_killcount__wH8fw",v="style_minusButton__9zv7h",_="style_plusButton__zb7mu",y="style_progress__nCasB",N="style_label__JhjEf",g="style_infoModal__CJv0k",b="style_header__rplfT",A="style_sectionInformation__xfZGA",k="style_sectionDescription__yos-I",C=n(454),E=n(433),I=n(184),Z=o.createContext({active:[],toggleActive:function(){}}),q=function(e){var s=e.defaultItem,n=e.children,i=(0,o.useState)(s?[s]:[]),t=(0,c.Z)(i,2),a=t[0],l=t[1],r=(0,o.useMemo)((function(){return function(e){return l((function(s){return s.includes(e)?s.filter((function(s){return s!==e})):[].concat((0,E.Z)(s),[e])}))}}),[l]);return(0,I.jsx)(Z.Provider,{value:{active:a,toggleActive:r},children:n})},w="style_accordionItem__0VqFz",S="style_opened__PKTW5",z="style_accordionContent__ICoPq",P=function(e){var s=e.id,n=e.title,i=e.children,t=e.className,c=(e.collapsed,(0,o.useContext)(Z)),l=c.active,d=c.toggleActive;return(0,I.jsxs)("div",{className:r()(w,"card",t,(0,a.Z)({},S,l.includes(s))),children:[(0,I.jsxs)("header",{className:"card-header",onClick:function(){return d(s)},children:[(0,I.jsx)("p",{className:"card-header-title",children:n}),(0,I.jsx)("button",{className:"card-header-icon","aria-label":"more options",children:(0,I.jsx)(C.Z,{name:"angle-down"})})]}),(0,I.jsx)("div",{className:r()(z,"card-content"),children:(0,I.jsx)("div",{className:"content",children:i})})]})},B=function(e){var s=e.title,n=e.description;return(0,I.jsxs)("div",{className:"block has-text-left",children:[(0,I.jsx)("p",{className:"title is-5",children:s}),(0,I.jsx)("p",{className:r()(k,"subtitle is-6"),children:n})]})},M=function(e){var s=e.name,n=e.onClose,i=t.gE[s];return i?(0,I.jsxs)("div",{className:r()(g,"modal is-active"),children:[(0,I.jsx)("div",{className:"modal-background",onClick:n}),(0,I.jsx)("div",{className:"modal-content",children:(0,I.jsxs)("div",{className:"box has-text-left",children:[(0,I.jsxs)("div",{className:b,children:[(0,I.jsx)("figure",{className:"image is-128x128",children:(0,I.jsx)("img",{src:"/ffx-monster-arena/img/".concat(i.img),alt:"Enemy portrait"})}),(0,I.jsxs)("div",{className:"block",children:[(0,I.jsx)("p",{className:"title is-4",children:s}),(0,I.jsx)("p",{className:"subtitle",children:i.sensorDescription})]})]}),(0,I.jsx)("div",{className:j,children:(0,I.jsxs)(q,{defaultItem:"items",children:[(0,I.jsx)(P,{id:"scan_description",title:"Scan description",children:(0,I.jsx)("p",{className:"subtitle is-6",children:i.scanDescription})}),(0,I.jsx)(P,{id:"basic_information",title:"Basic information",children:(0,I.jsxs)("div",{className:A,children:[(0,I.jsx)(B,{title:"Location",description:i.location.map((function(e){return(0,I.jsx)("span",{children:e},e)}))}),(0,I.jsx)(B,{title:"Species",description:i.species}),(0,I.jsx)(B,{title:"Monster Arena",description:i.monsterArena}),(0,I.jsx)(B,{title:"Other information",description:i.otherInformation})]})}),(0,I.jsx)(P,{id:"stats",title:"Stats",children:(0,I.jsx)("div",{className:A,children:i.stats.map((function(e){return(0,I.jsx)(B,{title:e.name,description:Array.isArray(e.values)?e.values.map((function(s){return(0,I.jsx)("span",{children:s},"stats[".concat(e.name,"]_[").concat(s,"]"))})):e.values},e.name)}))})}),(0,I.jsx)(P,{id:"items",title:"Items",children:(0,I.jsx)("div",{className:A,children:i.items.map((function(e){return(0,I.jsx)(B,{title:e.name,description:Array.isArray(e.values)?e.values.map((function(s){return(0,I.jsx)("span",{children:s},"items[".concat(e.name,"]_[").concat(s,"]"))})):e.values},e.name)}))})}),(0,I.jsx)(P,{id:"elemental_affinities",title:"Elemental affinities",children:(0,I.jsx)("div",{className:A,children:i.elementalAffinities.map((function(e){return(0,I.jsx)(B,{title:e.name,description:Array.isArray(e.values)?e.values.map((function(s){return(0,I.jsx)("span",{children:s},"elemental_affinities[".concat(e.name,"]_[").concat(s,"]"))})):e.values},e.name)}))})}),(0,I.jsx)(P,{id:"statuses_and_immunities",title:"Statuses and immunities",children:(0,I.jsx)("div",{className:A,children:i.statusesAndImmunities.map((function(e){return(0,I.jsx)(B,{title:e.name,description:Array.isArray(e.values)?e.values.map((function(s){return(0,I.jsx)("span",{children:s},"statuses_and_immunities[".concat(e.name,"]_[").concat(s,"]"))})):e.values},e.name)}))})})]})})]})}),(0,I.jsx)("button",{className:"modal-close is-large","aria-label":"close",onClick:n})]}):null},D=function(e){var s=e.location,n=e.name,i=(0,d.P)(),l=(0,c.Z)(i,2),g=l[0],b=l[1],A=(0,o.useState)(!1),k=(0,c.Z)(A,2),C=k[0],E=k[1],Z=t.gE[n];if(!Z)return(0,I.jsx)(I.Fragment,{children:"Enemy not found!"});var q=g.locations[Z.monsterArena][n],w=t.el[n],S=Z.monsterArena!==s,z=!w&&10===q||w&&1===q,P=function(){return E(!C)},B=function(e){b((function(s){var i=s.locations[Z.monsterArena][n]+e;i>=0&&i<=10&&(s.locations[Z.monsterArena][n]=i,s.species[Z.species][n]=i),t.rM.forEach((function(e){t.Yy[e].forEach((function(n){var i=t.el[n.enemy],a=!1;if("location"===i.condition.type)a=t.Yy[i.condition.value].every((function(e){return s.locations[e.location][e.enemy]>=i.condition.quantity}));else if("capture"===i.condition.type)a=t.Hv[i.condition.value].every((function(e){var n=t.gE[e];return s.locations[n.monsterArena][e]>=i.condition.quantity}));else if("breed"===i.condition.type){var c=t.Yy[i.condition.value].filter((function(e){return s.locations[i.condition.value][e.enemy]>0}));a=c.length>=i.condition.quantity}s.locations[e][n.enemy]=a?1:0}))}))}))};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)("div",{className:r()(u,"box",(0,a.Z)({},x,S)),children:[z&&(0,I.jsx)("span",{className:r()(f,"icon is-small"),children:(0,I.jsx)("i",{className:"fas fa-check"})}),(0,I.jsx)("img",{className:h,src:"/ffx-monster-arena/img/".concat(Z.img),alt:"Enemy portrait",onClick:P,onKeyUp:P}),(0,I.jsxs)("div",{className:j,children:[(0,I.jsx)("h5",{className:"title is-5 is-spaced",children:n}),w?(0,I.jsx)("p",{className:"subtitle is-6",children:w.description}):(0,I.jsxs)("div",{className:p,children:[(0,I.jsx)(m.z,{className:v,onClick:function(){return B(-1)},children:(0,I.jsx)("span",{className:"icon is-small",children:(0,I.jsx)("i",{className:"fas fa-minus"})})}),(0,I.jsxs)("div",{className:y,children:[(0,I.jsx)("span",{className:r()(N,"subtitle"),children:q}),(0,I.jsx)("progress",{className:"progress is-primary",value:q,max:"10",children:q})]}),(0,I.jsx)(m.z,{className:_,onClick:function(){return B(1)},children:(0,I.jsx)("span",{className:"icon is-small",children:(0,I.jsx)("i",{className:"fas fa-plus"})})})]})]})]}),C&&(0,I.jsx)(M,{name:n,onClose:P})]})},F=function(){var e=(0,i.UO)().locationId,s=void 0===e?"":e;return(0,I.jsx)("div",{className:"container has-text-centered",children:(0,I.jsx)("div",{className:"columns is-multiline is-3",children:t.R0[s].map((function(e){return(0,I.jsx)("div",{className:"column is-one-third-desktop is-half-tablet",children:(0,I.jsx)(D,{location:s,name:e})},e)}))})})}}}]);
//# sourceMappingURL=190.8ee20ec0.chunk.js.map