import{S as f,i as c}from"./assets/vendor-0fc460d7.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="43320774-2e32212a247c0a8af917c24eb";async function g(s){const n=`https://pixabay.com/api/?key=${h}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await(await fetch(n)).json()).hits}catch(o){throw console.error("Error fetching images:",o),o}}const p=document.querySelector(".gallery");let i=document.querySelector(".loading-indicator");function y(s){p.innerHTML="",s.forEach(o=>{const r=document.createElement("div");r.classList.add("image-card");const e=document.createElement("a");e.href=o.largeImageURL,e.classList.add("image-link"),e.innerHTML=`<img src="${o.webformatURL}" width="360" alt="${o.tags}" loading="lazy">`;const t=document.createElement("div");t.classList.add("info-container");const a=document.createElement("span");a.textContent=`Likes: ${o.likes}`;const l=document.createElement("span");l.textContent=`Views: ${o.views}`;const m=document.createElement("span");m.textContent=`Comments: ${o.comments}`;const u=document.createElement("span");u.textContent=`Downloads: ${o.downloads}`,t.appendChild(a),t.appendChild(l),t.appendChild(m),t.appendChild(u),r.appendChild(e),r.appendChild(t),p.appendChild(r)}),d(),new f(".gallery a").refresh()}function L(){i||(i=document.createElement("div"),i.classList.add("loading-indicator"),i.textContent="Loading...",document.body.appendChild(i))}function d(){i&&(i.remove(),i=null)}const E=document.querySelector("form"),w=document.querySelector('input[type="search"]');E.addEventListener("submit",async s=>{s.preventDefault();const n=w.value.trim();if(n===""){c.error({title:"Error",message:"Please enter a search keyword.",position:"topRight"});return}L();try{const o=await g(n);d(),o.length===0?c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):y(o)}catch{d(),c.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map