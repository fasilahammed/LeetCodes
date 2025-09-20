public class Solution {
    public int ScoreOfString(string s) {
        int sumdiff=0;
        for(int i=0;i<s.Length-1;i++){
            sumdiff += Math.Abs(s[i]-s[i+1]);
        }
        return sumdiff;
        
    }
}