class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        // this.table[index] = value;
        let bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[key, value]];
            // console.log("bucket is", bucket);
        }
        else {
            let sameKeyItem = bucket.find(item => item[0] === key);


            if (sameKeyItem) {
                sameKeyItem[1] = value;
                console.log('is same', sameKeyItem);

            }
            else {
                bucket.push([key, value]);
            }
        }

    }
    get(key) {
        const index = this.hash(key);
        // return this.table[index];
        let bucket = this.table[index];
        if (bucket) {
            let sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                return sameKeyItem[1];
            }
        }
        return undefined;

    }
    remove(key) {
        const index = this.hash(key);
        //this.table[index] = undefined;
        const bucket = this.table[index];
        if (bucket) {
            let sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                console.log(bucket.indexOf(sameKeyItem));

                bucket.splice(bucket.indexOf(sameKeyItem), 1);
            }
        }
    }
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);

            }

        }
    }
}

const hashtable = new HashTable(50);
hashtable.set("name", "Mona");
hashtable.set("name", "Mona subedi");
hashtable.set("age", 19);
console.log(hashtable.get("name"));
hashtable.remove("age")

hashtable.display();



