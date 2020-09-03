/* 
 * 接口统一集成模块
 */
import * as userInfo from './moudules/userInfo';
import * as searchAll from './moudules/searchAll';
import * as findService from './moudules/findService';
// 默认全部导出
export default {
  userInfo,
  findService,
  searchAll,
}
