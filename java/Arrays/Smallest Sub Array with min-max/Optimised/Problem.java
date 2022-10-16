import java.util.Arrays;
class Problem {
	int subArrWithMinMax(int arr[]) {
		int max_value = Integer.MIN_VALUE;
		int min_value = Integer.MAX_VALUE;
		int min_length = Integer.MAX_VALUE;

		int min_index = -1;
		int max_index = -1;
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
				max_index = j;
			}
			else if(arr[j] == min_value) {
				min_index = j;
			}	
			else if(max_index != -1 && min_index != -1) {
					min_length = sub(max_index, min_index) + 1;
			}
		}
		return min_length;
	}

	int sub(int a, int b) {
		int sub = a - b;
		if(sub < 0) {
			return -sub;
		} else {
			return sub;
		}
	}
}