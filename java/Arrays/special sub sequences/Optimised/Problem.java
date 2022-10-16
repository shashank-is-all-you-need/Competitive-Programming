import java.util.Arrays;
class Problem {
	int countSequence(char arr[]) {
		int aCount =0;
		int pairCount = 0;
		for (int i = 0;  i < arr.length; i++) {
			if(arr[i] == 'a') {
					aCount++ ;
			}
			if (arr[i] == 'g') {
				pairCount += aCount;
			}
		}
		return pairCount;
	}
}