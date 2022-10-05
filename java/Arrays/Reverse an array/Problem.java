class Problem {
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