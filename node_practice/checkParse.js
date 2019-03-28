let str = "<https://api.github.com/repositories/27193779/issues?page=2>; rel="next", <https://api.github.com/repositories/27193779/issues?page=29>; rel="last" "
        let lastPage = 1;
        console.log(" single page case ",str);
        if ( str != null) {

        let startPos = str[0].lastIndexOf('page') + 5;
        let length = str[0].lastIndexOf('>') - startPos;
        lastPage = str[0].substr(startPos, length);
        console.log(" last page " + str[0].substr(startPos, length));
        console.log(str[0].lastIndexOf('page'));
        console.log(str[0].lastIndexOf('>'));
        console.log(resp.headers.getAll("LINK"));
        }