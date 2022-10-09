import java.util.Arrays;
class Problem {
	int equilibriumIndex(int arr[]) {
		int pf[] = new int[arr.length];
		pf[0] = arr[0];
		int arrLength = pf.length;
		for(int i = 1; i < pf.length; i++) {
			pf[i] = pf[i - 1] + arr[i]; 
		}
		for(int j = 0; j < pf.length; j++) {
			int leftSum = (j == 0) ? 0 : pf[j - 1];
			int rightSum = (j == arrLength - 1) ? 0 : pf[arrLength - 1] - pf[j];
			if(leftSum == rightSum) {
				return j;
			}
		}
		return -1;
	}
}