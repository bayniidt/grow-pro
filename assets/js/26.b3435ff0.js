(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{374:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"小虎hoo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小虎hoo"}},[t._v("#")]),t._v(" 小虎Hoo")]),t._v(" "),a("h2",{attrs:{id:"_2020-05-14-项目总结-第一阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2020-05-14-项目总结-第一阶段"}},[t._v("#")]),t._v(" 2020-05-14 项目总结(第一阶段)")]),t._v(" "),a("h3",{attrs:{id:"代码设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码设计"}},[t._v("#")]),t._v(" 代码设计")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("原型需求：多层tabs嵌套，加入select下拉筛选数据，分页查看数据")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("一级tabs固定写死，每个tabs对应自己的table表，第三个tab有二级tabs")])]),t._v(" "),a("li",[a("p",[t._v("二级tabs后台返回数据渲染，根据类型不同渲染不同的table表，大致分为banner广告类型与text图文类型，text图文类型有三级tabs")])]),t._v(" "),a("li",[a("p",[t._v("三级tabs固定写死，根据二级tabs不同渲染不同的tabs，分为：分类table与内容table")])]),t._v(" "),a("li",[a("p",[t._v("每一张表格都有增删改查功能，上下排序功能，分页功能，显示/隐藏状态开关功能")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("排序功能：上升&下降，接口需要传递对应的id（上升传当前触发排序id与上一条数据id ，下降相同）")])]),t._v(" "),a("li",[a("p",[t._v("分页功能：")])]),t._v(" "),a("li",[a("p",[t._v("显示/隐藏状态：第一逻辑：隐藏状态下的排序自动后移")])])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/image/XHhoo-01.png")}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/image/XHhoo-02.png")}})])])]),t._v(" "),a("li",[a("p",[t._v("代码设计：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在没有完全理解产品功能需求以前：")]),t._v(" "),a("ul",[a("li",[t._v("一级tabs：主页面单独组件，使用动态组件的方式，每当tabs切换就动态渲染对应的组件")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模块分类列表")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./moduleSortList"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("EntryList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子模块列表")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./subModuleList"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Collocate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子模块配置")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./subModuleCollocate"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n")])])]),a("ul",[a("li",[t._v("二级tabs：二级tabs由后台返回的数据渲染，当一级tabs切换到子模块配置后，在子模块配置中又使用了动态组件的方式，渲染不同类型的（banner广告与text图文）组件")])]),t._v(" "),a("blockquote",[a("p",[t._v("在触发二级tabs切换时，又使用了bannerModule与textModule组件（这里完全没有必要）")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("      components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Img_banner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./subModuleCollocate/img_bannerModule"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AboveAndBelow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./subModuleCollocate/aboveAndBelow_Module"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n")])])]),a("ul",[a("li",[t._v("三级tabs：固定写死")])]),t._v(" "),a("blockquote",[a("p",[t._v("以上大致上就是没有经过设计的代码逻辑，基本上是想怎么写怎么写，完全没有考虑组件耦合，功能耦合，代码耦合的问题。最后代码耦合度巨高，导致出现了无数个小BUG，修改BUGA引发BUGB，大部分时间都浪费在修BUG上，所以必须设计好组件与代码的逻辑模式，否则就会出现这种问题")])])]),t._v(" "),a("li",[a("p",[t._v("第二次重构当前模块：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("一级tabs：固定写死的，切割为固定的三个组件（只有第三个tab才有二级tabs）。每个组件负责自己的渲染，降低了一点代码耦合。")])]),t._v(" "),a("li",[a("p",[t._v("二级tabs：后台获取数据渲染。也根据类型切割为txt_banner与pic_banner组件，根据当前激活的tabs类型渲染指定的类型组件")])]),t._v(" "),a("li",[a("p",[t._v("三级tabs：固定写死，直接写在了txt_banner组件中（只有txt_banner才有三级tabs）")])]),t._v(" "),a("li",[a("p",[t._v("添加与编辑功能：切割为单独的组件（addOrEdit_content，addOrEdit_banner），根据路由跳转传参类型判断是添加或编辑")])])]),t._v(" "),a("blockquote",[a("p",[t._v("也许是因为第二次写，或是经过了思考如何将需求功能划分，第二次写起来的速度与BUG数量都大大降低，代码耦合度也与第一次差别巨大，当前组件只负责自己的事，不需要花里胡哨的传参与组件渲染")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/image/XHhoo-03.png")}})])])])]),t._v(" "),a("h3",{attrs:{id:"功能耦合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能耦合"}},[t._v("#")]),t._v(" 功能耦合")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("使用相同的table表（在tabs切换时数据没有实时请求更新）")])]),t._v(" "),a("li",[a("p",[t._v("添加与编辑功能使用相同的弹框组件（数据遗留）")])]),t._v(" "),a("li",[a("p",[t._v("分页组件使用同一个 （tabs切换后分页不重置导致请求数据错误）")])]),t._v(" "),a("li",[a("p",[t._v("select下拉筛选与table表使用同一份数据 （添加新的数据后select没有更新，并且筛选选定后切换tabs请求参数不重置）")])]),t._v(" "),a("li",[a("p",[t._v("上下排序功能与显示隐藏逻辑 （后台只返回指定的条数数据10条，第一页就无法判断第二页的情况，所以发了两份请求，一份请求10条，一份请求所有），需求：首条隐藏上升排序按钮，最后一条显示隐藏下降排序按钮")])]),t._v(" "),a("li",[a("p",[t._v("跳转编辑或添加新的路由，完成后返回指定跳转的位置 （三层tabs嵌套后的位置，目前解决方案：将当前tabs位置保存到本地，每次加载时从本地读取）")])])]),t._v(" "),a("h3",{attrs:{id:"git代码管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git代码管理"}},[t._v("#")]),t._v(" Git代码管理")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("develop : 测试")])]),t._v(" "),a("li",[a("p",[t._v("release : 预发")])]),t._v(" "),a("li",[a("p",[t._v("master : 正式")])])]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("    git add . \n    git commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n    git push \n    git pull\n    git checkout \n    git branch -a \n    git merge origin/\n\n    每天上班时拉取代码，下班时推送代码\n\n    在build时出现冲突，将dist包删除重新build\n\n    在merge合并时出现冲突，手动将冲突解决（注意冲突代码差异）\n\n    commit 失败 将.git文件夹中的hooks中的pre-commit文件，重新commit\n\n    git config core.ignorecase false 启用大小写敏感\n\n")])])]),a("h3",{attrs:{id:"环境配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境配置"}},[t._v("#")]),t._v(" 环境配置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BUILDING")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ING")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2020-05-30-项目总结-第二阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2020-05-30-项目总结-第二阶段"}},[t._v("#")]),t._v(" 2020-05-30 项目总结(第二阶段)")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("问题：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("三端连调")])]),t._v(" "),a("li",[a("p",[t._v("H5页面时间处理")])]),t._v(" "),a("li",[a("p",[t._v("需求评审时没有发现的不合理的问题，遗留到开发阶段出现BUG后，需要修改大量代码")])]),t._v(" "),a("li",[a("p",[t._v("H5页面上传图片，安卓系统不能多选图片，IOS可以多选图片")])]),t._v(" "),a("li",[a("p",[t._v("将基地址改为https后七牛云无法使用")])])])]),t._v(" "),a("li",[a("p",[t._v("解决：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("H5单页面主要作用于用户分享，IOS/安卓/PC都可以使用，在没有经过三端连调的时候就提测，导致在测试时出现多个问题。例如图片上传的单选与多选，图片适配屏幕等等。遇到这种单页面分享功能，尽早的和相关同事进行调试，可以正常使用了再提测。")])]),t._v(" "),a("li",[a("p",[t._v("后台返回的是一个标准格式的时间，使用dayjs转化为时间戳，再根据产品需求做对应的渲染")])]),t._v(" "),a("li",[a("p",[t._v("在开需求评审会时一定要仔细想清楚自己负责的模块有没有不合理的地方，否则最后也是自己背锅")])]),t._v(" "),a("li",[a("p",[t._v("其实就是没有进行三端连调导致的后果，最后解决方法将ios改成单张上传")])]),t._v(" "),a("li",[a("p",[t._v("原因很简单，七牛云更新了文档，将地址也更改了，遇到这种问题就找对应官网，认真看文档就可以解决问题")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);