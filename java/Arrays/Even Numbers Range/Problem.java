import java.util.Arrays;
class Problem {
	int[] evenNumbersRange(int arr[], int range[][]) {
		int pf[] = new int[arr.length];
		if(arr[0] % 2 == 0) {
			pf[0] = 1;	
		} else {
			pf[0] = 0;
		}
		for(int i = 1; i < pf.length; i++) {
			if (arr[i] % 2 == 0) {
				pf[i] = pf[i - 1] + 1;
			} else {
				pf[i] = pf[i - 1];
			}
		}
		int returningArr[] = new int[range.length];
		for(int j = 0; j < range.length; j++) {
			int lowIndex = range[j][0];
			int highIndex = range[j][1];
			if (lowIndex != 0) {
				returningArr[j] = pf[highIndex] - pf[lowIndex - 1];	
			} else {
				returningArr[j] = pf[highIndex];
			}
		}
		return returningArr;
	}
}