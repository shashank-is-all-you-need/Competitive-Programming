class Problem {
	int twoSumPair(int arr[], int sum) {
		for (int i = 0; i < arr.length; i++) {
			if(i != arr.length) {
				for (int j = i + 1; j < arr.length; j++) {
					if(arr[i] + arr[j] == sum) {
						return 1;
					}
				}
			}
		}
		return 0;
	}
}