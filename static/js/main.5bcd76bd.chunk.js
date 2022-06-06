(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{256:function(e,t,n){e.exports=n(547)},279:function(e,t){},281:function(e,t){},283:function(e,t){},287:function(e,t){},312:function(e,t){},314:function(e,t){},328:function(e,t){},330:function(e,t){},362:function(e,t){},364:function(e,t){},456:function(e,t){},457:function(e,t){},547:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(46),s=n.n(i),o=n(27),l=n(12),c=n.n(l),u=n(18),p=n(17),m=n(75),y=n(4),d=n(47),f=n(138),b=function(e){var t=e.children;return r.a.createElement(d.d,{h:"100vh"},r.a.createElement(d.b,{bg:"yellow.100",p:4,justifyContent:"space-around",alignItems:"center"},r.a.createElement(d.a,null,r.a.createElement(d.e,{fontWeight:"bold"},"2022-Capstone")),r.a.createElement(m.b,{to:"/"},r.a.createElement(f.a,{size:"sm",colorScheme:"green"},"Main")),r.a.createElement(m.b,{to:"main"},r.a.createElement(f.a,{size:"sm",colorScheme:"blue"},"Register")),r.a.createElement(m.b,{to:"my-animal"},r.a.createElement(f.a,{size:"sm",colorScheme:"red"},"My NFT"))),r.a.createElement(d.b,{direction:"column",h:"full",justifyContent:"center",alignItems:"center"},t))},T=n(222),h=new(n.n(T).a)(window.ethereum),k=new h.eth.Contract([{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"mintAnimalToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_saleAnimalToken",type:"address"}],name:"setSaleAnimalToken",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"animalTypes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_animalTokenOwner",type:"address"}],name:"getAnimalTokens",outputs:[{components:[{internalType:"uint256",name:"animalTokenId",type:"uint256"},{internalType:"uint256",name:"animalType",type:"uint256"},{internalType:"uint256",name:"animalPrice",type:"uint256"}],internalType:"struct MintAnimalToken.AnimalTokenData[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"saleAnimalToken",outputs:[{internalType:"contract SaleAnimalToken",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],"0x9c8c8EC952bAd3faa2E8671A0e790dCeF0Be9465"),v=new h.eth.Contract([{inputs:[{internalType:"address",name:"_mintAnimalTokenAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"animalTokenPrices",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_animalTokenId",type:"uint256"}],name:"getAnimalTokenPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getOnsaleAnimalTokenArrayLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"mintAnimalTokenAddress",outputs:[{internalType:"contract MintAnimalToken",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"onSaleAnimalTokenArray",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_animalTokenId",type:"uint256"}],name:"purchaseAnimalToken",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"_animalTokenId",type:"uint256"},{internalType:"uint256",name:"_price",type:"uint256"}],name:"setForSaleAnimalToken",outputs:[],stateMutability:"nonpayable",type:"function"}],"0x5852249D421b6D6A1483145D38044710B1D75904"),x=n(33),w=function(e){var t=e.animalType;return r.a.createElement(x.a,{w:150,h:150,src:"images/".concat(t,".png"),alt:"Card"})},g=function(e){var t=e.account,n=Object(a.useState)(),i=Object(p.a)(n,2),s=i[0],o=i[1],l=function(){var e=Object(u.a)(c.a.mark(function e(){var n,a,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,k.methods.mintAnimalToken().send({from:t});case 5:if(!e.sent.status){e.next=20;break}return e.next=9,k.methods.balanceOf(t).call();case 9:return n=e.sent,console.log(n),e.next=13,k.methods.tokenOfOwnerByIndex(t,parseInt(n,10)-1).call();case 13:return a=e.sent,e.next=16,k.methods.animalTypes(a).call();case 16:r=e.sent,console.log(a),console.log(r),o(r);case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(0),console.error(e.t0);case 25:case"end":return e.stop()}},e,null,[[0,22]])}));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(c.a.mark(function e(){var n,a,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,k.methods.mintAnimalToken().send({from:t});case 5:if(!e.sent.status){e.next=36;break}return e.next=9,k.methods.balanceOf(t).call();case 9:return n=e.sent,console.log(n),e.t0=Math,e.t1=parseInt,e.next=15,k.methods.tokenOfOwnerByIndex(t,parseInt(n,10)-1).call();case 15:return e.t2=e.sent,e.t3=(0,e.t1)(e.t2,10),e.t4=e.t3/5,e.t5=e.t0.floor.call(e.t0,e.t4),e.t6=5*e.t5,a=e.t6+1,e.t7=String,e.t8=Math,e.t9=parseInt,e.next=26,k.methods.animalTypes(a).call();case 26:e.t10=e.sent,e.t11=(0,e.t9)(e.t10,10),e.t12=e.t11/5,e.t13=e.t8.floor.call(e.t8,e.t12),e.t14=5*e.t13,e.t15=e.t14+1,r=(0,e.t7)(e.t15),console.log(a),console.log(r),o(r);case 36:e.next=41;break;case 38:e.prev=38,e.t16=e.catch(0),console.error(e.t16);case 41:case"end":return e.stop()}},e,null,[[0,38]])}));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(c.a.mark(function e(){var n,a,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,k.methods.mintAnimalToken().send({from:t});case 5:if(!e.sent.status){e.next=36;break}return e.next=9,k.methods.balanceOf(t).call();case 9:return n=e.sent,console.log(n),e.t0=Math,e.t1=parseInt,e.next=15,k.methods.tokenOfOwnerByIndex(t,parseInt(n,10)-1).call();case 15:return e.t2=e.sent,e.t3=(0,e.t1)(e.t2,10),e.t4=e.t3/5,e.t5=e.t0.floor.call(e.t0,e.t4),e.t6=5*e.t5,a=e.t6+2,e.t7=String,e.t8=Math,e.t9=parseInt,e.next=26,k.methods.animalTypes(a).call();case 26:e.t10=e.sent,e.t11=(0,e.t9)(e.t10,10),e.t12=e.t11/5,e.t13=e.t8.floor.call(e.t8,e.t12),e.t14=5*e.t13,e.t15=e.t14+2,r=(0,e.t7)(e.t15),console.log(a),console.log(r),o(r);case 36:e.next=41;break;case 38:e.prev=38,e.t16=e.catch(0),console.error(e.t16);case 41:case"end":return e.stop()}},e,null,[[0,38]])}));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(c.a.mark(function e(){var n,a,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,k.methods.mintAnimalToken().send({from:t});case 5:if(!e.sent.status){e.next=36;break}return e.next=9,k.methods.balanceOf(t).call();case 9:return n=e.sent,console.log(n),e.t0=Math,e.t1=parseInt,e.next=15,k.methods.tokenOfOwnerByIndex(t,parseInt(n,10)-1).call();case 15:return e.t2=e.sent,e.t3=(0,e.t1)(e.t2,10),e.t4=e.t3/5,e.t5=e.t0.floor.call(e.t0,e.t4),e.t6=5*e.t5,a=e.t6+3,e.t7=String,e.t8=Math,e.t9=parseInt,e.next=26,k.methods.animalTypes(a).call();case 26:e.t10=e.sent,e.t11=(0,e.t9)(e.t10,10),e.t12=e.t11/5,e.t13=e.t8.floor.call(e.t8,e.t12),e.t14=5*e.t13,e.t15=e.t14+3,r=(0,e.t7)(e.t15),console.log(a),console.log(r),o(r);case 36:e.next=41;break;case 38:e.prev=38,e.t16=e.catch(0),console.error(e.t16);case 41:case"end":return e.stop()}},e,null,[[0,38]])}));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(c.a.mark(function e(){var n,a,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,k.methods.mintAnimalToken().send({from:t});case 5:if(!e.sent.status){e.next=36;break}return e.next=9,k.methods.balanceOf(t).call();case 9:return n=e.sent,console.log(n),e.t0=Math,e.t1=parseInt,e.next=15,k.methods.tokenOfOwnerByIndex(t,parseInt(n,10)-1).call();case 15:return e.t2=e.sent,e.t3=(0,e.t1)(e.t2,10),e.t4=e.t3/5,e.t5=e.t0.floor.call(e.t0,e.t4),e.t6=5*e.t5,a=e.t6+4,e.t7=String,e.t8=Math,e.t9=parseInt,e.next=26,k.methods.animalTypes(a).call();case 26:e.t10=e.sent,e.t11=(0,e.t9)(e.t10,10),e.t12=e.t11/5,e.t13=e.t8.floor.call(e.t8,e.t12),e.t14=5*e.t13,e.t15=e.t14+4,r=(0,e.t7)(e.t15),console.log(a),console.log(r),o(r);case 36:e.next=41;break;case 38:e.prev=38,e.t16=e.catch(0),console.error(e.t16);case 41:case"end":return e.stop()}},e,null,[[0,38]])}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(d.b,{w:"90vh",h:"20vh",justifyContent:"space-around",alignItems:"center",direction:"row"},r.a.createElement(d.a,null,s?r.a.createElement(w,{animalType:s}):r.a.createElement(d.e,null)),r.a.createElement(f.a,{mt:4,size:"sm",colorScheme:"blue",onClick:l},"org"),r.a.createElement(f.a,{mt:4,size:"sm",colorScheme:"blue",onClick:m},"cezanne"),r.a.createElement(f.a,{mt:4,size:"sm",colorScheme:"blue",onClick:y},"monet"),r.a.createElement(f.a,{mt:4,size:"sm",colorScheme:"blue",onClick:b},"ukiyo"),r.a.createElement(f.a,{mt:4,size:"sm",colorScheme:"blue",onClick:T},"vangogh"))},E=n(34),O=function(e){var t=e.animalTokenId,n=e.animalType,i=e.animalPrice,s=e.saleStatus,o=e.account,l=Object(a.useState)(""),m=Object(p.a)(l,2),y=m[0],b=m[1],T=Object(a.useState)(i),k=Object(p.a)(T,2),x=k[0],g=k[1],O=function(){var e=Object(u.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,o&&s){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,v.methods.setForSaleAnimalToken(t,h.utils.toWei(y,"ether")).send({from:o});case 5:e.sent.status&&g(h.utils.toWei(y,"ether")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(d.a,{textAlign:"center",w:150},r.a.createElement(w,{animalType:n}),r.a.createElement(d.a,{mt:2},"0"===x?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.b,null,r.a.createElement(E.a,{type:"number",value:y,onChange:function(e){b(e.target.value)}}),r.a.createElement(E.c,{children:"Matic"})),r.a.createElement(f.a,{size:"sm",colorScheme:"green",mt:2,onClick:O},"Sell")):r.a.createElement(d.e,{d:"inline-block"},h.utils.fromWei(x)," Matic")))},A=function(e){var t=e.account,n=Object(a.useState)(),i=Object(p.a)(n,2),s=i[0],o=i[1],l=Object(a.useState)(!1),m=Object(p.a)(l,2),y=m[0],b=m[1],T=function(){var e=Object(u.a)(c.a.mark(function e(){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.methods.balanceOf(t).call();case 3:if("0"!==e.sent){e.next=6;break}return e.abrupt("return");case 6:return n=[],e.next=9,k.methods.getAnimalTokens(t).call();case 9:e.sent.map(function(e){n.push({animalTokenId:e.animalTokenId,animalType:e.animalType,animalPrice:e.animalPrice})}),o(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}},e,null,[[0,14]])}));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(c.a.mark(function e(){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.methods.isApprovedForAll(t,"0x5852249D421b6D6A1483145D38044710B1D75904").call();case 3:(n=e.sent)&&b(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,k.methods.setApprovalForAll("0x5852249D421b6D6A1483145D38044710B1D75904",!y).send({from:t});case 5:e.sent.status&&b(!y),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){t&&(h(),T())},[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{alignItems:"center"},r.a.createElement(d.e,{display:"inline-block"},"Sale Status : ",y?"True":"False"),r.a.createElement(f.a,{size:"xs",ml:2,colorScheme:y?"red":"blue",onClick:v},y?"Cancel":"Approve")),r.a.createElement(d.c,{templateColumns:"repeat(4, 1fr)",gap:8,mt:4},s&&s.map(function(e,n){return r.a.createElement(O,{key:n,animalTokenId:e.animalTokenId,animalType:e.animalType,animalPrice:e.animalPrice,saleStatus:y,account:t})})))},I=function(e){var t=e.animalType,n=e.animalPrice,i=e.animalTokenId,s=e.account,o=e.getOnSaleAnimalTokens,l=Object(a.useState)(!1),m=Object(p.a)(l,2),y=m[0],b=m[1],T=function(){var e=Object(u.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.methods.ownerOf(i).call();case 3:t=e.sent,b(t.toLocaleLowerCase()===s.toLocaleLowerCase()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,v.methods.purchaseAnimalToken(i).send({from:s,value:n});case 5:e.sent.status&&o(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){T()},[]),r.a.createElement(d.a,{textAlign:"center",w:150},r.a.createElement(w,{animalType:t}),r.a.createElement(d.a,null,r.a.createElement(d.e,{d:"inline-block"},h.utils.fromWei(n)," Matic"),r.a.createElement(f.a,{size:"sm",colorScheme:"green",m:2,disabled:y,onClick:x},"Buy")))},M=function(e){var t=e.account,n=Object(a.useState)(),i=Object(p.a)(n,2),s=i[0],o=i[1],l=function(){var e=Object(u.a)(c.a.mark(function e(){var t,n,a,r,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=[],n=0;case 4:if(!(n<3)){e.next=18;break}return e.next=7,v.methods.onSaleAnimalTokenArray(n).call();case 7:return a=e.sent,e.next=10,k.methods.animalTypes(a).call();case 10:return r=e.sent,e.next=13,v.methods.animalTokenPrices(a).call();case 13:i=e.sent,t.push({animalTokenId:a,animalType:r,animalPrice:i});case 15:n++,e.next=4;break;case 18:o(t),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.error(e.t0);case 24:case"end":return e.stop()}},e,null,[[0,21]])}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){l()},[]),r.a.createElement(d.c,{mt:4,templateColumns:"repeat(4, 1fr)",gap:8},s&&s.map(function(e,n){return r.a.createElement(I,{key:n,animalType:e.animalType,animalPrice:e.animalPrice,animalTokenId:e.animalTokenId,account:t,getOnSaleAnimalTokens:l})}))},S=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],i=t[1],s=function(){var e=Object(u.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.ethereum){e.next=6;break}return e.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:t=e.sent,i(t[0]);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){s()},[n]),r.a.createElement(m.a,null,r.a.createElement(b,null,r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/",element:r.a.createElement(M,{account:n})}),r.a.createElement(y.a,{path:"main",element:r.a.createElement(g,{account:n})}),r.a.createElement(y.a,{path:"my-animal",element:r.a.createElement(A,{account:n})}))))},j=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,552)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)})};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(S,null))),document.getElementById("root")),j()}},[[256,3,2]]]);
//# sourceMappingURL=main.5bcd76bd.chunk.js.map