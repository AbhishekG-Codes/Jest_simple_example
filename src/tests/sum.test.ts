import {sum} from "../index"
import {describe,expect,it} from "@jest/globals"

describe('sum',()=>{
    it("add 2 +ve num",()=>{
        const ans = sum(1,1);
        expect(ans).toBe(2)
    })
    it("add 2 -ve num",()=>{
        const ans = sum(-1,-1);
        expect(ans).toBe(-2)
    })
})