"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[367],{49313:function(Pn,H,n){n.d(H,{Z:function(){return ln},f:function(){return C}});var Q=n(667294),C=Q.createContext(!1);function ln(){return Q.useContext(C)}},438746:function(Pn,H,n){n.d(H,{Z:function(){return T}});var Q=n(97857),C=n.n(Q),ln=n(952677),f=n.n(ln),j=n(805574),z=n.n(j),un=n(385956),l=n(667294),c=n(302559);function M(O){return O.replace("-cn","").replace(/\/$/,"")}function T(){var O=(0,un.useLocation)(),Y=O.search,q=(0,c.Z)(),p=z()(q,2),o=p[1],u=l.useCallback(function(e,v){var m=M(e);if(o==="cn"&&(m="".concat(m,"-cn")),Y&&(m="".concat(m).concat(Y)),v){var S;f()(v)==="object"?S=v[o]:S=v,m="".concat(m,"#").concat(S)}return m},[o,Y]);return C()(C()({},O),{},{pathname:M(O.pathname),getLink:u})}},361446:function(Pn,H,n){var Q=n(805574),C=n.n(Q),ln=n(719632),f=n.n(ln),j=n(667294),z=n(844183),un=n(566254),l=n(385956),c=n(472638),M=n(438746),T=n(785893),O=function(){var q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=(0,l.useFullSidebarData)(),o=(0,M.Z)(),u=o.pathname,e=o.search,v=(0,l.useSidebarData)(),m=q.before,S=q.after,on=(0,j.useMemo)(function(){var _,s=f()(v!=null?v:[]);if(u.startsWith("/docs/spec")){var D=s.splice(0,1);s.push.apply(s,f()(D))}if(u.startsWith("/docs/react")){var I,F=(I=Object.entries(p).find(function(Z){var E=C()(Z,1),A=E[0];return A.startsWith("/changelog")}))===null||I===void 0?void 0:I[1];F&&s.splice(1,0,F[0])}if(u.startsWith("/changelog")){var L,K=(L=Object.entries(p).find(function(Z){var E=C()(Z,1),A=E[0];return A.startsWith("/docs/react")}))===null||L===void 0?void 0:L[1];K&&(s.unshift(K[0]),s.push.apply(s,f()(K.slice(1))))}var V=function(E){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return E&&A&&(0,T.jsx)(z.Z,{color:E==="New"?"success":"processing",bordered:!1,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:E.replace("VERSION",un.Z)})};return(_=s==null?void 0:s.reduce(function(Z,E){if(E!=null&&E.title)if(u.startsWith("/docs/spec")){var A,G,pn=E.children.reduce(function(b,h){var d,x,k=(d=(x=h.frontmatter)===null||x===void 0?void 0:x.type)!==null&&d!==void 0?d:"default";return b[k]||(b[k]=[]),b[k].push(h),b},{}),sn=[];sn.push.apply(sn,f()((A=(G=pn.default)===null||G===void 0?void 0:G.map(function(b){return{label:(0,T.jsxs)(c.Z,{to:"".concat(b.link).concat(e),children:[m,b==null?void 0:b.title,S]}),key:b.link.replace(/(-cn$)/g,"")}}))!==null&&A!==void 0?A:[])),Object.entries(pn).forEach(function(b){var h=C()(b,2),d=h[0],x=h[1];d!=="default"&&sn.push({type:"group",label:d,key:d,children:x==null?void 0:x.map(function(k){return{label:(0,T.jsxs)(c.Z,{to:"".concat(k.link).concat(e),children:[m,k==null?void 0:k.title,S]}),key:k.link.replace(/(-cn$)/g,"")}})})}),Z.push({label:E==null?void 0:E.title,key:E==null?void 0:E.title,children:sn})}else{var bn;Z.push({type:"group",label:E==null?void 0:E.title,key:E==null?void 0:E.title,children:(bn=E.children)===null||bn===void 0?void 0:bn.map(function(b){var h,d;return{label:(0,T.jsxs)(c.Z,{to:"".concat(b.link).concat(e),style:{display:"flex",alignItems:"center"},children:[m,(0,T.jsx)("span",{children:b==null?void 0:b.title},"english"),(0,T.jsx)("span",{className:"chinese",children:(h=b.frontmatter)===null||h===void 0?void 0:h.subtitle},"chinese"),V((d=b.frontmatter)===null||d===void 0?void 0:d.tag,!m&&!S),S]}),key:b.link.replace(/(-cn$)/g,"")}})})}else{var W=E.children||[];W.every(function(b){var h;return b==null||(h=b.frontmatter)===null||h===void 0?void 0:h.date})&&W.sort(function(b,h){var d,x;return((d=b.frontmatter)===null||d===void 0?void 0:d.date)>((x=h.frontmatter)===null||x===void 0?void 0:x.date)?-1:1}),Z.push.apply(Z,f()(W.map(function(b){return{label:(0,T.jsxs)(c.Z,{to:"".concat(b.link).concat(e),style:{display:"flex",alignItems:"center"},children:[m,b==null?void 0:b.title,V(b.frontmatter.tag,!m&&!S),S]}),key:b.link.replace(/(-cn$)/g,"")}})))}return Z},[]))!==null&&_!==void 0?_:[]},[v,p,u,e,q]);return[on,u]};H.Z=O},148050:function(Pn,H,n){n.r(H),n.d(H,{default:function(){return O}});var Q=n(168400),C=n.n(Q),ln=n(667294),f=n(639389),j=n.n(f),z=n(647759),un=n(879587),l=n(785893),c,M="https://github.com/ant-design/ant-design/edit/master/",T=(0,z.kc)(function(Y){var q=Y.token,p=Y.css,o=q.colorIcon,u=q.colorText,e=q.iconCls;return{editButton:p(c||(c=C()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),e,o,u)}});function O(Y){var q=Y.title,p=Y.filename,o=T(),u=o.styles;return(0,l.jsx)(un.Z,{title:q,children:(0,l.jsx)("a",{className:u.editButton,href:"".concat(M).concat(p),target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)(f.EditOutlined,{})})})}},787729:function(Pn,H,n){n.r(H),n.d(H,{default:function(){return lo}});var Q=n(805574),C=n.n(Q),ln=n(693967),f=n.n(ln),j=n(727484),z=n.n(j),un=n(533852),l=n(385956),c=n(667294),M=n(715778),T=n(75529),O=n(302559),Y=n(438746),q=n(168400),p=n.n(q),o=n(370917),u=n(647759),e=n(785893),v,m={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},S=function(){var t=(0,u.Fg)(),r=function y(w){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return g<=10?`
.palette-`.concat(w,"-").concat(g,` {
  background: `).concat(t["".concat(w,"-").concat(g)],`;
}
`).concat(y(w,g+1),`
    `):""},i=function y(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return w<=13?`
.palette-gray-`.concat(w,` {
  background: `).concat(m[w],`;
}
`).concat(y(w+1),`
    `):""};return(0,e.jsx)(o.xB,{styles:(0,o.iv)(v||(v=p()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),t.colorError,r("blue"),r("purple"),r("cyan"),r("green"),r("magenta"),r("red"),r("volcano"),r("orange"),r("gold"),r("yellow"),r("lime"),r("geekblue"),i())})},on=S,_,s=function(){return(0,e.jsx)(o.xB,{styles:(0,o.iv)(_||(_=p()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},D,I=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(D||(D=p()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),a.colorText,a.fontSize,a.fontFamily,a.lineHeight,a.colorBgContainer)})},F,L=function(){var a=(0,u.Fg)(),t=a.anchorTop;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(F||(F=p()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }

      [id] {
        scroll-margin-top: `,`px;
      }

      [data-prefers-color='dark'] {
        color-scheme: dark;
      }

      [data-prefers-color='light'] {
        color-scheme: light;
      }
    `])),t)})},K=n(510274),V,Z=function(){var t=(0,u.Fg)(),r=t.antCls,i=t.colorPrimary;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(V||(V=p()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown > a > img,
        .markdown > img {
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: `,`;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),t.colorText,t.colorTextHeading,t.fontFamily,t.colorTextHeading,t.fontFamily,t.colorSplit,r,r,t.siteMarkdownCodeBg,t.colorSplit,t.codeFamily,t.siteMarkdownCodeBg,t.borderRadius,t.colorText,Math.max(t.fontSize-1,12),t.siteMarkdownCodeBg,t.borderRadius,t.colorTextSecondary,t.colorSplit,t.colorSplit,r,t.colorTextSecondary,t.colorText,t.colorSplit,t.colorSplit,t.colorSplit,t.colorSplit,Math.max(t.fontSize-1,12),t.codeFamily,t.lineHeight,t.colorSplit,t.colorText,t.magenta7,Math.max(t.fontSize-1,12),Math.max(t.fontSize-1,12),Math.max(t.fontSize-1,12),r,r,r,i,new K.C(i).setAlpha(.75).toHex8String(),r,r,t.colorWhite,r,new K.C(i).setAlpha(.75).toHexString(),r,r,new K.C(i).setAlpha(.75).toHexString(),r,r,r,r,new K.C(i).setAlpha(.6).toHexString(),r,r,r)})},E=Z,A,G=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(A||(A=p()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: `,`;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),a.colorText,a.fontSize,a.borderRadius,a.colorText)})},pn,sn=function(){var t=(0,u.Fg)(),r=t.antCls,i=t.iconCls;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(pn||(pn=p()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: calc(100% - `,`px);
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
            > .demo {
              overflow: auto;
            }
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            overflow: auto;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: 12px 16px;
              font-size: 13px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),t.lineWidth*2,t.colorBgContainer,t.colorSplit,t.borderRadiusLG,t.colorText,t.colorBgContainer,t.colorBgContainer,t.borderRadiusLG,t.borderRadiusLG,t.colorPrimary,t.colorBgContainer,t.borderRadius,t.borderRadius,t.colorText,t.fontSize,i,t.colorTextSecondary,t.colorText,r,r,t.colorText,t.colorSplit,t.fontSize,t.borderRadius,t.borderRadius,t.colorSplit,r,r,t.borderRadius,t.borderRadius,t.colorBgContainer,t.colorSplit,t.colorSplit,t.colorTextSecondary,t.colorText,i,t.colorBgContainer,i,t.green6,t.colorBgContainer,t.purple3,t.purple6,r)})},bn=sn,W,b=function(){var a=(0,u.Fg)(),t=a.antCls,r=a.iconCls;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(W||(W=p()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),r,t,a.colorPrimary,r,t)})},h,d=function(){var a=(0,u.Fg)(),t=a.iconCls;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(h||(h=p()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),a.colorIcon,a.colorIconHover,a.colorBorder,a.colorTextSecondary,t,a.colorLinkHover)})},x,k=function(){return(0,e.jsx)(o.xB,{styles:(0,o.iv)(x||(x=p()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},P,nn=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(P||(P=p()([`
        .nav-phone-icon {
          position: absolute;
          bottom: 17px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),a.screenLG,a.colorBgContainer,a.colorSplit,a.colorLink,a.colorBgContainer)})},rn,fn=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(rn||(rn=p()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary)})},yn,wn=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(yn||(yn=p()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),a.colorPrimary,a.colorError,a.colorText,a.colorTextSecondary,a.colorBgContainer,a.borderRadius,a.colorBgContainer,a.colorBgContainer)})},mn,gn="dumi-default-",Mn=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(mn||(mn=p()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),gn,a.colorText,a.colorBgContainer,a.colorBgContainer,a.colorTextPlaceholder,gn,a.colorBgElevated,a.colorBgElevated,gn,a.controlItemBgActive,a.controlItemBgHover,a.colorText,a.colorText)})},An,En=function(){return(0,e.jsx)(o.xB,{styles:(0,o.iv)(An||(An=p()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},kn=function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(I,{}),(0,e.jsx)(L,{}),(0,e.jsx)(E,{}),(0,e.jsx)(G,{}),(0,e.jsx)(bn,{}),(0,e.jsx)(b,{}),(0,e.jsx)(d,{}),(0,e.jsx)(k,{}),(0,e.jsx)(nn,{}),(0,e.jsx)(fn,{}),(0,e.jsx)(wn,{}),(0,e.jsx)(En,{}),(0,e.jsx)(on,{}),(0,e.jsx)(s,{}),(0,e.jsx)(Mn,{})]})},Fn=kn,Dn=n(97857),B=n.n(Dn),xn=n(9783),jn=n.n(xn),Tn=n(639389),Un=n.n(Tn),Nn=n(469181),Rn=n(344682),Hn=n(11739),Xn=n(709894),Vn=n(883458),ie=n(722449),le="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",Jn="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",Qn=function(t){return(0,e.jsx)(Un(),B()(B()({},t),{},{children:(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,e.jsx)("path",{d:t.direction==="ltr"?le:Jn})})}))},ee=Qn,nt=n(840070),Bn=n(373638),te=n(438199),pe,me,et=(0,u.kc)(function(a){var t=a.token,r=a.css,i=t.headerHeight,y=t.colorTextHeading,w=t.fontFamily,g=t.mobileMaxWidth;return{logo:r(pe||(pe=p()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),i,y,w,i,y,g),title:r(me||(me=p()([`
      line-height: 32px;
    `])))}}),tt=function(t){var r=t.isZhCN,i=(0,l.useLocation)(),y=i.search,w=et(),g=w.styles;return(0,e.jsx)("h1",{children:(0,e.jsxs)(l.Link,{to:Bn.J1("/",r,y),className:g.logo,children:[(0,e.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,e.jsx)("span",{className:g.title,children:"Ant Design"})]})})},ot=tt,rt=n(719632),at=n.n(rt),ge=n(24768),Yn=n(472638),he,fe,it={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},lt=(0,u.kc)(function(a){var t=a.token,r=t.antCls,i=t.iconCls,y=t.fontFamily,w=t.headerHeight,g=t.menuItemBorder,$=t.colorPrimary,N=t.colorText;return{nav:(0,u.iv)(he||(he=p()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: "";
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),y,r,r,r,40+12*2,w,w,g,N,r,i,r,$,r,r),popoverMenuNav:(0,u.iv)(fe||(fe=p()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),r,r,r,r,r)}}),st=function(a){var t,r,i=a.isZhCN,y=a.isMobile,w=a.responsive,g=a.directionText,$=a.onLangChange,N=a.onDirectionChange,X=(0,l.useLocation)(),J=X.pathname,dn=X.search,cn=(0,O.Z)(it),an=C()(cn,1),en=an[0],Cn=(0,l.useFullSidebarData)(),R=((t=Cn["/docs/blog"])===null||t===void 0||(t=t[0])===null||t===void 0?void 0:t.children)||[],vn=lt(),U=vn.styles,Sn=y?"inline":"horizontal",In=J.split("/").filter(function($n){return $n}).slice(0,-1).join("/"),On=In||"home";J.startsWith("/changelog")?On="docs/react":J.startsWith("/docs/resources")&&(On="docs/resources");var hn,zn=[{label:(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,e.jsx)(l.FormattedMessage,{id:"app.header.lang"}),onClick:$,key:"switch-lang"},{label:g,onClick:N,key:"switch-direction"}];y?hn=zn:w==="crowded"&&(hn=[{label:(0,e.jsx)(Tn.MenuOutlined,{}),key:"additional",children:[].concat(zn)}]);var Wn=[{label:(0,e.jsx)(Yn.Z,{to:Bn.J1("/docs/spec/introduce",i,dn),children:en.design}),key:"docs/spec"},{label:(0,e.jsx)(Yn.Z,{to:Bn.J1("/docs/react/introduce",i,dn),children:en.development}),key:"docs/react"},{label:(0,e.jsx)(Yn.Z,{to:Bn.J1("/components/overview/",i,dn),children:en.components}),key:"components"},R.length?{label:(0,e.jsx)(Yn.Z,{to:Bn.J1(R.sort(function($n,ce){var Gn,qn;return((Gn=$n.frontmatter)===null||Gn===void 0?void 0:Gn.date)>((qn=ce.frontmatter)===null||qn===void 0?void 0:qn.date)?-1:1})[0].link,i,dn),children:en.blog}),key:"docs/blog"}:null,{label:(0,e.jsx)(Yn.Z,{to:Bn.J1("/docs/resources",i,dn),children:en.resources}),key:"docs/resources"},i?{label:(0,e.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"}),key:"mirror",children:[{label:(0,e.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,e.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,e.jsx)("a",{href:"https://ant-design.gitee.io",target:"_blank",rel:"noreferrer",children:"Gitee \u955C\u50CF"}),icon:(0,e.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(at()((r=hn)!==null&&r!==void 0?r:[]));return(0,e.jsx)(ge.Z,{mode:Sn,selectedKeys:[On],className:U.nav,disabledOverflow:!0,items:Wn,style:{borderRight:0}})},dt=n(879587),xe,ve,be,ye,we,Kn="1.2em",ct=(0,u.kc)(function(a){var t=a.token,r=a.css,i=t.colorText,y=t.colorBorder,w=t.colorBgContainer,g=t.colorBgTextHover,$=t.borderRadius,N=t.controlHeight,X=t.motionDurationMid;return{btn:r(xe||(xe=p()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),i,y,N,N,$,X,X,g,Kn,Kn,Kn),innerDiv:r(ve||(ve=p()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Kn,Kn),labelStyle:r(be||(be=p()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Kn,i,i),label1Style:r(ye||(ye=p()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),i,w),label2Style:r(we||(we=p()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),ut=function(t){var r=t.label1,i=t.label2,y=t.tooltip1,w=t.tooltip2,g=t.value,$=t.pure,N=t.onClick,X=ct(),J=X.styles,dn=J.btn,cn=J.innerDiv,an=J.labelStyle,en=J.label1Style,Cn=J.label2Style,R=(0,e.jsx)("button",{onClick:N,className:dn,"aria-label":t["aria-label"],children:(0,e.jsxs)("div",{className:"btn-inner",children:[$&&(g===1?r:i),!$&&(0,e.jsxs)("div",{className:cn,children:[(0,e.jsx)("span",{className:f()(an,g===1?en:Cn),children:r}),(0,e.jsx)("span",{className:f()(an,g===1?Cn:en),children:i})]})]})},"lang-button");return y||w?(0,e.jsx)(dt.Z,{title:g===1?y:w,children:R}):R},se=ut,Ce,je,Se,ke,Ee,Me,Te=1120,Be=1200,pt={cn:{message:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",shortMessage:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",more:"\u524D\u5F80\u4E86\u89E3",link:"https://www.yuque.com/opensource2023"},en:{message:"",shortMessage:"",more:"",link:""}},mt=(0,u.kc)(function(a){var t=a.token,r=a.css,i="#ced4d9";return{header:r(Ce||(Ce=p()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),t.colorBgContainer,t.boxShadowTertiary,t.mobileMaxWidth,i,i,i),menuRow:r(je||(je=p()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:r(Se||(Se=p()([`
      width: 16px;
    `]))),popoverMenu:jn()({width:300},"".concat(t.antCls,"-popover-inner-content"),{padding:0}),banner:r(ke||(ke=p()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:r(Ee||(Ee=p()([`
      margin-left: 10px;

      @media only screen and (max-width: `,`px) {
        margin-left: 0;
      }
    `])),t.mobileMaxWidth),icon:r(Me||(Me=p()([`
      margin-right: 10px;
      width: 22px;
      height: 22px;
    `])))}}),gt=function(){var t=(0,O.Z)(pt),r=C()(t,2),i=r[0],y=r[1],w=(0,l.useSiteData)(),g=w.pkg,$=(0,Bn.Is)(),N=(0,c.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),X=C()(N,2),J=X[0],dn=X[1],cn=(0,c.useContext)(te.Z),an=cn.direction,en=cn.isMobile,Cn=cn.bannerVisible,R=cn.updateSiteConfig,vn=(0,c.useRef)(null),U=(0,l.useLocation)(),Sn=U.pathname,In=U.search,On=mt(),hn=On.styles,zn=(0,c.useCallback)(function(){dn(function(tn){return B()(B()({},tn),{},{menuVisible:!1})})},[]),Wn=(0,c.useCallback)(function(){dn(function(tn){return B()(B()({},tn),{},{windowWidth:window.innerWidth})})},[]),$n=(0,c.useCallback)(function(){dn(function(tn){return B()(B()({},tn),{},{menuVisible:!0})})},[]),ce=(0,c.useCallback)(function(tn){dn(function(Ln){return B()(B()({},Ln),{},{menuVisible:tn})})},[]),Gn=function(){R({direction:an!=="rtl"?"rtl":"ltr"})},qn=function(){R({bannerVisible:!1}),Bn.Fy()&&localStorage.setItem(nt.ANT_DESIGN_NOT_SHOW_BANNER,z()().toISOString())};(0,c.useEffect)(function(){zn()},[U]),(0,c.useEffect)(function(){return Wn(),window.addEventListener("resize",Wn),function(){window.removeEventListener("resize",Wn),vn.current&&clearTimeout(vn.current)}},[]);var so=(0,c.useCallback)(function(tn){var Ln=window.location.href,ae=window.location.pathname;if(/overview/.test(ae)&&/0?[1-39][0-3]?x/.test(tn)){window.location.href=Ln.replace(window.location.origin,tn).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(tn)?"":"/react","/introduce")).replace(/\/$/,"");return}var ne=new URL(Ln.replace(window.location.origin,tn));ne.host.includes("antgroup")?(ne.pathname="".concat(ne.pathname.replace(/\/$/,""),"/"),window.location.href=ne.toString()):window.location.href=ne.href.replace(/\/$/,"")},[]),Ke=(0,c.useCallback)(function(){var tn="".concat(window.location.protocol,"//"),Ln=window.location.href.slice(tn.length);Bn.Fy()&&localStorage.setItem("locale",Bn.KE(Sn)?"en-US":"zh-CN"),window.location.href=tn+Ln.replace(window.location.pathname,Bn.J1(Sn,!Bn.KE(Sn),In).pathname)},[U]),co=(0,c.useMemo)(function(){return an!=="rtl"?"RTL":"LTR"},[an]),uo=(0,c.useMemo)(function(){return an==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[an]),po=J.menuVisible,re=J.windowWidth,Ge=J.searching,Xe=B()(jn()({},g.version,g.version),$==null?void 0:$.docVersions),mo=Object.keys(Xe).map(function(tn){return{value:Xe[tn],label:tn}}),Je=["","index","index-cn"].includes(Sn),Qe=y==="cn",go=an==="rtl",ue=null;re<Te?ue="crowded":re<Be&&(ue="narrow");var ho=f()(hn.header,"clearfix",{"home-header":Je}),Ye={isZhCN:Qe,isRTL:go},qe=(0,e.jsx)(st,B()(B()({},Ye),{},{responsive:ue,isMobile:en,directionText:co,onLangChange:Ke,onDirectionChange:Gn}),"nav"),_n=[qe,(0,e.jsx)(Nn.Z,{className:"version",size:"small",defaultValue:g.version,onChange:so,dropdownStyle:uo,popupMatchSelectWidth:!1,getPopupContainer:function(Ln){return Ln.parentNode},options:mo},"version"),(0,e.jsx)(se,{onClick:Ke,value:Bn.KE(Sn)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,e.jsx)(se,{onClick:Gn,value:an==="rtl"?2:1,label1:(0,e.jsx)(ee,{className:hn.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,e.jsx)(ee,{className:hn.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,e.jsx)(se,{value:1,label1:(0,e.jsx)(Tn.GithubOutlined,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];re<Te?_n=Ge?[]:[qe]:re<Be&&(_n=Ge?[]:_n);var _e=Je?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,e.jsxs)("header",{className:ho,children:[en&&(0,e.jsx)(Rn.Z,{overlayClassName:hn.popoverMenu,placement:"bottomRight",content:_n,trigger:"click",open:po,arrow:{arrowPointAtCenter:!0},onOpenChange:ce,children:(0,e.jsx)(Tn.MenuOutlined,{className:"nav-phone-icon",onClick:$n})}),Qe&&Cn&&(0,e.jsx)(T.ZP,{theme:{token:{colorInfoBg:"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:"#000"}},children:(0,e.jsx)(Hn.Z,{className:hn.banner,message:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{children:en?i.shortMessage:i.message}),(0,e.jsx)("a",{className:hn.link,href:i.link,target:"_blank",rel:"noreferrer",onClick:function(){var Ln,ae;(Ln=(ae=window).gtag)===null||Ln===void 0||Ln.call(ae,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:i.link})},children:i.more})]}),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:qn})}),(0,e.jsxs)(Xn.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,e.jsx)(Vn.Z,B()(B()({},_e[0]),{},{children:(0,e.jsx)(ot,B()(B()({},Ye),{},{location:U}))})),(0,e.jsxs)(Vn.Z,B()(B()({},_e[1]),{},{className:hn.menuRow,children:[(0,e.jsx)("div",{className:"nav-search-wrapper",children:(0,e.jsx)(ie.ZP,{})}),!en&&_n]}))]})]})},ht=gt,fo=n(945462),ft=n(513769),xt=n.n(ft),Ae=n(777502),vt=["children"],bt=function(t){var r=t.children,i=xt()(t,vt);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(l.Helmet,{children:[(0,e.jsx)("title",{children:i.title}),(0,e.jsx)("meta",{property:"og:title",content:i.title}),i.desc&&(0,e.jsx)("meta",{name:"description",content:i.desc})]}),(0,e.jsx)("div",{style:{minHeight:"100vh"},children:r}),(0,e.jsx)(Ae.default,{})]})},yt=bt,wt=n(86198),Le=n(185209),Ct=function(){var t=(0,l.useRouteMeta)(),r=(0,c.useMemo)(function(){var g;if(!t.frontmatter.subtitle&&!t.frontmatter.title)g="404 Not Found - Ant Design";else{var $;g="".concat(t.frontmatter.subtitle||""," ").concat((($=t.frontmatter)===null||$===void 0?void 0:$.title)||""," - Ant Design")}var N=t.frontmatter.description||"";return[g,N]},[t]),i=C()(r,2),y=i[0],w=i[1];return(0,e.jsxs)(l.Helmet,{children:[(0,e.jsx)("title",{children:y}),(0,e.jsx)("meta",{property:"og:title",content:y}),w&&(0,e.jsx)("meta",{name:"description",content:w})]})},Pe=Ct,jt=n(148050),St=n(823493),kt=n.n(St),Et=n(468990),Mt=n(658192),De,ze,Fe,Oe=["scroll","resize"],Tt=(0,u.kc)(function(a){var t=a.token,r=a.css,i=t.boxShadowSecondary,y=t.antCls;return{affixTabs:r(De||(De=p()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 11;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),i,y,y,y),affixTabsFixed:r(ze||(ze=p()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:r(Fe||(Fe=p()([`
      text-transform: capitalize;
    `])))}}),Ie=32,Bt=function(){var t=c.useRef(null),r=c.useRef([]),i=c.useState(!1),y=C()(i,2),w=y[0],g=y[1],$=c.useState(void 0),N=C()($,2),X=N[0],J=N[1],dn=Tt(),cn=dn.styles,an=cn.affixTabs,en=cn.affixTabsFixed,Cn=cn.span;function R(U){var Sn=document.getElementById(U);if(Sn){var In=Sn.offsetTop-t.current.offsetHeight-Ie;(0,Mt.Z)(In)}}c.useEffect(function(){r.current=Array.from(document.querySelectorAll("h2[id]")).map(function(U){var Sn=U.id;return Sn}),g(!0)},[]),c.useEffect(function(){var U=decodeURIComponent((location.hash||"").slice(1));U&&R(U)},[w]);var vn=c.useMemo(function(){function U(){for(var Sn=window,In=Sn.scrollY,On=t.current.offsetHeight,hn=r.current.length-1;hn>=0;hn-=1){var zn=r.current[hn],Wn=document.getElementById(zn),$n=Wn.offsetTop-On-Ie;if($n<=In){J(zn);return}}J(void 0)}return kt()(U)},[]);return c.useEffect(function(){return Oe.forEach(function(U){return window.addEventListener(U,vn)}),vn(),function(){Oe.forEach(function(U){return window.removeEventListener(U,vn)})}},[]),(0,e.jsx)("div",{className:f()(an,X&&en),ref:t,children:(0,e.jsx)(Et.Z,{activeKey:X,onChange:R,items:r.current.map(function(U){return{key:U,label:(0,e.jsx)("span",{className:Cn,children:U.replace(/-/g," ")})}})})})},At=Bt,Ne,Re,He,Ze=40,oe=1208,de=24,Lt=(0,u.kc)(function(a){var t=a.token,r=a.css,i=t.antCls;return{resourcePage:r(Ne||(Ne=p()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),oe),resourceContent:r(Re||(Re=p()([`
      padding: 0 `,`px;
      max-width: `,`px;
      margin: 0 auto;
      box-sizing: content-box;
      min-height: 100vh;

      > .markdown {
        > p {
          margin-bottom: 56px;
        }

        h2 {
          margin-top: 124px;
          color: #314659;
          font-weight: lighter;
          font-size: 30px;
          line-height: 38px;

          &:first-child {
            margin-top: 88px;
          }
        }

        h3 {
          margin-top: 56px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
        }

        p {
          color: #697b8c;
        }
      }

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 `,`px;
          }

          `,`-col {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      }
    `])),Ze,oe,de,i),banner:r(He||(He=p()([`
      padding: 0 `,`px;
      overflow: hidden;
      background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: `,`px;
        margin: 56px auto 16px;
      }

      section {
        max-width: `,`px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -`,`px;
          padding: 0 `,`px;
        }
      }
    `])),Ze,oe,oe,de,de)}}),Pt=function(t){var r,i=t.children,y=Lt(),w=y.styles,g=(0,l.useRouteMeta)();return(0,e.jsx)(T.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:(0,e.jsxs)(wt.Z,{children:[(0,e.jsx)(Pe,{}),(0,e.jsxs)("div",{id:"resources-page",className:w.resourcePage,children:[(0,e.jsx)(At,{}),(0,e.jsxs)("div",{className:w.banner,children:[(0,e.jsxs)(Le.Z.Title,{style:{fontSize:30},children:[(r=g.frontmatter)===null||r===void 0?void 0:r.title,(0,e.jsx)(jt.default,{title:(0,e.jsx)(l.FormattedMessage,{id:"app.content.edit-page"}),filename:g.frontmatter.filename})]}),(0,e.jsx)("section",{children:g.frontmatter.description})]}),(0,e.jsx)("div",{className:w.resourceContent,children:i}),(0,e.jsx)(Ae.default,{})]})]})})},Dt=Pt,zt=n(106750),Ft=n(217187),Ot=n(524229),It=n(548657),Nt=n(442708),Rt=function(t){var r=t.children,i=t.fallback,y=i===void 0?(0,e.jsx)(It.Z.Input,{active:!0,size:"small"}):i,w=t.delay,g=w===void 0?200:w;return(0,e.jsx)(Nt.df,{triggerOnce:!0,delay:g,children:function(N){var X=N.inView,J=N.ref;return(0,e.jsx)("div",{ref:J,children:(0,e.jsx)(c.Suspense,{fallback:y,children:X?r:(0,e.jsx)("span",{})})})}})},Zn=Rt,We,Ht=c.lazy(function(){return Promise.all([n.e(2516),n.e(7721)]).then(n.bind(n,617721))}),Zt=c.lazy(function(){return n.e(9148).then(n.bind(n,349148))}),Wt=c.lazy(function(){return n.e(8301).then(n.bind(n,368301))}),$t=c.lazy(function(){return n.e(8598).then(n.bind(n,458598))}),Ut=c.lazy(function(){return Promise.resolve().then(n.bind(n,777502))}),Vt=c.lazy(function(){return n.e(6720).then(n.bind(n,366720))}),Kt=c.lazy(function(){return Promise.all([n.e(9285),n.e(5926)]).then(n.bind(n,615926))}),Gt=c.lazy(function(){return Promise.resolve().then(n.bind(n,148050))}),Xt=(0,u.kc)(function(a){var t=a.token,r=a.css;return{articleWrapper:r(We||(We=p()([`
    padding: 0 170px 32px 64px;
    &.rtl {
      padding: 0 64px 144px 170px;
    }
    @media only screen and (max-width: `,`px) {
      &,
      &.rtl {
        padding: 0 48px;
      }
    }
  `])),t.screenLG)}}),Jt=function(t){var r,i,y,w=t.children,g=(0,l.useRouteMeta)(),$=(0,Y.Z)(),N=$.pathname,X=$.hash,J=(0,c.useContext)(te.Z),dn=J.direction,cn=Xt(),an=cn.styles,en=(0,Ft.Z)(!1),Cn=C()(en,2),R=Cn[0],vn=Cn[1],U=(0,c.useMemo)(function(){var hn;return((hn=g.toc)===null||hn===void 0?void 0:hn.filter(function(zn){return zn._debug_demo}).map(function(zn){return zn.id}))||[]},[g]),Sn=U.includes(X.slice(1));(0,c.useLayoutEffect)(function(){vn(Sn)},[]);var In=(0,c.useMemo)(function(){return{showDebug:R,setShowDebug:vn}},[R,U]),On=dn==="rtl";return(0,e.jsx)(Ot.Z.Provider,{value:In,children:(0,e.jsxs)(Vn.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[(0,e.jsx)(Zn,{fallback:null,children:(0,e.jsx)(Wt,{showDebug:R,debugDemos:U})}),(0,e.jsxs)("article",{className:f()(an.articleWrapper,{rtl:On}),children:[(r=g.frontmatter)!==null&&r!==void 0&&r.title?(0,e.jsxs)(Le.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,e.jsxs)(zt.Z,{gap:"small",children:[(0,e.jsx)("div",{children:(i=g.frontmatter)===null||i===void 0?void 0:i.title}),(0,e.jsx)("div",{children:(y=g.frontmatter)===null||y===void 0?void 0:y.subtitle}),!N.startsWith("/components/overview")&&(0,e.jsx)(Zn,{fallback:null,children:(0,e.jsx)(Gt,{title:(0,e.jsx)(l.FormattedMessage,{id:"app.content.edit-page"}),filename:g.frontmatter.filename})})]}),N.startsWith("/components/")&&(0,e.jsx)(Zn,{fallback:null,children:(0,e.jsx)(Kt,{pathname:N})})]}):null,(0,e.jsx)(Zn,{fallback:null,children:(0,e.jsx)($t,{})}),!g.frontmatter.__autoDescription&&g.frontmatter.description,(0,e.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:w}),(0,e.jsx)(Zn,{children:(0,e.jsx)(Zt,{zhihuLink:g.frontmatter.zhihu_url,yuqueLink:g.frontmatter.yuque_url,juejinLink:g.frontmatter.juejin_url})}),(0,e.jsx)(Zn,{children:(0,e.jsx)(Ht,{filename:g.frontmatter.filename})})]}),(0,e.jsx)(Zn,{fallback:null,children:(0,e.jsx)(Vt,{rtl:On})}),(0,e.jsx)(Ut,{})]})})},Qt=Jt,Yt=n(650010),qt=n(361446),$e,Ue,_t=(0,u.kc)(function(a){var t=a.token,r=a.css,i=t.antCls,y=t.fontFamily,w=t.colorSplit;return{asideContainer:r($e||($e=p()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
        > `,`-menu-submenu
        > `,`-menu-submenu-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item,
        &`,`-menu-inline
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),y,i,i,i,i,i,i,w,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),mainMenu:r(Ue||(Ue=p()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),t.headerHeight+t.contentMarginTop,t.headerHeight+t.contentMarginTop)}}),no=function(){var t=(0,l.useSidebarData)(),r=(0,c.useContext)(te.Z),i=r.isMobile,y=r.theme,w=_t(),g=w.styles,$=(0,qt.Z)(),N=C()($,2),X=N[0],J=N[1],dn=y.includes("dark"),cn=(0,u.Fg)(),an=cn.colorBgContainer,en=(0,e.jsx)(T.ZP,{theme:{components:{Menu:{itemBg:an,darkItemBg:an}}},children:(0,e.jsx)(ge.Z,{items:X,inlineIndent:30,className:g.asideContainer,mode:"inline",theme:dn?"dark":"light",selectedKeys:[J],defaultOpenKeys:t==null?void 0:t.map(function(Cn){var R=Cn.title;return R}).filter(function(Cn){return Cn})})});return i?(0,e.jsx)(Yt.Z,{children:en},"Mobile-menu"):(0,e.jsx)(Vn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:g.mainMenu,children:(0,e.jsx)("section",{className:"main-menu-inner",children:en})})},eo=no,Ve,to=(0,u.kc)(function(a){var t=a.css,r=a.token;return{main:t(Ve||(Ve=p()([`
    display: flex;
    margin-top: `,`px;
  `])),r.contentMarginTop)}}),oo=function(t){var r=t.children,i=to(),y=i.styles;return(0,e.jsxs)("main",{className:y.main,children:[(0,e.jsx)(Pe,{}),(0,e.jsx)(eo,{}),(0,e.jsx)(Qt,{children:r})]})},ro=oo,ao={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},io=function(){var t=(0,l.useOutlet)(),r=(0,Y.Z)(),i=r.pathname,y=r.search,w=r.hash,g=(0,O.Z)(ao),$=C()(g,2),N=$[0],X=$[1],J=(0,c.useRef)(null),dn=(0,c.useContext)(te.Z),cn=dn.direction,an=(0,l.useSiteData)(),en=an.loading;(0,c.useLayoutEffect)(function(){X==="cn"?z().locale("zh-cn"):z().locale("en")},[]),(0,c.useEffect)(function(){var R=document.getElementById("nprogress-style");R&&(J.current=setTimeout(function(){var vn;(vn=R.parentNode)===null||vn===void 0||vn.removeChild(R)},0))},[]),(0,c.useEffect)(function(){var R,vn=w.replace("#","");vn&&((R=document.getElementById(decodeURIComponent(vn)))===null||R===void 0||R.scrollIntoView())},[en,w]),(0,c.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",i+y)},[r]);var Cn=(0,c.useMemo)(function(){return["","/"].some(function(R){return R===i})||["/index"].some(function(R){return i.startsWith(R)})?(0,e.jsx)(yt,{title:N.title,desc:N.description,children:t}):i.startsWith("/docs/resource")?(0,e.jsx)(Dt,{children:t}):i.startsWith("/theme-editor")?t:(0,e.jsx)(ro,{children:t})},[i,t]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(l.Helmet,{encodeSpecialCharacters:!1,children:[(0,e.jsx)("html",{lang:X==="cn"?"zh-CN":X,"data-direction":cn,className:f()({rtl:cn==="rtl"})}),(0,e.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,e.jsx)("meta",{property:"og:description",content:N.description}),(0,e.jsx)("meta",{property:"og:type",content:"website"}),(0,e.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,e.jsxs)(T.ZP,{direction:cn,locale:X==="cn"?M.default:void 0,children:[(0,e.jsx)(Fn,{}),(0,e.jsx)(ht,{}),Cn]})]})},lo=io},840070:function(Pn,H,n){n.r(H),n.d(H,{ANT_DESIGN_NOT_SHOW_BANNER:function(){return L},default:function(){return Z}});var Q=n(97857),C=n.n(Q),ln=n(805574),f=n.n(ln),j=n(667294),z=n(900210),un=n(368655),l=n(359020),c=n(965516),M=n(471232),T=n(385956),O=n(49313),Y=n(217187),q=n(438746),p=n(513769),o=n.n(p),u=n(75529),e=n(647759),v=n(438199),m=n(785893),S=["children","theme"],on=64,_=38,s=function(A){var G=A.children,pn=A.theme,sn=o()(A,S),bn=(0,j.useContext)(u.ZP.ConfigContext),W=bn.getPrefixCls,b=bn.iconPrefixCls,h=W(),d=c.Z.useToken(),x=d.token,k=(0,j.useContext)(v.Z),P=k.bannerVisible;return j.useEffect(function(){u.ZP.config({theme:pn})},[pn]),(0,m.jsx)(e.f6,C()(C()({},sn),{},{theme:pn,customToken:{headerHeight:on,bannerHeight:_,menuItemBorder:2,mobileMaxWidth:767.99,siteMarkdownCodeBg:x.colorFillTertiary,antCls:".".concat(h),iconCls:".".concat(b),marginFarXS:x.marginXXL/6*7,marginFarSM:x.marginXXL/3*5,marginFar:x.marginXXL*2,codeFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",contentMarginTop:40,anchorTop:on+x.margin+(P?_:0)},children:G}))},D=s,I=j.lazy(function(){return Promise.all([n.e(7898),n.e(4137),n.e(263)]).then(n.bind(n,531434))}),F=768,L="ANT_DESIGN_NOT_SHOW_BANNER",K=function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return A.map(function(G){return G==="dark"?c.Z.darkAlgorithm:G==="compact"?c.Z.compactAlgorithm:null}).filter(function(G){return G})},V=function(){var A=(0,T.useOutlet)(),G=(0,q.Z)(),pn=G.pathname,sn=(0,T.useSearchParams)(),bn=f()(sn,2),W=bn[0],b=bn[1],h=(0,Y.Z)({isMobile:!1,direction:"ltr",theme:[],bannerVisible:!1}),d=f()(h,2),x=d[0],k=x.theme,P=k===void 0?[]:k,nn=x.direction,rn=x.isMobile,fn=x.bannerVisible,yn=fn===void 0?!1:fn,wn=d[1],mn=(0,j.useCallback)(function(B){wn(function(Tn){return C()(C()({},Tn),B)});var xn=W.toString(),jn=W;Object.entries(B).forEach(function(Tn){var Un=f()(Tn,2),Nn=Un[0],Rn=Un[1];if(Nn==="direction"&&(Rn==="rtl"?jn.set("direction","rtl"):jn.delete("direction")),Nn==="theme"){var Hn;jn=(0,T.createSearchParams)(C()(C()({},jn),{},{theme:Rn.filter(function(Xn){return Xn!=="light"})})),(Hn=document.querySelector("html"))===null||Hn===void 0||Hn.setAttribute("data-prefers-color",Rn.includes("dark")?"dark":"light")}}),jn.toString()!==xn&&b(jn)},[W,b]),gn=function(){mn({isMobile:window.innerWidth<F})};(0,j.useEffect)(function(){var B=W.getAll("theme"),xn=W.get("direction");return wn({theme:B,direction:xn==="rtl"?"rtl":"ltr"}),gn(),window.addEventListener("resize",gn),function(){window.removeEventListener("resize",gn)}},[]);var Mn=(0,j.useMemo)(function(){return{direction:nn,updateSiteConfig:mn,theme:P,isMobile:rn,bannerVisible:yn}},[rn,nn,mn,P,yn]),An=j.useState(function(){return(0,z.createCache)()}),En=f()(An,1),kn=En[0];(0,T.useServerInsertedHTML)(function(){var B=(0,z.extractStyle)(kn,{plain:!0,types:"style"});return(0,m.jsx)("style",{"data-type":"antd-cssinjs",dangerouslySetInnerHTML:{__html:B}})}),(0,T.useServerInsertedHTML)(function(){var B=(0,z.extractStyle)(kn,{plain:!0,types:["cssVar","token"]});return(0,m.jsx)("style",{"data-type":"antd-css-var","data-rc-order":"prepend","data-rc-priority":"-9999",dangerouslySetInnerHTML:{__html:B}})}),(0,T.useServerInsertedHTML)(function(){return(0,m.jsx)("style",{"data-sandpack":"true",id:"sandpack",dangerouslySetInnerHTML:{__html:(0,l.$Z)()}})});var Fn=pn.startsWith("/~demos"),Dn=A;return Fn||(Dn=(0,m.jsxs)(M.Z,{children:[A,(0,m.jsx)(j.Suspense,{children:(0,m.jsx)(I,{value:P,onChange:function(xn){return mn({theme:xn})}})})]})),(0,m.jsx)(O.f.Provider,{value:P.includes("dark"),children:(0,m.jsx)(z.StyleProvider,{cache:kn,linters:[z.legacyNotSelectorLinter,z.parentSelectorLinter,z.NaNLinter],children:(0,m.jsx)(v.Z.Provider,{value:Mn,children:(0,m.jsx)(D,{theme:{algorithm:K(P),token:{motion:!P.includes("motion-off")},cssVar:!0,hashed:!1},children:(0,m.jsx)(un.HappyProvider,{disabled:!P.includes("happy-work"),children:Dn})})})})})},Z=V},777502:function(Pn,H,n){n.r(H),n.d(H,{default:function(){return D}});var Q=n(805574),C=n.n(Q),ln=n(168400),f=n.n(ln),j=n(639389),z=n(510274),un=n(647759),l=n(385956),c=n(391298),M=n(667294),T=n(630770),O=n(302559),Y=n(438746),q=n(438199),p=n(693399),o=n(785893),u="ant-where-checker",e={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function v(){var I=(0,O.Z)(e),F=C()(I,1),L=F[0],K=M.useState(!0),V=C()(K,2),Z=V[0],E=V[1];return M.useEffect(function(){var A=document.createElement("p");A.className=u,A.style.position="fixed",A.style.pointerEvents="none",A.style.visibility="hidden",A.style.width="0",document.body.appendChild(A),(0,p.updateCSS)(`
:where(.`.concat(u,`) {
  content: "__CHECK__";
}
    `),u);var G=getComputedStyle(A),pn=G.content;E(String(pn).includes("CHECK")),document.body.removeChild(A),(0,p.removeCSS)(u)},[]),Z?null:(0,o.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,o.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[L.whereNotSupport," ",(0,o.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:L.whereDocUrl,children:L.whereDocTitle})]})})}var m,S,on={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},_=function(){var F=(0,M.useContext)(q.Z),L=F.isMobile;return(0,un.kc)(function(K){var V=K.token,Z=K.css,E=new z.C((0,T.Z)("#f0f3fa","#fff")).onBackground(V.colorBgContainer).toHexString();return{holder:Z(m||(m=f()([`
      background: `,`;
    `])),E),footer:Z(S||(S=f()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),E,V.colorTextSecondary,V.colorText,L?60:0,L?20:0,V.marginXXL,V.fontSize)}})()},s=function(){var F=(0,Y.Z)(),L=(0,O.Z)(on),K=C()(L,2),V=K[0],Z=K[1],E=_(),A=E.styles,G=F.getLink,pn=M.useMemo(function(){var sn=Z==="cn",bn={title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:sn?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:sn?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:sn?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},W={title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.community"}),items:[{icon:(0,o.jsx)(j.AntDesignOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,o.jsx)(j.MediumOutlined,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,o.jsx)(j.TwitterOutlined,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,o.jsx)(j.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,o.jsx)(j.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};sn&&W.items.push({icon:(0,o.jsx)(j.UsergroupAddOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.work_with_us"}),url:G("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:l.Link});var b={title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.help"}),items:[{icon:(0,o.jsx)(j.GithubOutlined,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,o.jsx)(j.HistoryOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.change-log"}),url:G("/changelog"),LinkComponent:l.Link},{icon:(0,o.jsx)(j.QuestionCircleOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.faq"}),url:G("/docs/react/faq"),LinkComponent:l.Link},{icon:(0,o.jsx)(j.BugOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,o.jsx)(j.IssuesCloseOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,o.jsx)(j.MessageOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,o.jsx)(j.QuestionCircleOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,o.jsx)(j.QuestionCircleOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},h={icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.more-product"}),items:[{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_j9rjmc/afts/img/A*3ittT5OEo2gAAAAAAAAAAAAADvGmAQ/original",width:16,height:16,alt:"Galacean"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.galacean"}),description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.galacean.slogan"}),url:"https://galacean.antgroup.com/",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,o.jsx)(j.BgColorsOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.theme"}),url:G("/theme-editor"),LinkComponent:l.Link}]};return[bn,W,b,h]},[Z,F.search]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Z,{columns:pn,className:A.footer,bottom:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,o.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,o.jsx)("div",{children:V.owner})]})}),(0,o.jsx)(v,{})]})},D=s},373638:function(Pn,H,n){n.d(H,{J1:function(){return M},Is:function(){return p},Fy:function(){return O},KE:function(){return c},qE:function(){return T}});var Q=n(661227),C=n(805574),ln=n(97857),f=n(385564),j=n(842348),z=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),un={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":z?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function l(o,u,e,v){var m=o.map(function(s){return s.meta}).filter(function(s){return!s.skip}),S=[],on=function(D,I){return(D.order||0)-(I.order||0)};m.sort(on).forEach(function(s){if(s.category&&(s.category=s.category[u]||s.category),s.type&&(s.type=s.type[u]||s.type),s!=null&&s.title&&(s.title=s.title[u]||s.title),!s.category){S.push(s);return}if(s.category==="Components"&&s.type){var D=S.find(function(L){return(L==null?void 0:L.title)===s.type});D||(D={type:"type",title:s.type,children:[],order:v[s.type]},S.push(D)),D.children=D.children||[],D.children.push(s);return}var I=S.find(function(L){return(L==null?void 0:L.title)===s.category});if(I||(I={type:"category",title:s.category,children:[],order:e[s.category]},S.push(I)),I.children=I.children||[],s.type){var F=I.children.filter(function(L){return(L==null?void 0:L.title)===s.type})[0];F||(F={type:"type",title:s.type,children:[],order:v[s.type]},I.children.push(F)),F.children=F.children||[],F.children.push(s)}else I.children.push(s)});function _(s){return s.sort(on).map(function(D){return D.children?_objectSpread(_objectSpread({},D),{},{children:_(D.children)}):D})}return _(S)}function c(o){return/-cn\/?$/.test(o)}function M(o,u,e,v){var m=o.startsWith("/")?o:"/".concat(o),S;if(u?m==="/"?S="/index-cn":m.endsWith("/")?S=m.replace(/\/$/,"-cn/"):(S="".concat(m,"-cn"),S=S.replace(/(-cn)+/,"-cn")):S=/\/?index-cn/.test(m)?"/":m.replace("-cn",""),v){var on=v[u?"zhCN":"enUS"];S+="#".concat(on)}return{pathname:S,search:e}}function T(o){var u="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",e=new Image,v,m=function(on){v||(v=!0,e.src="",o(on))};return e.onload=function(){return m("responded")},e.onerror=function(){return m("error")},e.src=u,setTimeout(function(){return m("timeout")},1500)}function O(){var o="test",u=window.localStorage;try{return u.setItem(o,"1"),u.removeItem(o),!0}catch(e){return!1}}function Y(o){return new Promise(function(u,e){var v=document.createElement("script");v.type="text/javascript",v.src=o,v.onload=u,v.onerror=e,document.head.appendChild(v)})}function q(o){var u=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(o))return"";var e=flattenDeep(o.filter(function(v){if(Array.isArray(v)){var m=_slicedToArray(v,1),S=m[0];return S==="p"}return!1}).map(function(v){var m=flatten(v),S=_toArray(m),on=S[0],_=S.slice(1),s=_.filter(function(D){return typeof D=="string"&&!u.includes(D)}).join("");return[on,s]})).find(function(v){return v&&typeof v=="string"&&!u.includes(v)});return e}var p=function(){return un}},647727:function(Pn,H,n){n.d(H,{Z:function(){return Q.Z}});var Q=n(843534)},471232:function(Pn,H,n){n.d(H,{Z:function(){return on}});var Q=n(97857),C=n.n(Q),ln=n(805574),f=n.n(ln),j=n(667294),z=n(693967),un=n.n(z),l=n(73287),c=n(215570),M=n(269924),T=n(890887),O=n(414466),Y=n(9783),q=n.n(Y),p=n(286665),o=function(s){var D=s.componentCls,I=s.colorText,F=s.fontSize,L=s.lineHeight,K=s.fontFamily;return q()({},D,{color:I,fontSize:F,lineHeight:L,fontFamily:K})},u=function(){return{}},e=(0,p.I$)("App",o,u),v=n(785893),m=function(){return j.useContext(O.Z)},S=function(s){var D=s.prefixCls,I=s.children,F=s.className,L=s.rootClassName,K=s.message,V=s.notification,Z=s.style,E=s.component,A=E===void 0?"div":E,G=(0,j.useContext)(l.E_),pn=G.getPrefixCls,sn=pn("app",D),bn=e(sn),W=f()(bn,3),b=W[0],h=W[1],d=W[2],x=un()(h,sn,F,L,d),k=(0,j.useContext)(O.J),P=j.useMemo(function(){return{message:C()(C()({},k.message),K),notification:C()(C()({},k.notification),V)}},[K,V,k.message,k.notification]),nn=(0,c.Z)(P.message),rn=f()(nn,2),fn=rn[0],yn=rn[1],wn=(0,T.Z)(P.notification),mn=f()(wn,2),gn=mn[0],Mn=mn[1],An=(0,M.Z)(),En=f()(An,2),kn=En[0],Fn=En[1],Dn=j.useMemo(function(){return{message:fn,notification:gn,modal:kn}},[fn,gn,kn]),B=A===!1?j.Fragment:A,xn={className:x,style:Z};return b((0,v.jsx)(O.Z.Provider,{value:Dn,children:(0,v.jsx)(O.J.Provider,{value:P,children:(0,v.jsxs)(B,C()(C()({},A===!1?void 0:xn),{},{children:[Fn,yn,Mn,I]}))})}))};S.useApp=m;var on=S},86198:function(Pn,H,n){n.d(H,{Z:function(){return b}});var Q=n(719632),C=n.n(Q),ln=n(9783),f=n.n(ln),j=n(805574),z=n.n(j),un=n(513769),l=n.n(un),c=n(97857),M=n.n(c),T=n(667294),O=n(693967),Y=n.n(O),q=n(518475),p=n(73287),o=n(121790),u=n(45598),e=n(296708);function v(h,d,x){if(typeof x=="boolean")return x;if(h.length)return!0;var k=(0,u.default)(d);return k.some(function(P){return P.type===e.Z})}var m=n(900210),S=n(286665),on=function(d){var x=d.componentCls,k=d.bodyBg,P=d.lightSiderBg,nn=d.lightTriggerBg,rn=d.lightTriggerColor;return f()({},"".concat(x,"-sider-light"),f()(f()({background:P},"".concat(x,"-sider-trigger"),{color:rn,background:nn}),"".concat(x,"-sider-zero-width-trigger"),{color:rn,background:nn,border:"1px solid ".concat(k),borderInlineStart:0}))},_=on,s=function(d){var x=d.antCls,k=d.componentCls,P=d.colorText,nn=d.triggerColor,rn=d.footerBg,fn=d.triggerBg,yn=d.headerHeight,wn=d.headerPadding,mn=d.headerColor,gn=d.footerPadding,Mn=d.triggerHeight,An=d.zeroTriggerHeight,En=d.zeroTriggerWidth,kn=d.motionDurationMid,Fn=d.motionDurationSlow,Dn=d.fontSize,B=d.borderRadius,xn=d.bodyBg,jn=d.headerBg,Tn=d.siderBg;return f()(f()(f()(f()({},k,M()(M()(f()(f()(f()({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:xn,"&, *":{boxSizing:"border-box"}},"&".concat(k,"-has-sider"),f()({flexDirection:"row"},"> ".concat(k,", > ").concat(k,"-content"),{width:0})),"".concat(k,"-header, &").concat(k,"-footer"),{flex:"0 0 auto"}),"".concat(k,"-sider"),{position:"relative",minWidth:0,background:Tn,transition:"all ".concat(kn,", background 0s"),"&-children":f()({height:"100%",marginTop:-.1,paddingTop:.1},"".concat(x,"-menu").concat(x,"-menu-inline-collapsed"),{width:"auto"}),"&-has-trigger":{paddingBottom:Mn},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:Mn,color:nn,lineHeight:(0,m.unit)(Mn),textAlign:"center",background:fn,cursor:"pointer",transition:"all ".concat(kn)},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:yn,insetInlineEnd:d.calc(En).mul(-1).equal(),zIndex:1,width:En,height:An,color:nn,fontSize:d.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:Tn,borderStartStartRadius:0,borderStartEndRadius:B,borderEndEndRadius:B,borderEndStartRadius:0,cursor:"pointer",transition:"background ".concat(Fn," ease"),"&::after":{position:"absolute",inset:0,background:"transparent",transition:"all ".concat(Fn),content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:d.calc(En).mul(-1).equal(),borderStartStartRadius:B,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:B}}}}),_(d)),{},{"&-rtl":{direction:"rtl"}})),"".concat(k,"-header"),f()({height:yn,padding:wn,color:mn,lineHeight:(0,m.unit)(yn),background:jn},"".concat(x,"-menu"),{lineHeight:"inherit"})),"".concat(k,"-footer"),{padding:gn,color:P,fontSize:Dn,background:rn}),"".concat(k,"-content"),{flex:"auto",minHeight:0})},D=function(d){var x=d.colorBgLayout,k=d.controlHeight,P=d.controlHeightLG,nn=d.colorText,rn=d.controlHeightSM,fn=d.marginXXS,yn=d.colorTextLightSolid,wn=d.colorBgContainer,mn=P*1.25;return{colorBgHeader:"#001529",colorBgBody:x,colorBgTrigger:"#002140",bodyBg:x,headerBg:"#001529",headerHeight:k*2,headerPadding:"0 ".concat(mn,"px"),headerColor:nn,footerPadding:"".concat(rn,"px ").concat(mn,"px"),footerBg:x,siderBg:"#001529",triggerHeight:P+fn*2,triggerBg:"#002140",triggerColor:yn,zeroTriggerWidth:P,zeroTriggerHeight:P,lightSiderBg:wn,lightTriggerBg:wn,lightTriggerColor:nn}},I=(0,S.I$)("Layout",function(h){return[s(h)]},D,{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),F=n(785893),L=["prefixCls","suffixCls","className","tagName"],K=["prefixCls","className","rootClassName","children","hasSider","tagName","style"];function V(h){var d=h.suffixCls,x=h.tagName,k=h.displayName;return function(P){var nn=T.forwardRef(function(rn,fn){return(0,F.jsx)(P,M()({ref:fn,suffixCls:d,tagName:x},rn))});return nn}}var Z=T.forwardRef(function(h,d){var x=h.prefixCls,k=h.suffixCls,P=h.className,nn=h.tagName,rn=l()(h,L),fn=T.useContext(p.E_),yn=fn.getPrefixCls,wn=yn("layout",x),mn=I(wn),gn=z()(mn,3),Mn=gn[0],An=gn[1],En=gn[2],kn=k?"".concat(wn,"-").concat(k):wn;return Mn((0,F.jsx)(nn,M()({className:Y()(x||kn,P,An,En),ref:d},rn)))}),E=T.forwardRef(function(h,d){var x=T.useContext(p.E_),k=x.direction,P=T.useState([]),nn=z()(P,2),rn=nn[0],fn=nn[1],yn=h.prefixCls,wn=h.className,mn=h.rootClassName,gn=h.children,Mn=h.hasSider,An=h.tagName,En=h.style,kn=l()(h,K),Fn=(0,q.default)(kn,["suffixCls"]),Dn=T.useContext(p.E_),B=Dn.getPrefixCls,xn=Dn.layout,jn=B("layout",yn),Tn=v(rn,gn,Mn),Un=I(jn),Nn=z()(Un,3),Rn=Nn[0],Hn=Nn[1],Xn=Nn[2],Vn=Y()(jn,f()(f()({},"".concat(jn,"-has-sider"),Tn),"".concat(jn,"-rtl"),k==="rtl"),xn==null?void 0:xn.className,wn,mn,Hn,Xn),ie=T.useMemo(function(){return{siderHook:{addSider:function(Jn){fn(function(Qn){return[].concat(C()(Qn),[Jn])})},removeSider:function(Jn){fn(function(Qn){return Qn.filter(function(ee){return ee!==Jn})})}}}},[]);return Rn((0,F.jsx)(o.V.Provider,{value:ie,children:(0,F.jsx)(An,M()(M()({ref:d,className:Vn,style:M()(M()({},xn==null?void 0:xn.style),En)},Fn),{},{children:gn}))}))}),A=V({tagName:"div",displayName:"Layout"})(E),G=V({suffixCls:"header",tagName:"header",displayName:"Header"})(Z),pn=V({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(Z),sn=V({suffixCls:"content",tagName:"main",displayName:"Content"})(Z),bn=A,W=bn;W.Header=G,W.Footer=pn,W.Content=sn,W.Sider=e.Z,W._InternalSiderContext=e.D;var b=W},715778:function(Pn,H,n){n.r(H),n.d(H,{default:function(){return O}});var Q=n(174219),C=n(97857),ln=n.n(C),f=n(585369),j={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},z=j,un={lang:ln()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},f.Z),timePickerLocale:ln()({},z)};un.lang.ok="\u786E\u5B9A";var l=un,c=l,M="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",T={locale:"zh-cn",Pagination:Q.Z,DatePicker:l,TimePicker:z,Calendar:c,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:M,method:M,array:M,object:M,number:M,date:M,boolean:M,integer:M,float:M,regexp:M,email:M,url:M,hex:M},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0",scanned:"\u5DF2\u626B\u63CF"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},O=T}}]);
