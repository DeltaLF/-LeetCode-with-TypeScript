class TimeLimitedCache {
    private map = new Map<number,[number, ReturnType<typeof setTimeout>]>();
    // value:[value, timer]
    constructor() {

    }

    set(key: number, value: number, duration: number): boolean {
        let hasValue = false;
        if(this.map.has(key)){
            hasValue = true;
            clearTimeout( this.map.get(key)[1] );
        }
        const newTimer = setTimeout(()=>{
            this.map.delete(key);
        },duration)
        this.map.set(key,[value, newTimer])
        return hasValue
    }

    get(key: number): number {
        if(this.map.has(key)){
            return this.map.get(key)[0]
        }
        return -1
    }

	count(): number {
        return this.map.size
    }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */