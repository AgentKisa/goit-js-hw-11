import{S as c,i as l}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const u="44070637-4c17cd33bb35071a705149900";function f(e,r){const s=new URLSearchParams({key:u,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()}).then(r).catch(n=>console.log(n))}const d=new c(".gallery a",{captionsData:"alt",captionDelay:250});function m(){return'<div class="loader"></div>'}function p(){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function h(e){return`
    <a href="${e.largeImageURL}" class="gallery-item">
      <img src="${e.webformatURL}" alt="${e.tags}" class="foto" height="148" width="360">
      <div class="info" >
        <p class="icon">Likes: ${e.likes} </p>
        <p class="icon">Views: ${e.views}</p>
        <p class="icon">Comments: ${e.comments}</p>
        <p class="icon">Downloads: ${e.downloads}</p>
      </div>
    </a>`}function g(e){return e.map(r=>h(r)).join("")}const y=document.querySelector(".form"),a=document.querySelector(".gallery");y.addEventListener("submit",e=>{a.innerHTML=m(),e.preventDefault();const r=e.target.elements.searchInput.value.trim();f(r,L)});function L(e){if(!e.total&&e.total==0){p(),a.innerHTML="";return}const r=e.hits;console.log("response",e);const s=g(r);a.innerHTML=s,d.refresh()}
//# sourceMappingURL=commonHelpers.js.map
