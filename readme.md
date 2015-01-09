#Email filter

We need to create a plugin to help filter e-mails by a specific keywords to help identify important e-mails.

Your program will be passed a data file with the specific string to search for and a list of e-mail subjects. Your program should return the single e-mail subject that has the most occurences of the provided search string.

Search should be not be case-sensitive and the string doesn't have to be full words. For example, a search for `in` would count `in`, `input`, and `picking` as occurences of `in`.

All of your code should be in the js file in the lib directory.

##Testing

The data folder is full of test input files. You can load a single test into the program which will allow you to see the output of your program directly.

There is also a test.js file which will call your function against each of the test cases and check if they are getting the expected output.

**In Terminal**
```
#run single input file
node index.js < ./data/test00.txt

#run tests
node test.js
```

##Examples

**Example Input**

```
dividends
first e-mail subject
It pays dividends
So good your dividends will have dividends
one more subject
```

**Example Output**

```
So good your dividends will have dividends
```

Your program outputs the e-mail subject where `dividends` appears twice because it is the most frequent occurence.




**Example Input**

```
book
what is your favorite book?
book and Books too
This one also says book.
```

**Example Output**

```
book Book books too
```

Your program outputs the e-mail subject where `book` appears the most. Notice that it doesn't care about capitilization or the 's' on books.

