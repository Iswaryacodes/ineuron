//SPDX-License-Identifier:MIT
pragma solidity ^0.8.6;

contract structure{
    struct Book{
        string title;
        string author;
        uint bookID;
        uint price;
    }

// define a struct- name of the struct variable to represent the struct
    Book book;
    function setBook() public {        
        book= Book("Blockchain for beginners","Ineuron",4,1000); 
    }
    function getBooktitle()  public  view returns(string memory) {
         return book.title;
    }
    function getBookAuthor() public view returns(string memory){
        return book.author;
    }
    function getBookBookId() public view returns(uint){
        return book.bookID;
    }
    function getBookPrice() public view returns(uint){
        return book.price;
    }
    
    
    
    /*
    
Topic: Gas report

---------------------------------------------------------------------------
---------------------------------------------------------------------------
   Functions   |    GasCost |    Memory    |   CallData    |   Storage    |
---------------------------------------------------------------------------
  Deployment   |   388592  View Function      
---------------------------------------------------------------------------
  SetBook      |            |    127392    |   127392      |
---------------------------------------------------------------------------
 getBookAuthor |            |    24599     |   25200       |
---------------------------------------------------------------------------
 getBookBookId |            |    23551     |   23551       |
---------------------------------------------------------------------------
 getBookPrice  |            |    23507     |   23485       |
---------------------------------------------------------------------------
 getBooktitle  |            |    24511     |   25134       |
---------------------------------------------------------------------------
---------------------------------------------------------------------------
*/
