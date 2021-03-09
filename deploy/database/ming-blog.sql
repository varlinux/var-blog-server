/*
Navicat MySQL Data Transfer

Source Server         : tencent
Source Server Version : 50730
Source Host           : 49.233.156.236:3306
Source Database       : ming-blog

Target Server Type    : MYSQL
Target Server Version : 50730
File Encoding         : 65001

Date: 2021-01-21 18:29:25
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `blog_article`
-- ----------------------------
DROP TABLE IF EXISTS `blog_article`;
CREATE TABLE `blog_article` (
  `atc_id` varchar(50) NOT NULL,
  `atc_title` varchar(255) DEFAULT NULL,
  `atc_content` text,
  `atc_author` varchar(50) DEFAULT NULL,
  `atc_create_time` varchar(50) DEFAULT NULL,
  `atc_edit_time` varchar(50) DEFAULT NULL,
  `blog_user_id` varchar(50) DEFAULT NULL,
  `atc_status` int(11) DEFAULT NULL COMMENT '用来判断当前文章是什么状态:草稿(2)、完成(1)、删除(0)',
  `tag_ids` varchar(255) DEFAULT NULL COMMENT '标签编号，数组类型，以逗号分隔开',
  PRIMARY KEY (`atc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog_article
-- ----------------------------
INSERT INTO `blog_article` VALUES ('18e47bf1-9d44-4454-b20e-c39b4f7a003c', 'update测试标题', 'update测试内容', 'Ming', '2020-12-05 17:48:54', '2021-01-20 15:58:38', null, null, '04ce389d-1d07-43e4-9921-1ec8d72f55e9,c5e75e3d-5e92-4c16-95b6-698f86046fd7,d030fd70-85e1-4481-aad2-30f50e96ae2c');
INSERT INTO `blog_article` VALUES ('1eafd2fe-4030-448b-8551-75482b5d712a', '这篇文章存储关联关系标签', '这篇文章存储关联关系标签', 'ming', '2021-01-01 15:20:08', null, '1', '1', '03156ce7-0fa7-49ef-854a-b3e6019146f6,bc1f8be0-b2be-4cf9-b86f-d361a42e65e9');
INSERT INTO `blog_article` VALUES ('2aadcce1-715f-4795-843c-d73565953875', '这是第二篇有图片的文章', '下面是图片： ![th5GWT2640.jpg](http://localhost:8080/server/b98189ad76fc1105b01befa5b79021d1)', 'ming', '2020-12-03 17:20:46', '2020-12-21 18:59:48', null, null, '2771fc5f-8d46-49cd-8945-9d3faa6c4819');
INSERT INTO `blog_article` VALUES ('4925a65f-2a1d-42f5-8741-a2268dc8c236', '增加测试标题', '增加测试内容', 'Ming', '2020-12-17 18:02:21', null, null, '1', '04ce389d-1d07-43e4-9921-1ec8d72f55e9,f1a84e8e-ab88-463b-8cd9-ce86f71a322d,b5a26325-81b9-459f-9df0-ae01606cd348');
INSERT INTO `blog_article` VALUES ('4eb1ce5c-4124-4b48-a37b-6c44a2341f15', 'sdfasfd', 'asdfasdf', null, '2020-12-18 10:24:36', null, '1', '1', null);
INSERT INTO `blog_article` VALUES ('52d1ce29-ea52-47c3-8555-67ad1d273088', 'sdfasfd', 'asdfasdf', null, '2020-12-18 10:23:22', null, '1', '1', null);
INSERT INTO `blog_article` VALUES ('63721a8c-92db-4018-b67d-2b1e9b7b785f', '这是第一篇博客', '第一篇博客内容第一篇博客内容第一篇博客内容', 'ming', '2020-12-03 14:04:54', '2020-08-21 14:11:43', '1', null, '9e5c1143-be5b-4b1d-a22a-fc320fd9671d,b904341e-6c32-4029-9fcc-3c9f279e54da,c728b39a-1433-4181-ad18-ba2ee2471117');
INSERT INTO `blog_article` VALUES ('6dad8561-bb22-44fc-9e10-8a24802d0409', '这是一篇没有图片的博客', '别找了，没有图片哦！', 'ming', '2020-12-03 14:02:13', '2020-12-20 12:40:49', null, null, 'f248beab-da01-4f2a-9635-a343d9c6dbfd');
INSERT INTO `blog_article` VALUES ('6fcda9eb-274b-4c1c-9fd7-c4aebe86e58d', '这是一篇有图片的文章', '域名认证图片： ![8421b2f5fe9231567131d3fb21934c72.jpg](http://localhost:8080/server/3feaba9f554060573c86364a7692c45f)', 'ming', '2020-12-02 15:51:00', '2020-12-21 19:01:19', null, null, '2771fc5f-8d46-49cd-8945-9d3faa6c4819');
INSERT INTO `blog_article` VALUES ('73e41492-be54-4182-be83-d870596dcfbf', '增加测试标题', '增加测试内容', 'Ming', '2020-12-19 19:24:02', null, null, '1', '04ce389d-1d07-43e4-9921-1ec8d72f55e9,3a8f4770-1103-4015-a764-b9550cefb8d0,75580527-ced9-4acf-8d6c-155abf613132');
INSERT INTO `blog_article` VALUES ('8639a9b8-ae53-4df5-9377-e49da1da8a2a', '增加测试标题', '增加测试内容', 'Ming', '2021-01-20 15:58:37', null, null, '1', '04ce389d-1d07-43e4-9921-1ec8d72f55e9,6c2f91d8-4f0f-4685-b454-f658d5ede5dc,c9f7f169-b87f-4e01-a349-719291d5f940');
INSERT INTO `blog_article` VALUES ('b1eacc85-87c9-4bc5-88a6-5cb0ba8f6798', '增加测试标题', '增加测试内容', 'Ming', '2021-01-01 15:17:01', null, null, '1', '04ce389d-1d07-43e4-9921-1ec8d72f55e9,8a6336c5-1042-4604-8acb-86f89c36bcb3,4d4c36a9-cd2c-469b-810e-ff4db0a8d046');
INSERT INTO `blog_article` VALUES ('c2263b00-e28e-4ba0-88e6-9aa65b50ba31', '增加测试标题', '增加测试内容', 'Ming', '2021-01-01 14:58:25', null, null, '1', '04ce389d-1d07-43e4-9921-1ec8d72f55e9,ebfb8d4f-b734-4da1-88e2-5aecca424f3c,3647dd01-6ba1-454f-98c1-d913ba934832');
INSERT INTO `blog_article` VALUES ('e93b1276-e734-47f5-885f-6278357b1e4f', '增加测试标题', '增加测试内容', 'Ming', '2020-12-21 12:55:27', null, null, '1', '04ce389d-1d07-43e4-9921-1ec8d72f55e9,18706d86-e6ea-4226-9b07-3aea717d24c3,c2f42bb9-6b2d-4959-9c3d-bb247f7f8d31');
INSERT INTO `blog_article` VALUES ('f02a9b29-4c33-48cf-8138-2b7e8070f63e', '这是一篇内容很长的文章', '这是一篇内容很长的文章这是一篇内容很长的文章这是一篇内容很长的文章这是一篇内容很长的文章这是一篇内容很长的文章这是一篇内容很长的文章这是一篇内容很长的文章这是一篇内容很长的文章这是一篇内容很长的文章这是一篇内容很长的文章这是一篇内容很长的文章这是一篇内容很长的文章', 'ming', '2020-12-26 16:36:05', null, '1', '1', '3fd04b88-f166-4e87-a7a2-32064af81ea3,e1bdf5ab-9ab5-46c3-b49c-bad2c59067d9,507c1149-2c9c-44fa-929f-192dcf3d3bea');

-- ----------------------------
-- Table structure for `blog_img`
-- ----------------------------
DROP TABLE IF EXISTS `blog_img`;
CREATE TABLE `blog_img` (
  `img_id` varchar(50) NOT NULL,
  `img_name` varchar(50) DEFAULT NULL,
  `img_type` varchar(10) DEFAULT NULL,
  `img_desc` varchar(255) DEFAULT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  `img_create_time` varchar(50) DEFAULT NULL,
  `img_edit_time` varchar(50) DEFAULT NULL,
  `img_status` varchar(10) DEFAULT NULL,
  `blog_atc_id` varchar(50) DEFAULT NULL,
  `blog_user_id` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`img_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog_img
-- ----------------------------
INSERT INTO `blog_img` VALUES ('24c6138d-cc1e-4eba-9b4f-25bbddbc084e', 'ff1eefe1fddc21f882725ca1cb258690', '1', null, 'http://localhost:8080/server/ff1eefe1fddc21f882725ca1cb258690', '2021-01-20 17:11:59', null, null, null, null);
INSERT INTO `blog_img` VALUES ('3be14160-1abc-492c-896e-ea17137539d2', 'ef0c625c3c6ae254a955880acbf12bec', '1', null, 'http://localhost:8080/server/ef0c625c3c6ae254a955880acbf12bec', '2021-01-20 14:28:12', null, null, null, null);
INSERT INTO `blog_img` VALUES ('4dc7750d-2ac5-470e-9ca6-a0011df6b129', 'e0f00fb9ddc97a4c3a64ec6d1b32cdc2', '1', null, 'http://localhost:8080/server/e0f00fb9ddc97a4c3a64ec6d1b32cdc2', '2021-01-20 17:03:52', null, null, null, null);
INSERT INTO `blog_img` VALUES ('50c58f40-6387-4b9d-822d-bde5044966af', '38716181059fc15b9ad60f5fb1ca14b4', '1', null, 'http://localhost:8080/server/38716181059fc15b9ad60f5fb1ca14b4', '2021-01-20 15:36:06', null, null, null, null);
INSERT INTO `blog_img` VALUES ('5d155498-c83c-4aed-8f11-215b62786418', 'de0da96a4a72196ed7bcfc7a54677857', '1', null, 'http://localhost:8080/server/de0da96a4a72196ed7bcfc7a54677857', '2021-01-20 14:53:58', null, null, null, null);
INSERT INTO `blog_img` VALUES ('713ac18f-3716-481b-8afd-f322ff6ff937', '23236f81f000cebcae3fc9cf777527cc', '1', null, 'http://localhost:8080/server/23236f81f000cebcae3fc9cf777527cc', '2021-01-18 16:22:10', null, null, null, null);
INSERT INTO `blog_img` VALUES ('89f6fbe3-1be1-4ff9-b8d6-3cdfbf750896', '4bd128ce309ea0565db5261fb23c2f50', '1', null, 'http://localhost:8080/server/4bd128ce309ea0565db5261fb23c2f50', '2021-01-20 17:16:57', null, null, null, null);
INSERT INTO `blog_img` VALUES ('97cb091e-b153-44fa-8289-8d042199b7aa', 'c3c2833dd5f63074c0d9a7d45a78623c', '1', null, 'http://localhost:8080/server/c3c2833dd5f63074c0d9a7d45a78623c', '2021-01-18 17:15:10', null, null, null, null);
INSERT INTO `blog_img` VALUES ('9b2ff136-4353-407f-8068-0c9df877431a', 'd9c9148bbd581b8bad5f64f8c0be823d', '1', null, 'http://localhost:8080/server/d9c9148bbd581b8bad5f64f8c0be823d', '2021-01-20 15:04:10', null, null, null, null);
INSERT INTO `blog_img` VALUES ('a03b8cdc-f0bf-4d4c-8aee-6731ce5b4641', 'bcaeaab07f2b2ea9b5f6dc08359a2071', '1', null, 'http://localhost:8080/server/bcaeaab07f2b2ea9b5f6dc08359a2071', '2021-01-20 17:02:12', null, null, null, null);
INSERT INTO `blog_img` VALUES ('ae7e6ceb-e803-44c5-9a39-9ae02a810f57', 'b98189ad76fc1105b01befa5b79021d1', '1', null, 'http://localhost:8080/server/b98189ad76fc1105b01befa5b79021d1', '2020-12-21 18:59:35', null, null, null, null);
INSERT INTO `blog_img` VALUES ('b19323b4-df5b-410d-a822-a47c36366820', 'fdce434805d9e3cb489734982f1172aa', '1', null, 'http://localhost:8080/server/fdce434805d9e3cb489734982f1172aa', '2021-01-20 14:46:22', null, null, null, null);
INSERT INTO `blog_img` VALUES ('bc13c8ae-aa1c-4c1b-8f6b-a102e63e3107', 'f1ca25a0e1adc2a408297cb2292276b0', '1', null, 'http://localhost:8080/server/f1ca25a0e1adc2a408297cb2292276b0', '2021-01-19 10:17:14', null, null, null, null);
INSERT INTO `blog_img` VALUES ('be490cb0-db35-4959-ae1a-96fd07b126d4', '188f32419f02e31a0116d4516d296536', '1', null, 'http://localhost:8080/server/188f32419f02e31a0116d4516d296536', '2020-12-20 08:54:01', null, null, null, null);
INSERT INTO `blog_img` VALUES ('d8d0d13a-fae3-4122-a141-4fdc4536f217', 'd6f5d675f37241b0d1f71194af2a411d', '1', null, 'http://localhost:8080/server/d6f5d675f37241b0d1f71194af2a411d', '2021-01-20 14:59:35', null, null, null, null);
INSERT INTO `blog_img` VALUES ('de0eb502-3865-4087-82d6-f1be281cc580', 'e9291a638056d7ca9cd088c1ea239c23', '1', null, 'http://localhost:8080/server/e9291a638056d7ca9cd088c1ea239c23', '2021-01-20 17:10:57', null, null, null, null);
INSERT INTO `blog_img` VALUES ('de798ad8-f8e5-415d-b488-ecee989282fc', 'aaef45f30a5afca2c8a9d6a0f41d22b4', '1', null, 'http://localhost:8080/server/aaef45f30a5afca2c8a9d6a0f41d22b4', '2021-01-20 15:29:25', null, null, null, null);
INSERT INTO `blog_img` VALUES ('e511ff9d-bce9-4330-8f75-48acc6c40014', 'a18139daea6e95309c797a4066bb3b82', '1', null, 'http://localhost:8080/server/a18139daea6e95309c797a4066bb3b82', '2021-01-20 15:38:52', null, null, null, null);
INSERT INTO `blog_img` VALUES ('eeec8385-6797-40c5-89cc-99876e9ee01d', '3feaba9f554060573c86364a7692c45f', '1', null, 'http://localhost:8080/server/3feaba9f554060573c86364a7692c45f', '2020-12-21 19:01:13', null, null, null, null);
INSERT INTO `blog_img` VALUES ('f11bdc5c-05ae-45ed-b373-2ef3fce244fb', '06a9d5005831aee2361ed0b37e5fae89', '1', null, 'http://localhost:8080/server/06a9d5005831aee2361ed0b37e5fae89', '2021-01-20 17:06:25', null, null, null, null);
INSERT INTO `blog_img` VALUES ('f2277d52-8fc4-41f6-bb52-d6c6b6535de9', 'a483e765aef375a8f6c61244025f8671', '1', null, 'http://localhost:8080/server/a483e765aef375a8f6c61244025f8671', '2021-01-18 17:09:41', null, null, null, null);
INSERT INTO `blog_img` VALUES ('f4701e18-c76b-49d8-b918-473651478718', 'e35ace094307c197f411fa22dd3c22b1', '1', null, 'http://localhost:8080/server/e35ace094307c197f411fa22dd3c22b1', '2021-01-20 15:39:00', null, null, null, null);
INSERT INTO `blog_img` VALUES ('f66f9dae-508b-476a-864c-2ead0c06cac4', 'cecb8b42c1b6da6ef83b0417a08892ad', '1', null, 'http://localhost:8080/server/cecb8b42c1b6da6ef83b0417a08892ad', '2021-01-18 18:43:08', null, null, null, null);

-- ----------------------------
-- Table structure for `blog_link`
-- ----------------------------
DROP TABLE IF EXISTS `blog_link`;
CREATE TABLE `blog_link` (
  `link_id` varchar(50) NOT NULL,
  `link_name` varchar(50) DEFAULT NULL,
  `link_url` varchar(255) DEFAULT NULL,
  `link_create_time` varchar(50) DEFAULT NULL,
  `link_status` int(11) NOT NULL,
  PRIMARY KEY (`link_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog_link
-- ----------------------------
INSERT INTO `blog_link` VALUES ('1', '链接0', 'https://varlinux.com0', '2020-08-21 03:10:00', '0');
INSERT INTO `blog_link` VALUES ('10', '链接9', 'https://varlinux.com9', '2020-08-21 03:10:00', '0');
INSERT INTO `blog_link` VALUES ('11', '百度', 'http://www.baidu.com', '2020-10-03 14:17:54', '0');
INSERT INTO `blog_link` VALUES ('2', '链接1', 'https://varlinux.com1', '2020-08-21 03:10:00', '0');
INSERT INTO `blog_link` VALUES ('3', '链接2', 'https://varlinux.com2', '2020-08-21 03:10:00', '0');
INSERT INTO `blog_link` VALUES ('3d63c7cb-21ef-434a-875f-9ecf5c8701aa', 'Ming', null, '2020-12-17 18:02:01', '1');
INSERT INTO `blog_link` VALUES ('4', '链接3', 'https://varlinux.com3', '2020-08-21 03:10:00', '0');
INSERT INTO `blog_link` VALUES ('5', '链接4', 'https://varlinux.com4', '2020-08-21 03:10:00', '0');
INSERT INTO `blog_link` VALUES ('6', '链接5', 'https://varlinux.com5', '2020-08-21 03:10:00', '0');
INSERT INTO `blog_link` VALUES ('7', '链接6', 'https://varlinux.com6', '2020-08-21 03:10:00', '0');
INSERT INTO `blog_link` VALUES ('8', '链接7', 'https://varlinux.com7', '2020-08-21 03:10:00', '0');
INSERT INTO `blog_link` VALUES ('9', '链接8', 'https://varlinux.com8', '2020-08-21 03:10:00', '0');
INSERT INTO `blog_link` VALUES ('9ec66c85-de18-4858-8200-58195ad5b7d7', 'Ming', null, '2021-01-20 15:59:07', '1');

-- ----------------------------
-- Table structure for `blog_suggest`
-- ----------------------------
DROP TABLE IF EXISTS `blog_suggest`;
CREATE TABLE `blog_suggest` (
  `sgt_id` varchar(50) NOT NULL,
  `sgt_title` varchar(255) DEFAULT NULL,
  `sgt_content` text NOT NULL,
  `sgt_contact` varchar(50) NOT NULL,
  `sgt_create_time` varchar(50) NOT NULL,
  `sgt_edit_time` varchar(50) DEFAULT NULL,
  `sgt_status` int(11) NOT NULL,
  PRIMARY KEY (`sgt_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog_suggest
-- ----------------------------
INSERT INTO `blog_suggest` VALUES ('1bd86f08-1508-4776-9537-4e666c64692b', null, '666666666666', 'czm_1314@qq.com', '2021-01-20 15:59:21', '2021-01-03 15:59:21', '1');
INSERT INTO `blog_suggest` VALUES ('50fb22b5-dcb0-4edc-8cf6-1ab863d80734', null, '666666666666', 'czm_1314@qq.com', '2020-12-27 09:58:59', '2020-12-00 09:58:59', '1');
INSERT INTO `blog_suggest` VALUES ('74fa24f9-ec06-41f6-88f3-72f61002b8ea', null, '666666666666', 'czm_1314@qq.com', '2020-12-27 09:20:08', null, '1');
INSERT INTO `blog_suggest` VALUES ('7bfc76d1-99c8-4ee5-a0cc-e1925f864a54', null, '666666666666', 'czm_1314@qq.com', '2020-12-27 09:44:14', '2020-12-00 09:44:14', '1');
INSERT INTO `blog_suggest` VALUES ('7fb43fa9-1dcb-4158-acc5-d30268777f58', 'sfasdfaf', 'sfasdfaf', 'sfasdfaf', '2020-12-18 10:27:08', null, '1');
INSERT INTO `blog_suggest` VALUES ('88483027-b569-4412-a95d-0396550c6fdf', null, '666666666666', 'czm_1314@qq.com', '2020-12-17 20:17:22', '2020-12-27 09:27:27', '1');

-- ----------------------------
-- Table structure for `blog_tag`
-- ----------------------------
DROP TABLE IF EXISTS `blog_tag`;
CREATE TABLE `blog_tag` (
  `tag_id` varchar(50) NOT NULL,
  `tag_name` varchar(50) NOT NULL,
  `tag_create_time` varchar(50) NOT NULL,
  `tag_status` int(11) NOT NULL,
  PRIMARY KEY (`tag_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog_tag
-- ----------------------------
INSERT INTO `blog_tag` VALUES ('03156ce7-0fa7-49ef-854a-b3e6019146f6', '中文标签1', '2020-12-03 16:59:28', '1');
INSERT INTO `blog_tag` VALUES ('18706d86-e6ea-4226-9b07-3aea717d24c3', '增加标签1', '2020-12-21 12:55:27', '1');
INSERT INTO `blog_tag` VALUES ('1f8ecdf0-88ef-45bb-9f5c-d8c4d8d293a0', '中文标签1', '2020-12-19 19:24:02', '1');
INSERT INTO `blog_tag` VALUES ('2771fc5f-8d46-49cd-8945-9d3faa6c4819', '图片', '2020-12-20 12:19:09', '1');
INSERT INTO `blog_tag` VALUES ('29eaabee-714b-45d3-93b3-4d3ff21df77a', '更新中文标签2', '2020-12-19 19:24:02', '1');
INSERT INTO `blog_tag` VALUES ('3647dd01-6ba1-454f-98c1-d913ba934832', '增加标签2', '2021-01-01 14:58:25', '1');
INSERT INTO `blog_tag` VALUES ('3a8f4770-1103-4015-a764-b9550cefb8d0', '增加标签1', '2020-12-19 19:24:02', '1');
INSERT INTO `blog_tag` VALUES ('3fd04b88-f166-4e87-a7a2-32064af81ea3', '文章', '2020-12-26 16:36:05', '1');
INSERT INTO `blog_tag` VALUES ('4addd2b6-11cc-496f-829b-067bf9da9060', '增加标签1', '2021-01-01 11:35:49', '1');
INSERT INTO `blog_tag` VALUES ('4d4c36a9-cd2c-469b-810e-ff4db0a8d046', '增加标签2', '2021-01-01 15:17:01', '1');
INSERT INTO `blog_tag` VALUES ('507c1149-2c9c-44fa-929f-192dcf3d3bea', '很长的文章', '2020-12-26 16:36:05', '1');
INSERT INTO `blog_tag` VALUES ('53d5f494-bee7-4274-8e19-007f99970128', '更新中文标签2', '2021-01-01 11:34:51', '1');
INSERT INTO `blog_tag` VALUES ('5f1d99f3-633f-45c1-88da-41df2a1908e5', '中文标签1', '2020-12-17 18:02:21', '1');
INSERT INTO `blog_tag` VALUES ('6c2f91d8-4f0f-4685-b454-f658d5ede5dc', '增加标签1', '2021-01-20 15:58:37', '1');
INSERT INTO `blog_tag` VALUES ('75580527-ced9-4acf-8d6c-155abf613132', '增加标签2', '2020-12-19 19:24:02', '1');
INSERT INTO `blog_tag` VALUES ('7702db4d-e9e5-48b2-888e-544cf92d9f87', '更新中文标签2', '2020-12-21 12:55:27', '1');
INSERT INTO `blog_tag` VALUES ('8a6336c5-1042-4604-8acb-86f89c36bcb3', '增加标签1', '2021-01-01 15:17:01', '1');
INSERT INTO `blog_tag` VALUES ('92a9c7e5-0f7c-4630-84fb-865b04ddf202', '增加标签1', '2021-01-01 13:43:37', '1');
INSERT INTO `blog_tag` VALUES ('9d8bb24d-b6d6-4214-853b-778435cb2a85', '中文标签1', '2021-01-01 11:34:51', '1');
INSERT INTO `blog_tag` VALUES ('a0a608d3-164a-45c1-bec0-a9c8b40bcfc2', 'Ming', '2020-12-17 17:59:25', '1');
INSERT INTO `blog_tag` VALUES ('b5a26325-81b9-459f-9df0-ae01606cd348', '增加标签2', '2020-12-17 18:02:20', '1');
INSERT INTO `blog_tag` VALUES ('bc1f8be0-b2be-4cf9-b86f-d361a42e65e9', 'ccc', '2021-01-01 15:20:08', '1');
INSERT INTO `blog_tag` VALUES ('c2f42bb9-6b2d-4959-9c3d-bb247f7f8d31', '增加标签2', '2020-12-21 12:55:27', '1');
INSERT INTO `blog_tag` VALUES ('c5e75e3d-5e92-4c16-95b6-698f86046fd7', '中文标签1', '2021-01-20 15:58:38', '1');
INSERT INTO `blog_tag` VALUES ('c857cdc0-1d8a-4294-97e7-4f3d14c4c3b0', '增加标签2', '2021-01-01 11:35:49', '1');
INSERT INTO `blog_tag` VALUES ('c9f7f169-b87f-4e01-a349-719291d5f940', '增加标签2', '2021-01-20 15:58:37', '1');
INSERT INTO `blog_tag` VALUES ('d030fd70-85e1-4481-aad2-30f50e96ae2c', '更新中文标签2', '2021-01-20 15:58:38', '1');
INSERT INTO `blog_tag` VALUES ('d49ed402-816a-49bd-87d5-6baa19f528e9', '域名认证', '2020-12-20 12:19:09', '1');
INSERT INTO `blog_tag` VALUES ('d732184f-6245-4499-87a7-92921c8afc6f', '更新中文标签2', '2020-12-17 18:02:21', '1');
INSERT INTO `blog_tag` VALUES ('e1bdf5ab-9ab5-46c3-b49c-bad2c59067d9', '很长', '2020-12-26 16:36:05', '1');
INSERT INTO `blog_tag` VALUES ('e3254288-8704-4761-94af-d0b7c00f73b5', '中文标签1', '2020-12-21 12:55:27', '1');
INSERT INTO `blog_tag` VALUES ('ebfb8d4f-b734-4da1-88e2-5aecca424f3c', '增加标签1', '2021-01-01 14:58:25', '1');
INSERT INTO `blog_tag` VALUES ('f1a84e8e-ab88-463b-8cd9-ce86f71a322d', '增加标签1', '2020-12-17 18:02:20', '1');
INSERT INTO `blog_tag` VALUES ('f248beab-da01-4f2a-9635-a343d9c6dbfd', '图片', '2020-12-20 12:40:49', '1');
INSERT INTO `blog_tag` VALUES ('f75944a6-ec37-4803-852e-b25f553a0b07', '增加标签2', '2021-01-01 13:43:37', '1');

-- ----------------------------
-- Table structure for `blog_user`
-- ----------------------------
DROP TABLE IF EXISTS `blog_user`;
CREATE TABLE `blog_user` (
  `user_id` varchar(50) NOT NULL,
  `user_name` varchar(50) DEFAULT NULL,
  `user_pwd` varchar(50) DEFAULT NULL,
  `user_intro` varchar(255) DEFAULT NULL,
  `user_sing` varchar(100) DEFAULT NULL,
  `user_icon_url` varchar(255) DEFAULT NULL,
  `user_create_time` varchar(50) DEFAULT NULL,
  `user_github` varchar(255) DEFAULT NULL,
  `user_gitee` varchar(255) DEFAULT NULL,
  `user_weixin` varchar(50) DEFAULT NULL,
  `user_qq` int(11) DEFAULT NULL,
  `user_payfor` varchar(50) DEFAULT NULL,
  `user_status` int(11) NOT NULL COMMENT '用户状态信息',
  `user_phone` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog_user
-- ----------------------------
INSERT INTO `blog_user` VALUES ('1', 'ming', 'Ming@123', '有趣的灵魂', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1');
INSERT INTO `blog_user` VALUES ('6', 'mmmmmmm', null, null, null, null, '2020-12-17 17:56:15', null, null, null, null, null, '1', null);

-- ----------------------------
-- Table structure for `rel_article_tag`
-- ----------------------------
DROP TABLE IF EXISTS `rel_article_tag`;
CREATE TABLE `rel_article_tag` (
  `at_id` varchar(50) NOT NULL,
  `at_atc_id` varchar(50) NOT NULL,
  `at_tag_id` varchar(50) NOT NULL,
  `at_create_time` varchar(20) NOT NULL,
  `at_edit_time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`at_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rel_article_tag
-- ----------------------------
INSERT INTO `rel_article_tag` VALUES ('0362e0a7-558b-4b21-8bc1-bcd9a424dcfc', 'b1eacc85-87c9-4bc5-88a6-5cb0ba8f6798', '04ce389d-1d07-43e4-9921-1ec8d72f55e9', '2021-01-01 15:17:01', null);
INSERT INTO `rel_article_tag` VALUES ('4ca896c0-8abc-4310-bc0a-ffca522ee014', '8639a9b8-ae53-4df5-9377-e49da1da8a2a', 'c9f7f169-b87f-4e01-a349-719291d5f940', '2021-01-20 15:58:38', null);
INSERT INTO `rel_article_tag` VALUES ('5a516db5-e5c0-44ea-8609-f0794b12871f', '8639a9b8-ae53-4df5-9377-e49da1da8a2a', '04ce389d-1d07-43e4-9921-1ec8d72f55e9', '2021-01-20 15:58:38', null);
INSERT INTO `rel_article_tag` VALUES ('6055d947-52cb-4408-a775-2b801a0b7c2b', '1eafd2fe-4030-448b-8551-75482b5d712a', '03156ce7-0fa7-49ef-854a-b3e6019146f6', '2021-01-01 15:20:08', null);
INSERT INTO `rel_article_tag` VALUES ('784e8126-e786-439a-899a-653cd91e5f46', 'b1eacc85-87c9-4bc5-88a6-5cb0ba8f6798', '4d4c36a9-cd2c-469b-810e-ff4db0a8d046', '2021-01-01 15:17:01', null);
INSERT INTO `rel_article_tag` VALUES ('8faf9245-4cf0-4f28-931c-344a50daf9ce', 'b1eacc85-87c9-4bc5-88a6-5cb0ba8f6798', '8a6336c5-1042-4604-8acb-86f89c36bcb3', '2021-01-01 15:17:01', null);
INSERT INTO `rel_article_tag` VALUES ('b028b5b6-7c49-4387-8170-d7103dd39a24', '8639a9b8-ae53-4df5-9377-e49da1da8a2a', '6c2f91d8-4f0f-4685-b454-f658d5ede5dc', '2021-01-20 15:58:38', null);
INSERT INTO `rel_article_tag` VALUES ('f6e18370-d198-4208-8053-672fe3feeb23', '1eafd2fe-4030-448b-8551-75482b5d712a', 'bc1f8be0-b2be-4cf9-b86f-d361a42e65e9', '2021-01-01 15:20:08', null);
