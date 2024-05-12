Description:
    Bài toán TwoSum - Cho một arr số bất kì và 1 số target.
    Tìm index của 2 phần tử có tổng = với target
    Giả sử chỉ có chính xác 1 đáp án duy nhất
    Không lặp lại phần tử 
    Không quan trọng thứ tự 

Solution:
    1. Brute Force - Chạy 2 lặp lồng nhau kiểm tra xem 2 số liền kề 
    có tổng = target hay không. Nếu có thì trả về indices của 2 phần tử đó
        Time: O(n2)
        Space: O(1)

    2. Two-pass Hash Table - Tạo 1 HashMap rồi lưu [value as key - index as value]
    các phần tử của arr vào Map. Sau đó cho duyệt lại lần 2 và check xem target - nums[i]
    có tồn tại trong dãy key của Map k. Nếu có trả về [ i, Map[target - nums[i]]]
        Time: O[n] - Ở đây ta k lồng vòng lặp mà chỉ duyệt arr 2 lần riêng biệt
        Space: O[n]

    3. One-pass Hash Table - Ở cách này thay vì phải duyệt arr 2 lần thì trong lúc thêm phần tử
    vào map ta tiến hành check xem trong dãy key đã có nữa kia phù hợp vs tổng = target chưa. Nếu 
    chưa ta tiếp tục thêm phần tử vào map và tiếp tục cho đến hết.
        Time: O[n] 
        Space: O[n]

        var twoSum = function(nums, target) {
            let map = {};

            for (let i = 0; i < nums.length; i++) {
                let res = target - nums[i];

                if(map.hasOwnProperty(res)) {
                    return [i, map[res]]
                }

                map[nums[i]] = i;
            }
 
            return []
        };

    4. Two-pointer - Ở cách này t sẽ lưu [value, index] vào 1 arr mới sau đó sort lại giảm dần. Độ lớn sẽ tùy
    thuộc vào thuật toán sort (Thường là QuickSort nlogn). Sau đó check tổng 2 đầu. 
    Nếu tổng > target chứng vế phải đang lớn hơn và cần dc giảm bớt -> left++
    Ngược lại nếu tổng < target thì right--
    Nếu như tìm dc cặp số tổng = target thì trả về 
        Time: O(nlogn)
        Space: O(n)

        var twoSum = function(nums, target) {
            let numsWithIndex = nums.map((num, index) => [num, index]).sort((a,b) => a[0] - b[0]);
            let left = 0;
            let right = nums.length - 1;

            while(left < right) {
                let res = numsWithIndex[left][0] + numsWithIndex[right][0];

                if(res == target) {
                    return [numsWithIndex[left][1], numsWithIndex[right][1]];
                }
                else if(res < target) {
                    left++;
                }
                else {
                    right--;
                }
            }

            return [];
        };