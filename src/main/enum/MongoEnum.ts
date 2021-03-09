export enum SiteTaskEnum {
    STATUS_DEAD = 0, // 0：死亡（删除）
    STATUS_ALIVE = 1, // 1：存活

    PROGRESS_DOT_START = 0, // 0：未开始
    PROGRESS_START = 1, // 1：进行中
    PROGRESS_PENDING = 2, //  2：已完成
    PROGRESS_ENDING = 3, //   3：已结束

    TYPE_INDEX = 1, // 1：首页任务
    TYPE_ADMIN = 2, // 2：后台任务
}

export enum DirMenuEnum {
    STATUS_DEAD = 0, // 0：删除状态
    STATUS_ALIVE = 1, // 1：存活状态

    TYPE_INDEX = 1, // 1：博客首页菜单
    TYPE_ADMIN = 2, // 2：博客后台管理菜单
}

export enum ArtTypeEnum {
    STATUS_DEAD = 0, // 0：删除状态
    STATUS_ALIVE = 1, // 1：存活状态

    TYPE_INDEX = 1, // 1：博客首页菜单
    TYPE_ADMIN = 2, // 2：博客后台管理菜单
    TYPE_SERVER= 3, // 3：linux/服务器
}
