//SPDX-License-Identifier:MIT
pragma solidity ^0.8.6;

contract removeFunc{
    uint[]  MyArray = [1,2,3,4,5,6];

    function removeItem(uint index) public returns(uint[] memory) {
        for (uint i = index; i<MyArray.length-1; i++){
            MyArray[i] = MyArray[i+1];
        }
        MyArray.pop();
        return MyArray;
    }

}
