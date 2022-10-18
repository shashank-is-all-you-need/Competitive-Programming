import java.util.Arrays;
class Problem {
	int[] leftMax(int arr[]) {
		int lm[] = new int[arr.length];
		lm[0] = arr[0];
		int count = 0;
		for (int i = 1; i < arr.length; i++) {
		 	lm[i] = maximum(lm[i - 1], arr[i]);
		}
		for (int i = 0; i < lm.length - 1; i++) {
			if (lm[i] != lm[i +1]) {
				count++;
			}
		 	// lm[i] = maximum(lm[i - 1], arr[i]);
		}
		System.out.println("count"+count);
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