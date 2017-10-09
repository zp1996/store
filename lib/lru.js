/**
 * 最大限制5M，UTF-16编码下计算Unicode所占字节,基本占用两个字节
 * 此处可以参考博客http://www.alloyteam.com/2013/12/js-calculate-the-number-of-bytes-occupied-by-a-string/
 */
const LIMIT_SIZE = 5 * 1024 * 512;

/**
 * 利用lru算法控制缓存
 * 当localStorage的大小超出5M时,淘汰最早访问的
 * list中保存着访问顺序, 0->n <=> 最早访问->最晚访问
 * list: [ { key: 'xxx', l: xxx } ]
 */
export default class LRU {
    constructor(size = 0, list = []) {
        this.limit = LIMIT_SIZE;
        this.size = size;
        this.list = list;           // 存储数据
    }
    static find(arr, key) {
        for (let i = 0, item; item = arr[i++]; ) {
            if (key === item.k) {
                return i - 1;
            }
        }
        return -1;
    }
    get(key) {
        const index = this.list.indexOf(key);
        if (index === -1) return void 0;

        const last = this.list.length - 1;
        // 访问的节点本身就是末尾节点,不做调整
        if (index === last) return void 0;

        for (let i = index; i < last; i++) {
            this.list[i] = this.list[i + 1];
        }
        this.list[last] = key;
        return this.list;
    }
    set(key, length) {
        const has = this.get(key);
        const len = this.size + length;
    }
    shift() {

    }
}
