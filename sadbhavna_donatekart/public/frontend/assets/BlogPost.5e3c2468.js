<<<<<<<< HEAD:sadbhavna_donatekart/public/frontend/assets/BlogPost.5e3c2468.js
import{N as p,F as g}from"./Footer.1d3c5db6.js";import{_ as h,o as l,c as r,e,k as c,t as i,b,F as u,C as f,I as v,r as d}from"./index.cdeaa77d.js";const y={name:"Blog Post",components:{Navbar:p,Footer:g},setup(){return{user:f("user")}},data(){return{blog_detail:"",blog:"",campaign:"",campaign_detail:""}},mounted(){const t=v();this.blog=t.params.name,this.get_blog_detail(t.params.name),this.campaign=t.params.name,this.get_campaign_donation_detail(t.params.name)},methods:{get_campaign_donation_detail(t){let a="/api/resource/Donation Campaign/"+t;fetch(a,{method:"GET"}).then(s=>{s.json().then(n=>{this.campaign_detail=n})}).catch(s=>{console.error(s)})},get_blog_detail(t){let a="/api/resource/Blog Post/"+t;fetch(a,{method:"GET"}).then(s=>{s.json().then(n=>{this.blog_detail=n})}).catch(s=>{console.error(s)})}}},N={class:"bg-gray-100"},j={class:"container mx-auto mt-20 pb-24"},x={class:"bg-white"},B={key:0},F={style:{"font-size":"3rem"},class:"text-black font-bold pt-8 pl-8"},k={class:"grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1"},C={class:"pl-8 md:pl-8 sm:pl-4 pr-8 md:pr-8 sm:pr-4 pt-8 md:pt-8 sm:pt-4"},E=["src"],P={class:"pl-8 pr-8 md:pr-8 sm:pr-4 lg:pt-4 md:pt-4 sm:pt-0 pb-8 md:pb-8 sm:pb-4"},V={style:{"font-size":"2rem"},class:"grid justify-items-left pb-2"},w={class:"text-base grid justify-items-left"};function z(t,a,s,n,o,D){const m=d("Navbar"),_=d("Footer");return l(),r(u,null,[e("div",N,[c(m),e("div",j,[e("div",x,[o.blog_detail?(l(),r("div",B,[e("p",F,i(o.blog_detail.data.title),1),e("div",k,[e("div",C,[e("img",{class:"object-fill w-full pb-10",src:o.blog_detail.data.meta_image},null,8,E)]),e("div",P,[e("p",V,i(o.blog_detail.data.blog_intro),1),e("p",w,i(o.blog_detail.data.content_md),1)])])])):b("",!0)])])]),c(_)],64)}var I=h(y,[["render",z]]);export{I as default};
========
import{N as p,F as g}from"./Footer.54c79ef4.js";import{_ as h,o as l,c as r,e,k as c,t as i,b,F as u,C as f,I as v,r as d}from"./index.7a906c63.js";const y={name:"Blog Post",components:{Navbar:p,Footer:g},setup(){return{user:f("user")}},data(){return{blog_detail:"",blog:"",campaign:"",campaign_detail:""}},mounted(){const t=v();this.blog=t.params.name,this.get_blog_detail(t.params.name),this.campaign=t.params.name,this.get_campaign_donation_detail(t.params.name)},methods:{get_campaign_donation_detail(t){let a="/api/resource/Donation Campaign/"+t;fetch(a,{method:"GET"}).then(s=>{s.json().then(n=>{this.campaign_detail=n})}).catch(s=>{console.error(s)})},get_blog_detail(t){let a="/api/resource/Blog Post/"+t;fetch(a,{method:"GET"}).then(s=>{s.json().then(n=>{this.blog_detail=n})}).catch(s=>{console.error(s)})}}},N={class:"bg-gray-100"},j={class:"container mx-auto mt-20 pb-24"},x={class:"bg-white"},B={key:0},F={style:{"font-size":"3rem"},class:"text-black font-bold pt-8 pl-8"},k={class:"grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1"},C={class:"pl-8 md:pl-8 sm:pl-4 pr-8 md:pr-8 sm:pr-4 pt-8 md:pt-8 sm:pt-4"},E=["src"],P={class:"pl-8 pr-8 md:pr-8 sm:pr-4 lg:pt-4 md:pt-4 sm:pt-0 pb-8 md:pb-8 sm:pb-4"},V={style:{"font-size":"2rem"},class:"grid justify-items-left pb-2"},w={class:"text-base grid justify-items-left"};function z(t,a,s,n,o,D){const m=d("Navbar"),_=d("Footer");return l(),r(u,null,[e("div",N,[c(m),e("div",j,[e("div",x,[o.blog_detail?(l(),r("div",B,[e("p",F,i(o.blog_detail.data.title),1),e("div",k,[e("div",C,[e("img",{class:"object-fill w-full pb-10",src:o.blog_detail.data.meta_image},null,8,E)]),e("div",P,[e("p",V,i(o.blog_detail.data.blog_intro),1),e("p",w,i(o.blog_detail.data.content_md),1)])])])):b("",!0)])])]),c(_)],64)}var I=h(y,[["render",z]]);export{I as default};
>>>>>>>> e890210901042e405a88be2e07d323a5338de084:sadbhavna_donatekart/public/frontend/assets/BlogPost.120b4754.js
