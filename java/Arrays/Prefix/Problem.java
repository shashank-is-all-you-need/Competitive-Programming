import java.util.Arrays;
class Problem {
	long[] rangeSum(int arr[], int queries[][]) {
		long preArray[] = new long[arr.length];
		long rangeSumArr[] = new long[queries.length];
		preArray[0] = arr[0];
		for (int i = 1; i < arr.length; i++) {
			preArray[i] = preArray[i - 1] + arr[i];   
		}
		for (int i = 0; i < queries.length; i++) {
			int leftIndex = queries[i][0] - 1;
			int rightIndex =  queries[i][1] - 1;
			if (leftIndex != 0) {
				rangeSumArr[i] = preArray[rightIndex] - preArray[leftIndex - 1];
			} else {
				rangeSumArr[i] = preArray[rightIndex];	
			}
		}
		return rangeSumArr;
	}
}