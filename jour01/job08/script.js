function sommenombrespremiers(val1, val2 )
{
    var j=0;
    var r=0;
    for(var i = 0 ; i<val1; i++)
    {
        if(val1 % i == 0)
        {
            j++;
            
        }
    }

    if(j>1) {
        return console.log(false);
    }
    else {
        for(var l = 0 ; l<val2; l++) {
            if(val2 % l == 0)
            {
                r++;   
            }
        }
        if(r>1) {
            return console.log(false)
        }
        else {
            return console.log(val1+val2);
        }
    }
    
}

sommenombrespremiers(3, 3)