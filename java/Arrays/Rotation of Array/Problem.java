import java.util.Arrays;
class Problem {
	int[] kRotations(int arr[], int numOfRotations) {
		numOfRotations = numOfRotations % arr.length;
		int[] reversedArr = new int[arr.length]; 
		reversedArr = reverse(arr);
		int[] subArray1 = new int[numOfRotations];
		int[] subArray2 = new int[arr.length - numOfRotations];
		for (int i = 0; i < numOfRotations; i++) {
			subArray1[i] = reversedArr[i];	
		}
		int sub = numOfRotations;
		for (int j = 0; j < subArray2.length; j++) {
			subArray2[j] = reversedArr[sub++];	
		}
		subArray1 = reverse(subArray1);
		subArray2 = reverse(subArray2);
		int[] rotatedArray = new int[arr.length];
		for (int k = 0; k < subArray1.length; k++) {
			rotatedArray[k] = subArray1[k];	
		}
		sub = numOfRotations;
		for (int l = 0; l < subArray2.length; l++) {
			rotatedArray[sub++] = subArray2[l];	
		}
		return rotatedArray;
	}

	int[] reverse(int arr[]) {
		int startIndex = 0;
		int endIndex = arr.length - 1;
		while(startIndex < endIndex){
			int temp = arr[startIndex];
			arr[startIndex] = arr[endIndex];
			arr[endIndex] = temp;
			startIndex++;
			endIndex--;
		}
		return arr;
	}
}