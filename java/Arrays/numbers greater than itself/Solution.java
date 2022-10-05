class Number {
    public int solve(int[] A) {
        int max = Integer.MIN_VALUE;
        int count = 0;
        for(int i = 0;i < A.length; i++) {
        	if(A[i] == max) {
                count++;
            }
            if(A[i] > max) {
                max = A[i];
                count = 1;
            } 
        }
        return A.length - count;
    }
}

public class Solution {
	public static void main(String[] args) {
		Number obj = new Number();
		int arr[] = {7, 4, 2, 10 ,5};
		System.out.println(obj.solve(arr));
	}
}
