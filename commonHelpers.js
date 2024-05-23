import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l=document.querySelector(".form"),c=document.querySelector(".images_container");l.addEventListener("submit",r=>{r.preventDefault();const s=r.target.elements.query.value.trim();s?p(s).then(o=>{if(o.hits.length!=0){const n=m(o.hits);c.innerHTML=n}else a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}).catch(o=>{a.error({title:"Error",message:"Error",position:"topCenter"})}):a.warning({title:"Warning",message:"You should input something",position:"topCenter"})});function p(r){const s="https://pixabay.com/api/",o=new URLSearchParams({key:"44028683-118753c7a8296875ea6775d6e",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"9"}),n=`${s}?${o}`;return fetch(n).then(e=>e.json())}function u(r){return`
    <div class="gallery_block">
    <img src="${r.webformatURL}" alt="${r.tags}" class="picture">
    <ul class="property_list">
    <li class="property_elem">Likes <span class="span_property">${r.likes}</span></li>
    <li class="property_elem">Views <span class="span_property">${r.views}</span></li>
    <li class="property_elem">Comments <span class="span_property">${r.comments}</span></li>
    <li class="property_elem">Downloads <span class="span_property">${r.downloads}</span></li>
    </ul>
    </div>`}function m(r){return r.map(u).join("")}
//# sourceMappingURL=commonHelpers.js.map
