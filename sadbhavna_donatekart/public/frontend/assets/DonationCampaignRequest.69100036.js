import{N as x,F as h}from"./Footer.68167667.js";import{_ as y,o as l,c as d,k as b,e,b as c,n as g,y as a,z as r,F as f,p as i,r as m}from"./index.a26a8355.js";const v={name:"Donation Campaign Request",components:{Navbar:x,Footer:h},data(){return{openTab:1,full_name:"",campaign_type:"",organisation_name:"",organisation_website:"",email:"",phone:"",campaign_story:"",social_media_page:"",beneficiary_group:""}},resources:{request_campaign(){return{method:"sadbhavna_donatekart.api.campaign.request_campaign",onSuccess:n=>{this.$toast({title:"Success",text:"Your Request is successfully sent to sadbhavna donatekart",customIcon:"check"}),this.$router.go()},onError:n=>{console.log(n),this.$toast({title:"Error",text:n,customIcon:"circle-fail",appearance:"denger"})}}}},methods:{toggleTabs:function(n){this.openTab=n,this.tab=this.tabNumber},request_campaign(){this.openTab==1?this.campaign_type="NGO":this.campaign_type="Indivisual/Group",this.$resources.request_campaign.submit({full_name:this.full_name,campaign_type:this.campaign_type,organisation_name:this.organisation_name,organisation_website:this.organisation_website,email:this.email,phone:this.phone,campaign_story:this.campaign_story,social_media_page:this.social_media_page,beneficiary_group:this.beneficiary_group})}}},w={class:"container mx-auto"},k={key:0,class:"absolute bg-bottom bg-x-center bg-y-bottom bg-no-repeat z-1 top-96 sm:h-0 md:h-0 lg:h-0 xl:h-[650px] sm:w-0 md:w-0 lg:w-0 xl:w-96 sm:right-0 md:right-5 lg:right-16 bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat",style:{"background-image":"url('https://crowdfunding.frappe.cloud/files/bg-tree.png')"}},q={key:1,class:"absolute bg-bottom bg-x-center bg-y-bottom bg-no-repeat z-1 top-[300px] sm:h-0 md:h-0 lg:h-0 xl:h-[643px] sm:w-0 md:w-0 lg:w-0 xl:w-96 sm:right-0 md:right-5 lg:right-16 bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat",style:{"background-image":"url('https://crowdfunding.frappe.cloud/files/bg-tree.png')"}},T={class:"container mx-auto h-full"},N={class:"w-full sm:pt-0 md:pt-5 lg:pt-12"},V={class:"container mx-auto py-0"},C={class:"w-6/6 lg:w:4/6 mx-auto bg-white"},U=e("div",{class:"text-[24px] md:text-[30px] lg:text-[36px] py-8 px-10 text-gray-600 font-[200px] text-center"}," Donation Campaign request ",-1),F={class:"relative z-0"},z={class:"sm:p-10"},G={class:"flex mb-0 flex-wrap pt-4 ml-10 mr-11 pb-4 flex-row"},S={class:"-mb-px mr-2 last:mr-0 flex-auto text-center"},B={class:"-mb-px mr-2 last:mr-0 flex-auto text-center"},D={class:"px-4 py-2 flex-auto"},E={class:"tab-content tab-space"},I={class:"py-4 px-8"},O={class:"mb-4"},R=e("label",{class:"block text-gray-600 text-base mb-2",for:"email"},[i("Full Name "),e("span",{class:"text-red-600"},"*")],-1),M={key:0,class:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"},P={class:"mb-4"},W=e("label",{class:"block text-gray-600 text-base mb-2"},"Organisation Name",-1),Y={class:"mb-4"},j=e("label",{class:"block text-gray-600 text-base mb-2"},"Organisation Website",-1),A={class:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4"},H={class:"mb-6"},J=e("label",{class:"block text-gray-600 text-base mb-2"},[i("Phone "),e("span",{class:"text-red-600"},"*")],-1),K={class:"mb-6"},L=e("label",{class:"block text-gray-600 text-base mb-2"},[i("Email "),e("span",{class:"text-red-600"},"*")],-1),Q={class:"mb-6"},X=e("label",{class:"block text-gray-600 text-base mb-2"},"Social Media Page",-1),Z={class:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4"},$={class:"mb-6"},ee=e("label",{class:"block text-gray-600 text-base mb-2"},[i("Campaign Story "),e("span",{class:"text-red-600"},"*")],-1),te={class:"mb-6"},oe=e("label",{class:"block text-gray-600 text-base mb-2"},[i("Beneficiary Group "),e("span",{class:"text-red-600"},"*")],-1),se={class:"mb-6"};function ae(n,o,re,ne,t,p){const u=m("Navbar"),_=m("Footer");return l(),d(f,null,[b(u),e("div",w,[t.openTab==1?(l(),d("div",k)):c("",!0),t.openTab==2?(l(),d("div",q)):c("",!0),e("div",T,[e("div",N,[e("div",V,[e("div",C,[U,e("div",F,[e("div",z,[e("ul",G,[e("li",S,[e("a",{class:g(["cursor-pointer text-base font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal",{"text-[#40b751] bg-white":t.openTab!==1,"text-white bg-[#40b751]":t.openTab===1}]),onClick:o[0]||(o[0]=s=>p.toggleTabs(1))}," NGO ",2)]),e("li",B,[e("a",{class:g(["cursor-pointer text-base font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal",{"text-[#40b751] bg-white":t.openTab!==2,"text-white bg-[#40b751]":t.openTab===2}]),onClick:o[1]||(o[1]=s=>p.toggleTabs(2))}," Individual Group ",2)])]),e("div",D,[e("div",E,[e("div",I,[e("div",O,[R,a(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker","onUpdate:modelValue":o[2]||(o[2]=s=>t.full_name=s),type:"text",required:""},null,512),[[r,t.full_name]])]),t.openTab==1?(l(),d("div",M,[e("div",P,[W,a(e("input",{class:"appearance-none border-gray-300 rounded w-full py-2 px-3 hover:border-[#40b751] text-grey-darker",type:"text","onUpdate:modelValue":o[3]||(o[3]=s=>t.organisation_name=s),required:""},null,512),[[r,t.organisation_name]])]),e("div",Y,[j,a(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"text","onUpdate:modelValue":o[4]||(o[4]=s=>t.organisation_website=s),required:""},null,512),[[r,t.organisation_website]])])])):c("",!0),e("div",A,[e("div",H,[J,a(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"text","onUpdate:modelValue":o[5]||(o[5]=s=>t.phone=s),required:""},null,512),[[r,t.phone]])]),e("div",K,[L,a(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"email","onUpdate:modelValue":o[6]||(o[6]=s=>t.email=s),required:""},null,512),[[r,t.email]])]),e("div",Q,[X,a(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"text","onUpdate:modelValue":o[7]||(o[7]=s=>t.social_media_page=s),required:""},null,512),[[r,t.social_media_page]])])]),e("div",Z,[e("div",$,[ee,a(e("textarea",{id:"comment",rows:"4","onUpdate:modelValue":o[8]||(o[8]=s=>t.campaign_story=s),class:"hover:border-[#40b751] w-full py-2 px-3 text-gray-900 bg-white border-1 border-gray-300 focus:ring-0 dark:text-white dark:placeholder-gray-600",required:""},null,512),[[r,t.campaign_story]])]),e("div",te,[oe,a(e("textarea",{id:"comment",rows:"4","onUpdate:modelValue":o[9]||(o[9]=s=>t.beneficiary_group=s),class:"hover:border-[#40b751] w-full py-2 px-3 text-gray-900 bg-white border-1 border-gray-300 focus:ring-0 dark:text-white dark:placeholder-gray-600",required:""},null,512),[[r,t.beneficiary_group]])])]),e("div",se,[e("button",{class:"appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] text-lg uppercase rounded",onClick:o[10]||(o[10]=s=>p.request_campaign())},"Submit")])])])])])])])])])])]),b(_)],64)}var de=y(v,[["render",ae]]);export{de as default};
