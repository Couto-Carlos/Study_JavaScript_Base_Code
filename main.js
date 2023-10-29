import { soma , subtracao, PI } from "./lib/math";
import {soma as sums} from './lib/math'
import sum  from './lib/sum'
import * as math from './lib/math'
import { soma as sumExport } from './lib/sumExport'

console.log(soma(1,2))
console.log(subtracao(1,2))
console.log(PI)
console.log(sum(1,2))
console.log(math.soma(1,2))
console.log(math.subtracao(1,2))
console.log(sums(1,2))
console.log(sumExport(1,2))

// Named Export