(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{24:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n.n(i),l=n(14),s=n.n(l),a=(n(24),n(15)),o=n(16),r=n(19),d=n(18),j=n(17),h=n.n(j),p=n(0),u=function(e){Object(r.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,c=new Array(i),l=0;l<i;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={selectedFile:null},e.onFileChange=function(t){e.setState({selectedFile:t.target.files[0]})},e.onFileUpload=function(){var t=new FormData;t.append("myFile",e.state.selectedFile,e.state.selectedFile.name),console.log(e.state.selectedFile),h.a.post("api/uploadfile",t)},e.fileData=function(){return e.state.selectedFile?Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"File Details:"}),Object(p.jsxs)("p",{children:["File Name: ",e.state.selectedFile.name]}),Object(p.jsxs)("p",{children:["File Type: ",e.state.selectedFile.type]})]}):Object(p.jsxs)("div",{children:[Object(p.jsx)("br",{}),Object(p.jsx)("h4",{children:"Choose before Pressing the Upload button"})]})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Saarthi"}),Object(p.jsx)("h3",{children:"Upload your music files! :)"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"file",onChange:this.onFileChange}),Object(p.jsx)("button",{onClick:this.onFileUpload,children:"Upload!"})]}),this.fileData()]})}}]),n}(i.Component),b=u,F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),l(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root")),F()}},[[44,1,2]]]);
//# sourceMappingURL=main.c5f739e1.chunk.js.map