function tri(numbers=Array, ordre)
{
    for(var i=0; i<numbers.length; i++) {
        for(var j =i+1; j<numbers.length; j++) {
            if(numbers[i] > numbers[j]) {
                var tmp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = tmp
            }
        }
        console.log(numbers[i]);
    }

}

var t =[14, 100, 2, 24, 18];
tri(t)












// function bubblesort($tab, $croissant){

//     for($countTab=0;isset($tab[$countTab]);){

//         $countTab++;

//     }

//     if($croissant){

//         for($i=0; $i<$countTab; $i++){


//             for($j=$i+1; $j<$countTab; $j++)

//             {

//                 if($tab[$i] > $tab[$j])

//                 {

//                     $tmp = $tab[$i]; //pour changer les lettres de position on utilise une variable de stockage temporaire

//                     $tab[$i] = $tab[$j];

//                     $tab[$j] = $tmp;

//                 }

//             }

//             echo $tab[$i]." ";
//         }

//     }







//     if(!$croissant){




//         for($i=0; $i<$countTab; $i++){




//             for($j=$i+1; $j<$countTab; $j++)

//             {

//                 if($tab[$i] > $tab[$j])

//                 {

//                     $tmp = $tab[$i];

//                     $tab[$i] = $tab[$j];

//                     $tab[$j] = $tmp;

//                 }

//             }

//         }







//         for($i=$countTab-1; $i>=0; $i-- ){

//             echo $tab[$i]." ";

//         }




//     }

// }

// $croissant = true;

// $tab = ['abc','ghi','def'];




// bubblesort($tab, $croissant);



