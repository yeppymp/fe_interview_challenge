(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,n){"use strict";n.r(t);n(36),n(27),n(35),n(45),n(28),n(46);var o=n(22),r=n(38);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var l={data:function(){return{expandOnHover:!1,expandWithDelay:!1,mobile:"reduce",reduce:!0}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(r.b)({changeMode:"change_mode"}))},c=(n(212),n(33)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-sidebar",{attrs:{position:"static",mobile:e.mobile,"expand-on-hover":e.expandOnHover,reduce:e.reduce,delay:e.expandWithDelay?500:null,open:""}},[o("div",{staticClass:"\n      columns\n      is-flex-direction-column is-justify-content-space-between\n      m-0\n      py-5\n    "},[o("div",{staticClass:"block p-0"},[o("div",{staticClass:"brand is has-background-primary"},[o("nuxt-link",{staticClass:"has-text-white",attrs:{to:"/"}},[o("b-icon",{attrs:{icon:"file-document-outline",size:"is-large"}})],1)],1)]),e._v(" "),o("div",{staticClass:"is-flex is-flex-direction-column"},[o("b-menu",{staticClass:"is-custom-mobile"},[o("b-tooltip",{attrs:{label:e.$store.state.is_dark_mode?"Light Mode":"Dark Mode",position:"is-right"}},[o("b-menu-list",[o("b-menu-item",{attrs:{icon:e.$store.state.is_dark_mode?"white-balance-sunny":"brightness-2",label:"Mode"},on:{click:function(t){return t.preventDefault(),e.changeMode.apply(null,arguments)}}})],1)],1)],1),e._v(" "),o("hr"),e._v(" "),o("div",{staticClass:"is-flex is-justify-content-center"},[o("figure",{staticClass:"image profile is-32x32"},[o("nuxt-link",{attrs:{to:"/"}},[o("img",{staticClass:"is-rounded",attrs:{src:n(211),alt:"Buefy"}})])],1)])],1)])])}),[],!1,null,null,null);t.default=component.exports},155:function(e,t,n){var content=n(213);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(63).default)("04c6a0d1",content,!0,{sourceMap:!1})},161:function(e,t,n){"use strict";var o={data:function(){return{items:[{title:"Home",icon:"home",to:{name:"index"}},{title:"Inspire",icon:"lightbulb",to:{name:"inspire"}}]}},components:{Sidebar:n(113).default}},r=n(33),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar-page",class:{"is-light":!e.$store.state.is_dark_mode,"is-dark":e.$store.state.is_dark_mode}},[n("section",{staticClass:"sidebar-layout"},[n("sidebar"),e._v(" "),n("div",{staticClass:"is-flex-grow-1"},[n("Nuxt")],1)],1)])}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{Sidebar:n(113).default})},162:function(e,t,n){n(163),e.exports=n(164)},209:function(e,t,n){var content=n(210);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(63).default)("5a159abf",content,!0,{sourceMap:!1})},210:function(e,t,n){var o=n(62)(!1);o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);"]),o.push([e.i,'*{font-family:"Roboto",sans-serif}.px-16rem{padding-left:16rem;padding-right:16rem}.has-background-primary{background-color:#7a5cf6!important}.tag.is-success{background-color:rgba(25,207,146,.15)!important}.tag.is-success,.tag.is-success *{color:#19cf92!important}.tag.is-warning{background-color:rgba(248,140,1,.15)!important}.tag.is-warning,.tag.is-warning *{color:#f88c01!important}.sidebar-page.is-light{background-color:#f8f7fc!important}.sidebar-page.is-dark{background-color:#141622!important}.sidebar-page.is-dark h1,.sidebar-page.is-dark li,.sidebar-page.is-dark p,.sidebar-page.is-dark select,.sidebar-page.is-dark strong,.sidebar-page.is-dark td,.sidebar-page.is-dark th,.sidebar-page.is-dark ul{color:#fff!important}.sidebar-page.is-dark .card{background-color:#202038!important}.sidebar-page.is-dark .tag.is-light{background-color:hsla(0,0%,100%,.15);color:#fff!important}.sidebar-page.is-dark .tag.is-light *{color:#fff!important}.b-sidebar{position:fixed}.b-sidebar .sidebar-content{background-color:#202038!important}.b-sidebar .sidebar-content .brand{height:100px;width:100px;border-top-right-radius:1rem;border-bottom-right-radius:1rem;display:flex;align-items:center;justify-content:center;color:#fff!important}.b-sidebar .sidebar-content .b-tooltip{display:block!important}.b-sidebar .sidebar-content .menu-list .icon-text.is-active{background-color:transparent!important}.b-sidebar .sidebar-content .menu-list .icon-text{text-align:center;color:#fff!important}.b-sidebar .sidebar-content .menu-list .icon-text:active,.b-sidebar .sidebar-content .menu-list .icon-text:focus,.b-sidebar .sidebar-content .menu-list .icon-text:hover{background-color:transparent!important}.b-sidebar .sidebar-content hr{height:1px!important;background-color:hsla(0,0%,100%,.25)}.sidebar-content,.sidebar-content>.columns{height:100vh}.invoices li,.invoices ul{list-style:none;margin:0;padding:0}.invoices .trx-status{width:100px}.btn-custom,.btn-custom .mdi{border-radius:25px}.btn-custom .mdi{background-color:#fff;color:#7a5cf6!important;height:1.5rem;width:1.5rem}.no-bg select{background-color:transparent!important;border:none;color:#141622!important}.no-bg select:focus,.no-bg select:hover{outline:none;border:none;box-shadow:none}.invoice-detail .address{width:150px}.invoice-detail .invoice-item .table{background-color:transparent!important}.invoice-detail .invoice-item .table td,.invoice-detail .invoice-item .table th,.invoice-detail .invoice-item .table tr{border:none}.invoice-detail .invoice-total{background-color:#141622!important}.invoice-detail .invoice-total *{color:#fff}.sidebar-page.is-dark .invoice-detail .invoice-item{background-color:#252947!important}.sidebar-page.is-dark .invoice-detail .invoice-total{background-color:#141622!important}.invoice-form .label{color:#7a7a7a!important;font-size:.9rem;font-weight:400}.sidebar-page.is-dark .invoice-form .label{color:#fff!important;font-size:.9rem;font-weight:400}.sidebar-page.is-dark .invoice-form .has-text-primary{color:#7a5cf6!important}.sidebar-page.is-dark .invoice-form input,.sidebar-page.is-dark .invoice-form select,.sidebar-page.is-dark .invoice-form textarea{background-color:#252947!important;border:none;color:#fff!important}',""]),e.exports=o},211:function(e,t,n){e.exports=n.p+"img/user.8438433.png"},212:function(e,t,n){"use strict";n(155)},213:function(e,t,n){var o=n(62)(!1);o.push([e.i,".p-1{padding:1em}.sidebar-page{flex-direction:column}.sidebar-page,.sidebar-page .sidebar-layout{display:flex;width:100%;min-height:100%;min-height:100vh}.sidebar-page .sidebar-layout{flex-direction:row}@media screen and (max-width:1023px){.b-sidebar .sidebar-content.is-mini-mobile.is-mini-expand:not(:hover):not(.is-mini-delayed) .menu-list li a span:nth-child(2),.b-sidebar .sidebar-content.is-mini-mobile:not(.is-mini-expand) .menu-list li a span:nth-child(2){display:none}.b-sidebar .sidebar-content.is-mini-mobile.is-mini-expand:not(:hover):not(.is-mini-delayed) .menu-list li ul,.b-sidebar .sidebar-content.is-mini-mobile:not(.is-mini-expand) .menu-list li ul{padding-left:0}.b-sidebar .sidebar-content.is-mini-mobile.is-mini-expand:not(:hover):not(.is-mini-delayed) .menu-list li ul li a,.b-sidebar .sidebar-content.is-mini-mobile:not(.is-mini-expand) .menu-list li ul li a{display:inline-block}.b-sidebar .sidebar-content.is-mini-mobile.is-mini-expand:not(:hover):not(.is-mini-delayed) .menu-label:not(:last-child),.b-sidebar .sidebar-content.is-mini-mobile:not(.is-mini-expand) .menu-label:not(:last-child){margin-bottom:0}}@media screen and (min-width:1024px){.b-sidebar .sidebar-content.is-mini.is-mini-expand:not(:hover):not(.is-mini-delayed) .menu-list li a span:nth-child(2),.b-sidebar .sidebar-content.is-mini:not(.is-mini-expand) .menu-list li a span:nth-child(2){display:none}.b-sidebar .sidebar-content.is-mini.is-mini-expand:not(:hover):not(.is-mini-delayed) .menu-list li ul,.b-sidebar .sidebar-content.is-mini:not(.is-mini-expand) .menu-list li ul{padding-left:0}.b-sidebar .sidebar-content.is-mini.is-mini-expand:not(:hover):not(.is-mini-delayed) .menu-list li ul li a,.b-sidebar .sidebar-content.is-mini:not(.is-mini-expand) .menu-list li ul li a{display:inline-block}.b-sidebar .sidebar-content.is-mini.is-mini-expand:not(:hover):not(.is-mini-delayed) .menu-label:not(:last-child),.b-sidebar .sidebar-content.is-mini:not(.is-mini-expand) .menu-label:not(:last-child){margin-bottom:0}}.is-mini-expand .menu-list a{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",""]),e.exports=o},214:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return o})),n.d(t,"mutations",(function(){return r}));n(152);var o=function(){return{is_dark_mode:!1,invoices:[{transaction_id:"RT3080",transaction_date:"19 Aug 2021",name:"John Doe",total_payment:"3500000",status:"draft",title:"Grapic Design",address:"19 Union Terrance London 35444 United Kingdom",payment_due:"20 Sep 2021",bill_to:"Alex Grim",bill_address:"84 Chech Whzy BroadRoad 78978 United Kingdom",bill_email:"alexgrim@mailinator.com",items:[{name:"Brosur Design",qty:1,price:15e4,total:15e4},{name:"Email Design",qty:1,price:2e5,total:2e5}]},{transaction_id:"RT6780",transaction_date:"10 Aug 2021",name:"John Snow",total_payment:"3500000",status:"paid",title:"Website Design",address:"15 Red Keep London 35444 United Kingdom",payment_due:"20 Sep 2021",bill_to:"Daenerys Targaryen",bill_address:"84 Meereen 78978 Meereen Kingdom",bill_email:"daenerys@mailinator.com",items:[{name:"Landing Page",qty:1,price:15e5,total:15e5},{name:"User Page",qty:1,price:2e6,total:2e6}]},{transaction_id:"RT3440",transaction_date:"19 Aug 2021",name:"Tyrion Lannister",total_payment:"2500000",status:"pending",title:"Grapic Design",address:"19 Unshullied London 35444 United Queendom",payment_due:"20 Sep 2021",bill_to:"Sansa Stark",bill_address:"84 Winterfell 78978 North United Kingdom",bill_email:"tyrion@mailinator.com",items:[{name:"Brosur Design",qty:1,price:15e4,total:15e4},{name:"Poster Design",qty:1,price:1e5,total:1e5}]}]}},r={change_mode:function(e){e.is_dark_mode=!e.is_dark_mode},delete_invoice:function(e,t){var n=t.invoice;e.invoices.splice(e.invoices.indexOf(n),1)},add_invoice:function(e,t){console.log(t),e.invoices.push(t)}}}},[[162,6,1,7]]]);