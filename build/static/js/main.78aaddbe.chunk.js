(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__31OTK",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__1dTan"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__-6szL",Modal:"Modal_Modal__1hkZ0"}},16:function(e,t,a){e.exports={Button:"Button_Button__1N0Z6"}},21:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(15),o=a.n(c),s=(a(21),a(12)),i=a(3),l=a(4),h=a(6),u=a(5);function j(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("22963299-57829f6e237632471c998bdfc","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).catch((function(e){return Promise.reject(e)}))}var m=a(7),b=a.n(m),d=a(0),g=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.onChange=function(t){e.setState({query:t.currentTarget.value.trim()})},e.onSubmit=function(t){t.preventDefault(),e.props.onSearch(e.state.query)},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:b.a.Searchbar,children:Object(d.jsxs)("form",{className:b.a.SearchForm,onSubmit:this.onSubmit,children:[Object(d.jsx)("button",{type:"submit",className:b.a.SearchForm__button,children:Object(d.jsx)("span",{className:b.a.SearchForm__button__label,children:"Search"})}),Object(d.jsx)("input",{className:b.a.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.onChange})]})})}}]),a}(n.a.Component),p=a(2),O=a.n(p),_=a(8),f=a.n(_);function x(){return Object(d.jsxs)("ul",{className:f.a.ImageGallery,children:[Object(d.jsx)("li",{children:Object(d.jsx)(O.a,{height:260})}),Object(d.jsx)("li",{children:Object(d.jsx)(O.a,{height:260})}),Object(d.jsx)("li",{children:Object(d.jsx)(O.a,{height:260})}),Object(d.jsx)("li",{children:Object(d.jsx)(O.a,{height:260})}),Object(d.jsx)("li",{children:Object(d.jsx)(O.a,{height:260})}),Object(d.jsx)("li",{children:Object(d.jsx)(O.a,{height:260})}),Object(d.jsx)("li",{children:Object(d.jsx)(O.a,{height:260})}),Object(d.jsx)("li",{children:Object(d.jsx)(O.a,{height:260})}),Object(d.jsx)("li",{children:Object(d.jsx)(O.a,{height:260})}),Object(d.jsx)("li",{children:Object(d.jsx)(O.a,{height:260})}),Object(d.jsx)("li",{children:Object(d.jsx)(O.a,{height:260})}),Object(d.jsx)("li",{children:Object(d.jsx)(O.a,{height:260})})]})}var y=a(10),S=a.n(y);function v(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL;return Object(d.jsx)("li",{className:S.a.ImageGalleryItem,children:Object(d.jsx)("img",{id:t,src:a,alt:"",className:S.a.ImageGalleryItem__image,"data-src":r})})}function M(e){var t=e.imagesArr,a=e.onOpenModal;return Object(d.jsx)("ul",{className:f.a.ImageGallery,onClick:function(e){return a(e.target)},children:t.map((function(e,t){var a=e.id,r=e.webformatURL,n=e.largeImageURL;return Object(d.jsx)(v,{id:a,webformatURL:r,largeImageURL:n},t)}))})}var w=a(16),I=a.n(w);function N(e){var t=e.onLoadMore;return Object(d.jsx)("button",{type:"button",className:I.a.Button,onClick:t,children:"Load more"})}var L=a(11),k=a.n(L),C=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).onKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.onClickBackdrop=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onKeyDown)}},{key:"render",value:function(){return Object(d.jsx)("div",{className:k.a.Overlay,onClick:this.onClickBackdrop,children:Object(d.jsx)("div",{className:k.a.Modal,children:this.props.children})})}}]),a}(n.a.Component),F=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:"",images:[],status:"idle",pageNumber:1,showLoadMoreBtn:!1,showModal:!1,errorMessage:"",src:""},e.generateSearchQueryResult=function(t,a){j(t,a).then((function(t){if(0===t.hits.length)e.setState({status:"rejected",errorMessage:"No matches found :("});else{var r=Math.ceil(t.total/12),n=t.hits.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL}}));e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(n)),status:"resolved",showLoadMoreBtn:r!==a}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}})).catch((function(t){e.setState({status:"rejected",errorMessage:"There is an error: ".concat(t)})}))},e.onSearch=function(t){e.setState({searchQuery:t})},e.onOpenModal=function(t){t.className.includes("ImageGalleryItem__image")&&e.setState({showModal:!0,src:t.dataset.src})},e.onCloseModal=function(){e.setState({showModal:!1,src:""})},e.onLoadMore=function(){e.setState((function(e){return{pageNumber:e.pageNumber+1,status:"pending"}}),(function(){var t=e.state,a=t.searchQuery,r=t.pageNumber;e.generateSearchQueryResult(a,r)}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,r=this.state.searchQuery;t.searchQuery!==r&&this.setState({images:[],status:"pending",pageNumber:1},(function(){return a.generateSearchQueryResult(r,a.state.pageNumber)}))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.status,r=e.showLoadMoreBtn,n=e.errorMessage,c=e.showModal,o=e.src;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g,{onSearch:this.onSearch}),"idle"===a&&Object(d.jsx)("p",{className:"Msg",children:"Enter search query :)"}),"pending"===a&&Object(d.jsxs)(d.Fragment,{children:[0!==t.length&&Object(d.jsx)(M,{imagesArr:t}),Object(d.jsx)(x,{}),Object(d.jsx)("div",{className:"loadMoreReplacer"})]}),"rejected"===a&&Object(d.jsx)("p",{className:"Msg",children:n}),"resolved"===a&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(M,{imagesArr:t,onOpenModal:this.onOpenModal}),r&&Object(d.jsx)(N,{onLoadMore:this.onLoadMore})]}),c&&Object(d.jsx)(C,{onClose:this.onCloseModal,children:Object(d.jsx)("img",{src:o,alt:""})})]})}}]),a}(n.a.Component);o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3Thki",SearchForm:"Searchbar_SearchForm__1ie-E",SearchForm__button:"Searchbar_SearchForm__button__3ca0t",SearchForm__button__label:"Searchbar_SearchForm__button__label__LYSou",SearchForm__input:"Searchbar_SearchForm__input__1xLo7"}},8:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__pp_ZD"}}},[[26,1,2]]]);
//# sourceMappingURL=main.78aaddbe.chunk.js.map