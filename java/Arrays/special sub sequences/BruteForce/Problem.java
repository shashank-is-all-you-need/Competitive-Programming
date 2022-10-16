import java.util.Arrays;
class Problem {
	int countSequence(char arr[]) {
		int count =0;
		for (int i = 0;  i < arr.length; i++) {
			if(arr[i] == 'a') {
				for (int j = i + 1;  j < arr.length; j++) {
					if(arr[j] == 'g') {
						count++;
					}
				}	
			}
				
		}
		return count;
	}
}