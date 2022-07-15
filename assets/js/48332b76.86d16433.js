"use strict";(self.webpackChunkevantay_com=self.webpackChunkevantay_com||[]).push([[139],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3671:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Git Cheatsheet"},p=void 0,c={unversionedId:"git-cheatsheet",id:"git-cheatsheet",title:"Git Cheatsheet",description:"Published on December 24, 2020",source:"@site/docs/git-cheatsheet.md",sourceDirName:".",slug:"/git-cheatsheet",permalink:"/docs/git-cheatsheet",draft:!1,tags:[],version:"current",frontMatter:{title:"Git Cheatsheet"},sidebar:"docs",previous:{title:"JS Cheatsheet",permalink:"/docs/js-cheatsheet"},next:{title:"Git Ignore file",permalink:"/docs/git-ignore-file"}},s={},m=[{value:"Get branch information",id:"get-branch-information",level:2},{value:"Delete local and remote branches",id:"delete-local-and-remote-branches",level:2},{value:"Reset a branch",id:"reset-a-branch",level:2},{value:"Ignore a file&#39;s changes temporarily",id:"ignore-a-files-changes-temporarily",level:2},{value:"Resources",id:"resources",level:2}],u={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Published on December 24, 2020"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This document was migrated from ",(0,i.kt)("a",{parentName:"em",href:"https://digipie.github.io/digidocs/git/cheat-sheet/"},"DigiDocs"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Basic knowledge of Git is assumed in this tutorial. If you are new to Git, visit ",(0,i.kt)("a",{parentName:"p",href:"http://rogerdudler.github.io/git-guide/"},"http://rogerdudler.github.io/git-guide/")," to learn the basics first.")),(0,i.kt)("h2",{id:"get-branch-information"},"Get branch information"),(0,i.kt)("p",null,"I want to find out what branches I have locally:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git branch\n")),(0,i.kt)("p",null,"I want to find out what is the upstream branch for a given branch:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git branch -v\n")),(0,i.kt)("p",null,"Even more verbose information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git branch -vv\n")),(0,i.kt)("h2",{id:"delete-local-and-remote-branches"},"Delete local and remote branches"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example scenario:"),(0,i.kt)("br",{parentName:"p"}),"\n","I have merged my development branch ",(0,i.kt)("inlineCode",{parentName:"p"},"feat/new-feature")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"develop")," and wish to delete the local and remote branch of ",(0,i.kt)("inlineCode",{parentName:"p"},"feat/new-feature")," now."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The solution:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Delete the local branch:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git branch -d feat/new-feature")),(0,i.kt)("li",{parentName:"ul"},"or with ",(0,i.kt)("inlineCode",{parentName:"li"},"--force"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"git branch -D feat/new-feature")))),(0,i.kt)("li",{parentName:"ul"},"Delete the remote branch: ",(0,i.kt)("inlineCode",{parentName:"li"},"git push <remote> -d <branch>"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The general command format it is based on:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Delete a local branch:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git branch -d|--delete <branch>")),(0,i.kt)("li",{parentName:"ul"},"or with ",(0,i.kt)("inlineCode",{parentName:"li"},"--force"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"git branch -D <branch>")))),(0,i.kt)("li",{parentName:"ul"},"Delete a remote branch: ",(0,i.kt)("inlineCode",{parentName:"li"},"git push <remote> -d|--delete <branch>"))),(0,i.kt)("h2",{id:"reset-a-branch"},"Reset a branch"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example scenario:"),(0,i.kt)("br",{parentName:"p"}),"\n","I messed up my local ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," branch. I want to reset it such that it will revert to being the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"origin/master"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The one-line solution:"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout -B master origin/master")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The general command format it is based on:"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout -b|-B <new_branch> [<start point>]")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How does it work?")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git checkout -b|-B <new_branch>")," is typically used to create and switch to a new branch. However, if ",(0,i.kt)("inlineCode",{parentName:"p"},"<new_branch>")," already exists, it will be reset instead."),(0,i.kt)("admonition",{title:"Cite",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"-B")," is given, ",(0,i.kt)("inlineCode",{parentName:"p"},"<new_branch>")," is created if it doesn\u2019t exist; otherwise, it is reset.")),(0,i.kt)("h2",{id:"ignore-a-files-changes-temporarily"},"Ignore a file's changes temporarily"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example scenario:"),(0,i.kt)("br",{parentName:"p"}),"\n","I want to stop tracking changes for a given file temporarily, as I am still editing it and do not want an incomplete copy of it to be added to staging when I do ",(0,i.kt)("inlineCode",{parentName:"p"},"git add *")," (to add all changes in the current path)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The solution:")),(0,i.kt)("p",null,"To temporarily ignore (stop tracking) a file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git update-index --assume-unchanged <file>\n")),(0,i.kt)("p",null,"To start tracking a file again:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git update-index --no-assume-unchanged <file>\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"git-ignore-file#using-git-update-index"},"Git Ignore file")," for more information."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://digipie.github.io/digidocs/git/cheat-sheet/"},"Original copy of this document at DigiDocs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/docs/git-branch"},"gitscm's documentation for branch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/docs/git-checkout"},"gitscm's documentation for checkout")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/docs/git-push"},"gitscm's documentation for push"))))}h.isMDXComponent=!0}}]);