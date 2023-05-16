import { testservice } from "./testservice"

describe('testservice', () => {
    it('should add two no', () => {
        const testcase = new testservice();
        console.log(testcase.add(2, 2));
        expect(testcase.add(2, 2)).toBe(4);
    });
    it('should sub two no', () => {
        const testcase = new testservice();
        expect(testcase.sub(2, 2)).toBe(0);
    });
});