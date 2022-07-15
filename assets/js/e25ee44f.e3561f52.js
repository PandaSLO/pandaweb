"use strict";(self.webpackChunkevantay_com=self.webpackChunkevantay_com||[]).push([[136],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,d=u["".concat(p,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(d,l(l({ref:t},m),{},{components:n})):a.createElement(d,l({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4953:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={title:"iTerm2 and zsh Setup"},p=void 0,s={unversionedId:"iterm2-zsh-setup",id:"iterm2-zsh-setup",title:"iTerm2 and zsh Setup",description:"Published on January 16, 2021",source:"@site/docs/iterm2-zsh-setup.md",sourceDirName:".",slug:"/iterm2-zsh-setup",permalink:"/docs/iterm2-zsh-setup",draft:!1,tags:[],version:"current",frontMatter:{title:"iTerm2 and zsh Setup"},sidebar:"docs",previous:{title:"Git Ignore file",permalink:"/docs/git-ignore-file"},next:{title:"iTerm2 Cheatsheet",permalink:"/docs/iterm2-cheatsheet"}},m={},c=[{value:"Install",id:"install",level:2},{value:"Change theme",id:"change-theme",level:2},{value:"Add an alias",id:"add-an-alias",level:2},{value:"Resources",id:"resources",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Published on January 16, 2021",(0,o.kt)("br",{parentName:"p"}),"\n","Updated on January 23, 2021"),(0,o.kt)("p",null,"In this section you will find my notes on setting up ",(0,o.kt)("a",{parentName:"p",href:"https://iterm2.com/"},"iTerm2"),", an awesome terminal emulator for MacOS, and ",(0,o.kt)("a",{parentName:"p",href:"https://ohmyz.sh/"},"ohmyzsh"),", an amazing open-source framework for managing your zsh configuration."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install iTerm2:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"brew install --cask iterm2\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install zsh:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"brew install zsh\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install ohmyzsh:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},'sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update ohmyzsh:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"omz update\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Exit Terminal and open iTerm2: ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2318")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"Space Bar")," > Search 'iTerm'")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You are done setting up iTerm2 and ohmyzsh!"))),(0,o.kt)("h2",{id:"change-theme"},"Change theme"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To configure ohmyzsh, you will almost always be doing so by opening ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.zshrc"),".")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," configuration file:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"open ~/.zshrc\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change your theme by updating ",(0,o.kt)("inlineCode",{parentName:"p"},'ZSH_THEME="robbyrussell"')," accordingly.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Find a theme you like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ohmyzsh/ohmyzsh/wiki/External-themes"},"here")," and follow the install instructions in the theme repositories.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"exec zsh")," to reload your new configuration:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"exec zsh\n")))),(0,o.kt)("p",null,"You should see your new theme in action."),(0,o.kt)("h2",{id:"add-an-alias"},"Add an alias"),(0,o.kt)("p",null,"Aliases are useful shorcuts you set to reduce the time spent on typing commands you often use. For example, if you often type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"cd /Users/evantay/Documents/Git\n")),(0,o.kt)("p",null,"or even worse:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"cd /Users/\ncd evantay\ncd Documents/Git\n")),(0,o.kt)("p",null,"You should add an alias for ",(0,o.kt)("inlineCode",{parentName:"p"},"cd /Users/evantay/Documents/Git"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," configuration file:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"open ~/.zshrc\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a new alias at the bottom of the file:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},'# Example aliases\n# alias zshconfig="mate ~/.zshrc"\n# alias ohmyzsh="mate ~/.oh-my-zsh"\nalias repo="/Users/evantay/Documents/Git"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Reload zsh:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"exec zsh\n")))),(0,o.kt)("p",null,"You can now type ",(0,o.kt)("inlineCode",{parentName:"p"},"repo")," whenever you want to ",(0,o.kt)("inlineCode",{parentName:"p"},"cd /Users/evantay/Documents/Git"),"."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://iterm2.com/"},"iTerm2's Landing Site")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/how-to-configure-your-macos-terminal-with-zsh-like-a-pro-c0ab3f3c1156/"},"freeCodeCamp's Guide"))))}h.isMDXComponent=!0}}]);