(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{295:function(e,t,a){e.exports={profileInfoContainer:"ProfileInfo_profileInfoContainer__s-StH",profileHeader:"ProfileInfo_profileHeader__3EG2E",profileData:"ProfileInfo_profileData__3bwKy",nameAndAbout:"ProfileInfo_nameAndAbout__3VuDT",image:"ProfileInfo_image__1PlRm",editPhoto:"ProfileInfo_editPhoto__1dsRg",editBtn:"ProfileInfo_editBtn__aGUb2",contact:"ProfileInfo_contact__3vuDS",status:"ProfileInfo_status__30xms"}},296:function(e,t,a){e.exports={content:"Profile_content__28wvH",profileContainer:"Profile_profileContainer__2PA8X"}},297:function(e,t,a){e.exports={posts:"MyPosts_posts__glArt",postsBlock:"MyPosts_postsBlock__Csxy3"}},298:function(e,t,a){e.exports={item:"Post_item__36yWd"}},299:function(e,t,a){"use strict";a.r(t);var n=a(36),o=a(37),r=a(39),l=a(38),s=a(0),i=a.n(s),c=a(296),u=a.n(c),m=a(95),f=a(295),p=a.n(f),d=a(41),E=function(e){var t=Object(s.useState)(!1),a=Object(m.a)(t,2),n=a[0],o=a[1],r=Object(s.useState)(e.status),l=Object(m.a)(r,2),c=l[0],u=l[1];Object(s.useEffect)((function(){u(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",{className:p.a.status},i.a.createElement("b",null,"Status:"),i.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"----------")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatusThunk(c)},value:c})))},b=a(107),h=a.n(b),v=a(24),k=a(129),P=a(25),g=a.n(P),_=Object(k.a)({form:"edit-profile"})((function(e){var t=e.profile,a=e.handleSubmit,n=e.error;return i.a.createElement("form",{onSubmit:a},i.a.createElement("div",null,i.a.createElement("button",null,"Save")),n&&i.a.createElement("div",{className:g.a.formSummaryError},n),i.a.createElement("div",null,i.a.createElement("b",null,"My Name:")," ",Object(v.c)("Full name","fullName",[],v.a)),i.a.createElement("div",null,i.a.createElement("b",null,"About me:"),Object(v.c)("About Me","aboutMe",[],v.b)),i.a.createElement("div",null,"My Contacts:",Object.keys(t.contacts).map((function(e){return i.a.createElement("div",{key:e},e,": ",Object(v.c)(e,"contacts."+e,[],v.b))}))),i.a.createElement("div",{className:p.a.lookinForAJob},i.a.createElement("b",null,"Looking for a job"),": ",Object(v.c)("","lookingForAJob",[],v.a,{type:"checkbox"})),i.a.createElement("div",{className:p.a.lookinForAJob},i.a.createElement("b",null,"My skills"),":",Object(v.c)("My professional skills","lookingForAJobDescription",[],v.b)))})),O=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",{className:p.a.profileDataContainer},a&&i.a.createElement("div",null,i.a.createElement("button",{onClick:n},"Edit")),i.a.createElement("div",{className:p.a.profileData},i.a.createElement("div",{className:p.a.nameAndAbout},i.a.createElement("h2",null,t.fullName),i.a.createElement("p",null,t.aboutMe)),i.a.createElement("div",{className:p.a.contacts},i.a.createElement("h2",null,"My Contacts:"),Object.keys(t.contacts).map((function(e){return i.a.createElement(y,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))),i.a.createElement("div",{className:p.a.lookinForAJob},i.a.createElement("b",null,"Looking for a job"),":",t.lookingForAJob?"Yes!":"No"),t.lookingForAJob&&i.a.createElement("div",{className:p.a.lookinForAJob},i.a.createElement("b",null,"My skills"),":",t.lookingForAJobDescription))},y=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:p.a.contact},i.a.createElement("a",{href:a},i.a.createElement("b",null,t)))},j=function(e){var t=e.profile,a=e.updateStatusThunk,n=e.status,o=e.isOwner,r=e.savePhoto,l=e.saveProfile,c=Object(s.useState)(!1),u=Object(m.a)(c,2),f=u[0],b=u[1];if(!t)return i.a.createElement(d.a,null);return i.a.createElement("div",{className:p.a.profileInfoContainer},i.a.createElement("div",{className:p.a.profileHeader},i.a.createElement("div",{className:p.a.image},i.a.createElement("img",{src:t.photos.large||h.a})),o&&i.a.createElement("div",{className:p.a.editPhoto},i.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&r(e.target.files[0])}}))),f?i.a.createElement(_,{initialValues:t,profile:t,onSubmit:function(e){l(e).then((function(){b(!1)}))}}):i.a.createElement(O,{goToEditMode:function(){b(!0)},profile:t,isOwner:o}),i.a.createElement("div",{className:p.a.profileStatus},i.a.createElement(E,{status:n,updateStatusThunk:a})),i.a.createElement("hr",null))},N=a(94),S=a(98),A=a(42),T=a(297),I=a.n(T),w=a(298),C=a.n(w),M=function(e){return i.a.createElement("div",{className:C.a.item},i.a.createElement("img",{src:"https://arrowheadguys.com/wp-content/uploads/2018/11/avatar.jpg"}),i.a.createElement("div",null,e.message),i.a.createElement("div",null,"likes: ",e.likes),i.a.createElement("div",null,i.a.createElement("span",null,"Like")))},F=a(89),D=a(66),J=i.a.memo((function(e){var t=Object(A.a)(e.posts).reverse().map((function(e){return i.a.createElement(M,Object(S.a)({key:e.id,message:e.message,likes:e.likesCount},"key",e.id))}));return i.a.createElement("div",{className:I.a.postsBlock},i.a.createElement("h3",null,"My Posts"),i.a.createElement(B,{onSubmit:function(t){e.addPost(t.newPostBody)}}),i.a.createElement("div",{className:I.a.posts},t))})),x=Object(D.a)(10),B=Object(k.a)({form:"postAddPostForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(F.a,{component:v.b,name:"newPostBody",placeholder:"What on your mind?",validate:[D.b,x]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add new post")))})),U=J,H=a(14),V=Object(H.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(N.a)(t))}}}))(U),L=function(e){return i.a.createElement("div",{className:u.a.content},i.a.createElement(j,{profile:e.profile,status:e.status,updateStatusThunk:e.updateStatusThunk,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),i.a.createElement(V,null))},G=a(30),R=a(9),W=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.loggedinUserId)||this.props.history.push("/login"),this.props.getUserProfileThunk(e),this.props.getStatusThunk(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement("div",{className:u.a.profileContainer},i.a.createElement(L,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatusThunk:this.props.updateStatusThunk,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto})))}}]),a}(i.a.Component);t.default=Object(R.d)(Object(H.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,loggedinUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfileThunk:N.d,getStatusThunk:N.c,updateStatusThunk:N.g,savePhoto:N.e,saveProfile:N.f}),G.g)(W)}}]);
//# sourceMappingURL=3.fc30c943.chunk.js.map