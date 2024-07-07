class StringHashTable {
  table: any[][]

  constructor(size: number = 100) {
    this.table = new Array<string[]>(size)
  }

  #hash(key: string) {
    let total = 0
    let WEIRD_PRIME = 3
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.table.length
    }

    return total
  }

  set(key: string, value: string) {
    const hashedKey = this.#hash(key)
    if (!this.table[hashedKey]) {
      this.table[hashedKey] = []
    }
    this.table[hashedKey].push([key, value])
  }

  get(key: string) {
    const hashedKey = this.#hash(key)
    if (this.table[hashedKey]) {
      const [_, value] = this.table[hashedKey].find(([tableKey]) => tableKey === key)
      return value
    }
  }

}

const table = new StringHashTable(200)
table.set("dogs", "are cool")
table.set("cats", "are also cool")
table.set("data", "blob")
console.log(table)
console.log(table.get("cats"))