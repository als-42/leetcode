// https://leetcode.com/problems/majority-element-ii/


function majorityElement(nums: number[]): number[] {
    let expectedTimes = nums.length/3
    let result = new Map<number, number>()
    let space  = new Map<number, number>()

    nums.forEach((item: number) => {
      if (!space.has(item)) {
        space.set(item, 1)
      } else {
        let value = space.get(item)!
        space.set(item, value+1)
      }

      if (space.get(item)! > expectedTimes ) {
        result.set(item, item)
      }
    })

    return Array.from(result.values())
};

majorityElement([2,2])
