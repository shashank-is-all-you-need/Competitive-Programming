import java.util.Arrays;
class Problem {
	int[] leftMax(int arr[]) {
		int lm[] = new int[arr.length];
		lm[0] = arr[0];
		for (int i = 1; i < arr.length; i++) {
		 	lm[i] = maximum(lm[i - 1], arr[i]);
		 }
		 return lm; 
	}

	int maximum(int a, int b) {
		if(a > b) {
			return a;
		} else {
			return b;
		}
	}
}