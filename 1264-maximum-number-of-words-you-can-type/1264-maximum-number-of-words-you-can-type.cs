public class Solution {
    public int CanBeTypedWords(string text, string brokenLetters) {

    string[] words = text.Split(" ");   
    int brokenCount = 0;

    foreach (var word in words) {
        foreach (char ch in brokenLetters) {
            if (word.Contains(ch)) {
                brokenCount++;
                break;
            }
        }
    }
    return words.Length - brokenCount;
        
    }
}