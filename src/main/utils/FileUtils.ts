import * as fs from "fs"
import * as path from "path"

export default class FileUtils {

    static deleteFile(delPath: string, direct?: boolean) {
        delPath = direct ? delPath : path.join(__dirname, delPath)
        console.log(`delPath : `, delPath)
        try {
            /**
             * @des 判断文件或文件夹是否存在
             */
            if (fs.existsSync(delPath)) {
                fs.unlinkSync(delPath);
            } else {
                console.log('inexistence path：', delPath);
            }
        } catch (error) {
            console.log('del error', error);
        }
    }
}
