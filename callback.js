first(2,function (firstResult,err) {
    if (!err) {
        second(firstResult, function (secondResult,err) {
            if (!err) {
                    third(secondResult,function ( thirdResult,err) {
                        if (!err) {
                            console.log(thirdResult);
                        }
                    });

                }
            });
        }

    });

    function first( value, callback) {
        callback( value + 2,false);
    }

    function second( value,callback) {
        callback( value + 2,false);
    }

    function third( value,callback) {
        callback( value + 2,false);
    }
