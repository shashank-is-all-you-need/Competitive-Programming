import java.util.Arrays;
class Solution {
	public static void main(String[] args) {
		Problem obj = new Problem();
		int arr[] = {1, 2, 3, 4, 5};
		int queries[][] = {{0, 2}, {1, 4}};
		System.out.println(Arrays.toString(obj.evenNumbersRange(arr, queries)));
	}
}