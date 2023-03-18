import{_ as q,o as l,c as d,n as _,t as m,e as t,k as u,x as z,F as b,g as f,z as T,C as A,b as v,p as g,s as R,u as L,v as C,r as x,w}from"./index.471e3f5e.js";import{N as U,F as D}from"./Footer.d7999c08.js";const k=["square","circle"],B={name:"Avatar",props:{imageURL:String,label:String,size:{default:"md"},shape:{default:"circle",validator(e){const a=k.includes(e);return a||console.warn("shape property for <Avatar /> must be one of ",k),a}}},computed:{styleClasses(){const e={sm:"w-5 h-5",md:"w-8 h-8",lg:"w-12 h-12"}[this.size];return`${{circle:"rounded-full",square:"rounded-lg"}[this.shape]} ${e}`}}},N=["src"];function S(e,a,n,i,s,c){return l(),d("div",{class:_(["shrink-0 overflow-hidden",c.styleClasses])},[n.imageURL?(l(),d("img",{key:0,src:n.imageURL,class:_(["object-cover",c.styleClasses]),loading:"lazy"},null,10,N)):(l(),d("div",{key:1,class:_(["flex h-full w-full items-center justify-center bg-gray-200 uppercase text-gray-600",{sm:"text-xs",md:"text-base",lg:"text-lg"}[n.size]])},m(n.label&&n.label[0]),3))],2)}var E=q(B,[["render",S]]);new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");var F="/assets/sadbhavna_donatekart/frontend/assets/phonepay.d623769f.png",O="/assets/sadbhavna_donatekart/frontend/assets/gpay.3cee6d5c.png",P="/assets/sadbhavna_donatekart/frontend/assets/bhim.566c6f58.png",V="/assets/sadbhavna_donatekart/frontend/assets/paytm.8548e477.png",I="/assets/sadbhavna_donatekart/frontend/assets/crditcard.385bcb21.png",G="/assets/sadbhavna_donatekart/frontend/assets/banktransfer.dfdb0792.png",H="/assets/sadbhavna_donatekart/frontend/assets/giftcard.170fd4d2.png";const M={name:"CampaignDonation",components:{Navbar:U,Footer:D,Avatar:E},setup(){return{user:R("user")}},data(){return{campaign_detail:"",openTab:1,recent_donation:"",campaign:"",tab2:"this is tab two content",a:70,qty:0,item_cart:[],total_price:0,anonymous:!1}},mounted(){const e=L();this.campaign=e.params.name,this.get_campaign_donation_detail(e.params.name),this.get_recent_donation(e.params.name)},resources:{get_recent_donation(){return{method:"sadbhavna_donatekart.api.api.get_recent_donation",onSuccess:e=>{this.recent_donation=e},onError:e=>{console.log(e)}}},set_details_in_doctype_after_donation(){return{method:"sadbhavna_donatekart.api.api.set_details_in_doctype_after_donation",onSuccess:e=>{this.$router.push(`/sadbhavna/donation-success-page/${this.total_price}`),this.item_cart=[],this.total_price=0,this.qty=0},onError:e=>{this.$toast({title:"Error",text:e,customIcon:"circle-fail",appearance:"denger"})}}},get_payment_link(){return{method:"sadbhavna_donatekart.api.api.create_payment_link",onSuccess:e=>{console.log("payment_link",e.short_url),window.location.href=e.short_url},onError:e=>{console.log("error",e)}}}},methods:{toggleTabs:function(e){this.openTab=e},get_campaign_donation_detail(e){let a="/api/resource/Donation Campaign/"+e;fetch(a,{method:"GET"}).then(n=>{n.json().then(i=>{this.campaign_detail=i})}).catch(n=>{console.error(n)})},get_recent_donation(e){this.$resources.get_recent_donation.submit({name:e})},donate(e,a){const n=Object.fromEntries(document.cookie.split("; ").map(i=>i.split("=")).map(i=>[i[0],decodeURIComponent(i[1])]));this.$resources.get_payment_link.submit({name:n.full_name,email:n.user_id,amount:e}),this.$resources.set_details_in_doctype_after_donation.submit({user_id:n.user_id,campaign:this.campaign,item:this.item_cart,amount:this.total_price,payment_id,anonymous:this.anonymous==!0?1:0})},set_details_in_doctype_after_donation(e,a){const n=Object.fromEntries(document.cookie.split("; ").map(i=>i.split("=")).map(i=>[i[0],decodeURIComponent(i[1])]));this.$resources.set_details_in_doctype_after_donation.submit({user_id:n.user_id,campaign:this.campaign,item:this.item_cart,amount:this.total_price})},increment(e,a,n){this.qty+=1;let i=0;this.item_cart.filter(function(r){r.item==e?i=r.qty:i=0});let s=a*(i+1);var c=this.item_cart.filter(function(r){if(r.item==e)return r});if(c.length>0){let r=this.item_cart.map(p=>p.item).indexOf(e);this.item_cart.splice(r,1),this.item_cart.push({item:e,rate:a,qty:i+1,amount:s}),this.total_price+=a,i=0}else this.item_cart.push({item:e,rate:a,qty:i+1,amount:s}),this.total_price+=a,i=0},decrement(e,a,n){if(n!=0){this.qty-=1;let s=0;this.item_cart.filter(function(r){r.item==e?s=r.qty:s=0});let c=a*(s-1);var i=this.item_cart.filter(function(r){if(r.item==e)return r});if(i.length>0){let r=this.item_cart.map(p=>p.item).indexOf(e);this.item_cart.splice(r,1),this.item_cart.push({item:e,rate:a,qty:s-1,amount:c}),this.total_price-=a}else this.item_cart.push({item:e,rate:a,qty:s-1,amount:c}),this.total_price-=a}if(n==1){var i=this.item_cart.filter(function(c){if(c.item==e)return c});if(i.length>0){let c=this.item_cart.map(r=>r.item).indexOf(e);this.item_cart.splice(c,1)}}}}},J={class:"top-0 w-full h-3/6 bg-center bg-right bg-transparent bg-cover",style:{"background-image":"url('../../src/assets/Inter/img/explore-campaign.jpg')"}},Q=t("div",{class:"container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2"},[t("p",{class:"text-[30px] md:text-[30px] lg:text-[48px] sm:pr-10 md:pr-20 lg:pr-12 xl:pr-16 mb-32 text-center md:text-center md:text-base lg:text-left pt-20 font-medium text-[#364958] leading-none",style:{"text-shadow":"3px 6px 6px #c9c9c9"}},[g(" Join hands with "),t("span",{class:"text-[#40b751]"},"Sadbhana Campaigns"),g(" to help needy.")])],-1),W={class:"container mx-auto mt-20"},K={key:0,class:"px-[14px] md:px-0 lg:px-0"},X={style:{"font-size":"2rem"},class:"mb-4 leading-10 md:leading-0 lg:heading-12 mb-1.5 text-[#364958] font-medium capitalize"},Y={style:{"line-height":"1.7"},class:"mb-4 text-base text-[#364958] font-normal"},Z=t("div",{class:"mb-[50px]"},[t("span",{class:"bg-[#40b751] mr-[4px] capitalize text-white py-[7px] px-[20px] rounded-[10px]"},"Tax Benefit"),t("span",{class:"bg-[#40b751] mr-[4px] capitalize text-white py-[7px] px-[20px] rounded-[10px]"}," Assured"),t("span",{class:"bg-[#40b751] mr-[4px] capitalize text-white py-[7px] px-[20px] rounded-[10px]"},"Old Ages")],-1),$={class:"flex flex-wrap mt-6 mb-5"},tt={class:"w-full lg:w-8/12 pr-4"},et=["src"],st={class:"w-full h-[16px] bg-gray-200 rounded-md dark:bg-gray-700"},at={class:"pt-4 pb-2 mt-[4px] mb-[6px] flex text-[#364958] justify-between font-bold"},it={style:{"line-height":"1.7"},class:"text-[#364958]"},ot={class:"w-full lg:w-4/12 pl-4"},nt=t("div",{style:{"font-size":"2rem"},class:"text-gray-600"},"Product",-1),rt={class:"pb-8"},lt={class:"block shadow-lg bg-white pl-5"},dt={class:"flex flex-wrap items-center pt-10"},ct={class:""},mt={key:0,class:"mb-12 md:mb-12 sm:mb-0"},pt={key:1},ut={class:"lg:w-9/12 xl:w-9/12"},_t={class:"px-6 md:px-6 lg:px-6"},gt={class:"text-xl font-medium text-[#40b751]"},ht={class:"text-gray-500 mb-2"},bt={class:"text-gray-500 font-bold pb-2"},xt=t("hr",{class:"h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 mr-4"},null,-1),ft={class:"flex justify-between pb-2"},vt={class:"flex justify-between w-24 text-xl h-9"},yt={key:0,class:"bg-[#40b751] pt-1 pb-1 pl-3 pr-3 rounded-lg justify-center pb-5"},wt={key:0,class:"text-center font-bold text-lg mt-5"},kt=t("div",{class:"text-gray-600"},"Total Donation",-1),qt={class:"text-[#40b751]"},Ct=t("label",{for:"checkbox",class:"text-sm pl-2"},"Make my donation anonymous",-1),jt=t("hr",{class:"h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"},null,-1),zt=C('<div style="font-size:2rem;" class="mt-3 font-medium text-gray-800">Other Donation</div><p class="text-gray-600">Donate via</p><div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4"><div><div class="cursor-pointer rounded-t-lg pt-4 pb-4"><div class="grid justify-center"><img src="'+F+'" class="w-12 h-12"></div><div class="text-center pt-2"><p class="text-xs text-[#364958]">Phone Pay</p></div></div></div><div><div class="cursor-pointer rounded-t-lg pt-4 pb-4"><div class="grid justify-center"><img src="'+O+'" class="w-12 h-12"></div><div class="text-center pt-2"><p class="text-xs text-[#364958]">Google Pay</p></div></div></div><div><div class="cursor-pointer rounded-t-lg pt-4 pb-4"><div class="grid justify-center"><img src="'+P+'" class="w-12 h-12"></div><div class="text-center pt-2"><p class="text-xs text-[#364958]">Bhim UPI</p></div></div></div><div><div class="cursor-pointer rounded-t-lg pt-4 pb-4"><div class="grid justify-center"><img src="'+V+'" class="w-12 h-12"></div><div class="text-center pt-2"><p class="text-xs text-[#364958]">Paytm</p></div></div></div><div><div class="cursor-pointer rounded-t-lg pt-4 pb-4"><div class="grid justify-center"><img src="'+I+'" class="w-12 h-12"></div><div class="text-center pt-2"><p class="text-xs text-[#364958]">cr/dr card</p></div></div></div><div><div class="cursor-pointer rounded-t-lg pt-4 pb-4"><div class="grid justify-center"><img src="'+G+'" class="w-12 h-12"></div><div class="text-center pt-2"><p class="text-xs text-[#364958]">Bank Transfer</p></div></div></div><div><div class="cursor-pointer rounded-t-lg pt-4 pb-4"><div class="grid justify-center"><img src="'+H+'" class="w-12 h-12"></div><div class="text-center pt-2"><p class="text-xs text-[#364958]">Gift Card</p></div></div></div></div><div style="font-size:2rem;" class="mt-3 font-medium text-gray-800">Donors</div>',4),Tt={class:"flex flex-wrap"},At={class:"w-full"},Rt={class:"flex mb-0 list-none flex-wrap flex-row"},Lt={class:"-mb-px flex-auto text-center"},Ut=t("i",{class:"fas fa-space-shuttle text-base mr-1"},null,-1),Dt={class:"-mb-px flex-auto text-center"},Bt=t("i",{class:"fas fa-cog text-base mr-1"},null,-1),Nt={class:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"},St={class:"px-4 py-5 flex-auto"},Et={class:"tab-content tab-space overflow-y-auto h-60"},Ft={class:"pb-6"},Ot={class:"grid grid-cols-[200px_minmax(70px,_1fr)_100px]"},Pt={class:"float-left pr-4"},Vt={key:0},It={key:1},Gt={key:0,class:"text-gray-900 leading-none text-lg font-bold"},Ht={key:1,class:"text-gray-900 leading-none text-lg font-bold"},Mt={class:"text-gray-600 text-sm"},Jt={class:"grid justify-end"},Qt={class:""},Wt=C('<section class="bg-white dark:bg-gray-900"><div><section class="bg-white dark:bg-gray-900"><div><section class="text-gray-700"><div class="px-5 py-10"><div class="mb-8"><p class="text-[30px] md:text-[26px] lg:text-[30px] text-[#40b751] font-semibold text-center title-font mb-4"> FAQ </p><p class="text-base text-center leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, voluptate! </p></div><div class="flex flex-wrap sm:mx-auto sm:mb-2 mx-auto"><div class="w-full py-2"><details class="mb-4"><summary class="font-medium cursor-pointer border-2 border-b-1 border-solid border-b-gray-300 text-xl text-[#40b751] list-none bg-gray-100 rounded py-3 px-4"> What is Donatekart ?</summary><span><p style="line-height:1.7;" class="border-2 font-normal border-solid border-gray-200 border-t-0 p-5 text-lg text-[#364958]"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table. </p></span></details><details class="mb-4"><summary class="font-medium border-2 cursor-pointer border-b-1 border-solid border-b-gray-300 text-[#40b751] text-xl list-none bg-gray-100 rounded py-3 px-4"> How to claim Tax-Exemption for my contributions on Donatekart?</summary><span><p style="line-height:1.7;" class="border-2 border-solid border-gray-200 border-t-0 p-5 text-lg text-[#364958] dark:text-gray-300"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&#39;t heard of them accusamus labore sustainable VHS.</p></span></details><details class="mb-4"><summary class="font-medium border-2 cursor-pointer border-b-1 border-solid border-b-gray-300 text-[#40b751] text-xl list-none bg-gray-100 rounded py-3 px-4"> How to Donate ?</summary><span><p style="line-height:1.7;" class="border-2 border-solid border-gray-200 border-t-0 p-5 text-lg text-[#364958] dark:text-gray-300"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p></span></details></div></div></div></section></div></section></div></section>',1);function Kt(e,a,n,i,s,c){const r=x("Navbar"),p=x("Avatar"),y=x("Button"),j=x("Footer");return l(),d(b,null,[t("div",J,[u(r),Q]),t("div",W,[s.campaign_detail?(l(),d("div",K,[t("h2",X,m(s.campaign_detail.data.campaign_title),1),t("p",Y,m(s.campaign_detail.data.short_description),1),Z,t("div",$,[t("div",tt,[t("img",{class:"object-fill w-full mb-4",src:s.campaign_detail.data.campain_image},null,8,et),t("div",st,[t("div",{class:"bg-[#40b751] text-[11px] font-medium text-black text-center p-0.5 leading-none rounded",style:z({width:s.campaign_detail.data.raised_amount*100/s.campaign_detail.data.donation_amount+"%"})},m(s.campaign_detail.data.raised_amount*100/s.campaign_detail.data.donation_amount)+"%",5)]),t("div",at,[t("p",null,"Raised: "+m(s.campaign_detail.data.raised_amount),1),t("p",null,"Goal: "+m(s.campaign_detail.data.donation_amount),1)]),t("p",it,m(s.campaign_detail.data.about_campaign),1)]),t("div",ot,[nt,(l(!0),d(b,null,f(s.campaign_detail.data.add_campaign_items,o=>(l(),d("div",rt,[t("div",lt,[t("div",dt,[t("div",ct,[o.image!=1?(l(),d("div",mt,[t("div",null,[u(p,{imageURL:o.image,label:o.display_as_name,size:"lg"},null,8,["imageURL","label"])])])):(l(),d("div",pt,[t("div",null,[u(p,{imageURL:"",size:"lg"})])]))]),t("div",ut,[t("div",_t,[t("h4",gt,m(o.display_as_name),1),t("p",ht,m(o.about),1),t("p",bt," \u20B9 "+m(o.price),1)])])]),xt,t("div",ft,[t("div",vt,[u(y,{class:"bg-gray-300",onClick:h=>c.decrement(o.item,o.price,s.qty)},{default:w(()=>[g("-")]),_:2},1032,["onClick"]),(l(!0),d(b,null,f(s.item_cart,h=>(l(),d("div",null,[o.item==h.item&&h.qty!=0?(l(),d("div",yt,m(h.qty),1)):v("",!0)]))),256)),u(y,{class:"bg-gray-300",onClick:h=>c.increment(o.item,o.price,s.qty)},{default:w(()=>[g("+")]),_:2},1032,["onClick"])])])])]))),256)),s.total_price!=0?(l(),d("div",wt,[kt,t("div",qt,"\u20B9 "+m(s.total_price),1),t("div",null,[t("button",{class:"rounded-lg bg-[#40b751] text-white active:bg-[#40b751] hover:border-green-600 uppercase text-sm px-6 py-3 shadow hover:bg-white hover:text-black hover:border-green-500 hover:border-2mr-1 mb-5 ease-linear transition-all duration-150",type:"button",onClick:a[0]||(a[0]=o=>c.donate(s.total_price,s.anonymous))}," donate now ")]),t("div",null,[T(t("input",{type:"checkbox",id:"anonymous","onUpdate:modelValue":a[1]||(a[1]=o=>s.anonymous=o)},null,512),[[A,s.anonymous]]),Ct]),jt])):v("",!0),zt,t("div",Tt,[t("div",At,[t("ul",Rt,[t("li",Lt,[t("a",{class:_(["border border-solid text-sm font-medium px-5 py-3 shadow-lg rounded block leading-normal cursor-pointer",{"bg-gray-200":s.openTab!==1,"text-gray-500":s.openTab===1}]),onClick:a[2]||(a[2]=o=>c.toggleTabs(1))},[Ut,g(" Recent ")],2)]),t("li",Dt,[t("a",{class:_(["border border-solid text-sm font-medium px-5 py-3 shadow-lg rounded block leading-normal cursor-pointer",{"bg-gray-200":s.openTab!==2,"text-gray-500":s.openTab===2}]),onClick:a[3]||(a[3]=o=>c.toggleTabs(2))},[Bt,g(" most generous ")],2)])]),t("div",Nt,[t("div",St,[t("div",Et,[t("div",{class:_({hidden:s.openTab!==1,block:s.openTab===1})},[(l(!0),d(b,null,f(s.recent_donation,o=>(l(),d("div",Ft,[t("div",Ot,[t("div",null,[t("div",Pt,[o.anonymous!=1?(l(),d("div",Vt,[u(p,{imageURL:o.donor_image,label:o.donor_name,size:"lg",class:"w-12 h-12 rounded-full"},null,8,["imageURL","label"])])):(l(),d("div",It,[u(p,{imageURL:"",label:"Anonymous",size:"lg",class:"w-12 h-12 rounded-full"})]))]),t("div",null,[o.anonymous!=1?(l(),d("p",Gt,m(o.donor_name),1)):(l(),d("p",Ht," Anonymous")),t("p",Mt,m(o.creation),1)])]),t("div",Jt,[t("p",Qt,"\u20B9 "+m(o.amount),1)])])]))),256))],2),t("div",{class:_({hidden:s.openTab!==2,block:s.openTab===2})},[t("p",null,m(s.item_cart),1)],2)])])])])])])]),Wt])):v("",!0)]),u(j)],64)}var Zt=q(M,[["render",Kt]]);export{Zt as default};
