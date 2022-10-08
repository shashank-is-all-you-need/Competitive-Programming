import java.util.Arrays;
class Solution {
	public static void main(String[] args) {
		Problem obj = new Problem();
		int arr[] = {1, 2, 3, 4, 5};
		// int queries[][] = {{1, 4}, {2, 3}};
		System.out.println(Arrays.toString(obj.prefixSum(arr)));
	}
}