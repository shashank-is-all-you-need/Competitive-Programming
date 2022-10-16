import java.util.Arrays;
class Problem {
	int subArrWithMinMax(int arr[]) {
		int max_value = Integer.MIN_VALUE;
		int min_value = Integer.MAX_VALUE;
		int min_length = Integer.MAX_VALUE;
		for (int i = 0; i < arr.length; i++) {
			if(arr[i] > max_value) {
				max_value = arr[i];
			}
			if (arr[i] < min_value) {
				min_value = arr[i];
			}
		}
		if (max_value == min_value) {
			return 1;
		}
		for (int j = 0; j < arr.length; j++) {
			if(arr[j] == max_value) {
				for (int k = j + 1; k < arr.length; k++) {
					if(arr[k] == min_value) {
						min_length = minimum(min_length, k - j + 1);
						break;
					}
				}
			}
			if(arr[j] == min_value) {
				for (int k = j + 1; k < arr.length; k++) {
					if(arr[k] == max_value) {
						min_length = minimum(min_length, k - j + 1);
						break;
					}
				}
			}	
		}
		return min_length;
	}

	int minimum(int a, int b) {
		if(a < b) {
			return a;
		} else {
			return b;
		}
	}
}