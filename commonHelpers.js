import{i as l}from"./assets/vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const a=document.querySelector(".form"),c=document.querySelector(".images_container");a.addEventListener("submit",t=>{t.preventDefault();const o=t.target.elements.query.value.trim();o?u(o).then(s=>{if(s.hits.length!=0){const i=p(s.hits);c.innerHTML=i}else l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}).catch(s=>{l.error({title:"Error",message:"Error",position:"topCenter"})}):l.warning({title:"Warning",message:"You should input something",position:"topCenter"})});function u(t){const o="https://pixabay.com/api/",s=new URLSearchParams({key:"44028683-118753c7a8296875ea6775d6e",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"9"}),i=`${o}?${s}`;return fetch(i).then(e=>e.json())}function m(t){return`<img src="${t.webformatURL}" alt="${t.tags}>
    <ul class="property_list">
    <li class="property_elem">Likes ${t.likes}</li>
    <li class="property_elem>Views ${t.views}</li>
    <li class="property_elem>Comments ${t.comments}</li>
    <li class="property_elem>Downloads ${t.downloads}</li>
    </ul>`}function p(t){return t.map(m).join("")}
//# sourceMappingURL=commonHelpers.js.map
