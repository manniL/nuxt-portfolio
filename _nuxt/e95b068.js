(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4,6],{195:function(t,e,r){var content=r(199);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(48).default)("4b06835e",content,!0,{sourceMap:!1})},196:function(t,e,r){var content=r(203);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(48).default)("1b957efc",content,!0,{sourceMap:!1})},198:function(t,e,r){"use strict";r(195)},199:function(t,e,r){var o=r(47)(!1);o.push([t.i,"h4[data-v-eac61cc4]{font-size:1em;font-weight:500;margin:1em 0;position:relative}h4 span[data-v-eac61cc4]{color:#777;font-weight:400;position:absolute;right:0}div[data-v-eac61cc4]{white-space:pre-line}.clear[data-v-eac61cc4]{clear:both}",""]),t.exports=o},201:function(t,e,r){"use strict";r.r(e);var o={props:{project:Object,version:Object},computed:{displayTime:function(){return this.$getDisplayDate(this.version.createdAt)}}},n=(r(198),r(35)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("h4",[t._v(t._s(t.version.version)+" "),e("span",[t._v(t._s(t.displayTime))])]),t._v(" "),e("div",[e("Thumbnail",{attrs:{project:t.project,version:t.version}}),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.version.description)}}),t._v(" "),e("div",{staticClass:"clear"})],1)])}),[],!1,null,"eac61cc4",null);e.default=component.exports;installComponents(component,{Thumbnail:r(200).default})},202:function(t,e,r){"use strict";r(196)},203:function(t,e,r){var o=r(47)(!1);o.push([t.i,'header[data-v-aca161b2]{align-items:baseline;background-color:#fff;border-bottom:1px solid #666;display:flex;justify-content:space-between;margin:1.5em 0 .5em;padding-bottom:.5em}h2[data-v-aca161b2]{font-size:1.5rem;font-weight:600;margin:0;padding:0}h2 a[data-v-aca161b2]{color:#000}h2 a[data-v-aca161b2]:hover{color:#2563eb}time[data-v-aca161b2]{color:#666;font-size:1em;margin-left:1em;white-space:nowrap}h2>a[data-v-aca161b2],span>time[data-v-aca161b2]{display:inline-block}div[data-v-aca161b2]{white-space:pre-line}ul[data-v-aca161b2]{display:inline-flex;flex-flow:row wrap;margin:0 0 1em;padding:0}ul li[data-v-aca161b2]{display:block;justify-content:flex-start;list-style:none;white-space:pre-wrap}ul li[data-v-aca161b2]:not(:last-child):after{content:", "}.previous[data-v-aca161b2]{margin:1em 0 0}h3[data-v-aca161b2]{font-size:1em;font-weight:500;margin:1em 0}h3.toggle[data-v-aca161b2]{color:#777;cursor:pointer;margin:0;position:relative}h3.toggle span[data-v-aca161b2]{display:inline-block;margin-left:.25em;transition:all .2s ease-in-out;width:0;height:0;border-color:transparent transparent transparent #777;border-style:solid;border-width:.25em 0 .25em .5em}.versions[data-v-aca161b2]{border-left:2px solid #ddd;height:0;margin:1em 0 0 .25em;overflow-y:hidden;padding-left:1.5em;transition:all .3s ease-in-out}.expanded[data-v-aca161b2]{margin-bottom:1em}.expanded h3 span[data-v-aca161b2]{transform:rotate(90deg)}p[data-v-aca161b2]{margin:1em 0}footer[data-v-aca161b2]{clear:both;margin:0}',""]),t.exports=o},204:function(t,e,r){"use strict";r.r(e);r(20);var o=r(81),n=(r(36),r(197)),c={setup:function(){return{store:Object(n.a)()}},props:{project:Object},data:function(){return{images:[]}},computed:{displayTime:function(){return this.$getDisplayDate(this.project.updatedAt)},latestVersion:function(){var t=this.project.versions;if(t)return t[t.length-1]},previousVersionCount:function(){var title="".concat(this.previousVersions.length," previous version");return this.previousVersions.length>1&&(title="".concat(title,"s")),title},previousVersions:function(){var t=Object(o.a)(this.project.versions);if(t.length>1)return t.slice(0,-1).reverse()},tags:function(){var t=this,e=[];return this.project.tags.forEach((function(r){e.push(t.store.getTag(r))})),e},url:function(){return"/projects/".concat(this.project.slug)}},methods:{toggleVersions:function(t){var e=t.target.closest(".previous"),r=e.querySelector(".versions"),o="expanded";e.classList.contains(o)?(e.classList.remove(o),r.style.height="0px"):(e.classList.add(o),r.style.height="".concat(r.scrollHeight,"px"))}}},l=(r(202),r(35)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("article",[e("header",[e("h2",[e("NuxtLink",{attrs:{to:t.url}},[t._v(t._s(t.project.title))])],1),t._v(" "),e("span",[e("time",{attrs:{datetime:t.project.updatedAt}},[t._v(t._s(t.displayTime))])])]),t._v(" "),t.tags?e("ul",t._l(t.tags,(function(r){return e("li",{key:r.slug},[e("NuxtLink",{attrs:{to:"/tags/"+r.slug}},[t._v(t._s(r.name))])],1)})),0):t._e(),t._v(" "),e("div",[e("Thumbnail",{attrs:{project:t.project,version:t.latestVersion}}),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.project.description)}})],1),t._v(" "),t.latestVersion?e("div",[e("h3",[t._v(t._s(t.latestVersion.version)+" - latest version")]),t._v(" "),e("p",{domProps:{innerHTML:t._s(t.latestVersion.description)}})]):t._e(),t._v(" "),t.previousVersions?e("div",{staticClass:"previous"},[e("h3",{staticClass:"toggle",on:{click:t.toggleVersions}},[t._v(t._s(t.previousVersionCount)+" "),e("span")]),t._v(" "),e("div",{staticClass:"versions"},t._l(t.previousVersions,(function(r){return e("Version",{key:r.version,attrs:{version:r,project:t.project}})})),1)]):t._e(),t._v(" "),e("footer",[t.project.url?e("a",{attrs:{href:t.project.url,target:"_blank"}},[t._v(t._s(t.project.url))]):t._e()])])}),[],!1,null,"aca161b2",null);e.default=component.exports;installComponents(component,{Thumbnail:r(200).default,Version:r(201).default})},455:function(t,e,r){"use strict";r.r(e);var o=r(197),n={setup:function(){return{getProject:Object(o.a)().getProject}},computed:{project:function(){var t=this.getProject(this.$route.params.slug);return t||this.$nuxt.context.error({status:404,message:"Project not found"}),t}}},c=r(35),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",[t.project?e("Project",{key:t.project.slug,attrs:{project:t.project}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Project:r(204).default})}}]);