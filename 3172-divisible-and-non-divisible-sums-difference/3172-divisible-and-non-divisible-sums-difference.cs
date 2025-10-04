public class Solution {
    public int DifferenceOfSums(int n, int m) {
        int sumDiv=0;
        int SumNonDiv=0;
        for(int i=0;i<=n;i++)
        {
            (i % m == 0 ? ref sumDiv : ref SumNonDiv) += i;
        }
        return SumNonDiv - sumDiv;
    }
}