import java.util.Arrays;
class Problem {
	int[] rightMax(int arr[]) {
		int rm[] = new int[arr.length];
		rm[arr.length - 1] = arr[arr.length - 1];
		for (int i = arr.length - 2; i >= 0; i--) {
		 	rm[i] = maximum(rm[i + 1], arr[i]);
		 }
		 return rm; 
	}

	int maximum(int a, int b) {
		if(a > b) {
			return a;
		} else {
			return b;
		}
	}
}