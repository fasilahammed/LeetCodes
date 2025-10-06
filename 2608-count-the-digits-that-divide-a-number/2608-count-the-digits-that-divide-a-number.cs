public class Solution {
    public int CountDigits(int num) {
         string s = num.ToString();
        return s.Count(c => {
            int d = c - '0';
            return d != 0 && num % d == 0;
        });
    }
}