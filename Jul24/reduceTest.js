function missingNo(numArray) {
    //code here


    for (var i=1;i<numArray.length;i++){
        if (numArray[i-1] < numArray[i] -1) return numArray[i-1] +1;
    }
    return -1
}






var ans=missingNo([1,2,3,5]);
console.log(ans);



