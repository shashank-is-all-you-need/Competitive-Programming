import java.util.Arrays;
class Problem {
	int[] prefixSum(int arr[]) {
		int preSum = arr[0];
		// int prefixArr = 
		for (int i = 1; i < arr.length; i++) {
			arr[i] = arr[i - 1] + arr[i];
		}
		return arr;
	}
}