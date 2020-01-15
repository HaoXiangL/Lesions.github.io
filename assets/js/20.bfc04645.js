(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{219:function(t,e,r){"use strict";r.r(e);var v=r(0),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"vuex是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vuex是什么"}},[t._v("#")]),t._v(" Vuex是什么")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://vuex.vuejs.org/zh/#vuex-%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex官网描述"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("Vuex 是一个专为 Vue.js 应用程序开发的 "),r("strong",[t._v("状态管理模式")]),t._v("。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。")])]),t._v(" "),r("p",[t._v("它是一个状态管理工具，负责把一些公有或者 "),r("em",[r("strong",[t._v("多组件共享")])]),t._v(" 的状态(state)进行管理，整合到一个集中的箱子中(store)，任何组件都可以获取状态。")]),t._v(" "),r("p",[t._v("简单来说就是相当于后台的数据库，你的每个后台服务都可以通过sql语句访问到我的数据，并且获得数据。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("注：")]),t._v(" "),r("p",[t._v("Vuex是借鉴了"),r("a",{attrs:{href:"https://facebook.github.io/flux/docs/overview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flux"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://redux.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redux"),r("OutboundLink")],1),t._v("的思想,如果使用redux的思维去解释：\n数据库作为数据管理工具(相当于store)，能够被读取数据(相当于state)，在用户通过view层发起请求(相当于dispatch)，分析请求的Url和请求参数params(相当于action:{type,payload})，由后端路由器和控制器捕捉(相当于reducer)，路由器分析对应到的控制器(reducer中的switch-case)，并由控制器对数据库进行增删改查(reducer返回的state处理),然后写入数据库(reducer返回的nextState)")])]),t._v(" "),r("p",[t._v("附上表格方便阅读")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Redux")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("传统MVC后端")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("store")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("数据库实例")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("state")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("数据库中存储的数据")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("dispatch(action)")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("用户发起请求")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("action:{type, payload}")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("code",[t._v("type")]),t._v("表示请求URL, "),r("code",[t._v("payload")]),t._v("表示请求的数据")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("reducer")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("路由+控制器")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("reducer")]),t._v("中的"),r("code",[t._v("switch-case")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("路由，根据"),r("code",[t._v("action.type")]),t._v("定位到对应控制器")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("reducer")]),t._v("内部对"),r("code",[t._v("state")]),t._v("的处理")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("控制器对数据库进行CRUD")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("reducer")]),t._v("返回的"),r("code",[t._v("nextState")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("将修改后的数据写入数据库")])])])])])}),[],!1,null,null,null);e.default=_.exports}}]);