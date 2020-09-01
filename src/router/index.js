import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Pages from "../views/Pages";
import VideoZone from "../views/Pages/VideoZone";
import Lineplay from "../views/Pages/Lineplay";
import SearchInfoList from "../views/SearchInfoList";

import Login from "../components/Login";
import VideoDetail from "../views/Pages/VideoDetail";
/**个人资料**/
import UserInfo from "../views/UserInfo";

import History from "../views/UserInfo/History";
import HistoryLive from "../views/UserInfo/History/HistoryLive"
import HistoryVideo from "../views/UserInfo/History/HistoryVideo"

import Messages from "../views/UserInfo/Messages";
import FeedbackMessage from "../views/UserInfo/Messages/FeedbackMessage";
import OfficialNotice from "../views/UserInfo/Messages/OfficialNotice";

import Personal from "../views/UserInfo/Personal";
import Userdata from "../views/UserInfo/Personal/Userdata";
import PasswordFirst from "../views/UserInfo/Personal/PasswordFirst";
import PaswdModify from "../views/UserInfo/Personal/PaswdModify";
import BindMobile from "../views/UserInfo/Personal/BindMobile";

import Audience from "../views/UserInfo/Audience";
import MyAudience from "../views/UserInfo/Audience/MyAudience";
import AudienceMe from "../views/UserInfo/Audience/AudienceMe";

import Myhobby from "../views/UserInfo/MyHobby";
import ShortVideo from "../views/UserInfo/MyHobby/ShortVideo";
import ColumnVideo from "../views/UserInfo/MyHobby/ColumnVideo";

import Upload from "../views/UserInfo/Upload";
/**个人资料**/

/**修改密码**/
import RetrievePaswd from "../views/RetrievePaswd";
import FillInfo from "../views/RetrievePaswd/FillInfo"
import ResetPaswd from "../views/RetrievePaswd/ResetPaswd"
import ResetSuccess from "../views/RetrievePaswd/ResetSuccess"
/**修改密码**/ 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

/**服务协议**/
import UserAgreement from '../views/UserAgreement'
import Privacy from '../views/Privacy'
import DJCertified from '../views/DJCertified'

Vue.use(VueRouter);
Vue.use(ElementUI);

const routes = [
  {
    path: "/",
    name: 'home',
    component: Home,
  },
  {
    path: '/pages',
    name: 'pages',
    component: Pages,
    // 重定项
    redirect: { name: 'video-zone' },
    children: [
      // 视频专区
      {
        path: "/video-zone", 
        name: 'video-zone',
        component: VideoZone,
      },
      {
        path: "/video-detail", 
        name: 'video-detail',
        component: VideoDetail,
      },
      // 主播专区
      {
        path: "/lineplay", 
        name: "linepaly", 
        component: Lineplay 
      },
      // 搜索专区
      {
        path: "/search-info-list",
        name: "search-info-list",
        component: SearchInfoList,
      },
      // 修改密码
      {
        path: '/retrieve-paswd',
        name: 'retrieve-paswd',
        component: RetrievePaswd,
        redirect: { name: 'fillinfo' },
        children: [
          {
            path: "/fillinfo",
            name: 'fillinfo',
            component: FillInfo,
          },
          {
            path: "/reset-paswd",
            name: 'reset-paswd',
            component: ResetPaswd,
          },
          {
            path: "/reset-success",
            name: 'reset-success',
            component: ResetSuccess,
          },
        ]
      },
      // 用户专区
      {
        path:"/userinfo",
        name: "userinfo",
        component: UserInfo,
        children: [
          { path:"history", name: "history", component: History,
            redirect: { name: 'history-video' },
            children: [
              { path: 'history-video', name: 'history-video', component: HistoryVideo},
              { path: 'history-live', name: 'history-live', component: HistoryLive},
            ]
          },
          { path: "personal", name: "personal", component: Personal,
            redirect: { name: 'userdata' },
            children: [
              { path: 'userdata', name: 'userdata', component: Userdata},
              { path: 'password-firs', name: 'password-first', component: PasswordFirst},
              { path: 'paswd-modify', name: 'paswd-modify', component: PaswdModify},
              { path: 'bind-mobile', name: 'bind-mobile', component: BindMobile},
            ]
          },
          { path: "upload", name: "upload", component: Upload },
          { path: "audience", name: "audience", component: Audience,
            redirect: { name: 'myaudience'},
            children: [
              {path: 'myaudience', name: 'myaudience', component: MyAudience},
              {path: 'audienceme', name: 'audienceme', component: AudienceMe},
            ],
          },
          { path: "myhobby", name: "myhobby", component: Myhobby,
            redirect: { name: 'short-video'},
            children: [
              {path: 'short-video', name: 'short-video', component: ShortVideo},
              {path: 'column-video', name: 'column-video', component: ColumnVideo},
            ],
          },
          { path: "messages", name: "messages", component: Messages,
            redirect: { name: 'feedback-message'},
            children: [
              {path: 'feedback-message', name: 'feedback-message', component: FeedbackMessage},
              {path: 'official-notice', name: 'official-notice', component: OfficialNotice},
            ],
          },
        ],
      },
    ]
  },
  {
    path: '/user-agreement',
    name: 'user-agreement',
    component: UserAgreement
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: Privacy
  },
  {
    path: '/djcertified',
    name: 'djcertified',
    component: DJCertified
  },
];

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});


export default router;
