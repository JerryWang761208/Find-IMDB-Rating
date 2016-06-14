# Find-IMDB-Rating
find IMDB rating of movie with node.js

## Why need this?
Sometime, we rent DVD and store it for ourself.
We create a folder with name of movie we kept.
Besides, we want to know the rating for the movie.

## How to use?
1. Just put the read.js file to the folder you create to store movie directories.
2. Change the following code in **read.js**. 

```javascript
walk('path/to/read.js/folder', function(filePath, stat) {
```
 Change **'path/to/read.js/folder'** this to the folder where you put read.js.

3. If necessary, rename the directory same with name of the movie.
For example, you have a folder called Movies. And there are two movies in "Movies" directory, such as [frozen](http://www.imdb.com/title/tt2294629/?ref_=nv_sr_1) and [the%20martians](http://www.imdb.com/title/tt3659388/?ref_=nv_sr_1) ( if there's space, switch it to **%20**).
Then cd /path/to/Movies/, and node read.js

![](https://lh3.googleusercontent.com/szEPNPTei6H1JgvwlleuFZXXGZNyMq7H0Q10XN69ffyACldBVcnDesIAez1d30XVqQ67_2h84QXpQchd8wmHtfzgkfb45tfF8wNMWj0U7t0MvUrnmEAa63UXN5UcHC01vMlRLBTbUOOel9Qdt4_AYX4aiNFUAJk_WQbbGBrJRlm__Np2Sh7pQ6xFsjRSIlxvUvllwfr-XnT2UKvZYiFtjmet-h5pf41NqFn42qscY-prt5-JVc7-TRjROMLR5uks-IWXij9SvNgjQyhCLiWnYNeKFslHD2HO_y7PdYKwFAescBtNb2Zy6LLqXqKZF2hsPOAI-OkPOEJAmmQiRFgABN9pT5Vd12pAmzxY6Ur2ezTazEFaJ32Nb9QKrE2QJqH1dqqM2rSXHjOwA0NxSf7tBAYMA38hiEzSQU_o_QGQTY5SBy8pCL_IJlfNsy1Oad01MIatvI6uEp9dVa771vvnuq23kCxOlmquO5rbNdNY8A7gnuAK-xE3dsIih2PdvD2t1vE_rIi0RTNm8e608SPUhrrqByVL9F8XnEeApkUWxgCwa5nRalJ9XakkmiHi76cY4I5FQgWKc9iBAviNT7Q-8fFbkE8Gluo=w1630-h985-no)
